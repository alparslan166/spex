import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function SfexCTManteauPage() {
  return (
    <ProductPageTemplate
      productName="SFEX CT Manteau"
      subtitle="Cable Tray Fire Extinguishing Solution"
      overview={[
        "SFEX CT Manteau is a fire extinguishing solution specifically designed for fires in cable trays.",
        "It covers horizontal cable zones to prevent fire spreading along cable runs.",
      ]}
      features={[
        "Designed for horizontal cable tray installations.",
        "Provides both fire suppression and fire-spreading prevention.",
        "Stand-alone operation without external power or systems.",
        "No maintenance required after installation.",
      ]}
      specifications={[
        { label: "Type", value: "Manteau (covering)" },
        { label: "Application", value: "Horizontal cable trays" },
        { label: "Operation", value: "Stand-alone, temperature-activated" },
      ]}
    />
  );
}
