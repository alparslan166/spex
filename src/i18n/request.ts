import { getRequestConfig } from "next-intl/server";

const locales = ["en", "tr"] as const;
type Locale = (typeof locales)[number];

const messagesMap: Record<Locale, () => Promise<any>> = {
  en: () => import("../messages/en.json").then((m) => m.default),
  tr: () => import("../messages/tr.json").then((m) => m.default),
};

export default getRequestConfig(async ({ requestLocale }) => {
  const raw = await requestLocale;

  const locale: Locale = locales.includes(raw as Locale) ? (raw as Locale) : "tr";

  return {
    locale,
    messages: await messagesMap[locale](),
  };
});