"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroSlider() {
  const t = useTranslations("Hero");
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { image: "/hero1.jpg", title: t("title1"), subtitle: t("subtitle1") },
    { image: "/hero2.jpg", title: t("title2"), subtitle: t("subtitle2") },
    { image: "/hero3.jpg", title: t("title3"), subtitle: t("subtitle3") },
  ];

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Autoplay with 7400ms interval (matching original)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7400);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[60vh] md:h-[calc(85vh)] overflow-hidden">
      {/* Slides with fade effect */}
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div key={index} className={`hero-slide ${isActive ? "active" : ""}`}>
            {/* Image zoom: yazılar bittikten sonra başlasın */}
            <motion.div
              key={`img-${activeIndex}`}
              className="absolute inset-0"
              initial={{ scale: 1.2 }}
              animate={{ scale: isActive ? 1 : 1 }}
              transition={{
                duration: 4,
                ease: "easeOut",
                delay: 1.8,
              }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>

            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              {isActive && (
                <motion.div
                  key={`text-${activeIndex}`}
                  initial={{ x: -120, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                  className="text-center px-6 scale-90"
                >
                  <motion.h3
                    initial={{ x: -120, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl lg:text-5xl font-bold text-white mb-6"
                  >
                    {slide.title}
                  </motion.h3>

                  <motion.p
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="text-base md:text-lg text-white/90 font-light"
                  >
                    {slide.subtitle}
                  </motion.p>
                </motion.div>
              )}
            </div>
          </div>
        );
      })}

      {/* Dots navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10 scale-110">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`hero-dot ${index === activeIndex ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
