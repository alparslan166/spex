"use client";
import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export default function MissionPage() {
  const t = useTranslations("SubPages");
  const tn = useTranslations("Navbar");
  const locale = useLocale();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const sideNav = [
    { name: tn("aboutMission"), href: "/about/mission" },
    { name: tn("aboutHistory"), href: "/about/history" },
    { name: tn("aboutDirection"), href: "/about/direction" },
  ];

  return (
    <SubPageLayout
      title={t("aboutTitle")}
      heroImage="/company.jpg"
      sideNav={sideNav}
    >
      <div>
        <p className="text-2xl md:text-3xl font-light text-sfex-red mb-4 text-center">
          {t("missionText")}
        </p>
        <div className="mb-12">
          <Image
            src={locale === 'tr' ? "/extras/mission-turkish.jpg" : "/extras/mission.png"}
            alt="Mission"
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 17 }, (_, i) => {
              const num = i + 1;
              const pngs = [6, 12, 13, 14, 15, 16, 17];
              const upperPngs = [8, 9];
              const ext = pngs.includes(num) ? "png" : upperPngs.includes(num) ? "PNG" : "jpg";
              const imageSrc = `/certificates/certificate_p${num}.${ext}`;
              return (
                <div
                  key={num}
                  className="border border-gray-100 p-2 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedImage(imageSrc)}
                >
                  <div className="relative aspect-[1/1.4] overflow-hidden">
                    <img
                      src={imageSrc}
                      alt={`Certificate ${num}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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
