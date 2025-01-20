import { Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const createPollOption = mutation(async (ctx, { pollId, text }: { pollId: Id<"polls">, text: string; }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
        throw new Error("Unauthorized - not signed in");
    }
    const optionId = await ctx.db.insert("pollOptions", {
        pollId,
        creatorId: userId,
        text,
    });
    return optionId;
});

export const getPollOptions = query(async ({ db }, { pollId }: { pollId: Id<"polls">; }) => {
    return await db.query("pollOptions").filter(q => q.eq(q.field("pollId"), pollId)).collect();
});

export const deletePollOption = mutation(async (ctx, { optionId }: { optionId: Id<"pollOptions">; }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
        throw new Error("Unauthorized - not signed in");
    }
    const user = await ctx.db.get(userId);
    if (!user?.isAdmin) {
        throw new Error("Unauthorized - only admin can delete poll options");
    }
    await ctx.db.delete(optionId);
});
