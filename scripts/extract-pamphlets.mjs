#!/usr/bin/env node
/**
 * One-shot extractor: reads the 56 pamphlet page.tsx files across the 8
 * legacy language directories and writes messages/pamphlets/{locale}.json.
 *
 * After running this successfully, the legacy /{language}/ directories can
 * be deleted — the content lives in messages/pamphlets/ from then on.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const repoRoot = path.resolve(path.dirname(__filename), "..");

const LANGS = [
  { dir: "english", locale: "en" },
  { dir: "norwegian", locale: "nb" },
  { dir: "swedish", locale: "sv" },
  { dir: "danish", locale: "da" },
  { dir: "dutch", locale: "nl" },
  { dir: "german", locale: "de" },
  { dir: "french", locale: "fr" },
  { dir: "finnish", locale: "fi" },
];

const SLUGS = [
  "who",
  "what",
  "why",
  "how",
  "traditions",
  "just-for-today",
  "we-do-recover",
];

const summary = {};

for (const { dir, locale } of LANGS) {
  const out = {};
  for (const slug of SLUGS) {
    const filePath = path.join(repoRoot, "src/app", dir, slug, "page.tsx");
    if (!fs.existsSync(filePath)) {
      console.warn(`  MISSING: ${filePath}`);
      continue;
    }
    const content = fs.readFileSync(filePath, "utf8");

    // Title: <h2>(whitespace)(title)(whitespace)</h2>
    const titleMatch = content.match(/<h2>\s*([\s\S]*?)\s*<\/h2>/);
    const title = titleMatch
      ? titleMatch[1]
          .trim()
          .replace(/\s+/g, " ")
      : "";

    // Body: <p>(content)</p>
    // Match the FIRST <p>...</p> after the h2 block.
    const afterH2 = content.slice(content.indexOf("</h2>"));
    const bodyMatch = afterH2.match(/<p>\s*([\s\S]*?)\s*<\/p>/);
    let body = bodyMatch ? bodyMatch[1].trim() : "";

    // Normalize whitespace inside the body: collapse runs of spaces/newlines
    // but preserve the semantic <br /> tags. The NA literature formatting
    // uses <br /><br /> for paragraph breaks and <br /> for soft breaks.
    body = body
      .replace(/\r\n/g, "\n")
      .replace(/[ \t]+/g, " ")
      .replace(/\n\s*/g, " ")
      .replace(/\s+<br/g, "<br")
      .replace(/<br\s*\/?>\s+/g, "<br />")
      .trim();

    out[slug] = { title, body };
  }

  const outPath = path.join(repoRoot, "messages/pamphlets", `${locale}.json`);
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n");
  summary[locale] = Object.keys(out).length;
  console.log(`wrote ${outPath} (${Object.keys(out).length} pamphlets)`);
}

console.log("\nSummary:", summary);
