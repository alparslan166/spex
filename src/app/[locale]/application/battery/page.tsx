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
      heroImage="/hero3.jpg"
      sideNav={sideNav}
    >
      <h3 className="text-3xl font-bold text-[#222] mb-10">
        {t("batteryHeading")}
      </h3>

      <div className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 p-8">
            <h5 className="text-lg font-bold text-[#222] mb-3">
              1. Fireproof Bulkhead Between Battery Racks
            </h5>
            <p className="text-[15px] text-[#555] leading-relaxed">
              SFEX Thermal Barrier installed between battery racks prevents
              thermal runaway propagation from spreading to adjacent cells.
            </p>
          </div>
          <div className="border border-gray-200 p-8">
            <h5 className="text-lg font-bold text-[#222] mb-3">
              2. Battery Storage Rack
            </h5>
            <p className="text-[15px] text-[#555] leading-relaxed">
              Complete battery storage solution with integrated thermal barrier
              for maximum fire safety.
            </p>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
