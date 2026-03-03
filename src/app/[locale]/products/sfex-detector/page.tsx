import ProductPageTemplate from "@/components/ProductPageTemplate";
import { useTranslations } from "next-intl";

export default function SfexDetectorPage() {
  const t = useTranslations("ProductDetails.sfex-detector");

  const specifications = [
    {
      title: t("specifications.0.title"),
      items: [
        { label: t("specifications.0.items.0.label"), value: t("specifications.0.items.0.value") },
        { label: t("specifications.0.items.1.label"), value: t("specifications.0.items.1.value") },
        { label: t("specifications.0.items.2.label"), value: t("specifications.0.items.2.value") },
        { label: t("specifications.0.items.3.label"), value: t("specifications.0.items.3.value") },
      ],
    },
  ];

  return (
    <ProductPageTemplate
      productName={t("name")}
      subtitle={t("subtitle")}
      videoUrl="https://www.youtube.com/embed/_2D8HE1aEDE?si=uafMSsVSgDqFUfTB"
      overview={[t("overview.0")]}
      features={[]}
      featureImage="/extras/example1.png"
      specifications={specifications}
    >
      <div className="mt-12">
        <h4 className="text-2xl font-bold text-[#222] mb-6 border-b-2 border-sfex-red inline-block pb-1">
          {t("statusTable.title")}
        </h4>
        <div className="mt-4">
          <img
            src="/extras/example2.png"
            alt="Example of use"
            className="max-w-full h-auto mx-auto"
          />
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-100 text-center">
            <thead>
              <tr className="bg-[#f8f8f8]">
                <th className="border border-gray-100 py-3 px-2 min-w-[120px]">
                  <div className="font-bold text-[14px]">{t("statusTable.safe")}</div>
                  <div className="text-[12px] font-normal text-[#666]">~ 40℃</div>
                </th>
                <th className="border border-gray-100 py-3 px-2 min-w-[120px]">
                  <div className="font-bold text-[14px]">{t("statusTable.attention")}</div>
                  <div className="text-[12px] font-normal text-[#666]">40℃ ~</div>
                </th>
                <th className="border border-gray-100 py-3 px-2 min-w-[120px]">
                  <div className="font-bold text-[14px]">{t("statusTable.warning")}</div>
                  <div className="text-[12px] font-normal text-[#666]">50℃ ~</div>
                </th>
                <th className="border border-gray-100 py-3 px-2 min-w-[120px]">
                  <div className="font-bold text-[14px]">{t("statusTable.danger")}</div>
                  <div className="text-[12px] font-normal text-[#666]">60℃ ~</div>
                </th>
                <th className="border border-gray-100 py-3 px-2 min-w-[120px]">
                  <div className="font-bold text-[14px]">{t("statusTable.restoration")}</div>
                  <div className="text-[12px] font-normal text-[#666]">~ 40℃</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-100 p-4">
                  <img src="/tables/table_p1.png" alt="Safe" className="mx-auto" />
                </td>
                <td className="border border-gray-100 p-4">
                  <img src="/tables/table_p2.png" alt="Attention" className="mx-auto" />
                </td>
                <td className="border border-gray-100 p-4">
                  <img src="/tables/table_p3.png" alt="Warning" className="mx-auto" />
                </td>
                <td className="border border-gray-100 p-4">
                  <img src="/tables/table_p4.png" alt="Danger" className="mx-auto" />
                </td>
                <td className="border border-gray-100 p-4">
                  <img src="/tables/table_p5.png" alt="Restoration" className="mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
