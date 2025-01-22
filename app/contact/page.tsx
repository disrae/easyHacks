import { PageHeader } from "@/components/PageHeader";

export default function ContactPage() {
    return (
        <div className="bg-black text-white">
            <PageHeader title="Contact Us" />
            <div className="container mx-auto px-4 py-8 max-w-3xl">
                <div className="bg-black/50 border border-gray-800 rounded-lg p-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Need help or have questions?</h2>
                        <h2 className="text-4xl font-bold mb-8">We're here for you!</h2>
                        <p className="text-gray-300">
                            If you have any questions, suggestions, or concerns,
                            please don't hesitate to reach out to us through any of the following channels.
                        </p>
                    </div>

                    <div className="space-y-8 text-gray-300">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">Discord Community</h2>
                            <p className="mb-2">
                                The fastest way to get support is through our Discord server. Join our community to:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li>Get immediate assistance from our team</li>
                                <li>Connect with other hackathon participants</li>
                                <li>Stay updated on announcements and events</li>
                            </ul>
                            <a
                                href="https://discord.gg/vcyEUgbs"
                                className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Join our Discord
                            </a>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">Email Support</h2>
                            <p className="mb-2">
                                For formal inquiries or detailed questions, you can reach us at:
                            </p>
                            <a
                                href="mailto:support@easyhacks.dev"
                                className="text-indigo-400 hover:text-indigo-300"
                            >
                                support@easyhacks.dev
                            </a>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">Social Media</h2>
                            <p className="mb-2">
                                Follow us on social media to stay connected and get the latest updates:
                            </p>
                            <div className="flex space-x-4 mt-4">
                                <a
                                    href="https://twitter.com/easyhacks"
                                    className="text-gray-300 hover:text-white transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Twitter/X
                                </a>
                                <a
                                    href="https://instagram.com/easyhacks"
                                    className="text-gray-300 hover:text-white transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-white">Response Time</h2>
                            <p>
                                We typically respond to all inquiries within 24-48 hours during business days.
                                For urgent matters, please use our Discord server for the fastest response.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
} 