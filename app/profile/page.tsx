import { SignIn } from "@/components/SignIn";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { pressStart2P } from "../page";
import { CopperBackground } from "@/components/CopperBackground";
import { fetchQuery } from "convex/nextjs";
import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server";
import Logout from "@/components/Logout";

export default async function ProfilePage() {

    const user = await fetchQuery(
        api.users.viewer,
        {},
        { token: await convexAuthNextjsToken() },
    );
    return (
        <CopperBackground>
            <div className="px-4">
                {/* Profile Box Header */}
                <div className="flex items-end">
                    {/* Profile Icon */}
                    <div className="border border-gray-400 p-3 bg-black/90">
                        <div className="w-12 h-12 rounded-full border-2 border-[#FFB800] flex items-center justify-center">
                            <span className="text-[#ffb700] text-3xl">👤</span>
                        </div>
                    </div>

                    {/* Title */}
                    <div className="border border-gray-400 p-3 flex items-end bg-black/90">
                        <p className={`${pressStart2P.className} text-2xl font-bold text-[#FFB800]`}>— Profile —</p>
                    </div>
                    {!!user && <div className="flex-1 flex py-3 px-2 justify-end ">
                        <Logout className="size-10" />
                    </div>}
                </div>

                {/* Content */}
                <div className="border border-gray-400 p-6 bg-gradient-to-b from-gray-900 to-black">
                    {user ? (
                        <div className="space-y-8">
                            {/* User Info Section */}
                            <section>
                                <h2 className={`${pressStart2P.className} text-xl text-[#FFB800] mb-4`}>- User Info -</h2>
                                <div className="space-y-4 text-gray-300 font-semibold tracking-wide">
                                    <div>
                                        <p className="text-gray-400">Email</p>
                                        <p>{user.email}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Coming Soon</p>
                                    </div>
                                </div>
                            </section>

                            {/* Participation Status */}
                            <section>
                                <h2 className={`${pressStart2P.className} text-xl text-[#FFB800] mb-4`}>- Status -</h2>
                                <div className="space-y-4 text-gray-300 font-semibold tracking-wide">
                                    <div>
                                        <p className="text-gray-400">Registration Status</p>
                                        <p>Coming Soon</p>
                                    </div>
                                </div>
                            </section>

                            {/* Activity Section */}
                            <section>
                                <h2 className={`${pressStart2P.className} text-xl text-[#FFB800] mb-4`}>- Activity -</h2>
                                <div className="space-y-4 text-gray-300 font-semibold tracking-wide">
                                    <div>
                                        <p className="text-gray-400">Pending Tasks</p>
                                        <p>Coming soon...</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    ) : (

                        <CardContent className="p-6">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold mb-2 tracking-wide">Welcome, Hacker!</h2>
                                <p className="text-gray-300 font-medium tracking-wide">Sign in to view your profile and participate in EasyHacks 2025</p>
                            </div>
                            <SignIn />
                        </CardContent>

                    )}
                </div>
            </div>
        </CopperBackground>
    );
}
