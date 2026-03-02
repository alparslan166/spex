"use client";

import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations } from "next-intl";
import { useState } from "react";

const productTabs = [
  "SFEX Line",
  "SFEX Pad",
  "SFEX AP Tape",
  "SFEX CT Manteau",
  "SFEX Inside",
  "Thermal Barrier",
];

export default function CertificatesPage() {
  const t = useTranslations("SubPages");
  const tn = useTranslations("Navbar");
  const [activeTab, setActiveTab] = useState(0);

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
      {/* Product Tabs */}
      <div className="w-full px-20 bg-white mb-10 mt-15">
        <div className="flex">
          {productTabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`flex-1 px-2 py-1 text-[16px] font-poppins font-medium transition-all duration-200
                ${
                  activeTab === i
                    ? "bg-white text-[#222] border-2 border-sfex-red"
                    : "text-[#555] hover:text-[#222] bg-white border border-gray-300"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Certificate content placeholder */}
      <div className="bg-gray-50 p-8 text-center text-[#999]">
        <p className="text-lg">{productTabs[activeTab]}</p>
        <p className="mt-2 text-sm">Certificate and test report documents</p>
      </div>
    </SubPageLayout>
  );
}
