"use client";
import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations } from "next-intl";

interface HistoryEvent {
  month: string;
  text: string;
}

interface HistoryYear {
  year: string;
  events: HistoryEvent[];
}

export default function HistoryPage() {
  const t = useTranslations("SubPages");
  const tn = useTranslations("Navbar");

  const historyData = t.raw("historyContent") as HistoryYear[];

  const sideNav = [
    { name: tn("aboutMission"), href: "/about/mission" },
    { name: tn("aboutHistory"), href: "/about/history" },
    { name: tn("aboutDirection"), href: "/about/direction" },
  ];

  return (
    <SubPageLayout
      title={t("aboutTitle")}
      sideNav={sideNav}
    >
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="relative">
          {/* Timeline Vertical Line */}
          <div className="absolute left-[30%] md:left-[35%] top-0 bottom-0 w-[1px] bg-red-100" />

          <div className="space-y-12">
            {historyData.map((yearGroup) => (
              <div key={yearGroup.year} className="relative mb-3">
                {yearGroup.events.map((event, i) => (
                  <div key={i} className="flex items-start mb-2 last:mb-0 relative">
                    {/* Year Section (Left of line) */}
                    <div className="w-[30%] md:w-[35%] flex-shrink-0 pr-14 md:pr-20 text-right pt-0">
                      {i === 0 && (
                        <span className="text-xl md:text-xl font-semibold text-[#333] tracking-tight">
                          {yearGroup.year}
                        </span>
                      )}
                    </div>

                    {/* Dot Section (On the line) */}
                    <div className="absolute left-[30%] md:left-[35%] top-[14px] md:top-[18px] w-2.5 h-2.5 rounded-full bg-sfex-red z-10 -translate-x-1/2 shadow-[0_0_0_6px_rgba(255,255,255,1)]" />

                    {/* Content Section (Right of line) */}
                    <div className="flex-1 pl-14 md:pl-20 flex items-start">
                      <span className="w-10 md:w-14 flex-shrink-0 text-xl md:text-2xl font-semibold text-[#333] pt-0.5 md:pt-1">
                        {event.month}
                      </span>
                      <p className="flex-1 text-sm md:text-base text-[#555] leading-relaxed pt-1 md:pt-1.5 font-normal">
                        {event.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
