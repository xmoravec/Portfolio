"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SiteNavProps = {
  labels: {
    primaryAria: string;
    home: string;
    projects: string;
    blog: string;
    about: string;
    contact: string;
    menu: string;
    openMenuAria: string;
    closeMenuAria: string;
    mobileNavAria: string;
  };
};

export function SiteNav({ labels }: SiteNavProps) {
  const pathname = usePathname();
  const showHome = pathname !== "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: labels.projects, href: "/projects" },
    { label: labels.blog, href: "/blog" },
    { label: labels.about, href: "/about" },
    { label: labels.contact, href: "/contact" },
  ];

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
      <nav aria-label={labels.primaryAria} className="hidden items-center justify-end gap-6 text-sm text-zinc-600 md:ml-14 md:flex">
        {showHome ? (
          <Link href="/" className="rounded-md px-2 py-1 font-medium text-zinc-800 transition hover:bg-zinc-100 hover:text-zinc-900">
            {labels.home}
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
        aria-label={labels.openMenuAria}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav-drawer"
        onClick={() => setIsMenuOpen(true)}
      >
        <span className="sr-only">{labels.openMenuAria}</span>
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      </button>

      {isMenuOpen ? (
          <div className="fixed inset-0 z-70 isolate md:hidden" role="presentation">
          <button
            type="button"
              className="absolute inset-0 z-10 bg-zinc-950/55 backdrop-blur-[2px]"
            aria-label={labels.closeMenuAria}
            onClick={() => setIsMenuOpen(false)}
          />
          <aside
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label={labels.mobileNavAria}
              className="fixed inset-y-0 right-0 z-20 flex w-[88vw] max-w-sm flex-col overflow-y-auto border-l border-zinc-700 bg-zinc-900/95 p-5 text-zinc-100 shadow-2xl shadow-black/40 supports-backdrop-filter:bg-zinc-900/90"
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">{labels.menu}</p>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-600 text-zinc-100 transition hover:bg-zinc-800"
                aria-label={labels.closeMenuAria}
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
                  {labels.home}
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
