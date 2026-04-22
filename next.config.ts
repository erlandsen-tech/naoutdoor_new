import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Legacy URL redirects (/english → /, /norwegian → /nb, etc.)
  // are added in Phase 3 once /[locale]/readings/[slug] routes exist.
};

export default withNextIntl(nextConfig);
