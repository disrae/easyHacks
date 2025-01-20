import React, { useState } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { Id } from '@/convex/_generated/dataModel';
import { api } from '@/convex/_generated/api';

type Props = { pollId: Id<"polls">; };
export function Chat({ pollId }: Props) {
    const messages = useQuery(api.pollMessages.list, { pollId });
    const sendMessage = useMutation(api.pollMessages.send);
    const [inputValue, setInputValue] = useState('');
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleSendMessage = async () => {
        if (inputValue.trim() === '') return;
        await sendMessage({ content: inputValue, pollId });
        setInputValue('');
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
                        <div key={message._id} className="text-gray-300 p-2 rounded">
                            <strong className="text-purple-400">{message.author}:</strong> {message.content}
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

