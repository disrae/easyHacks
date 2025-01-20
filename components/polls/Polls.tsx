"use client";

import React from 'react';
import { Doc } from "@/convex/_generated/dataModel";
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { Card, CardContent } from "@/components/ui/card";

export function Polls() {
    const polls = useQuery(api.polls.getAllPolls);
    const [openPolls, setOpenPolls] = React.useState<{ [key: string]: boolean; }>({});

    if (!polls) return <div>Loading...</div>;

    const togglePoll = (pollId: string) => {
        setOpenPolls(prev => ({
            ...prev,
            [pollId]: !prev[pollId]
        }));
    };

    const formatDate = (timestamp: number) => {
        return new Date(timestamp).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="space-y-4">
            {polls.map(poll => (
                <Card key={poll._id} className="bg-black/50 border-gray-800 text-white hover:border-purple-500/50 transition-colors shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)]">
                    <CardContent
                        className="p-4 cursor-pointer relative"
                        onClick={() => togglePoll(poll._id)}
                    >
                        <div className="absolute top-4 right-4 text-sm text-gray-400">
                            {formatDate(poll.createdAt)}
                        </div>

                        <h3 className="font-bold text-lg pr-24">{poll.question}</h3>
                        <p className="text-gray-400 mt-1">{poll.description}</p>

                        {openPolls[poll._id] && (
                            <div className="mt-4 space-y-4">
                                {/* Poll Options */}
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-sm text-gray-300">Options:</h4>
                                    {poll.options.map(option => (
                                        <div key={option._id} className="pl-2 text-gray-300">
                                            • {option.text}
                                        </div>
                                    ))}
                                </div>

                                {/* Chat Section */}
                                <div className="border-t border-gray-700 pt-4">
                                    <h4 className="font-semibold text-sm text-gray-300 mb-2">Discussion:</h4>
                                    {poll.messages && poll.messages.map(message => (
                                        <div key={message._id} className="text-gray-300 mb-1">
                                            <strong>{message.userId}:</strong> {message.content}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
