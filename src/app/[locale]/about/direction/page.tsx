import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations } from "next-intl";

export default function DirectionPage() {
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
      sideNav={sideNav}
    >
      <div className="space-y-6">
        {/* Map placeholder */}
        <div className="w-full h-[500px] bg-gray-100 border border-gray-200 flex items-center justify-center mt-20 mb-30">
          <iframe
            src="https://maps.google.com/maps?q=Besa%20Kule%20İş%20Merkezi,%20Çukurambar,%20Ankara&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </SubPageLayout>
  );
}
