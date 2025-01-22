"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const user = useQuery(api.users.viewer);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full border-b bg-background z-50">
            <div className="max-w-3xl mx-auto w-full px-4 h-16 flex items-center justify-between">
                {/* Left side - Logo/Brand */}
                <div className="flex-shrink-0">
                    <Link href="/" className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider font-pixel">
                        EasyHacks
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/"
                        className="text-gray-300 hover:text-white text-sm font-medium font-geist-sans"
                    >
                        Home
                    </Link>
                    <Link
                        href="/polls"
                        className="text-gray-300 hover:text-white text-sm font-medium font-geist-sans"
                    >
                        Polls
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-300 hover:text-white text-sm font-medium font-geist-sans"
                    >
                        About
                    </Link>
                    <Link
                        href="/sponsors"
                        className="text-gray-300 hover:text-white text-sm font-medium font-geist-sans"
                    >
                        Sponsors
                    </Link>
                    {user?.isAdmin && (
                        <Link
                            href="/admin"
                            className="text-gray-300 hover:text-white text-sm font-medium font-geist-sans"
                        >
                            Admin
                        </Link>
                    )}
                    <div className="h-6 w-px bg-gray-700" />
                    <Link
                        href="/profile"
                        className="text-gray-300 hover:text-white"
                    >
                        <User className="w-5 h-5" />
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 hover:text-white p-2"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/90 border-b border-gray-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 font-geist-sans">
                            <Link
                                href="/"
                                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/polls"
                                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Polls
                            </Link>
                            <Link
                                href="/about"
                                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/sponsors"
                                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Sponsors
                            </Link>
                            {user?.isAdmin && (
                                <Link
                                    href="/admin"
                                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Admin
                                </Link>
                            )}
                            <Link
                                href="/profile"
                                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Profile
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
} 