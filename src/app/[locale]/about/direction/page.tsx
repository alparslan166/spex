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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.5!2d127.11!3d37.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIyJzQ4LjAiTiAxMjfCsDA2JzM2LjAiRQ!5e0!3m2!1sen!2skr!4v1"
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
