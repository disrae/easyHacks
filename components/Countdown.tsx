'use client';
import { Press_Start_2P } from "next/font/google";
import { useEffect, useState } from "react";

const pressStart2P = Press_Start_2P({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
});

export function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // March 14, 2025 at 13:30 PM PST
        const targetDate = new Date('2025-03-14T13:30:00-08:00');

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                return {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                };
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={`${pressStart2P.className} text-[10px] sm:text-sm md:text-base lg:text-lg flex justify-center space-x-1 sm:space-x-4`}>
            <div className="flex flex-col items-center">
                <span className="text-xl sm:text-3xl md:text-4xl">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-[8px] sm:text-xs md:text-sm">Days</span>
            </div>
            <p className="text-lg sm:text-2xl md:text-3xl">:</p>
            <div className="flex flex-col items-center">
                <span className="text-xl sm:text-3xl md:text-4xl">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[8px] sm:text-xs md:text-sm">Hours</span>
            </div>
            <p className="text-lg sm:text-2xl md:text-3xl">:</p>
            <div className="flex flex-col items-center">
                <span className="text-xl sm:text-3xl md:text-4xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[8px] sm:text-xs md:text-sm">Min</span>
            </div>
            <p className="text-lg sm:text-2xl md:text-3xl">:</p>
            <div className="flex flex-col items-center">
                <span className="text-xl sm:text-3xl md:text-4xl">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[8px] sm:text-xs md:text-sm">Sec</span>
            </div>
        </div>
    );
}