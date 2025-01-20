import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,
  users: defineTable({
    isAdmin: v.boolean(),
    isBanned: v.boolean(),
    name: v.optional(v.string()),
    email: v.string(),
    image: v.optional(v.string()),
  }),
  polls: defineTable({
    creatorId: v.id("users"),
    question: v.string(),
    description: v.optional(v.string()),
    createdAt: v.number(),
    isActive: v.boolean(),
  }),
  pollOptions: defineTable({
    pollId: v.id("polls"),
    creatorId: v.id("users"),
    text: v.string(),
  }),
  votes: defineTable({
    userId: v.id("users"),
    pollId: v.id("polls"),
    optionId: v.id("pollOptions"),
    votedAt: v.number(),
  }).index("by_poll_and_user", ["pollId", "userId"]),
  pollMessages: defineTable({
    pollId: v.id("polls"),
    userId: v.id("users"),
    content: v.string(),
    sentAt: v.number(),
  }).index("by_poll", ["pollId"]),
});
