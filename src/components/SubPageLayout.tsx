"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

interface SideNavItem {
  name: string;
  href: string;
}

interface SubPageLayoutProps {
  title: string;
  heroImage?: string;
  sideNav: SideNavItem[];
  children: React.ReactNode;
}

export default function SubPageLayout({
  title,
  heroImage,
  sideNav,
  children,
}: SubPageLayoutProps) {
  const locale = useLocale();
  const pathname = usePathname();

  const normalizePath = (path: string) =>
    path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;

  const currentPath = normalizePath(pathname);

  const activeItem = sideNav.find(
    (item) => normalizePath(`/${locale}${item.href}`) === currentPath,
  );

  return (
    <div>
      {/* Hero Banner */}
      <div
        className="relative w-full h-[200px] md:h-[330px] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('${heroImage || "/blue-bg.jpg"}')`,
        }}
      >
        <div className="absolute inset-0" />
        <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white text-center mt-20">
          {activeItem?.name ?? title}
        </h2>
      </div>

      {/* Content Area */}
      <div className="max-w-[1200px] mx-auto px-5 py-12 md:py-16 md:pt-0">
        {/* Navbar */}
        <nav className="border-b border-gray-200 mb-12 hidden md:block">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-4 text-[15px] font-medium py-4">
            {sideNav.map((item) => {
              const fullHref = `/${locale}${item.href}`;
              const isActive = currentPath === normalizePath(fullHref);
              return (
                <li key={item.href}>
                  <Link
                    href={fullHref}
                    className={`border-b-2 pb-4 px-6 transition-colors ${isActive
                      ? "text-sfex-red border-sfex-red"
                      : "border-transparent text-[#333] hover:text-sfex-red"
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
