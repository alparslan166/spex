"use client";

import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations } from "next-intl";

export default function ChimneyFirePage() {
  const t = useTranslations("SubPages");
  const tn = useTranslations("Navbar");

  const sideNav = [
    { name: tn("appPanel"), href: "/application/panel-fire" },
    { name: tn("appCable"), href: "/application/cable-fire" },
    { name: tn("appOutlet"), href: "/application/outlet-fire" },
    { name: tn("appBattery"), href: "/application/battery" },
    { name: tn("appChimney"), href: "/application/chimney-fire" },
  ];

  return (
    <SubPageLayout title={t("techAppTitle")} sideNav={sideNav}>
      <div className="flex justify-center mb-10">
        <h3 className="heading-highlight text-3xl font-bold text-[#222]">
          {t("chimneyFireHeading")}
        </h3>
      </div>

      <div className="space-y-10 text-[#333] leading-relaxed">
        <section className="space-y-3">
          <h4 className="text-2xl font-bold text-sfex-red">{t("chimneyLeadTitle")}</h4>
          <p className="text-[16px]">{t("chimneyLeadText")}</p>
        </section>

        <section className="space-y-3">
          <h4 className="text-2xl font-bold text-sfex-red">{t("chimneyWhyTitle")}</h4>
          <p className="text-[16px]">{t("chimneyWhyText")}</p>
        </section>

        <section className="space-y-3">
          <h4 className="text-2xl font-bold text-sfex-red">{t("chimneySolutionTitle")}</h4>
          <p className="text-[16px]">{t("chimneySolutionText")}</p>
        </section>

        <section className="space-y-5">
          <div>
            <h5 className="text-xl font-bold text-[#222]">{t("chimneyFeature1Title")}</h5>
            <p className="text-[16px]">{t("chimneyFeature1Text")}</p>
          </div>

          <div>
            <h5 className="text-xl font-bold text-[#222]">{t("chimneyFeature2Title")}</h5>
            <p className="text-[16px]">{t("chimneyFeature2Text")}</p>
          </div>
        </section>

        <section className="space-y-3">
          <h4 className="text-2xl font-bold text-sfex-red">{t("chimneySizingTitle")}</h4>
          <ul className="space-y-2 text-[16px]">
            <li className="flex gap-2">
              <span className="text-sfex-red">•</span>
              {t("chimneySizing1")}
            </li>
            <li className="flex gap-2">
              <span className="text-sfex-red">•</span>
              {t("chimneySizing2")}
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-xl font-bold text-[#222] mb-3">{t("chimneyBefore")}</h5>
              <img
                src="/baca/once.jpeg"
                alt={t("chimneyBefore")}
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
            <div>
              <h5 className="text-xl font-bold text-[#222] mb-3">{t("chimneyAfter")}</h5>
              <img
                src="/baca/sonra.jpeg"
                alt={t("chimneyAfter")}
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </SubPageLayout>
  );
}
