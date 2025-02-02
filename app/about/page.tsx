import { QuestionMarkIcon } from "@/components/icons/Question";
import { PageHeader } from "@/components/PageHeader";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { Press_Start_2P } from "next/font/google";
import { pressStart2P } from "../page";
import Image from "next/image";
import Treasure from "@/public/images/treasure.png";

export default function AboutPage() {
    return (
        <div className="bg-gradient-to-b from-black via-[#6F2700] to-black text-white flex justify-center py-10 md:py-20">
            <div className="max-w-2xl w-full">

                {/* About Box */}
                <div className="px-4">
                    {/* About Box Header */}
                    <div className="flex items-end">
                        {/* Question Mark */}
                        <div className="border border-gray-400 p-3">
                            <div className="w-12 h-12 rounded-full border-2 border-[#FFB800] flex items-center justify-center">
                                <span className="text-[#ffb700] text-3xl">?</span>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="border border-gray-400 p-3 flex items-end">
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
                </div>

                <div className="h-10 md:h-20"></div>

                {/* Prizes */}
                <div className="px-4">
                    <h2 className={`${pressStart2P.className} text-[#FFB800] text-2xl mb-4 text-center`}>- Prizes -</h2>
                    <div className="flex space-x-4 md:space-x-8 lg:space-x-16 justify-center items-center max-w-full">
                        <div className="max-w-[400px]">
                            <Image
                                src={Treasure}
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
                </div>

                <div className="h-10 md:h-20"></div>

            </div>
        </div>
    );
}