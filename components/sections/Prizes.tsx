import { pressStart2P } from '@/app/page';
import { SectionHeading } from "@/components/ui/section-heading";
import Image from 'next/image';
import React from 'react';

export function PrizesSection({ className = '' }) {
    return <div id="prizes" className={className}>
        <h2>
            <SectionHeading>Prizes</SectionHeading>
        </h2>
        <div className="flex space-x-4 md:space-x-8 lg:space-x-16 justify-center items-center max-w-full">
            <div className="max-w-[400px]">
                <Image
                    src={'/images/prize-chest.png'}
                    alt="Prize Chest"
                    width={325}
                    height={325}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="flex-col space-y-4 md:space-y-8 lg:space-y-16">
                <div className="flex flex-col items-center">
                    <Image
                        src="/images/prize-cash.png"
                        alt="Prize Money"
                        className="object-cover"
                        width={200}
                        height={150}
                    />
                    <div className="flex flex-shrink -mt-10 bg-black/80 px-2 py-1.5 ">
                        <p className={`${pressStart2P.className} text-[#FFB800]  text-opacity-100 font-bold text-center`}>$6k in prizes</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src="/images/prize-food-2.png"
                        alt="Prize Food"
                        width={200}
                        height={150}
                        className="object-cover"
                    />
                    <div className="-mt-8 bg-black/80 px-2 py-1.5 ">
                        <p className={`${pressStart2P.className} text-[#FFB800] text- text-opacity-100 font-bold text-center`}>Food Vouchers</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
} 