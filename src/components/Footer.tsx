"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-[#333] py-[35px] pb-[70px] text-center mt-auto">
      <div className="max-w-[1175px] mx-auto px-5">
        {/* Company Name */}
        <div className="pb-5 mb-5 border-b border-[#727272]">
          <p className="text-white font-medium text-2xl">{t("company")}</p>
        </div>

        {/* Footer Info */}
        <div className="text-white text-sm space-y-2.5">
          <p>{t("address")}</p>
          <p>
            <span>{t("tel")}</span>
            <span className="inline-block w-px h-2.5 bg-[#dbdbdb] mx-2.5 align-middle" />
            <span>{t("fax")}</span>
            <span className="inline-block w-px h-2.5 bg-[#dbdbdb] mx-2.5 align-middle" />
            <span>{t("email")}</span>
          </p>
          <p className="text-[#aaa] mt-4">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
