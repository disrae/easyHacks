import { QuestionMarkIcon } from "@/components/icons/Question";
import { PageHeader } from "@/components/PageHeader";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { Press_Start_2P } from "next/font/google";
import { pressStart2P } from "../page";

export default function AboutPage() {
    return (
        <div className="bg-gradient-to-b from-black via-[#6F2700] to-black text-white h-screen flex justify-center py-10 md:py-20">
            <div className="max-w-2xl">

                {/* About Box */}
                <div className="px-4">
                    {/* About Box Header */}
                    <div className="flex items-end">
                        {/* Question Mark */}
                        <div className="border border-white p-3">
                            <div className="w-12 h-12 rounded-full border-2 border-[#FFB800] flex items-center justify-center">
                                <span className="text-[#FFB800] text-3xl">?</span>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="border border-white p-3 flex items-end">
                            <p className={`${pressStart2P.className} text-2xl font-bold text-[#FFB800]`}>— About —</p>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="border border-white p-3 bg-gradient-to-b from-gray-900 to-black">
                        <p className="text-gray-300 font-semibold tracking-wide leading-relaxed">
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
                <div className="px-4 border">
                    <h2 className={`${pressStart2P.className} text-[#FFB800] text-2xl mb-8 text-center`}>- Prizes -</h2>
                </div>

            </div>
        </div>
    );
}