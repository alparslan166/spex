"use client";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { useTranslations } from "next-intl";

export default function SfexHi100Page() {
  const t = useTranslations("ProductDetails.sfex-hi100");

  const overview = [t("overview.0"), t("overview.1"), t("overview.2")];
  const features = [t("features.0"), t("features.1"), t("features.2")];
  const caution = [
    t("caution.0"),
    t("caution.1"),
    t("caution.2"),
    t("caution.3"),
  ];

  const specifications = [
    {
      title: t("specifications.0.title"),
      items: [
        {
          label: t("specifications.0.items.0.label"),
          value: t("specifications.0.items.0.value"),
        },
        {
          label: t("specifications.0.items.1.label"),
          value: t("specifications.0.items.1.value"),
        },
        {
          label: t("specifications.0.items.2.label"),
          value: t("specifications.0.items.2.value"),
        },
        {
          label: t("specifications.0.items.3.label"),
          value: t("specifications.0.items.3.value"),
        },
        {
          label: t("specifications.0.items.4.label"),
          value: t("specifications.0.items.4.value"),
        },
        {
          label: t("specifications.0.items.5.label"),
          value: t("specifications.0.items.5.value"),
        },
      ],
    },
  ];

  return (
    <ProductPageTemplate
      productName={t("name")}
      subtitle={t("subtitle")}
      topImage="/products/h100.png"
      videoUrl="https://www.youtube.com/embed/L9o03PwnYvw?si=TC5QRf77A6a7mB3i"
      overview={overview}
      features={features}
      caution={caution}
      specifications={specifications}
    />
  );
}
