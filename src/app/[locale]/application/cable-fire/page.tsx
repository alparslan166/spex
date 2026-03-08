"use client";
import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations } from "next-intl";

export default function CableFirePage() {
  const t = useTranslations("SubPages");
  const tn = useTranslations("Navbar");

  const sideNav = [
    { name: tn("appPanel"), href: "/application/panel-fire" },
    { name: tn("appCable"), href: "/application/cable-fire" },
    { name: tn("appOutlet"), href: "/application/outlet-fire" },
    { name: tn("appBattery"), href: "/application/battery" },
  ];

  return (
    <SubPageLayout
      title={t("techAppTitle")}
      sideNav={sideNav}
    >
      <div className="flex justify-center mb-10">
        <h3 className="heading-highlight text-3xl font-bold text-[#222]">
          {t("cableFireHeading")}
        </h3>
      </div>

      <div className="space-y-16">
        <h4 className="text-xl font-bold text-sfex-red mb-15 mt-5">
          {t("cableSolutionTitle")}
        </h4>
        <div>
          <h4 className="text-2xl font-bold text-[#333] mb-6">
            {t("cableHorizontal")}
          </h4>
          <img
            src="/cableFire/ex1.png"
            alt="Horizontal Zone Solution"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>

        <hr className="border-gray-100" />

        <div>
          <h4 className="text-2xl font-bold text-[#333] mb-6">
            {t("cableVertical")}
          </h4>
          <img
            src="/cableFire/ex2.png"
            alt="Vertical Zone Solution"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
    </SubPageLayout>
  );
}
