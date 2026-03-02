import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function SfexLinePage() {
  return (
    <ProductPageTemplate
      productName="SFEX Line"
      subtitle="Stand-alone Fire Extinguisher for Medium and Large Electric Panels"
      overview={[
        "SFEX Line is a fire extinguisher that can be installed in medium and large electrical panel or attached to the equipment to suppress fires at an early stage.",
        "It is a flexible rope-type extinguisher that can be installed even in narrow spaces where ignition is anticipated.",
      ]}
      features={[
        "The flexible rope type can be installed near the ignition point, providing excellent performance to suppress fires at an early stage.",
        "It is a stand-alone polymer chemical-based device with no malfunction and no maintenance cost.",
        "The fire extinguishing agent is a solid aerosol compound based on nitrate.",
        "The SFEX Granule all-in-one function = A fire extinguisher storage tank + temperature sensor + nozzle",
      ]}
      specifications={[
        { label: "Type", value: "Flexible rope type" },
        { label: "Agent", value: "Solid aerosol compound (nitrate-based)" },
        {
          label: "Activation",
          value: "Temperature-sensitive (self-activating)",
        },
        { label: "Maintenance", value: "No maintenance required" },
      ]}
    />
  );
}
