import { cookies, headers } from "next/headers";
import { defaultLocale, type Locale } from "../content";
import { isLocale, localeCookieName } from "./locale.shared";

export async function getRequestLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(localeCookieName)?.value;

  if (isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const headerStore = await headers();
  const acceptLanguage = headerStore.get("accept-language")?.toLowerCase() ?? "";

  if (acceptLanguage.includes("sk")) {
    return "sk";
  }

  return defaultLocale;
}
