import { CopperBackground } from "@/components/CopperBackground";
import { pressStart2P } from '@/app/page';

export default function ContactPage() {
    return (
        <CopperBackground>
            <div className="px-4">
                {/* Contact Box Header */}
                <div className="flex items-end">
                    {/* Contact Icon */}
                    <div className="border border-gray-400 p-3 bg-black/90">
                        <div className="w-12 h-12 rounded-full border-2 border-[#FFB800] flex items-center justify-center">
                            <span className="text-[#ffb700] text-3xl">✉</span>
                        </div>
                    </div>

                    {/* Title */}
                    <div className="border border-gray-400 p-3 flex items-end bg-black/90">
                        <p className={`${pressStart2P.className} text-2xl font-bold text-[#FFB800]`}>— Contact —</p>
                    </div>
                </div>

                {/* Content */}
                <div className="border border-gray-400 p-6 bg-gradient-to-b from-gray-900 to-black">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Need help or have questions?</h2>
                        <h2 className="text-2xl font-bold mb-8 text-white">We&apos;re here for you!</h2>
                        <p className="text-gray-300 font-semibold tracking-wide leading-relaxed">
                            If you have any questions, suggestions, or concerns,
                            please don&apos;t hesitate to reach out to us through any of the following channels.
                        </p>
                    </div>

                    <div className="space-y-8 text-gray-300">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">Discord Community</h2>
                            <p className="mb-2 font-semibold tracking-wide leading-relaxed">
                                The fastest way to get support is through our Discord server. Join our community to:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-2 font-semibold tracking-wide leading-relaxed">
                                <li>Get immediate assistance from our team</li>
                                <li>Connect with other hackathon participants</li>
                                <li>Stay updated on announcements and events</li>
                            </ul>
                            <a
                                href="https://discord.gg/vcyEUgbs"
                                className={`${pressStart2P.className} inline-block mt-4 px-6 py-3 bg-transparent border-2 border-[#FFB800] text-white hover:bg-[#FFB800]/20 transition-colors rounded-lg text-sm`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Join Discord
                            </a>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">Email Support</h2>
                            <p className="mb-2 font-semibold tracking-wide leading-relaxed">
                                For formal inquiries or detailed questions, you can reach us at:
                            </p>
                            <a
                                href="mailto:joineasyhacks@gmail.com"
                                className="text-[#FFB800] hover:text-[#FFB800]/80 font-semibold"
                            >
                                joineasyhacks@gmail.com
                            </a>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">Social Media</h2>
                            <p className="mb-2 font-semibold tracking-wide leading-relaxed">
                                Follow us on social media to stay connected and get the latest updates:
                            </p>
                            <div className="flex space-x-4 mt-4">
                                <a
                                    href="https://twitter.com/easyhacks"
                                    className="text-[#FFB800] hover:text-[#FFB800]/80 font-semibold"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Twitter/X
                                </a>
                                <a
                                    href="https://instagram.com/easyhacks"
                                    className="text-[#FFB800] hover:text-[#FFB800]/80 font-semibold"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">Response Time</h2>
                            <p className="font-semibold tracking-wide leading-relaxed">
                                We typically respond to all inquiries within 24-48 hours during business days.
                                For urgent matters, please use our Discord server for the fastest response.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </CopperBackground>
    );
} 