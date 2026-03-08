"use client";
import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations } from "next-intl";

export default function BatteryPage() {
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
          {t("batteryHeading")}
        </h3>
      </div>

      <div className="space-y-16">
        <h4 className="text-xl font-bold text-sfex-red mb-10 mt-5">
          {t("batterySolutionTitle")}
        </h4>

        <div>
          <h4 className="text-2xl font-bold text-[#333] mb-6">
            {t("batteryBulkhead")}
          </h4>
          <img
            src="/battery/ex1.png"
            alt="Fireproof Bulkhead"
            className="h-auto rounded shadow-lg"
          />
        </div>

        <hr className="border-gray-300" />

        <div>
          <h4 className="text-2xl font-bold text-[#333] mb-6">
            {t("batteryStorage")}
          </h4>
          <img
            src="/battery/ex2.png"
            alt="Battery Storage Rack"
            className="h-auto rounded shadow-lg"
          />
        </div>

        <hr className="border-gray-300" />

      </div>
    </SubPageLayout>
  );
}
