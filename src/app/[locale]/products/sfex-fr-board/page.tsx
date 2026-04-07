"use client";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { useTranslations } from "next-intl";

export default function SfexFRBoardPage() {
  const t = useTranslations("ProductDetails.sfex-fr-board");

  const overview = [t("overview.0"), t("overview.1"), t("overview.2")];
  const features = [
    t("features.0"),
    t("features.1"),
    t("features.2"),
    t("features.3"),
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
      ],
    },
  ];

  return (
    <ProductPageTemplate
      productName={t("name")}
      subtitle={t("subtitle")}
      videoUrl="https://www.youtube.com/embed/Ne8lVkDZzms?si=2B6D3oI_kXPxWN-X"
      topImage="/extras/extra_p1.jpg"
      overview={overview}
      features={features}
      specifications={specifications}
    />
  );
}
