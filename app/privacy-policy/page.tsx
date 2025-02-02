import { CopperBackground } from "@/components/CopperBackground";
import { pressStart2P } from '@/app/page';

export default function PrivacyPolicyPage() {
    return (
        <CopperBackground>
            <div className="px-4">
                {/* Privacy Policy Box Header */}
                <div className="flex items-end">
                    {/* Privacy Icon */}
                    <div className="border border-gray-400 p-3 bg-black/90">
                        <div className="w-12 h-12 rounded-full border-2 border-[#FFB800] flex items-center justify-center">
                            <span className="text-[#ffb700] text-3xl">🔒</span>
                        </div>
                    </div>

                    {/* Title */}
                    <div className="border border-gray-400 p-3 flex items-end bg-black/90">
                        <p className={`${pressStart2P.className} text-2xl font-bold text-[#FFB800]`}>— Privacy —</p>
                    </div>
                </div>

                {/* Content */}
                <div className="border border-gray-400 p-6 bg-gradient-to-b from-gray-900 to-black">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Your privacy matters</h2>
                        <h2 className="text-2xl font-bold mb-8 text-white">We take it seriously</h2>
                        <p className="text-gray-300 font-semibold tracking-wide leading-relaxed">
                            We believe in being transparent about how we collect and use your data.
                            This policy explains our practices in detail.
                        </p>
                    </div>

                    <div className="space-y-8 text-gray-300">
                        <section>
                            <h2 className={`${pressStart2P.className} text-xl text-[#FFB800] mb-4`}>- Information We Collect -</h2>
                            <p className="mb-2 font-semibold tracking-wide leading-relaxed">When you use EasyHacks, we collect:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-2 font-semibold tracking-wide leading-relaxed">
                                <li>Authentication information when you sign in</li>
                                <li>Information you provide when participating in polls</li>
                                <li>Information you share when creating or joining teams</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className={`${pressStart2P.className} text-xl text-[#FFB800] mb-4`}>- How We Use Your Information -</h2>
                            <p className="mb-2 font-semibold tracking-wide leading-relaxed">We use your information to:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-2 font-semibold tracking-wide leading-relaxed">
                                <li>Provide and improve our hackathon platform</li>
                                <li>Enable community features like polls and team formation</li>
                                <li>Send important updates about the hackathon</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className={`${pressStart2P.className} text-xl text-[#FFB800] mb-4`}>- Information Sharing -</h2>
                            <p className="mb-2 font-semibold tracking-wide leading-relaxed">
                                We do not sell your personal information. We may share your information:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-2 font-semibold tracking-wide leading-relaxed">
                                <li>With other hackathon participants (limited to what&apos;s necessary for collaboration)</li>
                                <li>With service providers who help us operate the platform</li>
                                <li>When required by law or to protect rights</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className={`${pressStart2P.className} text-xl text-[#FFB800] mb-4`}>- Data Security -</h2>
                            <p className="font-semibold tracking-wide leading-relaxed">
                                We implement reasonable security measures to protect your information.
                                However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className={`${pressStart2P.className} text-xl text-[#FFB800] mb-4`}>- Your Rights -</h2>
                            <p className="mb-2 font-semibold tracking-wide leading-relaxed">You have the right to:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-2 font-semibold tracking-wide leading-relaxed">
                                <li>Access your personal information</li>
                                <li>Request correction of your personal information</li>
                                <li>Request deletion of your account</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className={`${pressStart2P.className} text-xl text-[#FFB800] mb-4`}>- Contact Us -</h2>
                            <p className="font-semibold tracking-wide leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us through our{' '}
                                <a
                                    href="https://discord.gg/vcyEUgbs"
                                    className="text-[#FFB800] hover:text-[#FFB800]/80"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Discord server
                                </a>.
                            </p>
                        </section>

                        <section>
                            <h2 className={`${pressStart2P.className} text-xl text-[#FFB800] mb-4`}>- Changes to This Policy -</h2>
                            <p className="font-semibold tracking-wide leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes
                                by posting the new Privacy Policy on this page.
                            </p>
                        </section>

                        <p className="text-sm mt-8 text-gray-400 font-semibold">Last updated: January 2025</p>
                    </div>
                </div>
            </div>
        </CopperBackground>
    );
} 