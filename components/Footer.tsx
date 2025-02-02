"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Discord, Github, Instagram } from '@/components/icons';
import { LinkedIn } from '@/components/icons/LinkedIn';



export function Footer() {
    return (
        <footer className="bg-black border-t border-gray-800 mx-auto w-full px-4">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    {/* Left side - Logo and social links */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className=" font-bold font-pixel ">EasyHacks</span>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/easyhacksglobal" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                <Github className="w-6 h-6" />
                            </Link>
                            <Link href="https://discord.gg/vcyEUgbs" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                <Discord className="w-6 h-6" />
                            </Link>
                            <Link href='https://www.instagram.com/joineasyhacks/#' className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-6 h-6" />
                            </Link>
                            <Link href="/" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                <LinkedIn className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>

                    {/* Right side - Navigation links */}
                    <div className="flex flex-col items-center md:items-end space-y-2">
                        <Link
                            href="/"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/privacy-policy"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}