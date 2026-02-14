import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Erik Moravec",
  description:
    "Personal website with projects, writing, and current focus.",
};

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

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
        <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-3 sm:px-10">
            <Link href="/" className="text-sm font-semibold tracking-wide text-zinc-900">
              Erik Moravec
            </Link>
            <nav aria-label="Primary" className="flex flex-wrap items-center justify-end gap-4 text-sm text-zinc-600">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-blue-700">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
