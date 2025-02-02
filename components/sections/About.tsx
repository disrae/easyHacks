import { pressStart2P } from '@/app/page';
import React from 'react';

export function AboutSection({ className = '' }) {
    return (
        <section id="about" className={className}>
            {/* About Box Header */}
            <div className="flex items-end">
                {/* Question Mark */}
                <div className="border border-gray-400 p-3 bg-black/90">
                    <div className="w-12 h-12 rounded-full border-2 border-[#FFB800] flex items-center justify-center">
                        <span className="text-[#ffb700] text-3xl">?</span>
                    </div>
                </div>

                {/* Title */}
                <div className="border border-gray-400 p-3 flex items-end bg-black/90">
                    <p className={`${pressStart2P.className} text-2xl font-bold text-[#FFB800]`}>— About —</p>
                </div>
            </div>
            {/* Content */}
            <div className="border border-gray-400 p-3 bg-gradient-to-b from-gray-900 to-black">
                <p className="text-gray-300 font-semibold tracking-wide leading-relaxed pb-2">
                    EasyHacks is dedicated to making hackathons accessible to everyone. We
                    believe in fostering innovation, collaboration, and learning in a welcoming
                    environment.
                    <br />
                    <br />
                    We organize hackathons that bring together developers, designers, and
                    innovators from all backgrounds to create amazing projects and solve
                    real-world problems.
                    <br />
                    <br />
                    Whether you&apos;re a seasoned developer or just starting out, there&apos;s a place
                    for you at EasyHacks. Join our community and be part of something amazing.
                    <br />
                </p>
            </div>
        </section>
    );
} 