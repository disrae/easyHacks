import React from 'react';
import Image from 'next/image';
import { ApathyIsBoring, Hive, Incogni, NordPassHorizontal, NordVpnHorizontal, Perplexity, Saily } from '@/public/images/sponsors';
import { pressStart2P } from '@/app/page';

const sponsors = [
    { src: ApathyIsBoring, alt: 'Apathy is Boring', width: 200, height: 180, className: "" },
    { src: Incogni, alt: 'Incogni', width: 110, height: 105, className: "" },
    { src: NordPassHorizontal, alt: 'NordPass Horizontal', width: 140, height: 90, className: "" },
    { src: NordVpnHorizontal, alt: 'NordVPN Horizontal', width: 210, height: 0, className: "" },
    { src: Perplexity, alt: 'Perplexity AI', width: 140, height: 10, className: "" },
    { src: Saily, alt: 'Saily', width: 90, height: 105, className: "" },
    { src: Hive, alt: 'Hive', width: 90, height: 105, className: "" },
];

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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-12 justify-items-center items-center max-w-full">
                    {sponsors.map((sponsor, index) => (
                        <Image
                            key={index}
                            src={sponsor.src}
                            alt={sponsor.alt}
                            width={sponsor.width || 200}
                            height={sponsor.height || 50}
                            // Removed the "max-h-[500px]" class to let the images scale larger.
                            className={`${sponsor.className} `}
                        />
                    ))}
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