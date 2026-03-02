import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations } from "next-intl";

const productSideNav = [
  { name: "SFEX Pad", href: "/products/sfex-pad" },
  { name: "SFEX Hi 100", href: "/products/sfex-hi100" },
  { name: "SFEX Line", href: "/products/sfex-line" },
  { name: "SFEX AP Tape", href: "/products/sfex-ap-tape" },
  { name: "SFEX CT Manteau", href: "/products/sfex-ct-manteau" },
  { name: "SFEX Inside", href: "/products/sfex-inside" },
  { name: "SFEX Detector", href: "/products/sfex-detector" },
];

export { productSideNav };

interface ProductPageProps {
  productName: string;
  subtitle: string;
  overview: string[];
  features: string[];
  specifications?: { label: string; value: string }[];
  caution?: string[];
}

export default function ProductPageTemplate({
  productName,
  subtitle,
  overview,
  features,
  specifications,
  caution,
}: ProductPageProps) {
  const t = useTranslations("SubPages");

  return (
    <SubPageLayout
      title={t("productTitle")}
      heroImage="/hero2.jpg"
      sideNav={productSideNav}
    >
      <div>
        <h3 className="text-3xl font-bold text-[#222] mb-2">{productName}</h3>
        <p className="text-lg text-[#666] mb-10">{subtitle}</p>

        {/* Overview */}
        <div className="mb-10">
          <h4 className="text-xl font-bold text-[#222] mb-4 pb-2 border-b-2 border-sfex-red inline-block">
            {t("overview")}
          </h4>
          <ul className="mt-4 space-y-3">
            {overview.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 text-[15px] text-[#333] leading-relaxed"
              >
                <span className="text-sfex-red mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="mb-10">
          <h4 className="text-xl font-bold text-[#222] mb-4 pb-2 border-b-2 border-sfex-red inline-block">
            {t("features")}
          </h4>
          <ul className="mt-4 space-y-3">
            {features.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 text-[15px] text-[#333] leading-relaxed"
              >
                <span className="text-sfex-red mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Caution */}
        {caution && (
          <div className="mb-10 bg-[#fff8f8] border-l-4 border-sfex-red p-6">
            <h4 className="text-xl font-bold text-[#222] mb-4">
              {t("caution")}
            </h4>
            <ul className="space-y-3">
              {caution.map((item, i) => (
                <li key={i} className="text-[15px] text-[#555] leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Specification */}
        {specifications && (
          <div>
            <h4 className="text-xl font-bold text-[#222] mb-4 pb-2 border-b-2 border-sfex-red inline-block">
              {t("specification")}
            </h4>
            <table className="mt-4 w-full border-collapse">
              <tbody>
                {specifications.map((spec, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium text-[#222] bg-gray-50 w-[200px] text-[14px]">
                      {spec.label}
                    </td>
                    <td className="py-3 px-4 text-[#555] text-[14px]">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </SubPageLayout>
  );
}
