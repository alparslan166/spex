"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpFromLine, ArrowUpToLine } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2 transition-all duration-300 scale-90 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Scroll To Top */}
      <div
        onClick={scrollToTop}
        className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-300 cursor-pointer hover:scale-105 transition"
      >
        <ArrowUpToLine size={22} className="text-black" />
      </div>

      {/* YouTube Button */}
      <a
        href="https://www.youtube.com/@%EC%8A%A4%ED%8E%99%EC%8A%A4%ED%85%8C%ED%81%AC-i3f/featured"
        target="_blank"
        className="group relative flex items-center"
      >
        <div className="flex items-center bg-red-600 text-white rounded-full overflow-hidden transition-all duration-300">
          
          {/* Text (Animated) */}
          <span className="whitespace-nowrap px-0 max-w-0 group-hover:max-w-[140px] group-hover:px-5 transition-all duration-500 overflow-hidden text-sm font-semibold">
            YOUTUBE
          </span>

          {/* Icon */}
          <div className="w-14 h-14 flex items-center justify-center">
            <FaYoutube size={30} />
          </div>
        </div>
      </a>
    </div>
  );
}