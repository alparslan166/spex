"use client";

import Image from "next/image";

export default function PartnerSlider() {
  const partners = Array.from({ length: 40 }, (_, i) => {
    const num = i + 1;
    const extension = [2, 3, 4, 36].includes(num) ? "jpg" : "png";
    return `/partners/p${num}.${extension}`;
  });

  return (
    <section className="pt-8 pb-20 border-t border-gray-100 overflow-hidden bg-white">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex whitespace-nowrap py-4">
          {partners.map((partner, index) => (
            <div
              key={`p1-${index}`}
              className="mx-4 flex items-center justify-center min-w-[120px] border p-2 py-0"
            >
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  console.error(`Failed to load image: ${partner}`);
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap py-4">
          {partners.map((partner, index) => (
            <div
              key={`p2-${index}`}
              className="mx-4 flex items-center justify-center min-w-[120px] border p-2"
            >
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
