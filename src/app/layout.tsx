import type { Metadata, Viewport } from "next";
import { Fraunces, Archivo_Narrow } from "next/font/google";
import { getLocale } from "next-intl/server";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5E6C8" },
    { media: "(prefers-color-scheme: dark)", color: "#1F1611" },
  ],
};

// Root-level metadata is a fallback. Per-locale overrides come from
// app/[locale]/layout.tsx's generateMetadata, which sets the title,
// description, openGraph, and alternates.languages map.
export const metadata: Metadata = {
  metadataBase: new URL("https://na-outdoor.org"),
  applicationName: "NA Outdoor",
  authors: [{ name: "NA Outdoor" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // NextIntlClientProvider lives in [locale]/layout.tsx with an explicit
  // `locale` prop so it re-runs on locale change. This root layout is
  // a minimal HTML shell. `locale` on <html> is the initial-render fallback;
  // the lang attribute is also synced client-side via HtmlLangSetter below.
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={`${fraunces.variable} ${archivoNarrow.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
