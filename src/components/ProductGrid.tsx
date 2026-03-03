"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function ProductGrid() {
  const t = useTranslations("Products");

  const autoplay = Autoplay({
    delay: 4000,          // 3.5 saniye
    stopOnInteraction: false,
    stopOnMouseEnter: true, // hover olunca dursun
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  }, [autoplay]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(emblaApi.selectedScrollSnap() - 1, false); // false = jump değil, animasyonlu
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(emblaApi.selectedScrollSnap() + 1, false);
  }, [emblaApi]);

  const products = [
    { name: t("p1"), desc: t("p1_desc"), image: "/products/p1.jpg" },
    { name: t("p2"), desc: t("p2_desc"), image: "/products/p2.jpg" },
    { name: t("p3"), desc: t("p3_desc"), image: "/products/p3.jpg" },
    { name: t("p4"), desc: t("p4_desc"), image: "/products/p4.jpg" },
    { name: t("p5"), desc: t("p5_desc"), image: "/products/p5.jpg" },
    { name: t("p6"), desc: t("p6_desc"), image: "/products/p6.jpg" },
    { name: t("p7"), desc: t("p7_desc"), image: "/products/p7.jpg" },
    { name: t("p8"), desc: t("p8_desc"), image: "/products/p8.jpg" },
    { name: t("p9"), desc: t("p9_desc"), image: "/products/p9.jpg" },
  ];

  return (
    <section id="product" className="py-16 md:py-24 bg-[#f7f7f7]">
      <div className="max-w-[1500px] mx-auto px-5 relative">
        <h2 className="text-2xl md:text-4xl font-bold text-[#222] mb-2 text-center">
          {t("title")}
        </h2>
        <p className="text-gray-500 mb-8 text-center max-w-2xl text-lg mx-auto">
          {t("subtitle")}
        </p>

        <div className="relative px-[75px]">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] xl:flex-[0_0_20%] min-w-0 px-2 shadow-x "
                >
                  <div className="product-card bg-white cursor-pointer group h-full flex flex-col p-2 border border-gray-100 hover:border-red-400">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <strong className="block text-[16px] font-medium text-[#222] mb-2">
                        {product.name}
                      </strong>
                      <p className="text-[13px] text-[#666] leading-relaxed mb-4 flex-1 line-clamp-3">
                        {product.desc}
                      </p>
                      <div className="flex justify-center">
                        <span className="more-btn shadow-2xl border border-gray-200" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            aria-label="Previous"
          >
            <span className="block w-[50px] h-[50px] bg-[url('/arrow-prev.svg')] bg-center bg-no-repeat bg-contain opacity-40 hover:opacity-80 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#333"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </span>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
            aria-label="Next"
          >
            <span className="block w-[50px] h-[50px] bg-center bg-no-repeat bg-contain opacity-40 hover:opacity-80 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#333"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
