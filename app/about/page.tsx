import { PageHeader } from "@/components/PageHeader";

export default function AboutPage() {
    return (
        <div className="bg-black text-white">
            <PageHeader title="About Us" />
            <div className="mx-auto px-4 py-8 max-w-3xl">
                <div className="prose prose-invert max-w-none">
                    <div className="border border-gray-800 rounded-lg p-8">
                        <h1 className="text-2xl font-bold mb-4">Our Mission</h1>
                        <p className="text-gray-300 mb-">
                            EasyHacks is dedicated to making hackathons accessible to everyone.
                            We believe in fostering innovation, collaboration, and learning in
                            a welcoming environment.
                        </p>

                        <h1 className="text-2xl font-bold mb-4">What We Do</h1>
                        <p className="text-gray-300 mb-6">
                            We organize hackathons that bring together developers, designers,
                            and innovators from all backgrounds to create amazing projects
                            and solve real-world problems.
                        </p>

                        <h1 className="text-2xl font-bold mb-4">Join Us</h1>
                        <p className="text-gray-300">
                            Whether you&apos;re a seasoned developer or just starting out,
                            there&apos;s a place for you at EasyHacks. Join our community
                            and be part of something amazing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 