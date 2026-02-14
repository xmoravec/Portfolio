"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const showHome = pathname !== "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <nav aria-label="Primary" className="hidden items-center justify-end gap-6 text-sm text-zinc-600 md:ml-14 md:flex">
        {showHome ? (
          <Link href="/" className="rounded-md px-2 py-1 font-medium text-zinc-800 transition hover:bg-zinc-100 hover:text-zinc-900">
            Home
          </Link>
        ) : null}
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="transition hover:text-blue-700">
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-300 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-100 md:hidden"
        aria-label="Open navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav-drawer"
        onClick={() => setIsMenuOpen(true)}
      >
        <span className="sr-only">Open menu</span>
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      </button>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-50 md:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 z-0 bg-zinc-950/55 backdrop-blur-[2px]"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 z-10 flex h-full w-[86vw] max-w-sm flex-col border-l border-zinc-700 bg-zinc-900 p-5 text-zinc-100 shadow-2xl shadow-black/40"
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Menu</p>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-600 text-zinc-100 transition hover:bg-zinc-800"
                aria-label="Close navigation menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12" />
                  <path d="M18 6l-12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-2 text-base">
              {showHome ? (
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 font-medium text-white transition hover:bg-zinc-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              ) : null}
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-zinc-200 transition hover:bg-zinc-800 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
