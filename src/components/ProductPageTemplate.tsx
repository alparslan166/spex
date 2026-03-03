import React from "react";
import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations } from "next-intl";

const productSideNav = [
  { name: "SFEX Pad", href: "/products/sfex-pad" },
  { name: "SFEX Hi 100", href: "/products/sfex-hi100" },
  { name: "SFEX Line", href: "/products/sfex-line" },
  { name: "SFEX AP Tape", href: "/products/sfex-ap-tape" },
  { name: "SFEX CT Manteau", href: "/products/sfex-ct-manteau" },
  { name: "SFEX Inside", href: "/products/sfex-inside" },
  { name: "SFEX Detector", href: "/products/sfex-detector" },
];

export { productSideNav };

interface ProductPageProps {
  productName: string;
  subtitle: string;
  videoUrl?: string;
  overview: string[];
  features: string[];
  featureImage?: string;
  topImage?: string;
  specifications?: {
    title?: string;
    items: { label: string; value: string }[];
  }[];
  caution?: string[];
  children?: React.ReactNode;
}

export default function ProductPageTemplate({
  productName,
  subtitle,
  overview,
  features,
  specifications,
  caution,
  videoUrl,
  children,
  featureImage,
  topImage,
}: ProductPageProps) {
  const t = useTranslations("SubPages");

  return (
    <SubPageLayout
      title={t("productTitle")}
      sideNav={productSideNav}
    >
      <div>
        <p className="text-3xl text-black mb-10 font-bold text-center">
          <span className="heading-highlight2">{subtitle}</span>
        </p>

        {topImage && (
          <div className="mb-12 w-full max-w-[800px] mx-auto overflow-hidden border border-gray-100">
            <img
              src={topImage}
              alt={productName}
              className="w-full h-auto"
            />
          </div>
        )}

        {videoUrl && (
          <div className="mb-12 aspect-video w-full max-w-[800px] mx-auto overflow-hidden border border-gray-100">
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Overview */}
        <div className="mb-10">
          <h4 className="text-xl font-bold text-[#222] mb-4 pb-2 inline-block">
            {t("overview")}
          </h4>
          <ul className="mt-4 space-y-3">
            {overview.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 text-[15px] text-[#333] leading-relaxed"
              >
                <span className="text-sfex-red mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="mb-10">
          <h4 className="text-xl font-bold text-[#222] mb-4 pb-2 inline-block">
            {t("features")}
          </h4>
          {featureImage ? (
            <div className="mt-4">
              <img
                src={featureImage}
                alt="Product Features"
                className="max-w-full h-auto"
              />
            </div>
          ) : (
            <ul className="mt-4 space-y-3">
              {features.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-[15px] text-[#333] leading-relaxed"
                >
                  <span className="text-sfex-red mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Caution */}
        {caution && (
          <div className="mb-10">
            <h4 className="text-xl font-bold text-[#222] mb-4">
              {t("caution")}
            </h4>
            <ul className="space-y-3">
              {caution.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-[15px] text-[#333] leading-relaxed"
                >
                  <span className="text-sfex-red mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Specification */}
        {specifications && (
          <div className="mt-12">
            <h4 className="text-2xl font-bold text-[#222] mb-6">
              {t("specification")}
            </h4>
            <div
              className={`grid grid-cols-1 gap-8 ${specifications.length === 2 || specifications.length === 4
                ? "md:grid-cols-2"
                : specifications.length >= 3
                  ? "lg:grid-cols-3 md:grid-cols-2"
                  : ""
                }`}
            >
              {specifications.map((table, idx) => (
                <div key={idx} className="border-t-[3px] border-sfex-red">
                  {table.title && (
                    <div className="bg-[#f5f5f5] py-3 text-center">
                      <span className="text-sfex-red font-bold text-[16px]">
                        {table.title}
                      </span>
                    </div>
                  )}
                  <table className="w-full border-collapse">
                    <tbody>
                      {table.items.map((item, i) => (
                        <tr key={i} className="border-b border-gray-100">
                          <td className="py-4 px-4 text-center align-middle w-1/2">
                            <span className="text-[14px] font-medium text-[#333] block">
                              {item.label}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-center align-middle w-1/2 border-l border-gray-50">
                            <span className="text-[14px] text-[#555] block leading-relaxed">
                              {item.value}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        )}

        {children}
      </div>
    </SubPageLayout>
  );
}
