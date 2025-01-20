# Welcome to your Convex functions directory!

Write your Convex functions here.
See https://docs.convex.dev/functions for more.

## Poll Structure

In this application, each poll has the following structure:

- **Poll**: Represents a question posed to users.
  - **Creator**: Each poll is created by a user, identified by their user ID.
  - **Voting Options**: Each poll can have multiple options that users can vote on. Each option is associated with the poll and has a text description.
  - **Votes**: Users can cast votes on the available options. Each vote is linked to the user who cast it, the poll, and the specific option they chose.
  - **Messages**: Each poll can have a chat feature where users can send messages related to the poll. This allows for discussions and comments about the poll.

### Example Poll Structure

```ts
{
  creatorId: "userId", // ID of the user who created the poll
  question: "What is your favorite color?",
  description: "Choose your favorite color from the options below.",
  createdAt: 1633036800000, // Timestamp of when the poll was created
  isActive: true, // Indicates if the poll is currently active
  options: [
    { text: "Red", count: 10 }, // Voting option with count of votes
    { text: "Blue", count: 5 },
    { text: "Green", count: 8 },
  ],
  messages: [
    { userId: "userId", content: "I love blue!", sentAt: 1633036900000 }, // Chat message related to the poll
  ],
}
```

A query function that takes two arguments looks like:

```ts
// functions.js
import { query } from "./_generated/server";
import { v } from "convex/values";

export const myQueryFunction = query({
  // Validators for arguments.
  args: {
    first: v.number(),
    second: v.string(),
  },

  // Function implementation.
  handler: async (ctx, args) => {
    // Read the database as many times as you need here.
    // See https://docs.convex.dev/database/reading-data.
    const documents = await ctx.db.query("tablename").collect();

    // Arguments passed from the client are properties of the args object.
    console.log(args.first, args.second);

    // Write arbitrary JavaScript here: filter, aggregate, build derived data,
    // remove non-public properties, or create new objects.
    return documents;
  },
});
```

Using this query function in a React component looks like:

```ts
const data = useQuery(api.functions.myQueryFunction, {
  first: 10,
  second: "hello",
});
```

A mutation function looks like:

```ts
// functions.js
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const myMutationFunction = mutation({
  // Validators for arguments.
  args: {
    first: v.string(),
    second: v.string(),
  },

  // Function implementation.
  handler: async (ctx, args) => {
    // Insert or modify documents in the database here.
    // Mutations can also read from the database like queries.
    // See https://docs.convex.dev/database/writing-data.
    const message = { body: args.first, author: args.second };
    const id = await ctx.db.insert("messages", message);

    // Optionally, return a value from your mutation.
    return await ctx.db.get(id);
  },
});
```

Using this mutation function in a React component looks like:

```ts
const mutation = useMutation(api.functions.myMutationFunction);
function handleButtonPress() {
  // fire and forget, the most common way to use mutations
  mutation({ first: "Hello!", second: "me" });
  // OR
  // use the result once the mutation has completed
  mutation({ first: "Hello!", second: "me" }).then((result) =>
    console.log(result),
  );
}
```

Use the Convex CLI to push your functions to a deployment. See everything
the Convex CLI can do by running `npx convex -h` in your project root
directory. To learn more, launch the docs with `npx convex docs`.
