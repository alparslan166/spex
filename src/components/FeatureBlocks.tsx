"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FeatureBlocks() {
  const t = useTranslations("FeatureBlocks");

  return (
    <section className="bg-white bg-[url('/section2_bg.png')] bg-right bg-center bg-no-repeat">
      <div className="max-w-[1175px] mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-5 md:gap-[30px]">
          {/* SFEX Tech Block */}
          <div
            className="flex-1 bg-cover bg-center bg-no-repeat p-[65px_55px] text-white rounded-sm-1 bg-cover bg-center bg-no-repeat p-[65px_55px] text-white rounded-sm"
            style={{
              backgroundImage: "url('/section1_bg.png')",
              backgroundColor: "#7a1a1a",
            }}
          >
            <dl>
              <dt className="text-2xl font-bold mb-2">{t("techTitle")}</dt>
              <dd className="text-lg leading-relaxed">{t("techSubtitle")}</dd>
            </dl>
            <a
              href="/application/panel-fire"
              className="inline-block mt-5 border border-white px-[25px] py-[15px] text-white text-sm font-medium hover:bg-black/30 transition-all duration-200"
            >
              {t("techButton")}
            </a>
          </div>

          {/* Certificate Block */}
          <div
            className="flex-1 bg-cover bg-center bg-no-repeat p-[65px_55px] text-white rounded-sm"
            style={{
              backgroundImage: "url('/section2_bg.png')",
              backgroundColor: "#2d3e7c",
            }}
          >
            <dl>
              <dt className="text-2xl font-bold mb-2">{t("certTitle")}</dt>
              <dd className="text-lg leading-relaxed">{t("certSubtitle")}</dd>
            </dl>
            <a
              href="/technology/certificates"
              className="inline-block mt-5 border border-white px-[25px] py-[15px] text-white text-sm font-medium hover:bg-black/30 transition-all duration-200"
            >
              {t("certButton")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
