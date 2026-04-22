import type { Metadata, Viewport } from "next";
import { Fraunces, Archivo_Narrow } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://na-outdoor.org"),
  title: {
    default: "NA Outdoor — Nature & Recovery",
    template: "%s · NA Outdoor",
  },
  description:
    "A fellowship of Narcotics Anonymous members in Norway who find strength, connection, and joy through nature. Two annual gatherings in Trysil — Ski & Recovery (winter) and Bike 2 Basic (summer).",
  applicationName: "NA Outdoor",
  keywords: [
    "NA Outdoor",
    "Narcotics Anonymous",
    "NA Norway",
    "Trysil",
    "Ski & Recovery",
    "Bike 2 Basic",
    "recovery",
    "fellowship",
    "NA events",
  ],
  authors: [{ name: "NA Outdoor" }],
  openGraph: {
    title: "NA Outdoor — Nature & Recovery",
    description:
      "Two annual NA gatherings in Trysil, Norway. Ski & Recovery (winter) · Bike 2 Basic (summer).",
    url: "https://na-outdoor.org",
    siteName: "NA Outdoor",
    type: "website",
    locale: "en_US",
    // opengraph-image.tsx colocated in app/ auto-populates the image.
  },
  twitter: {
    card: "summary_large_image",
    title: "NA Outdoor — Nature & Recovery",
    description:
      "Two annual NA gatherings in Trysil, Norway. Ski & Recovery · Bike 2 Basic.",
  },
  // icon.png, apple-icon.png, and favicon.ico colocated in app/ are
  // auto-wired by Next's file-based metadata conventions.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${archivoNarrow.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
