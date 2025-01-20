import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: { pollId: v.id("polls") },
  handler: async (ctx, { pollId }) => {
    const messages = await ctx.db
      .query("pollMessages")
      .filter(q => q.eq(q.field("pollId"), pollId))
      .order("asc")
      .take(100);
    return Promise.all(
      messages.map(async (message) => {
        const user = await ctx.db.get(message.userId);
        return { ...message, author: user?.name ?? user?.email ?? "Unknown" };
      }),
    );
  },
});

export const send = mutation({
  args: { content: v.string(), pollId: v.id("polls") },
  handler: async (ctx, { content, pollId }) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("Not signed in");
    }
    // Send a new message to the specified poll.
    await ctx.db.insert("pollMessages", { content, userId, pollId, sentAt: Date.now() });
  },
});

export const deleteAllMessages = mutation({
  args: { pollId: v.id("polls") },
  handler: async (ctx, { pollId }) => {
    const userId = await getAuthUserId(ctx);
    if (userId !== "figure out authorization") {
      throw new Error("Unauthorized - only admin can delete all messages");
    }

    const messages = await ctx.db
      .query("pollMessages")
      .filter(q => q.eq(q.field("pollId"), pollId))
      .collect();

    for (const message of messages) {
      await ctx.db.delete(message._id);
    }
  },
});

