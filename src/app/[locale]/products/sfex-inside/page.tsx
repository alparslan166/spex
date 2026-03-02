import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function SfexInsidePage() {
  return (
    <ProductPageTemplate
      productName="SFEX Inside"
      subtitle="The World's First Automatic Fire Extinguishing Multi-outlet"
      overview={[
        "SFEX Inside is the world's first automatic fire extinguishing multi-outlet.",
        "Fire extinguishing agent is applied inside the multi-socket for complete fire prevention at the outlet level.",
      ]}
      features={[
        "World's first fire extinguishing multi-outlet.",
        "Built-in fire suppression agent inside the socket.",
        "Automatic activation upon detecting fire or abnormal heat.",
        "Prevents electrical outlet fires at the source.",
        "No separate installation needed — integrated into the outlet design.",
      ]}
      specifications={[
        { label: "Type", value: "Multi-outlet with built-in fire suppression" },
        { label: "Activation", value: "Automatic temperature detection" },
        { label: "Application", value: "Residential and commercial outlets" },
      ]}
    />
  );
}
