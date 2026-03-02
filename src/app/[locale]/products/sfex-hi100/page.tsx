import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function SfexHi100Page() {
  return (
    <ProductPageTemplate
      productName="SFEX Hi 100"
      subtitle="Non-combustible Reinforced Plastic"
      overview={[
        "SFEX Hi 100 is a non-combustible reinforced plastic material designed to prevent fire ignition and spreading.",
        "It provides excellent fire resistance while maintaining structural integrity.",
      ]}
      features={[
        "Non-combustible material with high fire resistance rating.",
        "Reinforced plastic construction for durability.",
        "Can be applied to various electrical installations.",
        "No toxic gas emission during fire exposure.",
      ]}
    />
  );
}
