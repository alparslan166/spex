import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations } from "next-intl";

export default function PanelFirePage() {
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
        {t("panelFireHeading")}
      </h3>

      <div className="space-y-10">
        <div>
          <h4 className="text-xl font-bold text-sfex-red mb-4">
            SFEX Solution: SFEX Line / SFEX Pad
          </h4>
          <ul className="space-y-3 text-[15px] text-[#333] leading-relaxed">
            <li className="flex gap-2">
              <span className="text-sfex-red">•</span>Since most of the terminal
              blocks inside the electric panel are fire ignition points, the
              solution must be installed close to this area.
            </li>
            <li className="flex gap-2">
              <span className="text-sfex-red">•</span>SFEX Pad is designed to be
              attached to the top of the panel for perfect initial fire
              suppression.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-sfex-red mb-4">
            SFEX Solution: SFEX AP Tape
          </h4>
          <ul className="space-y-3 text-[15px] text-[#333] leading-relaxed">
            <li className="flex gap-2">
              <span className="text-sfex-red">•</span>A poor connection of the
              terminal block inside an electric panel causes heating and fire.
              Even if the fire is initially suppressed, there is a high risk of
              re-ignition.
            </li>
            <li className="flex gap-2">
              <span className="text-sfex-red">•</span>If the door of the
              electric panel is open, the fire suppression ability may be
              weakened.
            </li>
            <li className="flex gap-2">
              <span className="text-sfex-red">•</span>A backup solution is
              essential to prevent fires from spreading through the input/output
              cables.
            </li>
          </ul>
        </div>

        <div className="bg-[#f7f7f7] p-8">
          <h4 className="text-lg font-bold text-[#222] mb-6">How it Works</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-sfex-red text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                1
              </div>
              <p className="text-[14px] text-[#555]">
                Wrap the input/output cables with SFEX AP Tape 1.5 to 2 times.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sfex-red text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                2
              </div>
              <p className="text-[14px] text-[#555]">
                It prevents the spread with its fire extinguishing and fire
                retardancy in the event of a fire.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sfex-red text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                3
              </div>
              <p className="text-[14px] text-[#555]">
                It prevents the spread of the fire to the Cable Pit or other
                areas outside the electric panel.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-[#222] mb-4">
            Installation Examples
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-6">
              <h5 className="font-bold text-[#222] mb-2">
                Example 1: SFEX Line - For Ducted Areas
              </h5>
              <p className="text-[14px] text-[#555]">
                Install SFEX Line horizontally or vertically inside the duct
                closest to the anticipated ignition point. No need bracket, no
                damage to the electric panel.
              </p>
            </div>
            <div className="border border-gray-200 p-6">
              <h5 className="font-bold text-[#222] mb-2">
                Example 2: SFEX Line - For Areas Without Ducts
              </h5>
              <p className="text-[14px] text-[#555]">
                Install SFEX Line horizontally or vertically inside the cable
                closest to the anticipated ignition point.
              </p>
            </div>
            <div className="border border-gray-200 p-6">
              <h5 className="font-bold text-[#222] mb-2">
                Example 3: SFEX Pad - For Small Panels
              </h5>
              <p className="text-[14px] text-[#555]">
                Simply attach SFEX Pad to the top inside of the electric panel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
