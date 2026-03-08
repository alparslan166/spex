"use client";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { useTranslations } from "next-intl";

export default function SfexInsidePage() {
  const t = useTranslations("ProductDetails.sfex-inside");

  const overview = [
    t("overview.0"),
    t("overview.1"),
    t("overview.2"),
    t("overview.3"),
    t("overview.4"),
    t("overview.5"),
    t("overview.6"),
  ];

  const features = [t("features.0"), t("features.1")];

  const productImages = [
    "/outputs/output_p1.jpg",
    "/outputs/output_p2.jpg",
    "/outputs/output_p3.jpg",
    "/outputs/output_p4.jpg",
    "/outputs/output_p5.jpg",
    "/outputs/output_p6.jpg",
    "/outputs/output_p7.jpg",
    "/outputs/output_p8.jpg",
    "/outputs/output_p9.jpg",
    "/outputs/output_p10.jpg",
    "/outputs/output_p11.jpg",
    "/outputs/output_p12.jpg",
  ];

  return (
    <ProductPageTemplate
      productName={t("name")}
      subtitle={t("subtitle")}
      videoUrl="https://www.youtube.com/embed/iiDK6uzoFgo?si=Nb6EqnBwrkWJl9zv"
      overview={overview}
      features={features}
    >
      <div className="mt-20">
        <h4 className="text-2xl font-bold text-[#222] mb-10 border-b-2 border-sfex-red inline-block pb-2">
          {t("productsTitle")}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="group bg-white rounded-lg overflow-hidden">
              <div className="relative flex items-center justify-center">
                <img
                  src={productImages[index]}
                  alt={t(`items.${index}.title`)}
                  className="max-w-full max-height-full object-contain transition-transform duration-300"
                />
              </div>
              <div className="p-6 border-t border-gray-50 text-center">
                <h5 className="font-medium text-[#333] mb-1 text-[16px]">
                  {t(`items.${index}.title`)}
                </h5>
                <p className="font-medium text-[14px]">
                  {t(`items.${index}.model`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProductPageTemplate>
  );
}
