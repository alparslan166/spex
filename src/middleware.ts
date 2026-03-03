import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "tr"],
  defaultLocale: "tr",
  localeDetection: false,
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!api|_next|_static|_vercel|partners|products|extras|certificates|bigCustomers|examples|productTabs|electric|cableFire|outletFire|battery|outputs|tables|[\\w-]+\\.\\w+).*)"],
};
