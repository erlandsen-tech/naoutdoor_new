import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Legacy → new URL map. English uses no prefix ("" means served at root).
const LANG_REDIRECTS: Array<[string, string]> = [
  ["english", ""],
  ["norwegian", "/nb"],
  ["swedish", "/sv"],
  ["danish", "/da"],
  ["dutch", "/nl"],
  ["german", "/de"],
  ["french", "/fr"],
  ["finnish", "/fi"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return LANG_REDIRECTS.flatMap(([old, prefix]) => [
      {
        source: `/${old}`,
        destination: `${prefix}/readings`,
        permanent: true,
      },
      {
        source: `/${old}/:slug`,
        destination: `${prefix}/readings/:slug`,
        permanent: true,
      },
    ]);
  },
};

export default withNextIntl(nextConfig);
