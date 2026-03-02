import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations } from "next-intl";

const historyData = [
  {
    year: "2023",
    events: [{ month: "07", text: "Established the Second Factory" }],
  },
  {
    year: "2022",
    events: [
      {
        month: "07",
        text: "Selected as a BRAND K, National Co-Brand by the Ministry of SMEs and Startups.",
      },
      { month: "04", text: "Certified ISO 9001 and ISO 14001" },
    ],
  },
  {
    year: "2021",
    events: [
      { month: "12", text: "Relocated the First Factory for Expansion" },
      {
        month: "08",
        text: "Signed a Collaboration and Exclusive Distribution Agreement with Firetrace International, A Halma Company",
      },
    ],
  },
  {
    year: "2020",
    events: [
      {
        month: "01",
        text: "Registered on Tech Fi Net by the Defense Agency for Technology and Quality",
      },
    ],
  },
  {
    year: "2019",
    events: [
      {
        month: "12",
        text: "Selected by the Ministry of National Defense for Military Use",
      },
      { month: "09", text: "Released SFEX AP(Arc Proof) Tape" },
      {
        month: "06",
        text: "Established the first plant of SFEX TECH Co., Ltd",
      },
      { month: "05", text: "Released SFEX CT(Cable Tray) Manteau" },
    ],
  },
  {
    year: "2018",
    events: [
      { month: "11", text: "Released SFEX Line" },
      {
        month: "10",
        text: "Selected as a product to be preferentially purchased as well as an excellent invention by the Korea Invention Promotion Association",
      },
      {
        month: "08",
        text: "Patent: Outlet for fire protection (No. 10-1887396)",
      },
      {
        month: "06",
        text: "Won the Grand Prize at the '2018 New Safety Technology Exhibition' held by Korea Occupational Safety and Health Agency",
      },
    ],
  },
  {
    year: "2017",
    events: [
      {
        month: "12",
        text: "Received the Presidential Award on the '10th Product Safety Day' led by the Ministry of Trade, Industry and Energy",
      },
      { month: "09", text: "Certified as a Venture Company" },
      { month: "09", text: "Certified as a Research Institute" },
      { month: "06", text: "Released SFEX Tape" },
      { month: "05", text: "Released SFEX Inside" },
      { month: "04", text: "Released SFEX Pad" },
      { month: "03", text: "Established SFEX TECH Co., Ltd." },
    ],
  },
  {
    year: "2016",
    events: [
      {
        month: "09",
        text: "Patent: Fire extinguishing equipment with wireless communication function (No. 10-1658710)",
      },
    ],
  },
];

export default function HistoryPage() {
  const t = useTranslations("SubPages");
  const tn = useTranslations("Navbar");

  const sideNav = [
    { name: tn("aboutMission"), href: "/about/mission" },
    { name: tn("aboutHistory"), href: "/about/history" },
    { name: tn("aboutDirection"), href: "/about/direction" },
  ];

  return (
    <SubPageLayout
      title={t("aboutTitle")}
      heroImage="/hero1.jpg"
      sideNav={sideNav}
    >
      <h3 className="text-3xl font-bold text-[#222] mb-10">
        {t("historyTitle")}
      </h3>
      <div className="space-y-0">
        {historyData.map((yearGroup) => (
          <div
            key={yearGroup.year}
            className="flex border-t border-gray-200 py-8"
          >
            <div className="w-[100px] flex-shrink-0">
              <span className="text-2xl font-bold text-sfex-red">
                {yearGroup.year}
              </span>
            </div>
            <div className="flex-1 space-y-4">
              {yearGroup.events.map((event, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-sfex-red font-bold text-sm w-[30px] flex-shrink-0 pt-0.5">
                    {event.month}
                  </span>
                  <p className="text-[15px] text-[#333] leading-relaxed">
                    {event.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SubPageLayout>
  );
}
