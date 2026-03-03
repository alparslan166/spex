"use client";

import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations } from "next-intl";
import { useState } from "react";

const productTabs = [
  { id: "01", name: "SFEX Line", imageCount: 9, ext: "jpg" },
  { id: "02", name: "SFEX Pad", imageCount: 1, ext: "png" },
  { id: "03", name: "SFEX AP Tape", imageCount: 4, ext: "jpg" },
  { id: "04", name: "SFEX CT Manteau", imageCount: 1, ext: "png" },
  { id: "05", name: "SFEX Inside", imageCount: 4, ext: "jpg" },
  { id: "06", name: "Thermal Barrier", imageCount: 4, ext: "jpg" },
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
      title={t("techCertTitle")}
      sideNav={sideNav}
    >
      {/* Product Tabs */}
      <div className="w-full px-20 bg-white mb-10 mt-15">
        <div className="flex">
          {productTabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={`flex-1 cursor-pointer px-0.5 py-1 text-[16px] font-poppins font-medium transition-all duration-200
                ${activeTab === i
                  ? "bg-white text-[#222] border border-sfex-red"
                  : "text-[#555] hover:text-[#222] bg-white border border-gray-200"
                }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Certificate Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: productTabs[activeTab].imageCount }, (_, i) => {
          const tabNum = activeTab + 1;
          const imgNum = i + 1;
          const ext = productTabs[activeTab].ext;
          return (
            <div key={i} className="bg-white border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={`/productTabs/${tabNum}/tab${tabNum}_p${imgNum}.${ext}`}
                alt={`${productTabs[activeTab].name} Certificate ${imgNum}`}
                className="w-full h-full object-contain"
              />
            </div>
          );
        })}
      </div>
    </SubPageLayout>
  );
}
