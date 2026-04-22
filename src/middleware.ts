import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip Next internals, API routes, and static files (anything with a dot).
  // Legacy /{english,norwegian,…} paths are handled by redirects in
  // next.config.ts, which runs before middleware.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
