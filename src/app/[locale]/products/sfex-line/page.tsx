import ProductPageTemplate from "@/components/ProductPageTemplate";
import { useTranslations } from "next-intl";

export default function SfexLinePage() {
  const t = useTranslations("ProductDetails.sfex-line");

  const overview = [t("overview.0"), t("overview.1")];
  const features = [t("features.0"), t("features.1"), t("features.2"), t("features.3")];

  const specifications = [
    {
      title: t("specifications.0.title"),
      items: [
        { label: t("specifications.0.items.0.label"), value: t("specifications.0.items.0.value") },
        { label: t("specifications.0.items.1.label"), value: t("specifications.0.items.1.value") },
        { label: t("specifications.0.items.2.label"), value: t("specifications.0.items.2.value") },
        { label: t("specifications.0.items.3.label"), value: t("specifications.0.items.3.value") },
        { label: t("specifications.0.items.4.label"), value: t("specifications.0.items.4.value") },
        { label: t("specifications.0.items.5.label"), value: t("specifications.0.items.5.value") },
      ],
    },
    {
      title: t("specifications.1.title"),
      items: [
        { label: t("specifications.1.items.0.label"), value: t("specifications.1.items.0.value") },
        { label: t("specifications.1.items.1.label"), value: t("specifications.1.items.1.value") },
        { label: t("specifications.1.items.2.label"), value: t("specifications.1.items.2.value") },
        { label: t("specifications.1.items.3.label"), value: t("specifications.1.items.3.value") },
        { label: t("specifications.1.items.4.label"), value: t("specifications.1.items.4.value") },
        { label: t("specifications.1.items.5.label"), value: t("specifications.1.items.5.value") },
      ],
    },
    {
      title: t("specifications.2.title"),
      items: [
        { label: t("specifications.2.items.0.label"), value: t("specifications.2.items.0.value") },
        { label: t("specifications.2.items.1.label"), value: t("specifications.2.items.1.value") },
        { label: t("specifications.2.items.2.label"), value: t("specifications.2.items.2.value") },
        { label: t("specifications.2.items.3.label"), value: t("specifications.2.items.3.value") },
        { label: t("specifications.2.items.4.label"), value: t("specifications.2.items.4.value") },
        { label: t("specifications.2.items.5.label"), value: t("specifications.2.items.5.value") },
      ],
    },
  ];

  return (
    <ProductPageTemplate
      productName={t("name")}
      subtitle={t("subtitle")}
      videoUrl="https://www.youtube.com/embed/FnfzSNpjFTc?si=pNxH7emtWW_LXI_B"
      overview={overview}
      features={features}
      specifications={specifications}
    />
  );
}
