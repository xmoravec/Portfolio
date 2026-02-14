"use client";

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

  return (
    <nav aria-label="Primary" className="ml-10 flex flex-wrap items-center justify-end gap-6 text-sm text-zinc-600 sm:ml-14">
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
  );
}
