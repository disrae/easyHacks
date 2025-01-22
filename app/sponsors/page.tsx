import { PageHeader } from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

export default function SponsorsPage() {
    return (
        <div className="bg-black text-white">
            <PageHeader title="Sponsors" />
            <div className="container mx-auto px-4 py-8 max-w-3xl">
                <div className="bg-black/50 border border-gray-800 rounded-lg p-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">The developers of today</h2>
                        <h2 className="text-4xl font-bold mb-8">have big dreams of tomorrow</h2>
                        <p className="text-gray-300">
                            We&apos;re grateful for all our generous sponsors for fueling innovation and growing local talent by
                            making EasyHacks 2025 possible!
                        </p>
                    </div>

                    {/* Sponsor logos grid */}
                    <div className="flex justify-around items-center mb-16">
                        <Image
                            src="/images/perplexity.png"
                            alt="Perplexity AI"
                            width={200}
                            height={50}
                            className="max-h-50"
                        />
                        <Image
                            src="/images/apathy-is-boring.png"
                            alt="Apati"
                            width={200}
                            height={50}
                            className="max-h-50"
                        />
                    </div>

                    {/* Become a sponsor section */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Become a sponsor</h2>
                        <p className="text-gray-300 mb-4">Want to make a difference?</p>
                        <p className="text-gray-300 mb-8">
                            We&apos;ll update the email here soon!
                        </p>
                        {/* <Link
                            href="mailto:sponsors@easyhacks.org"
                            className="inline-block bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
                        >
                            Become a sponsor
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
} 