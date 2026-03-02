import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function SfexAPTapePage() {
  return (
    <ProductPageTemplate
      productName="SFEX AP Tape"
      subtitle="Arc Proof Tape - Prevention of Fire Spreading"
      overview={[
        "SFEX AP Tape prevents fire spreading through the incoming/outgoing wires of the electrical panel.",
        "It serves as a backup solution for fire prevention, especially when initial suppression may not be sufficient.",
      ]}
      features={[
        "Wraps around input/output cables to prevent fire spreading.",
        "Fire extinguishing and fire retardancy properties.",
        "Prevents spread to Cable Pit or other areas outside the electric panel.",
        "Easy installation — simply wrap 1.5 to 2 times around cables.",
        "Works as a backup solution for dual/triple fire protection.",
      ]}
      specifications={[
        { label: "Type", value: "Tape (wrapping)" },
        {
          label: "Application",
          value: "Input/output cables of electric panels",
        },
        { label: "Installation", value: "Wrap 1.5-2 times around cables" },
      ]}
    />
  );
}
