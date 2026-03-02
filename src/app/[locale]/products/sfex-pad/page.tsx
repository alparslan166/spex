import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function SfexPadPage() {
  return (
    <ProductPageTemplate
      productName="SFEX Pad"
      subtitle="Stand-alone Fire Extinguisher for Small Electric Panels"
      overview={[
        "The micro capsules react to specific temperatures and flames to suppress fires in the early stages.",
        "SFEX Pad is a fire suppression pad designed specifically for use in small electrical enclosures.",
        "It has an excellent cooling extinguishing method, allowing it to completely suppress fires with an immediate reaction during the initial ignition phase.",
      ]}
      features={[
        "It has excellent performance in suppressing initial fires as it is installed on the inside top of small electric panels in a simple pad type.",
        "The stand-alone polymer chemical-based system has no malfunction and requires no maintenance costs.",
        "SFEX Powder: A temperature-sensitive powder consisting of an eco-friendly extinguishing agent, Perfluoro [2-methyl-3-pentanone], and subsidiary catalyst.",
        "It does not affect the surrounding equipment after extinguishing.",
        "Extinguishing method: Cooling + Chemical Reaction.",
      ]}
      caution={[
        "The fire extinguishing agent in the pad, FK-5-1-12, has a gas density 11.4 times heavier than that of air.",
        "This characteristic causes the extinguishing agent to be sprayed in a vertical form, which may not reach the fire at the bottom if there are obstacles between the fire and the pad.",
        "As a result, top-mounted fire extinguishers may not perform well in panels with complex structures.",
      ]}
      specifications={[
        { label: "Type", value: "Pad type (adhesive)" },
        {
          label: "Agent",
          value: "FK-5-1-12 (Perfluoro [2-methyl-3-pentanone])",
        },
        { label: "Method", value: "Cooling + Chemical Reaction" },
        { label: "Installation", value: "Top inside of small electric panel" },
      ]}
    />
  );
}
