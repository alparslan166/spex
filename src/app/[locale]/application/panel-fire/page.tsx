"use client";
import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations, useLocale } from "next-intl";

export default function PanelFirePage() {
  const t = useTranslations("SubPages");
  const tn = useTranslations("Navbar");
  const locale = useLocale();

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
        <h3 className="heading-highlight text-4xl font-poppins text-[#222]">
          {t("panelFireHeading")}
        </h3>
      </div>

      <div className="flex justify-center mb-16">
        <img
          src={locale === 'tr' ? "/electric/3stepsolution-turkish.jpg" : "/electric/3stepsolution.png"}
          alt="3 Step Solution"
          className="w-full max-w-[900px] h-auto"
        />
      </div>

      <div className="space-y-10">
        <div>
          <h4 className="text-xl font-bold text-sfex-red mb-4">
            {t("solutionPadTitle")}
          </h4>
          <ul className="space-y-3 text-[15px] text-[#333] leading-relaxed">
            <li className="flex gap-2">
              <span className="text-sfex-red">•</span>
              {t("solutionPadDesc1")}
            </li>
            <li className="flex gap-2">
              <span className="text-sfex-red">•</span>
              {t("solutionPadDesc2")}
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[800px] aspect-video">
            <iframe
              className="w-full h-full shadow-lg"
              src="https://www.youtube.com/embed/_2sIXf_Fq7U?si=DX5CTgzxPly2FesL"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-sfex-red mb-4">
            {t("solutionTapeTitle")}
          </h4>
          <ul className="space-y-3 text-[15px] text-[#333] leading-relaxed">
            <li className="flex gap-2">
              <span className="text-sfex-red">•</span>
              {t("solutionTapeDesc1")}
            </li>
            <li className="flex gap-2">
              <span className="text-sfex-red">•</span>
              {t("solutionTapeDesc2")}
            </li>
            <li className="flex gap-2">
              <span className="text-sfex-red">•</span>
              {t("solutionTapeDesc3")}
            </li>
          </ul>
        </div>

        <div className="bg-white py-8">
          <h4 className="text-2xl font-bold text-[#555] mb-8">{t("howItWorks")}</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="flex flex-col">
              <div className="flex gap-3 mb-4">
                <div className="flex-shrink-0 w-6 h-6 bg-sfex-red text-white rounded-full flex items-center justify-center font-bold text-[14px] mt-0.5">
                  1
                </div>
                <p className="text-[16px] font-semibold text-[#333] leading-tight">
                  {t("howItWorks1")}
                </p>
              </div>
              <img
                src="/electric/example1.png"
                alt="Installation Example 1"
                className="w-full h-auto rounded shadow-sm"
              />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col">
              <div className="flex gap-3 mb-4">
                <div className="flex-shrink-0 w-6 h-6 bg-sfex-red text-white rounded-full flex items-center justify-center font-bold text-[14px] mt-0.5">
                  2
                </div>
                <p className="text-[16px] font-semibold text-[#333] leading-tight">
                  {t("howItWorks2")}
                </p>
              </div>
              <img
                src={locale === 'tr' ? "/electric/example2-turkish.jpg" : "/electric/example2.png"}
                alt="Installation Example 2"
                className="w-full h-auto rounded shadow-sm"
              />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col">
              <div className="flex gap-3 mb-4">
                <div className="flex-shrink-0 w-6 h-6 bg-sfex-red text-white rounded-full flex items-center justify-center font-bold text-[14px] mt-0.5">
                  3
                </div>
                <p className="text-[16px] font-semibold text-[#333] leading-tight">
                  {t("howItWorks3")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-16">
            {/* Example 1 */}
            <div>
              <h4 className="text-xl font-bold mb-6">
                <span className="text-sfex-blue">{t("exampleLabel")} 1 :</span>{" "}
                <span className="text-[#333]">{t("ex1Title")}</span>
              </h4>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-[16px] text-[#333]">
                  <span className="text-sfex-red text-xl leading-none">•</span>
                  {t("ex1Desc1")}
                </li>
                <li className="flex gap-2 text-[16px] text-[#333]">
                  <span className="text-sfex-red text-xl leading-none">•</span>
                  {t("ex1Desc2")}
                </li>
              </ul>
              <img
                src="/electric/ex1.png"
                alt="Example 1"
                className="h-auto rounded shadow-md"
              />
            </div>

            {/* Example 2 */}
            <div>
              <h4 className="text-xl font-bold mb-6">
                <span className="text-sfex-blue">{t("exampleLabel")} 2 :</span>{" "}
                <span className="text-[#333]">{t("ex2Title")}</span>
              </h4>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-[16px] text-[#333]">
                  <span className="text-sfex-red text-xl leading-none">•</span>
                  {t("ex2Desc1")}
                </li>
              </ul>
              <img
                src="/electric/ex2.png"
                alt="Example 2"
                className="w-full h-auto rounded shadow-md"
              />
            </div>

            {/* Example 3 */}
            <div>
              <h4 className="text-xl font-bold mb-6">
                <span className="text-sfex-blue">{t("exampleLabel")} 3 :</span>{" "}
                <span className="text-[#333]">{t("ex3Title")}</span>
              </h4>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-[16px] text-[#333]">
                  <span className="text-sfex-red text-xl leading-none">•</span>
                  {t("ex3Desc1")}
                </li>
              </ul>
              <img
                src="/electric/ex3.png"
                alt="Example 3"
                className="h-auto rounded shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
