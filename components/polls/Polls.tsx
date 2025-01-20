"use client";

import React from 'react';
import { Doc, Id } from "@/convex/_generated/dataModel";
import { api } from '@/convex/_generated/api';
import { useQuery, useMutation } from 'convex/react';
import { Card, CardContent } from "@/components/ui/card";

export function Polls() {
    const polls = useQuery(api.polls.getAllPolls);
    const castVote = useMutation(api.votes.castVote);
    const [openPolls, setOpenPolls] = React.useState<{ [key: string]: boolean; }>({});
    const [userVotes, setUserVotes] = React.useState<{ [pollId: string]: string | null; }>({});

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

    const getVotePercentage = (optionCount: number, options: any[]) => {
        const totalVotes = options.reduce((sum, opt) => sum + opt.count, 0);
        return totalVotes === 0 ? 0 : (optionCount / totalVotes) * 100;
    };

    const handleVote = async (pollId: Id<'polls'>, optionId: Id<'pollOptions'>) => {
        await castVote({ pollId, optionId });
        setUserVotes(prev => ({ ...prev, [pollId]: optionId }));
    };

    return (
        <div className="space-y-4">
            {polls.map(poll => (
                <Card key={poll._id} className={`bg-black/50 border-gray-800 text-white ${!openPolls[poll._id] ? 'hover:border-purple-500/50 hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)]' : ''} transition-colors shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]`}>
                    <CardContent
                        className="p-4 cursor-pointer relative"
                        onClick={() => togglePoll(poll._id)}
                    >
                        <div className="text-xs font-medium text-gray-400 text-right -mt-2">
                            {formatDate(poll.createdAt)}
                        </div>

                        <h3 className="font-bold text-lg">{poll.question}</h3>
                        <p className="text-gray-400 pl-2 pb-1">{poll.description}</p>

                        {openPolls[poll._id] && (
                            <div className="mt-4 space-y-4" onClick={e => e.stopPropagation()}>
                                {/* Poll Options */}
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-sm text-gray-300">Options:</h4>
                                    {poll.options.map(option => {
                                        const percentage = getVotePercentage(option.count, poll.options);
                                        const hasVoted = userVotes[poll._id] === option._id;
                                        return (
                                            <div
                                                key={option._id}
                                                className={`pl-2 text-gray-300 relative rounded overflow-hidden space-y-2`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleVote(poll._id, option._id);
                                                }}
                                            >
                                                <div className="relative flex justify-between p-2 border border-gray-700 rounded-lg hover:border-gray-500 hover:bg-gray-800/30 transition-all overflow-hidden">
                                                    <div
                                                        className="absolute inset-0 bg-purple-200/20 hover:bg-purple-300/30 transition-colors"
                                                        style={{ width: `${percentage}%` }}
                                                    />
                                                    <span className="relative z-10">{option.text}</span>
                                                    <span className="relative z-10 text-sm text-gray-400">{option.count} votes</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Chat Section */}
                                <div className="border-t border-gray-700 pt-4">
                                    <div className="min-h-[150px] flex flex-col">
                                        <div className="flex-1 overflow-y-auto space-y-2 mb-4">
                                            {poll.messages && poll.messages.map(message => (
                                                <div key={message._id} className="text-gray-300 p-2 rounded bg-gray-800/30">
                                                    <strong className="text-purple-400">{message.userId}:</strong> {message.content}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="relative mt-auto">
                                            <input
                                                type="text"
                                                placeholder="Type your message..."
                                                className="w-full bg-gray-800/30 text-white rounded-lg px-4 py-2 pr-20 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            />
                                            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 px-4 py-1.5 rounded-md transition-colors focus:outline-none focus:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
