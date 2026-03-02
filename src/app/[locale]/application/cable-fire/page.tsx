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
      heroImage="/hero3.jpg"
      sideNav={sideNav}
    >
      <h3 className="text-3xl font-bold text-[#222] mb-10">
        {t("cableFireHeading")}
      </h3>

      <div className="space-y-10">
        <div>
          <h4 className="text-xl font-bold text-sfex-red mb-4">
            SFEX Solution: SFEX CT Manteau / SFEX AP Tape
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 p-8">
            <h5 className="text-lg font-bold text-[#222] mb-3">
              1. Horizontal Zone: SFEX CT Manteau
            </h5>
            <p className="text-[15px] text-[#555] leading-relaxed">
              For horizontal cable trays, SFEX CT Manteau provides fire
              extinguishing and fire-spreading prevention.
            </p>
          </div>
          <div className="border border-gray-200 p-8">
            <h5 className="text-lg font-bold text-[#222] mb-3">
              2. Vertical Zone: SFEX AP Tape
            </h5>
            <p className="text-[15px] text-[#555] leading-relaxed">
              For vertical cable runs, SFEX AP Tape prevents fire from spreading
              between floors.
            </p>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
