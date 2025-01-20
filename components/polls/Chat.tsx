import React, { useState } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { Id } from '@/convex/_generated/dataModel';
import { api } from '@/convex/_generated/api';

type Props = { pollId: Id<"polls">; };
export function Chat({ pollId }: Props) {
    const messages = useQuery(api.pollMessages.list, { pollId });
    const sendMessage = useMutation(api.pollMessages.send);
    const updateMessage = useMutation(api.pollMessages.updateMessage);
    const [inputValue, setInputValue] = useState('');
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
    const [editValue, setEditValue] = useState('');

    const handleSendMessage = async () => {
        if (inputValue.trim() === '') return;
        await sendMessage({ content: inputValue, pollId });
        setInputValue('');
    };

    const handleUpdateMessage = async (messageId: Id<'pollMessages'>) => {
        if (editValue.trim() === '') return;
        await updateMessage({ messageId, content: editValue });
        setEditingMessageId(null);
        setEditValue('');
    };

    if (messages === undefined) return <div>Loading...</div>;
    return (
        <div className="border-t border-gray-700 pt-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-white">Poll Chat</h2>
                <button
                    className="bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 px-4 py-1.5 rounded-md transition-colors focus:outline-none focus:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"
                    onClick={() => setIsFullScreen(!isFullScreen)}
                >
                    {isFullScreen ? 'Minimize' : 'Maximize'}
                </button>
            </div>
            <div className={`min-h-[150px] flex flex-col ${isFullScreen ? 'max-h-screen' : 'max-h-[400px]'} overflow-y-auto`}>
                <div className="flex-1 space-y-2 mb-4">
                    {messages?.map(message => (
                        <div key={message._id} className="text-gray-300 p-2 rounded group relative">
                            {editingMessageId === message._id ? (
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        className="flex-1 bg-gray-800/30 text-white rounded-lg px-4 py-2 focus:outline-none focus:shadow-[inset_0_0px_4px_rgba(255,255,255,0.1)]"
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') handleUpdateMessage(message._id);
                                            if (e.key === 'Escape') {
                                                setEditingMessageId(null);
                                                setEditValue('');
                                            }
                                        }}
                                        autoFocus
                                    />
                                    <button
                                        className="bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 px-3 rounded-md"
                                        onClick={() => handleUpdateMessage(message._id)}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 px-3 rounded-md"
                                        onClick={() => {
                                            setEditingMessageId(null);
                                            setEditValue('');
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <strong className="text-purple-400">{message.author}:</strong> {message.content}
                                    {message.isAuthor && (
                                        <button
                                            className="opacity-0 group-hover:opacity-100 absolute right-2 top-2 text-gray-400 hover:text-white transition-opacity"
                                            onClick={() => {
                                                setEditingMessageId(message._id);
                                                setEditValue(message.content);
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                            </svg>
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex mt-auto">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 bg-gray-800/30 text-white rounded-lg px-4 py-2 focus:outline-none focus:shadow-[inset_0_0px_4px_rgba(255,255,255,0.1)]"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
                    />
                    <button
                        className="ml-4 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 px-4 py-1.5 rounded-md transition-colors focus:outline-none focus:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

