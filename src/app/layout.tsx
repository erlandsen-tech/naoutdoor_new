import type { Metadata, Viewport } from "next";
import { Fraunces, Archivo_Narrow } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
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
  // icon.png, apple-icon.png, and favicon.ico colocated in app/ are
  // auto-wired by Next's file-based metadata conventions.
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={`${fraunces.variable} ${archivoNarrow.variable} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
