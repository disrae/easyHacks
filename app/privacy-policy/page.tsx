import { PageHeader } from "@/components/PageHeader";

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-black text-white">
            <PageHeader title="Privacy Policy" />
            <div className="container mx-auto px-4 py-8 max-w-3xl">
                <div className="bg-black/50 border border-gray-800 rounded-lg p-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Your privacy matters</h2>
                        <h2 className="text-4xl font-bold mb-8">We take it seriously</h2>
                        <p className="text-gray-300">
                            We believe in being transparent about how we collect and use your data.
                            This policy explains our practices in detail.
                        </p>
                    </div>

                    <div className="space-y-8 text-gray-300">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">1. Information We Collect</h2>
                            <p className="mb-2">When you use EasyHacks, we collect:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li>Authentication information when you sign in</li>
                                <li>Information you provide when participating in polls</li>
                                <li>Information you share when creating or joining teams</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">2. How We Use Your Information</h2>
                            <p className="mb-2">We use your information to:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li>Provide and improve our hackathon platform</li>
                                <li>Enable community features like polls and team formation</li>
                                <li>Send important updates about the hackathon</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">3. Information Sharing</h2>
                            <p className="mb-2">We do not sell your personal information. We may share your information:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li>With other hackathon participants (limited to what&apos;s necessary for collaboration)</li>
                                <li>With service providers who help us operate the platform</li>
                                <li>When required by law or to protect rights</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">4. Data Security</h2>
                            <p>
                                We implement reasonable security measures to protect your information.
                                However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">5. Your Rights</h2>
                            <p className="mb-2">You have the right to:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li>Access your personal information</li>
                                <li>Request correction of your personal information</li>
                                <li>Request deletion of your account</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">6. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us through our{' '}
                                <a
                                    href="https://discord.gg/vcyEUgbs"
                                    className="text-indigo-400 hover:text-indigo-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Discord server
                                </a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">7. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any changes
                                by posting the new Privacy Policy on this page.
                            </p>
                        </section>

                        <p className="text-sm mt-8 text-gray-400">Last updated: January 2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 