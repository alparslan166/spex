import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function SfexFRBoardPage() {
  return (
    <ProductPageTemplate
      productName="SFEX FR Board"
      subtitle="Non-combustible Reinforced Plastic"
      overview={[
        "SFEX FR Board is a non-combustible reinforced plastic board for fire-resistant construction in electrical installations.",
        "It provides structural fire protection as a refractory material.",
      ]}
      features={[
        "Non-combustible material certified for fire resistance.",
        "Reinforced plastic board construction.",
        "Suitable for electrical panel enclosures and fire barriers.",
        "Lightweight yet highly durable.",
        "No toxic emissions under fire conditions.",
      ]}
      specifications={[
        { label: "Type", value: "Board (non-combustible reinforced plastic)" },
        { label: "Category", value: "Refractory Materials" },
        { label: "Application", value: "Fire barriers, panel enclosures" },
      ]}
    />
  );
}
