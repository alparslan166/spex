import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function SfexDetectorPage() {
  return (
    <ProductPageTemplate
      productName="SFEX Detector"
      subtitle="Temperature-sensitive Sticker"
      overview={[
        "SFEX Detector is a temperature-sensitive sticker that provides visual indication of abnormal heat in electrical installations.",
        "It serves as an early warning system for potential fire hazards.",
      ]}
      features={[
        "Simple sticker application for easy installation.",
        "Visual temperature change indication.",
        "No power source required.",
        "Can be applied to various electrical components and panels.",
        "Cost-effective fire hazard monitoring solution.",
      ]}
      specifications={[
        { label: "Type", value: "Temperature-sensitive sticker" },
        { label: "Installation", value: "Adhesive application" },
        { label: "Power", value: "No power required" },
      ]}
    />
  );
}
