import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations } from "next-intl";

const customers = [
  "LG Innotek",
  "LG CNS",
  "LX Hausys",
  "SKC",
  "SK Signet",
  "SK Trichem",
  "CJ ENM",
  "Hyosung",
  "Lotte Chemical",
  "Hankuk Steel",
  "Poongsan",
  "Harim",
  "Binggrae",
  "Sampio Cement",
  "Asia Cement",
  "Hanil Cement",
  "Ssangyong Yanghe",
  "Dongsung Finetec",
  "Interojo",
  "Everland Resort",
  "Shinsegae Duty Free",
  "SeAH Besteel",
  "Korea Rural Community Corp",
  "Hyundai Doosan Infracore",
  "Heesung Catalyst",
  "Duksan Techopia",
  "Dongil Rubber Belt",
  "Botari Energy",
  "Vitzrocell",
  "Cyanos",
  "Farmstory",
  "Yongma Logics",
  "Wonji",
  "63 City",
  "Hanwha History",
];

export default function CustomersPage() {
  const t = useTranslations("SubPages");
  const tn = useTranslations("Navbar");

  const sideNav = [
    { name: tn("techSfex"), href: "/technology/sfex" },
    { name: tn("techCustomer"), href: "/technology/customers" },
    { name: tn("techCert"), href: "/technology/certificates" },
  ];

  return (
    <SubPageLayout
      title={t("techIntroTitle")}
      heroImage="/hero2.jpg"
      sideNav={sideNav}
    >
      <h3 className="text-3xl font-bold text-[#222] mb-10">
        {t("majorCustomerTitle")}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {customers.map((name) => (
          <div
            key={name}
            className="border border-gray-200 p-4 flex items-center justify-center h-[80px] text-center text-[13px] text-[#555] font-medium hover:border-sfex-red hover:text-sfex-red transition-colors"
          >
            {name}
          </div>
        ))}
      </div>
    </SubPageLayout>
  );
}
