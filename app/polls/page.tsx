import { PageHeader } from "@/components/PageHeader";
import CreatePoll from "@/components/polls/CreatePoll";
import { Polls } from "@/components/polls/Polls";
import { SignIn } from "@/components/SignIn";
import { Card, CardContent } from "@/components/ui/card";
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
                    {user ? (
                        <CreatePoll />
                    ) : (
                        <Card className="my-12 bg-black/50 border-gray-800 text-white hover:border-purple-500/50 transition-colors shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)]">
                            <CardContent className="p-6">
                                <SignIn />
                            </CardContent>
                        </Card>
                    )}
                    <Polls />
                </div>
            </section>
        </div>
    );
} 