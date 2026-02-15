import { defaultLocale, type Locale } from "../content";

export const localeCookieName = "site_locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "sk";
}

export function resolveLocale(value: string | null | undefined): Locale {
  if (isLocale(value)) {
    return value;
  }

  return defaultLocale;
}
