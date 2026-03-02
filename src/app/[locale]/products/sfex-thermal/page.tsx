import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function SfexThermalPage() {
  return (
    <ProductPageTemplate
      productName="SFEX Thermal Barrier"
      subtitle="Thermal Runaway Propagation Barrier"
      overview={[
        "SFEX Thermal Barrier prevents thermal runaway propagation between battery cells and racks.",
        "It serves as a fireproof bulkhead to contain thermal events within a single battery module.",
      ]}
      features={[
        "Prevents thermal runaway from spreading to adjacent battery cells.",
        "Fireproof bulkhead design for battery rack installations.",
        "High temperature resistance for extreme thermal events.",
        "Compatible with various battery storage configurations.",
        "Essential safety component for energy storage systems (ESS).",
      ]}
      specifications={[
        { label: "Type", value: "Thermal barrier / bulkhead" },
        { label: "Category", value: "Refractory Materials" },
        { label: "Application", value: "Battery racks, ESS installations" },
        { label: "Function", value: "Thermal runaway propagation prevention" },
      ]}
    />
  );
}
