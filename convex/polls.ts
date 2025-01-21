import { Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const createPoll = mutation(async (ctx, { question, description }: { question: string, description?: string; }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
        throw new Error("Unauthorized - not signed in");
    }
    const pollId = await ctx.db.insert("polls", {
        creatorId: userId,
        question: question as string,
        description: description as string | undefined,
        createdAt: Date.now(),
        isActive: true,
    });
    return pollId;
});

export const list = query(async ({ db }) => {
    return await db.query("polls").order("desc").collect();
});

export const getAllPolls = query(async ({ db }) => {
    const polls = await db.query("polls").order("desc").collect();
    const pollsWithOptions = await Promise.all(polls.map(async (poll) => {
        const options = await db
            .query("pollOptions")
            .filter(q => q.eq(q.field("pollId"), poll._id))
            .collect();

        // Get vote counts for each option
        const optionsWithCounts = await Promise.all(options.map(async (option) => {
            const count = await db
                .query("votes")
                .filter(q => q.eq(q.field("optionId"), option._id))
                .collect()
                .then(votes => votes.length);
            return { ...option, count };
        }));

        return { ...poll, options: optionsWithCounts };
    }));

    return pollsWithOptions;
});

export const getPollById = query(async ({ db }, { pollId }) => {
    return await db.get(pollId as Id<"polls">);
});

export const updatePoll = mutation(async ({ db }, { pollId, updates }) => {
    await db.patch(pollId as Id<"polls">, updates as Partial<{ _id: Id<"polls">; _creationTime: number; description?: string | undefined; creatorId: Id<"users">; question: string; createdAt: number; isActive: boolean; }>);
});

export const deletePoll = mutation(async (ctx, { pollId }: { pollId: Id<"polls">; }) => {
    const { db } = ctx;
    const userId = await getAuthUserId(ctx);
    if (!userId) {
        throw new Error("Unauthorized - not signed in");
    }
    const user = await db.get(userId);
    if (!user?.isAdmin) {
        throw new Error("Unauthorized - only admin can delete polls");
    }

    // Delete all poll options associated with the poll
    const options = await db.query("pollOptions").filter(q => q.eq(q.field("pollId"), pollId)).collect();
    for (const option of options) {
        await db.delete(option._id);
    }

    // Delete all votes associated with the poll
    const votes = await db.query("votes").filter(q => q.eq(q.field("pollId"), pollId)).collect();
    for (const vote of votes) {
        await db.delete(vote._id);
    }

    // Delete all messages associated with the poll
    const messages = await db.query("pollMessages").filter(q => q.eq(q.field("pollId"), pollId)).collect();
    for (const message of messages) {
        await db.delete(message._id);
    }

    // Finally, delete the poll itself
    await db.delete(pollId as Id<"polls">);
});
