"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { Locale } from "../content";
import { localeCookieName } from "../i18n/locale.shared";

type SiteNavProps = {
  currentLocale: Locale;
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
    localeSwitcherAria: string;
    localeEnLabel: string;
    localeSkLabel: string;
  };
};

export function SiteNav({ labels, currentLocale }: SiteNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const showHome = pathname !== "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function updateLocale(nextLocale: Locale) {
    if (nextLocale === currentLocale) {
      return;
    }

    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  }

  const navItems = [
    { label: labels.projects, href: "/projects" },
    { label: labels.blog, href: "/blog" },
    { label: labels.about, href: "/about" },
    { label: labels.contact, href: "/contact" },
  ];

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
        <div
          className="relative inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100 p-0.5"
          role="group"
          aria-label={labels.localeSwitcherAria}
        >
          <span
            className={`absolute bottom-0.5 top-0.5 w-9 rounded-full bg-white shadow-sm transition-transform duration-200 ${
              currentLocale === "en" ? "translate-x-0" : "translate-x-9"
            }`}
            aria-hidden
          />
          <button
            type="button"
            onClick={() => updateLocale("en")}
            className={`relative z-10 inline-flex h-8 w-9 items-center justify-center rounded-full text-xs font-semibold transition ${
              currentLocale === "en" ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
            }`}
            aria-pressed={currentLocale === "en"}
          >
            {labels.localeEnLabel}
          </button>
          <button
            type="button"
            onClick={() => updateLocale("sk")}
            className={`relative z-10 inline-flex h-8 w-9 items-center justify-center rounded-full text-xs font-semibold transition ${
              currentLocale === "sk" ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
            }`}
            aria-pressed={currentLocale === "sk"}
          >
            {labels.localeSkLabel}
          </button>
        </div>
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
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

          {isMenuOpen ? (
            <div className="fixed inset-0 z-50 isolate overflow-x-hidden md:hidden" role="presentation">
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
              className="fixed inset-y-0 right-0 z-20 flex w-[min(88vw,24rem)] max-w-sm flex-col overflow-y-auto border-l border-zinc-700 bg-zinc-900/95 p-5 text-zinc-100 shadow-2xl shadow-black/40 supports-backdrop-filter:bg-zinc-900/90"
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">{labels.menu}</p>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-600 text-zinc-100 transition hover:bg-zinc-800"
                aria-label={labels.closeMenuAria}
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-4 w-4" aria-hidden="true" />
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

              <div className="mt-2 rounded-xl border border-zinc-700 bg-zinc-800/70 p-2">
                <p className="mb-2 text-xs uppercase tracking-wide text-zinc-400">{labels.localeSwitcherAria}</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => updateLocale("en")}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      currentLocale === "en"
                        ? "bg-white text-zinc-900"
                        : "bg-zinc-900 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                    }`}
                    aria-pressed={currentLocale === "en"}
                  >
                    {labels.localeEnLabel}
                  </button>
                  <button
                    type="button"
                    onClick={() => updateLocale("sk")}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      currentLocale === "sk"
                        ? "bg-white text-zinc-900"
                        : "bg-zinc-900 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                    }`}
                    aria-pressed={currentLocale === "sk"}
                  >
                    {labels.localeSkLabel}
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
