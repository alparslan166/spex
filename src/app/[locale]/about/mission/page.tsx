import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations } from "next-intl";

export default function MissionPage() {
  const t = useTranslations("SubPages");
  const tn = useTranslations("Navbar");

  const sideNav = [
    { name: tn("aboutMission"), href: "/about/mission" },
    { name: tn("aboutHistory"), href: "/about/history" },
    { name: tn("aboutDirection"), href: "/about/direction" },
  ];

  return (
    <SubPageLayout
      title={t("aboutTitle")}
      heroImage="/hero1.jpg"
      sideNav={sideNav}
    >
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-[#222] mb-8">
          {t("missionTitle")}
        </h3>
        <div className="text-center py-16">
          <p className="text-2xl md:text-3xl font-light text-sfex-red mb-4">
            {t("missionText")}
          </p>
          <p className="text-xl text-[#222] font-bold">SFEX Tech Co., Ltd.</p>
        </div>
      </div>
    </SubPageLayout>
  );
}
