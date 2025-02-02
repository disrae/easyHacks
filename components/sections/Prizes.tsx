import { pressStart2P } from '@/app/page';
import Image from 'next/image';
import React from 'react';

export function PrizesSection({ className = '' }) {
    return <div className={className}>
        <h2 className={`${pressStart2P.className} text-[#FFB800] text-2xl mb-4 text-center`}>- Prizes -</h2>
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
                <Image
                    src="/images/prize-money.png"
                    alt="Prize Money"
                    className="object-cover"
                    width={150}
                    height={150}
                />
                <Image
                    src="/images/prize-food.png"
                    alt="Prize Food"
                    width={150}
                    height={150}
                    className="w-full h-auto"
                />
            </div>
        </div>
    </div>;
} 