import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { defaultLocale } from "./content";
import { SiteNav } from "./components/site-nav";
import { getUiText } from "./i18n/ui-text";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ui = getUiText(defaultLocale);

export const metadata: Metadata = {
  title: "XMoravec",
  description: ui.metadata.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
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
            <SiteNav labels={ui.nav} />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
