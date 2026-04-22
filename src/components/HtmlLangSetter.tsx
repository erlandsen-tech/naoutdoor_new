"use client";

import { useEffect } from "react";

/**
 * Keeps `<html lang>` in sync with the current locale. The attribute is set
 * initially by the root layout (server) but root doesn't re-run on
 * client-side navigation, so after switching locales via the
 * LanguageSwitcher the attribute stays stale without this component.
 */
export default function HtmlLangSetter({ locale }: { locale: string }) {
  useEffect(() => {
    if (document.documentElement.lang !== locale) {
      document.documentElement.lang = locale;
    }
  }, [locale]);
  return null;
}
