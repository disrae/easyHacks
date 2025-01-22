import { PageHeader } from "@/components/PageHeader";
import CreatePoll from "@/components/polls/CreatePoll";
import { Polls } from "@/components/polls/Polls";
import { api } from "@/convex/_generated/api";
import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server";
import { fetchQuery } from "convex/nextjs";

export default async function PollsPage() {
    const user = await fetchQuery(
        api.users.viewer,
        {},
        { token: await convexAuthNextjsToken() },
    );

    return (
        <div className="bg-black text-white">
            <PageHeader title="Community Polls" />

            <section className="container px-4 md:px-6 max-w-3xl mx-auto">
                <div className="space-y-4 py-4">
                    {user && <CreatePoll />}
                    <Polls />
                </div>
            </section>
        </div>
    );
} 