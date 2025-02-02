import { PageHeader } from "@/components/PageHeader";
import CreatePoll from "@/components/polls/CreatePoll";
import { Polls } from "@/components/polls/Polls";
import { SignIn } from "@/components/SignIn";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server";
import { fetchQuery } from "convex/nextjs";
import { pressStart2P } from "../page";

export default async function PollsPage() {
    const user = await fetchQuery(
        api.users.viewer,
        {},
        { token: await convexAuthNextjsToken() },
    );

    return (
        <div className="bg-gradient-to-b from-black via-[#6F2700] to-black text-white flex justify-center py-10 md:py-20">
            <div className="max-w-2xl w-full">
                {/* Polls Box */}
                <div className="px-4">
                    {/* Polls Box Header */}
                    <div className="flex items-end">
                        {/* Poll Icon */}
                        <div className="border border-gray-400 p-3">
                            <div className="w-12 h-12 rounded-full border-2 border-[#FFB800] flex items-center justify-center">
                                <span className="text-[#ffb700] text-2xl">📊</span>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="border border-gray-400 p-3 flex items-end">
                            <p className={`${pressStart2P.className} text-2xl font-bold text-[#FFB800]`}>— Polls —</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="border border-gray-400 rounded-b p-6 bg-gradient-to-b from-gray-900 to-black shadow-[0_8px_16px_-2px_rgba(0,0,0,0.5)]">
                        <div className="space-y-4">
                            {user ? (
                                <div className="mb-8">
                                    <h2 className={`${pressStart2P.className} text-xl text-[#FFB800] mb-4`}>- Create Poll -</h2>
                                    <CreatePoll />
                                </div>
                            ) : (
                                <Card className="my-8 bg-black/50 border-gray-800 text-white hover:border-[#FFB800]/50 transition-colors shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)]">
                                    <CardContent className="p-6">
                                        <SignIn />
                                    </CardContent>
                                </Card>
                            )}

                            <div>
                                <h2 className={`${pressStart2P.className} text-xl text-[#FFB800] mb-4`}>- Community Polls -</h2>
                                <Polls />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 