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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      <div className="w-full px-2 sm:px-4 lg:px-20 bg-white mb-8 md:mb-10 mt-6 md:mt-15">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-0">
          {productTabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={`cursor-pointer px-2 py-3 md:py-2 flex items-center justify-center text-center text-[13px] md:text-[15px] lg:text-[16px] font-poppins font-medium transition-all duration-200
                ${activeTab === i
                  ? "bg-white text-[#222] border border-sfex-red shadow-sm z-10 relative"
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
          const imageSrc = `/productTabs/${tabNum}/tab${tabNum}_p${imgNum}.${ext}`;
          return (
            <div
              key={i}
              className="bg-white border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedImage(imageSrc)}
            >
              <img
                src={imageSrc}
                alt={`${productTabs[activeTab].name} Certificate ${imgNum}`}
                className="w-full h-full object-contain"
              />
            </div>
          );
        })}
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 focus:outline-none"
            onClick={() => setSelectedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Enlarged Certificate"
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </SubPageLayout>
  );
}
