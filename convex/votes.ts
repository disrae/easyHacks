import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const listVotes = query({
    args: { pollId: v.id("polls") },
    handler: async (ctx, { pollId }) => {
        const votes = await ctx.db
            .query("votes")
            .filter(q => q.eq(q.field("pollId"), pollId))
            .collect();
        return votes;
    },
});

export const castVote = mutation({
    args: { pollId: v.id("polls"), optionId: v.id("pollOptions") },
    handler: async (ctx, { pollId, optionId }) => {
        const userId = await getAuthUserId(ctx);
        if (userId === null) {
            throw new Error("Not signed in");
        }
        const existingVote = await ctx.db
            .query("votes")
            .filter(q =>
                q.eq(q.field("pollId"), pollId) &&
                q.eq(q.field("userId"), userId) &&
                q.eq(q.field("optionId"), optionId)
            )
            .first();

        if (existingVote) {
            await ctx.db.delete(existingVote._id);
            return;
        }

        await ctx.db.insert("votes", { userId, pollId, optionId, votedAt: Date.now() });
    },
});
