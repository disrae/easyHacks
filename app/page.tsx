import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Press_Start_2P } from "next/font/google";
import { SignIn } from "@/components/SignIn";
import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHeader } from "@/components/PageHeader";
import { Countdown } from "@/components/Countdown";
import { Button } from "@/components/ui/button";

export const pressStart2P = Press_Start_2P({
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
      {/* <PageHeader title="A hackathon for the people by the people" centered /> */}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-5">
        <div className="border border-red-500">
          <Image
            src="/images/hero.jpeg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />

          {/* <div className="absolute inset-0 bg-black/50" /> */}

          {/* Card is here  */}
          <div className="relative z-10 text-center space-y-8 text-yellow-500 tracking-wide p-5 md:p-12 \
           border-white border-4 rounded-xl bg-gradient-to-b from-gray-900/80 to-gray-900 max-w-4xl mx-auto">
            <h1 className={`${pressStart2P.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}>
              EASYHACKS
              <br />
              2025
            </h1>
            <p className={`${pressStart2P.className} text-sm sm:text-base md:text-lg lg:text-xl text-white`}>
              Build your dreams
            </p>
            <Countdown />
            <p className={`${pressStart2P.className} text-sm sm:text-base md:text-lg lg:text-xl text-white`}>Until your dreams come true</p>
            <div className={`${pressStart2P.className} flex justify-center flex-wrap gap-2`}>
              <div className="inline-flex bg-[#ffb700ab] rounded-lg tracking-wide px-3 py-1">
                <p className="text-sm font-bold text-white">March 1, 2025</p>
              </div>
              <div className="inline-flex bg-[#ffb700ab] rounded-lg tracking-wide px-3 py-1">
                <p className="text-sm font-bold text-white">Virtual</p>
              </div>
              <div className="inline-flex bg-[#ffb700ab] rounded-lg tracking-wide px-3 py-1">
                <p className="text-sm font-bold text-white">Free</p>
              </div>
            </div>

            {/* This is going to require logic to check if they already signed up */}
            {user === null && (
              <Button
                className={`${pressStart2P.className} px-8 py-4 bg-transparent border-[#FFB800E5] border-2 text-white hover:bg-gray-200 transition-colors`}
              >
                Sign up
              </Button>
            )}
            {/* This will require backend function to return signed up users */}
            {/* <p className="text-sm opacity-75">1337 dreamers and counting...</p> */}
          </div>
        </div>
      </section>


      {/* Sponsors Section */}
      <section className="py-20">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className={`${pressStart2P.className} text-2xl mb-8 text-center`}>- Sponsors -</h2>
          <div className="grid grid-cols-2 gap-8 mb-12">
            <Image
              src="/images/perplexity.png"
              alt="Perplexity AI"
              width={200}
              height={50}
              className="mx-auto"
            />
            <Image
              src="/images/apathy-is-boring.png"
              alt="Apathy is Boring"
              width={200}
              height={50}
              className="mx-auto"
            />
          </div>
          <div className="text-center space-y-4">
            <h3 className={`${pressStart2P.className} text-xl`}>- Become a sponsor -</h3>
            <p className="text-gray-300">Want to make a difference?</p>
            <Link
              href="mailto:joineasyhacks@gmail.com"
              className={`${pressStart2P.className} inline-block px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className={`${pressStart2P.className} text-2xl mb-8 text-center`}>- FAQ -</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-gray-800">
              <AccordionTrigger>How do I join?</AccordionTrigger>
              <AccordionContent>
                Sign up using the button above and join our Discord community to get started!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-gray-800">
              <AccordionTrigger>How big can my team be?</AccordionTrigger>
              <AccordionContent>
                Teams can be between 1-4 people. Don&apos;t have a team? No worries! We&apos;ll help you find one.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-gray-800">
              <AccordionTrigger>Can I use a project I&apos;ve already started on?</AccordionTrigger>
              <AccordionContent>
                All projects must be started during the hackathon to ensure fairness.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-gray-800">
              <AccordionTrigger>What happens if I miss the submission deadline?</AccordionTrigger>
              <AccordionContent>
                Late submissions cannot be accepted to ensure fairness for all participants.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
