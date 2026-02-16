import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { SiteNav } from "./components/site-nav";
import { enUiText } from "./i18n/ui-text.en";
import { getSiteUrl } from "./site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XMoravec",
  description: enUiText.metadata.description,
  metadataBase: getSiteUrl(),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95">
          <div className="mx-auto flex w-full max-w-none items-center justify-between px-4 py-3 sm:px-6 lg:max-w-7xl lg:px-10">
            <Link href="/" className="text-sm font-semibold tracking-wide text-zinc-900">
              XMoravec
            </Link>
            <SiteNav />
          </div>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
