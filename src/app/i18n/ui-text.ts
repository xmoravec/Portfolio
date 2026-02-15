import { defaultLocale, type Locale } from "../content";
import { enUiText } from "./ui-text.en";
import { skUiText } from "./ui-text.sk";
import type { UiText } from "./ui-text.types";

export type { UiText } from "./ui-text.types";

export const uiTextByLocale: Record<Locale, UiText> = {
  en: enUiText,
  sk: skUiText,
};

export function getUiText(locale: string): UiText {
  if (locale in uiTextByLocale) {
    return uiTextByLocale[locale as Locale];
  }

  return uiTextByLocale[defaultLocale];
}
