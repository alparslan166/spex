"use client";

import Image from "next/image";

export default function PartnerSlider() {
  const partners = Array.from(
    { length: 10 },
    (_, i) => `/partners/p${i + 1}.png`,
  );

  return (
    <section className="py-16 border-t border-gray-100 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">
          Our Partners
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap py-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100"
            >
              <Image
                src={partner}
                alt="Partner"
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap py-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100"
            >
              <Image
                src={partner}
                alt="Partner"
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
