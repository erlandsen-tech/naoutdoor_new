import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const [ui, pamphlets] = await Promise.all([
    import(`../../messages/${locale}.json`).then((m) => m.default),
    import(`../../messages/pamphlets/${locale}.json`)
      .then((m) => m.default)
      .catch(() => ({})),
  ]);

  return {
    locale,
    messages: { ...ui, pamphlets },
  };
});
