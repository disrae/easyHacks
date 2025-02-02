import { pressStart2P } from '@/app/page';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';

export function FAQSection({ className = '' }) {
    return (
        <section className={className}>
            <h2 className={`${pressStart2P.className} text-[#FFB800] text-2xl md:text-3xl lg:text-4xl mb-8 text-center`}>- FAQ -</h2>

            <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border-gray-800">
                    <AccordionTrigger className="hover:text-[#FFB800]/80 transition-colors text-base md:text-lg lg:text-xl">
                        How do I join?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 text-sm md:text-base lg:text-lg">
                        The Sign Up button above will soon be implemented, until then, you can join our
                        <a href="https://discord.com/invite/vcyEUgbs" target="_blank" rel="noopener noreferrer" className="text-[#FFB800] hover:text-[#FFB800]/80"> discord.</a>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-gray-800">
                    <AccordionTrigger className="hover:text-[#FFB800]/80 transition-colors text-base md:text-lg lg:text-xl">
                        How big can my team be?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 text-sm md:text-base lg:text-lg">
                        Teams can be between 1-4 people. Don&apos;t have a team? No worries! We&apos;ll help you find one.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-gray-800">
                    <AccordionTrigger className="hover:text-[#FFB800]/80 transition-colors text-base md:text-lg lg:text-xl">
                        Can I use a project I&apos;ve already started on?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 text-sm md:text-base lg:text-lg">
                        All projects must be started during the hackathon to ensure fairness.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-gray-800">
                    <AccordionTrigger className="hover:text-[#FFB800]/80 transition-colors text-base md:text-lg lg:text-xl">
                        What happens if I miss the submission deadline?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 text-sm md:text-base lg:text-lg">
                        Late submissions cannot be accepted to ensure fairness for all participants.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
} 