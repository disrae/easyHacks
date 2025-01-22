import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Press_Start_2P } from "next/font/google";
import { SignIn } from "@/components/SignIn";
import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server";
import Logout from "@/components/Logout";
import { PageHeader } from "@/components/PageHeader";

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default async function Home() {

  const user = await fetchQuery(
    api.users.viewer,
    {},
    { token: await convexAuthNextjsToken() },
  );

  return (
    <div className="bg-black text-white">
      <PageHeader title="A hackathon for the people by the people" centered />

      {/* Features Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-black/50 border-gray-800 text-white transition-colors shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]]">
              <CardContent className="p-6 space-y-4">
                <p className="text-lg md:text-2xl text-gray-200 font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">Unwind</p>
                <p className="text-lg text-gray-200">
                  Find your tribe and dive into a topic that sparks your passion.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-gray-800 text-white transition-colors shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]]">
              <CardContent className="p-6 space-y-4">
                <p className="text-lg md:text-2xl text-gray-200 font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">Create</p>
                <p className="text-lg text-gray-200">
                  Join forces with like-minded individuals and bring your ideas to life.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-gray-800 text-white transition-colors shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]]">
              <CardContent className="p-6 space-y-4">
                <p className="text-lg md:text-2xl text-gray-200 font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">Empower</p>
                <p className="text-lg text-gray-200">
                  Shape the future of the hackathon through community-driven decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sign In */}
      {user === null && <section className="container px-4 md:px-6 max-w-3xl mx-auto">
        <Card className="bg-black/50 border-gray-800 text-white hover:border-purple-500/50 transition-colors shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)]">
          <CardContent className="p-6">
            <SignIn />
          </CardContent>
        </Card>
      </section>}

    </div>
  );
}
