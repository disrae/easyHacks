"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { redirect } from "next/navigation";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import Logout from "@/components/Logout";

export default function ProfilePage() {
    const user = useQuery(api.users.viewer);

    if (!user) {
        redirect("/");
    }

    return (
        <div className="bg-black text-white">
            <PageHeader title="Profile" />
            <div className="container mx-auto px-4 py-8 max-w-3xl">
                <div className="bg-black/50 border border-gray-800 rounded-lg p-8 relative">
                    <div className="absolute top-0 right-0 m-4">
                        <Logout />
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                        {user.image && (
                            <Image
                                src={user.image}
                                alt={user.name || 'Profile picture'}
                                width={64}
                                height={64}
                                className="rounded-full"
                            />
                        )}
                        <div>
                            <h2 className="text-2xl font-bold text-white">{user.name}</h2>
                            <p className="text-gray-400">{user.email}</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Your Activity</h3>
                            <div className="text-gray-300">
                                {/* Add user activity stats here */}
                                <p>Activity stats coming soon...</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Your Polls</h3>
                            <div className="text-gray-300">
                                {/* Add user's polls here */}
                                <p>Polls history coming soon...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 