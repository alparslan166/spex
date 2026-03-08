"use client";
import SubPageLayout from "@/components/SubPageLayout";
import { useTranslations } from "next-intl";
import { useState } from "react";

const textCustomers = [
  "한일시멘트", "전라남도 농업기술원", "율곡초등학교", "쌍용양회", "롯데케미칼", "대구신천초등학교", "CJ ENM", "희성촉매", "효성", "현대두산인프라코어", "한국철강", "한국농어촌공사", "하림", "풍산", "팜스코", "인터로조", "원지", "용마로직스", "에버랜드리조트", "아세아시멘트", "싸이노스", "신세계면세점", "세아베스틸", "삼표시멘트", "빙그레", "비츠로셀", "보타리에너지", "동일고무벨트", "동성화인텍", "덕산테코피아", "곡정고등학교", "고려제강", "SK트리켐", "SK시그넷", "SKC", "LX하우시스", "LG이노텍", "LG CNS", "63시티", "한화역사", "포일초등학교", "아산북수초등학교", "울산 사랑의 열매", "군산", "자원봉사센터", "보성군", "벌교읍사무소", "보성군 조성면행정복지센터", "그랜드코리아레져", "위지트", "국가보안기술연구소", "원익머트리얼즈", "서울 성동구청", "현대테크", "인천교통공사", "일동제약", "인천성모병원", "셀바스에이아이", "한국식품연구원", "한국표준연구원", "한전KPS", "한국항공우주연구원", "한화케미칼", "한전", "국가기술표준원", "성남시 정자동주민센터", "논산 화지시장", "춘천 중앙시장", "한국전기안전공사", "한국수력원자력", "현대엔지니어링", "한국원자력연구원", "일진글로벌", "한국기계연구원", "유니코아", "한경회계법인", "인천주안 자동차매매상가", "해군 잠수함사령부", "진진토탈", "석운노인전문요양원", "소방방재신문", "건양대학교 병원", "동희오토", "분당도서관", "스템코", "신라면세점", "마니커", "인천시설관리공단", "지금 인천방위사령부", "CJ푸드빌", "SK건설", "모티브", "사조대림"
];

const logoCustomers = [
  ...Array.from({ length: 40 }, (_, i) => {
    const num = i + 1;
    const isJpg = num === 2 || num === 3 || num === 4 || num === 36;
    const ext = isJpg ? "jpg" : "png";
    return { id: `c-${num}`, src: `/bigCustomers/customer_p${num}.${ext}` };
  }),
  ...Array.from({ length: 9 }, (_, i) => {
    const num = i + 1;
    return { id: `a-${num}`, src: `/bigCustomers/additional_p${num}.png` };
  }),
];

export default function CustomersPage() {
  const t = useTranslations("SubPages");
  const tn = useTranslations("Navbar");
  const [showAllLogos, setShowAllLogos] = useState(false);
  const [showAllText, setShowAllText] = useState(false);

  const sideNav = [
    { name: tn("techSfex"), href: "/technology/sfex" },
    { name: tn("techCustomer"), href: "/technology/customers" },
    { name: tn("techCert"), href: "/technology/certificates" },
  ];

  const displayedLogoCustomers = showAllLogos ? logoCustomers : logoCustomers.slice(0, 40);
  const displayedTextCustomers = showAllText ? textCustomers : textCustomers.slice(0, 40);

  return (
    <SubPageLayout
      title={t("techTitle")}
      sideNav={sideNav}
    >
      <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
        {displayedLogoCustomers.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 p-4 flex items-center justify-center h-[80px] md:h-[100px] bg-white transition-all group"
          >
            <img
              src={item.src}
              alt="Customer Logo"
              className="w-full h-full object-contain transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* More Button for Logos */}
      {!showAllLogos && logoCustomers.length > 40 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAllLogos(true)}
            className="px-20 py-2 border border-gray-300 text-sfex-red text-md font-medium transition-all hover:bg-gray-50 tracking-wide uppercase"
          >
            {t("moreLogos")}
          </button>
        </div>
      )}

      {/* Text Based Customers Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-0 border-l border-t border-gray-100 mt-12">
        {displayedTextCustomers.map((name, index) => (
          <div
            key={index}
            className="border-r border-b border-gray-100 p-2 flex items-center justify-center h-[60px] text-center text-[13px] text-[#222] font-medium bg-white hover:bg-gray-50 transition-colors"
          >
            {name}
          </div>
        ))}
      </div>

      {/* More Button for Text List */}
      {!showAllText && textCustomers.length > 40 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAllText(true)}
            className="px-20 py-2 border border-gray-300 text-sfex-red text-md font-medium transition-all hover:bg-gray-50 tracking-wide uppercase"
          >
            {t("moreLogos")}
          </button>
        </div>
      )}

      {/* Examples Section */}
      <div className="mt-20 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }, (_, i) => {
            const num = i + 1;
            return (
              <div key={num} className="overflow-hidden border border-gray-200">
                <img
                  src={`/examples/example_p${num}.jpg`}
                  alt={`Example ${num}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>
    </SubPageLayout>
  );
}