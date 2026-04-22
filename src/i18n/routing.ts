import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "nb", "sv", "da", "nl", "de", "fr", "fi"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
