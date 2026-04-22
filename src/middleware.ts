import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip Next internals, API routes, static files, and legacy per-language
  // directories (english/, norwegian/, …). Phase 3 deletes those directories
  // and swaps the exclusion for permanent redirects.
  matcher: [
    "/((?!api|_next|_vercel|english|norwegian|swedish|danish|dutch|german|french|finnish|.*\\..*).*)",
  ],
};
