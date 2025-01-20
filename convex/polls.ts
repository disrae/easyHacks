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
    const pollsWithOptionsAndMessages = await Promise.all(polls.map(async (poll) => {
        const options = await db
            .query("pollOptions")
            .filter(q => q.eq(q.field("pollId"), poll._id))
            .collect();
        const messages = await db
            .query("pollMessages")
            .withIndex("by_poll", q => q.eq("pollId", poll._id))
            .order("desc")
            .take(100);
        return { ...poll, options, messages };
    }));
    console.log(JSON.stringify(pollsWithOptionsAndMessages, null, 2));
    return pollsWithOptionsAndMessages;
});

export const getPollById = query(async ({ db }, { pollId }) => {
    return await db.get(pollId as Id<"polls">);
});

export const updatePoll = mutation(async ({ db }, { pollId, updates }) => {
    await db.patch(pollId as Id<"polls">, updates as Partial<{ _id: Id<"polls">; _creationTime: number; description?: string | undefined; creatorId: Id<"users">; question: string; createdAt: number; isActive: boolean; }>);
});

export const deletePoll = mutation(async ({ db, auth }, { pollId }) => {
    const identity = await auth.getUserIdentity();
    if (!identity) {
        throw new Error("Unauthorized - not signed in");
    }
    const userId = identity.subject as Id<"users">;
    const user = await db.get(userId);
    if (!user?.isAdmin) {
        throw new Error("Unauthorized - only admin can delete polls");
        // Add reporting? This would be a critical bug or a hack attempt.
    }
    await db.delete(pollId as Id<"polls">);
});
