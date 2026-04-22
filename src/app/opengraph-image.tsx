import { ImageResponse } from "next/og";

// Image metadata — Next.js reads these exports automatically
export const alt = "NA Outdoor — Nature & Recovery · Trysil, Norway";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fraunces (italic 400 + bold 700) and Archivo Narrow (bold 700) from jsdelivr
// Google Fonts mirror. Cached by Next build; network fetch happens once at
// build / first render, never on the client.
async function loadFont(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load font ${url}: ${res.status}`);
  return res.arrayBuffer();
}

export default async function OpengraphImage() {
  const [frauncesBold, frauncesItalic, archivoBold] = await Promise.all([
    loadFont(
      "https://cdn.jsdelivr.net/fontsource/fonts/fraunces@latest/latin-700-normal.ttf",
    ),
    loadFont(
      "https://cdn.jsdelivr.net/fontsource/fonts/fraunces@latest/latin-400-italic.ttf",
    ),
    loadFont(
      "https://cdn.jsdelivr.net/fontsource/fonts/archivo-narrow@latest/latin-700-normal.ttf",
    ),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 15%, #2a1f16 0%, #1F1611 55%, #120c08 100%)",
          color: "#F5E6C8",
          padding: "72px",
          fontFamily: "Archivo Narrow, sans-serif",
        }}
      >
        {/* Top strip — Narcotics Anonymous · Trysil, Norway */}
        <div
          style={{
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            opacity: 0.85,
            borderTop: "1px solid rgba(245,230,200,0.75)",
            borderBottom: "1px solid rgba(245,230,200,0.75)",
            padding: "8px 22px",
            fontFamily: "Archivo Narrow",
            fontWeight: 700,
            marginBottom: 56,
          }}
        >
          Narcotics Anonymous · Trysil, Norway
        </div>

        {/* Eyebrow */}
        <div
          style={{
            fontSize: 24,
            letterSpacing: 11,
            textTransform: "uppercase",
            opacity: 0.9,
            fontFamily: "Archivo Narrow",
            fontWeight: 700,
            marginBottom: 18,
          }}
        >
          We find strength through
        </div>

        {/* Main lockup — Nature (italic) / & Recovery (bold) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: 0.92,
            letterSpacing: -4,
          }}
        >
          <span
            style={{
              fontSize: 176,
              fontFamily: "Fraunces Italic",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Nature
          </span>
          <span
            style={{
              fontSize: 176,
              fontFamily: "Fraunces",
              fontWeight: 700,
              marginTop: 2,
            }}
          >
            &amp; Recovery
          </span>
        </div>

        {/* Bottom signature */}
        <div
          style={{
            marginTop: 48,
            fontSize: 20,
            letterSpacing: 8,
            textTransform: "uppercase",
            opacity: 0.85,
            fontFamily: "Archivo Narrow",
            fontWeight: 700,
          }}
        >
          ─── NA Outdoor ───
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Fraunces",
          data: frauncesBold,
          weight: 700,
          style: "normal",
        },
        {
          name: "Fraunces Italic",
          data: frauncesItalic,
          weight: 400,
          style: "italic",
        },
        {
          name: "Archivo Narrow",
          data: archivoBold,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
