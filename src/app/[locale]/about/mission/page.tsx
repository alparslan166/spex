"use client";
import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export default function MissionPage() {
  const t = useTranslations("SubPages");
  const tn = useTranslations("Navbar");
  const locale = useLocale();

  const sideNav = [
    { name: tn("aboutMission"), href: "/about/mission" },
    { name: tn("aboutHistory"), href: "/about/history" },
    { name: tn("aboutDirection"), href: "/about/direction" },
  ];

  return (
    <SubPageLayout
      title={t("aboutTitle")}
      heroImage="/company.jpg"
      sideNav={sideNav}
    >
      <div>
        <p className="text-2xl md:text-3xl font-light text-sfex-red mb-4 text-center">
          {t("missionText")}
        </p>
        <div className="mb-12">
          <Image
            src={locale === 'tr' ? "/extras/mission-turkish.jpg" : "/extras/mission.png"}
            alt="Mission"
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 17 }, (_, i) => {
              const num = i + 1;
              const pngs = [6, 12, 13, 14, 15, 16, 17];
              const upperPngs = [8, 9];
              const ext = pngs.includes(num) ? "png" : upperPngs.includes(num) ? "PNG" : "jpg";
              return (
                <div key={num} className="border border-gray-100 p-2 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative aspect-[1/1.4] overflow-hidden">
                    <img
                      src={`/certificates/certificate_p${num}.${ext}`}
                      alt={`Certificate ${num}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
