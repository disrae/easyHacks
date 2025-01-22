import { PageHeader } from "@/components/PageHeader";

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-black text-white">
            <PageHeader title="Privacy Policy" />
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

                <div className="space-y-6 text-gray-300">
                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-white">1. Information We Collect</h2>
                        <p>When you use EasyHacks, we collect:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Authentication information when you sign in</li>
                            <li>Information you provide when participating in polls</li>
                            <li>Information you share when creating or joining teams</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-white">2. How We Use Your Information</h2>
                        <p>We use your information to:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Provide and improve our hackathon platform</li>
                            <li>Enable community features like polls and team formation</li>
                            <li>Send important updates about the hackathon</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-white">3. Information Sharing</h2>
                        <p>We do not sell your personal information. We may share your information:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>With other hackathon participants (limited to what&apos;s necessary for collaboration)</li>
                            <li>With service providers who help us operate the platform</li>
                            <li>When required by law or to protect rights</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-white">4. Data Security</h2>
                        <p>We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-white">5. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Access your personal information</li>
                            <li>Request correction of your personal information</li>
                            <li>Request deletion of your account</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-white">6. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us through our Discord server.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-white">7. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                    </section>

                    <p className="text-sm mt-8">Last updated: January 2025</p>
                </div>
            </div>
        </div>
    );
} 