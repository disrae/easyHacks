import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { PrizesSection } from "@/components/sections/Prizes";
import { SponsorsSection } from "@/components/sections/Sponsors";
import { FAQSection } from "@/components/sections/FAQ";
import { CopperBackground } from "@/components/CopperBackground";

// App Font
import { Press_Start_2P } from "next/font/google";
export const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default async function Home() {

  return (
    <div className="bg-black text-white">
      <HeroSection />
      <CopperBackground>
        <AboutSection className="px-4" />
        <div className="h-10 md:h-20" />
        <PrizesSection className="px-4" />
        <div className="h-10 md:h-20" />
        <SponsorsSection className="px-4" />
        <div className="h-10 md:h-20" />
        <FAQSection className="px-4" />
      </CopperBackground>
    </div>
  );
}
