import { pressStart2P } from '@/app/page';
import Image from 'next/image';
import React from 'react';

export function SponsorsSection({ className = '' }) {
    return (
        <div id="sponsors" className={className}>

            {/* Sponsors Card */}
            <div className="flex items-end">
                <div className="border border-gray-400 p-3 bg-black/90">
                    <div className="w-12 h-12 rounded-full border-2 border-[#FFB800] flex items-center justify-center">
                        <span className="text-[#ffb700] text-3xl">★</span>
                    </div>
                </div>
                <div className="border border-gray-400 p-3 flex items-end bg-black/90">
                    <p className={`${pressStart2P.className} text-2xl font-bold text-[#FFB800]`}>— Sponsors —</p>
                </div>
            </div>

            <div className="border border-gray-400 p-6 bg-gradient-to-b from-gray-900 to-black">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-white">The developers of today</h2>
                    <h2 className="text-2xl font-bold mb-6 text-white">have big dreams of tomorrow</h2>
                    <p className="text-gray-300 font-semibold tracking-wide leading-relaxed">
                        We&apos;re grateful for all our generous sponsors for fueling innovation and growing local talent by
                        making EasyHacks 2025 possible!
                    </p>
                </div>

                {/* Sponsor logos grid */}
                <div className="flex flex-col md:flex-row justify-around items-center mb-12 space-y-8 md:space-y-0">
                    <Image
                        src="/images/perplexity.png"
                        alt="Perplexity AI"
                        width={200}
                        height={50}
                        className="max-h-50"
                    />
                    <Image
                        src="/images/apathy-is-boring.png"
                        alt="Apati"
                        width={200}
                        height={50}
                        className="max-h-50"
                    />
                </div>

                {/* Become a sponsor section */}
                <div className="text-center border-t border-gray-800 pt-8">
                    <h2 className={`${pressStart2P.className} text-xl text-[#FFB800] mb-4`}>- Become a sponsor -</h2>
                    <p className="text-gray-300 font-semibold mb-4">Want to make a difference?</p>
                    <p className="text-gray-300 font-semibold mb-8">
                        If you&apos;re interested in becoming a sponsor, please reach out to us at{' '}
                        <a href="mailto:joineasyhacks@gmail.com" className="text-[#FFB800] hover:text-[#FFB800]/80">
                            joineasyhacks@gmail.com
                        </a>
                    </p>
                    <a
                        href="mailto:joineasyhacks@gmail.com"
                        className={`${pressStart2P.className} inline-block bg-transparent border-2 border-[#FFB800] text-white px-6 py-3 hover:bg-[#FFB800]/20 transition-colors rounded-lg`}
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
} 