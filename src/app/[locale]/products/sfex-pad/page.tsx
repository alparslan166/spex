"use client";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { useTranslations } from "next-intl";

export default function SfexPadPage() {
  const t = useTranslations("ProductDetails.sfex-pad");

  const overview = [t("overview.0"), t("overview.1")];
  const features = [
    t("features.0"),
    t("features.1"),
    t("features.2"),
    t("features.3"),
    t("features.4"),
  ];
  const caution = [t("caution.0"), t("caution.1"), t("caution.2")];

  const specifications = [
    {
      title: t("specifications.0.title"),
      items: [
        { label: t("specifications.0.items.0.label"), value: t("specifications.0.items.0.value") },
        { label: t("specifications.0.items.1.label"), value: t("specifications.0.items.1.value") },
        { label: t("specifications.0.items.2.label"), value: t("specifications.0.items.2.value") },
        { label: t("specifications.0.items.3.label"), value: t("specifications.0.items.3.value") },
      ],
    },
    {
      title: t("specifications.1.title"),
      items: [
        { label: t("specifications.1.items.0.label"), value: t("specifications.1.items.0.value") },
        { label: t("specifications.1.items.1.label"), value: t("specifications.1.items.1.value") },
        { label: t("specifications.1.items.2.label"), value: t("specifications.1.items.2.value") },
        { label: t("specifications.1.items.3.label"), value: t("specifications.1.items.3.value") },
      ],
    },
  ];

  return (
    <ProductPageTemplate
      productName={t("name")}
      subtitle={t("subtitle")}
      overview={overview}
      features={features}
      caution={caution}
      specifications={specifications}
    />
  );
}
