"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { redirect } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";

export default function AdminPage() {
    const user = useQuery(api.users.viewer);

    if (!user?.isAdmin) {
        redirect("/");
    }

    return (
        <div className="bg-black text-white">
            <PageHeader title="Admin Dashboard" />
            <div className="container mx-auto px-4 py-8 max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">User Management</h2>
                        {/* Add user management functionality */}
                    </div>
                    <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">Content Management</h2>
                        {/* Add content management functionality */}
                    </div>
                </div>
            </div>
        </div>
    );
} 