const PRODUCTION_FALLBACK_SITE_URL = "https://www.xmoravec.com";

export function getSiteUrl(): URL {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || PRODUCTION_FALLBACK_SITE_URL;

  try {
    const parsedUrl = new URL(configuredUrl);

    if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
      return new URL(PRODUCTION_FALLBACK_SITE_URL);
    }

    return parsedUrl;
  } catch {
    return new URL(PRODUCTION_FALLBACK_SITE_URL);
  }
}
