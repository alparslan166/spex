import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations } from "next-intl";

export default function SfexTechnologyPage() {
  const t = useTranslations("SubPages");
  const tn = useTranslations("Navbar");

  const sideNav = [
    { name: tn("techSfex"), href: "/technology/sfex" },
    { name: tn("techCustomer"), href: "/technology/customers" },
    { name: tn("techCert"), href: "/technology/certificates" },
  ];

  const whySfexItems = [
    t("whySfex1"),
    t("whySfex2"),
    t("whySfex3"),
    t("whySfex4"),
    t("whySfex5"),
    t("whySfex6"),
    t("whySfex7"),
  ];

  return (
    <SubPageLayout
      title={t("techTitle")}
      sideNav={sideNav}
    >
      <div className="mb-4 text-center">
        <h1 className="text-[32px] font-poppins font-medium text-[#222] mb-10">
          {t("sfexTechExpanding")}
        </h1>
      </div>

      <div className="w-full max-w-4xl mx-auto aspect-video scale-110">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/8Do3DSqZEUA?si=6GpRQox8Jkg7M53O"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="px-4 md:px-0 py-8">
        <div className="max-w-4xl mx-auto">

          <h4 className="text-[32px] md:text-[34px] font-poppins font-medium text-[#222] text-center mb-6 mt-16">
            {t("whySfex")}
          </h4>

          <ul className="">
            {whySfexItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 py-4 md:pt-3 md:pb-2">
                {/* Check circle */}
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-3 border-sfex-red/20 text-sfex-red/20">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>

                {/* Text */}
                <span className="text-[16px] md:text-[18px] font-medium text-[#222] leading-snug pb-2 border-b border-gray-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SubPageLayout>
  );
}
