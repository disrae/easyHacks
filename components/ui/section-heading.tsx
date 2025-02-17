import { pressStart2P } from "@/app/page";
import type { FC, PropsWithChildren } from "react";

export type SectionHeadingProps = PropsWithChildren<{
  className?: string;
  fontSizeClass?: string;
}>

export const SectionHeading: FC<SectionHeadingProps> = ({ children, className, fontSizeClass = 'text-2xl' }) => {
  return (
    <span className={`${pressStart2P.className} ${fontSizeClass} text-[#FFB800] flex gap-4 justify-center items-center ${className}`}>
      <span>-</span>
      <span>{children}</span>
      <span>-</span>
    </span>
  );
}