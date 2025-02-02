"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const user = useQuery(api.users.viewer);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const scrollToSection = (sectionId: string) => {
        setIsOpen(false); // Close mobile menu

        if (!isHomePage) {
            // If not on home page, navigate to home page with hash
            window.location.href = `/#${sectionId}`;
            return;
        }

        // If on home page, scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 64; // height of navbar (h-16 = 64px)
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const scrollToTop = () => {
        if (!isHomePage) {
            window.location.href = '/';
            return;
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Handle initial scroll if there's a hash in the URL
    useEffect(() => {
        if (isHomePage && window.location.hash) {
            const sectionId = window.location.hash.slice(1);
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100);
        }
    }, [isHomePage]);

    const NavLink = ({ href, children }: { href: string, children: React.ReactNode; }) => {
        const sectionId = href.replace('/', '');
        const isScrollableSection = ['about', 'prizes', 'sponsors', 'faq'].includes(sectionId);

        if (isScrollableSection) {
            return (
                <button
                    onClick={() => scrollToSection(sectionId)}
                    className="text-gray-300 hover:text-white text-sm font-medium font-geist-sans text-left"
                >
                    {children}
                </button>
            );
        }

        return (
            <Link
                href={href}
                className="text-gray-300 hover:text-white text-sm font-medium font-geist-sans"
            >
                {children}
            </Link>
        );
    };

    return (
        <nav className="fixed top-0 w-full border-b bg-background z-50">
            <div className="max-w-3xl mx-auto w-full px-4 h-16 flex items-center justify-between">
                {/* Left side - Logo/Brand */}
                <div className="flex-shrink-0">
                    <button
                        onClick={scrollToTop}
                        className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider font-pixel hover:text-[#FFB800] transition-colors"
                    >
                        EasyHacks
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/prizes">Prizes</NavLink>
                    <NavLink href="/sponsors">Sponsors</NavLink>
                    <NavLink href="/faq">FAQ</NavLink>
                    {user?.isAdmin && (
                        <NavLink href="/admin">Admin</NavLink>
                    )}
                    <div className="h-6 w-px bg-gray-700" />
                    <NavLink href="/profile">
                        <User className="w-5 h-5" />
                    </NavLink>
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
                            <button
                                onClick={() => scrollToSection('about')}
                                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('prizes')}
                                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
                            >
                                Prizes
                            </button>
                            <button
                                onClick={() => scrollToSection('sponsors')}
                                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
                            >
                                Sponsors
                            </button>
                            <button
                                onClick={() => scrollToSection('faq')}
                                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
                            >
                                FAQ
                            </button>
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