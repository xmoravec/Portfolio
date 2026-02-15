import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { SiteNav } from "./components/site-nav";
import { getUiText } from "./i18n";
import { enUiText } from "./i18n/ui-text.en";
import { getRequestLocale } from "./i18n/locale.server";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
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
  const locale = await getRequestLocale();
  const ui = getUiText(locale);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95">
          <div className="mx-auto flex w-full max-w-none items-center justify-between px-4 py-3 sm:px-6 lg:max-w-7xl lg:px-10">
            <Link href="/" className="text-sm font-semibold tracking-wide text-zinc-900">
              XMoravec
            </Link>
            <SiteNav labels={ui.nav} currentLocale={locale} />
          </div>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
