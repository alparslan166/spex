import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "tr"],
  defaultLocale: "en",
  localeDetection: false,
  localePrefix: "always",
});

export const config = {
  // Match all pathnames except for
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /_static (inside /public)
  // - /_vercel (Vercel internals)
  // - All files inside /public (e.g. /favicon.ico)
  matcher: ["/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)"],
};
