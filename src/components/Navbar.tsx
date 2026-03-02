"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface SubMenuItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  children?: SubMenuItem[];
}

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null,
  );
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const isActiveExact = (href: string) => pathname === `/${locale}${href}`;

  const isActiveGroup = (href: string) =>
    pathname === `/${locale}${href}` ||
    pathname.startsWith(`/${locale}${href}/`);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value === "eng" ? "en" : "tr";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const changeLanguage = (lang: "tr" | "eng") => {
    const newLocale = lang === "eng" ? "en" : "tr";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const currentLang = locale === "en" ? "eng" : "tr";

  const navLinks: NavItem[] = [
    {
      name: t("about"),
      href: "/about/mission",
      children: [
        { name: t("aboutMission"), href: "/about/mission" },
        { name: t("aboutHistory"), href: "/about/history" },
        { name: t("aboutDirection"), href: "/about/direction" },
      ],
    },
    {
      name: t("techIntro"),
      href: "/technology/sfex",
      children: [
        { name: t("techSfex"), href: "/technology/sfex" },
        { name: t("techCustomer"), href: "/technology/customers" },
        { name: t("techCert"), href: "/technology/certificates" },
      ],
    },
    {
      name: t("techApp"),
      href: "/application/panel-fire",
      children: [
        { name: t("appPanel"), href: "/application/panel-fire" },
        { name: t("appCable"), href: "/application/cable-fire" },
        { name: t("appOutlet"), href: "/application/outlet-fire" },
        { name: t("appBattery"), href: "/application/battery" },
      ],
    },
    {
      name: t("product"),
      href: "/products/sfex-line",
      children: [
        { name: "SFEX Pad", href: "/products/sfex-pad" },
        { name: "SFEX Hi 100", href: "/products/sfex-hi100" },
        { name: "SFEX Line", href: "/products/sfex-line" },
        { name: "SFEX AP Tape", href: "/products/sfex-ap-tape" },
        { name: "SFEX CT Manteau", href: "/products/sfex-ct-manteau" },
        { name: "SFEX Inside", href: "/products/sfex-inside" },
        { name: "SFEX Detector", href: "/products/sfex-detector" },
        { name: "SFEX FR Board", href: "/products/sfex-fr-board" },
        { name: "SFEX Thermal Barrier", href: "/products/sfex-thermal" },
      ],
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 hidden md:block overflow-visible">
        <div className="flex relative items-stretch px-[6%] w-full h-[80px]">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center scale-90">
            <Link href={`/${locale}`}>
              <Image
                src="/logo.png"
                alt="SFEX Tech"
                width={150}
                height={50}
                className="h-[50px] w-auto"
              />
            </Link>
          </div>

          {/* Nav Links - Center */}
          <div className="flex items-stretch justify-center absolute left-1/2 -translate-x-1/2 h-[80px]">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="nav-item relative flex items-stretch w-[140px]"
              >
                <Link
                  href={`/${locale}${link.href}`}
                  className={[
                    "flex items-center justify-center w-full text-[18px] font-poppins font-medium transition-colors duration-200 text-center leading-tight px-2 gap-3",
                    isActiveGroup(link.href)
                      ? "text-sfex-red"
                      : "text-[#333] hover:bg-sfex-red hover:text-white",
                  ].join(" ")}
                >
                  {link.name}
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <div className="nav-dropdown absolute top-[80px] left-1/2 -translate-x-1/2 bg-[#f2f2f2] min-w-[140px] shadow-lg z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={`/${locale}${child.href}`}
                        className={[
                          "block px-5 py-3 text-[14px] text-center transition-colors",
                          isActiveExact(child.href)
                            ? "text-sfex-red font-semibold"
                            : "text-[#555] hover:text-[#222] hover:font-medium",
                        ].join(" ")}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Language Switcher - Right */}
          <div className="flex-shrink-0 items-center flex fixed right-10 top-5 px-3 pl-0 border-b-[3px] border-gray-800">
            <button
              className="appearance-none px-3 py-1.5 pb-0 pl-0 text-[16px] font-semibold text-[#333] bg-white cursor-pointer focus:outline-none"
              onClick={() => setIsLangMenuOpen((v) => !v)}
            >
              {currentLang === "eng" ? "ENG" : "TR"}
            </button>
            <svg
              className="absolute right-0 ml-2 pointer-events-none"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          {isLangMenuOpen && (
            <div className="absolute top-10 mt-5 right-10 w-24 bg-white shadow-lg rounded-md border overflow-hidden">
              <button
                type="button"
                onClick={() => changeLanguage("tr")}
                className="cursor-pointer block w-full text-left px-4 py-2 hover:bg-gray-200 text-[14px] font-medium text-[#333] border-b"
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => changeLanguage("eng")}
                className="cursor-pointer block w-full text-left px-4 py-2 hover:bg-gray-200 text-[14px] font-medium text-[#333]"
              >
                ENG
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-1.5">
          <button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
            <Menu size={24} strokeWidth={3} />
          </button>
          <Link href={`/${locale}`}>
            <Image
              src="/logo.png"
              alt="SFEX Tech"
              width={100}
              height={35}
              className="h-[35px] w-auto"
            />
          </Link>

          <div className="w-10" />
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              className="absolute left-0 top-0 h-full w-[70vw] max-w-[420px] bg-white shadow-2xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              {/* header */}
              <div className="relative flex items-center justify-center py-5 pb-0">
                <Link
                  href={`/${locale}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    src="/logo.png"
                    alt="SFEX Tech"
                    width={140}
                    height={45}
                    className="h-[45px] w-auto"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute right-4 top-4 p-2"
                >
                  <X size={26} />
                </button>
              </div>

              {/* Language */}
              <div className="px-6 py-3 pb-4 border-b border-gray-300 flex justify-center">
                <div className="relative inline-flex">
                  <button
                    type="button"
                    onClick={() => setIsLangMenuOpen((v) => !v)}
                    className="inline-flex w-30 items-center gap-2 border border-gray-400 bg-white px-4 py-1 pr-0 text-[16px] font-semibold text-[#333] rounded-2"
                  >
                    {currentLang === "eng" ? "ENG" : "TR"}
                    <svg
                      className={`w-4 h-4 transition-transform ${isLangMenuOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  {isLangMenuOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-28 bg-white shadow-lg rounded-md border border-gray-500 overflow-hidden z-50">
                      <button
                        type="button"
                        onClick={() => {
                          changeLanguage("tr");
                          setIsLangMenuOpen(false);
                        }}
                        className="block w-full text-center px-4 py-2 hover:bg-gray-200 text-[14px] font-medium text-[#333] border-b"
                      >
                        TR
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          changeLanguage("eng");
                          setIsLangMenuOpen(false);
                        }}
                        className="block w-full text-center px-4 py-2 hover:bg-gray-200 text-[14px] font-medium text-[#333]"
                      >
                        ENG
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Menu */}
              <div className="max-h-[calc(100vh-150px)] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileSubmenu(
                          openMobileSubmenu === link.name ? null : link.name,
                        )
                      }
                      className="w-full text-left px-3 py-3 text-[14px] font-medium text-[#222] border-b border-gray-300 flex justify-between items-center"
                    >
                      {link.name}
                      <svg
                        className={`w-5 h-5 transition-transform ${openMobileSubmenu === link.name ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <AnimatePresence initial={false}>
                      {openMobileSubmenu === link.name && link.children && (
                        <motion.div
                          key="submenu"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden bg-gray-50"
                        >
                          {link.children.map((child) => (
                            <motion.div
                              key={child.href}
                              initial={{ opacity: 0, y: -6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Link
                                href={`/${locale}${child.href}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-3 py-2 text-[13px] text-[#444]"
                              >
                                {child.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
