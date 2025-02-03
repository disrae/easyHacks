import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Countdown } from '@/components/Countdown';

// Import the font from a shared location to avoid duplication
import { pressStart2P } from '@/app/page';
import { convexAuthNextjsToken } from '@convex-dev/auth/nextjs/server';
import { fetchQuery } from 'convex/nextjs';
import { api } from '@/convex/_generated/api';

export async function HeroSection() {
    const user = await fetchQuery(
        api.users.viewer,
        {},
        { token: await convexAuthNextjsToken() },
    );

    return (<section className="relative h-screen flex items-center justify-center px-5" >
        <div className="">
            <Image
                src="/images/hero.jpeg"
                alt="Hero background"
                fill
                className="object-cover"
                priority
            />

            {/* <div className="absolute inset-0 bg-black/50" /> */}

            {/* Card  */}
            <div className="relative z-10 text-center space-y-8 text-yellow-500 tracking-wide p-5 md:p-12 \
           border-gray-300 border-4 rounded-xl bg-gradient-to-b from-gray-900/80 to-gray-900 max-w-4xl mx-auto">
                <h1 className={`${pressStart2P.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}>
                    EASYHACKS
                    <br />
                    2025
                </h1>
                <p className={`${pressStart2P.className} text-sm sm:text-base md:text-lg lg:text-xl text-white`}>
                    Build your dreams
                </p>
                <Countdown />
                <p className={`${pressStart2P.className} text-sm sm:text-base md:text-lg lg:text-xl text-white`}>Until your dreams come true</p>
                <div className={`${pressStart2P.className} flex justify-center flex-wrap gap-2`}>
                    <div className="inline-flex bg-[#ffb700ab] rounded-lg tracking-wide px-3 py-1">
                        <p className="text-sm font-bold text-white">March 1, 2025</p>
                    </div>
                    <div className="inline-flex bg-[#ffb700ab] rounded-lg tracking-wide px-3 py-1">
                        <p className="text-sm font-bold text-white">Virtual</p>
                    </div>
                    <div className="inline-flex bg-[#ffb700ab] rounded-lg tracking-wide px-3 py-1">
                        <p className="text-sm font-bold text-white">Free</p>
                    </div>
                </div>

                {/* This is going to require logic to check if they already signed up */}
                {user === null && (
                    <div
                        className={`inline-flex justify-center items-center ${pressStart2P.className} px-8 py-4 rounded-lg bg-transparent border-[#FFB800E5] border-2 text-white`}
                    >
                        Sign up coming soon...
                    </div>
                )}
                {/* This will require backend function to return signed up users */}
                {/* <p className="text-sm opacity-75">1337 dreamers and counting...</p> */}
            </div>
        </div>
    </section>
    );
} 