import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Press_Start_2P } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
});

export const metadata: Metadata = {
  title: "EasyHacks 🔥",
  description: "The open hackathon",
  icons: {
    icon: "/convex.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      {/* `suppressHydrationWarning` only affects the html tag,
      // and is needed by `ThemeProvider` which sets the theme
      // class attribute on it */}
      <ConvexClientProvider>
        <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${pixelFont.variable} antialiased`}>
          <body className="min-h-screen flex flex-col">
            <ThemeProvider attribute="class">
              <Navbar />
              <main className="pt-16 flex-grow">
                {children}
              </main>
              <Footer />
            </ThemeProvider>
            <Toaster />
          </body>
        </html>
      </ConvexClientProvider>
    </ConvexAuthNextjsServerProvider>
  );
}
