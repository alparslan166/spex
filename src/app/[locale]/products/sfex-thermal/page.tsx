import ProductPageTemplate from "@/components/ProductPageTemplate";
import { useTranslations } from "next-intl";

export default function SfexThermalPage() {
  const t = useTranslations("ProductDetails.sfex-thermal");

  const overview = [t("overview.0")];
  const features = [
    t("features.0"),
    t("features.1"),
  ];



  return (
    <ProductPageTemplate
      productName={t("name")}
      subtitle={t("subtitle")}
      videoUrl="https://www.youtube.com/embed/Rgy75Qwmw38"
      overview={overview}
      features={features}
    />
  );
}
