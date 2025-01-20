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
import CreatePoll from "@/components/polls/CreatePoll";
import { Polls } from "@/components/polls/Polls";

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
    <div className="min-h-screen bg-black text-white">

      {/* Title */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
        <div className="container px-4 md:px-6 relative max-w-3xl mx-auto flex flex-col items-center text-center space-y-4">
          <h1 className={`${pressStart2P.className} text-3xl tracking-tighter font-bold sm:text-4xl md:text-5xl lg:text-6xl/none`}>
            EasyHacks
          </h1>
          <p className={`${pressStart2P.className} mx-auto max-w-[700px] text-gray-300 md:text-xl`}>
            A hackathon for the people <br /> by the people
          </p>
        </div>
        {
          user && <div className="absolute top-4 right-4 w-10 h-10 text-teal-600">
            <Logout />
          </div>
        }
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-black/50 border-gray-800 text-white hover:border-purple-500/50 transition-colors shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)]">
              <CardContent className="p-6 space-y-4">
                <p className="text-lg md:text-2xl text-gray-200 font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">Open</p>
                <p className="text-lg text-gray-200">
                  Just find or create a team and a topic you like.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-gray-800 text-white hover:border-purple-500/50 transition-colors shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)]">
              <CardContent className="p-6 space-y-4">
                <p className="text-lg md:text-2xl text-gray-200 font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">Chill</p>
                <p className="text-lg text-gray-200">
                  Take your time to build something amazing. Just submit by March 1st.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-gray-800 text-white hover:border-purple-500/50 transition-colors shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)]">
              <CardContent className="p-6 space-y-4">
                <p className="text-lg md:text-2xl text-gray-200 font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">Distributed</p>
                <p className="text-lg text-gray-200">
                  Shape the hackathon by voting on key decisions in community polls.
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

      {/* Create Poll */}
      {user &&
        <section className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="space-y-4">
            <h2 className={`text-lg md:text-2xl text-gray-200 font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]`}>
              Community Polls
            </h2>
            <CreatePoll />
            <Polls />
          </div>
        </section>
      }

      <div className="h-[300px]"></div>

    </div>
  );
}
