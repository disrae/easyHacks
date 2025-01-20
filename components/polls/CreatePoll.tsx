"use client";

import { useState } from "react";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { Plus, Minus, PlusCircle, MinusCircle } from "lucide-react";

const CreatePoll = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [question, setQuestion] = useState("");
    const [description, setDescription] = useState("");
    const [options, setOptions] = useState<string[]>([""]);

    const createPoll = useMutation(api.polls.createPoll);
    const createPollOption = useMutation(api.pollOptions.createPollOption);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const pollId = await createPoll({ question, description });

        await Promise.all(
            options
                .filter(option => option.trim() !== "")
                .map(option => createPollOption({ pollId, text: option }))
        );

        setQuestion("");
        setDescription("");
        setOptions([""]);
        setIsOpen(false);
    };

    const addOption = () => {
        setOptions([...options, ""]);
    };

    const removeOption = (index: number) => {
        if (options.length > 1) {
            const newOptions = [...options];
            newOptions.splice(index, 1);
            setOptions(newOptions);
        }
    };

    const updateOption = (index: number, value: string) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    return (
        <div className="space-y-4">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full border border-teal-600 hover:bg-teal-600/20 text-teal-600 hover:text-teal-500 transition-colors"
            >
                {isOpen ? <Minus size={24} className="" /> : <Plus size={24} />}
            </button>

            <div className={`pl-1 transition-all duration-300 ease-in-out overflow-y-auto ${isOpen ? 'max-h-[40rem] bg-gray-900/80 border border-gray-800 rounded-lg shadow-[inset_0_4px_12px_rgba(0,0,0,0.8),inset_0_-2px_6px_rgba(255,255,255,0.1)]' : 'max-h-0'}`}>
                <form onSubmit={handleSubmit} className="space-y-4 overflow-x-visible p-2 sm:p-6">
                    <div>
                        <label className="block text-gray-200 font-medium pb-1">Question</label>
                        <input
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="w-full p-2 bg-gray-800 text-white rounded-md shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-200 font-medium pb-1">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 bg-gray-800 text-white rounded-md shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-gray-200 font-medium pb-1">Options</label>
                        {options.map((option, index) => (
                            <div key={index} className="flex gap-2">
                                <input
                                    type="text"
                                    value={option}
                                    onChange={(e) => updateOption(index, e.target.value)}
                                    className="flex-1 p-2 bg-gray-800 text-white rounded-md shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                    placeholder={`Option ${index + 1}`}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => removeOption(index)}
                                    className="p-2 text-red-500 hover:text-red-400 disabled:opacity-50"
                                    disabled={options.length === 1}
                                >
                                    <MinusCircle size={20} />
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addOption}
                            className="flex items-center gap-2 text-teal-500 hover:text-teal-400"
                        >
                            <PlusCircle size={20} />
                            <span>Add Option</span>
                        </button>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-md">
                        Submit Poll
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePoll;
