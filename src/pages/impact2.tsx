import React from "react";
import { useRouter } from "next/router";
import type { ImpactReport } from "@/components/ImpactReporting/ImpactSection";
import Sidebar from "@/components/common/Sidebar";
import ImpactFiltersBar from "@/components/impact2/ImpactFiltersBar";
import ImpactSection from "@/components/ImpactReporting/ImpactSection";
import GlobalReachSection from "@/components/ImpactReporting/GlobalReachSection";

const Impact2Page = () => {
  const [tempFilters, setTempFilters] = React.useState({
    esg: "",
    sdg: "",
    industries: "",
    projects: "",
    partners: "",
  });

  const [showMore, setShowMore] = React.useState(false);
  // Card display text (clean) with hidden filterKeywords for filtering only
  type ImpactReportWithKeywords = ImpactReport & { filterKeywords: string };
  const impactReports: ImpactReportWithKeywords[] = [
    {
      id: 1,
      title: "Urban Foodbank Network Q1 2025 Outcome Summary",
      image: "/images/ir1.png",
      impact: "Fed 150,000 individuals through community kitchens.",
      filterKeywords: "Projects Partner 1 Environmental Social Peru",
    },
    {
      id: 2,
      title: "Water Access Project Spring 2025 Field Report",
      image: "/images/ir2.png",
      impact: "Installed 75 clean-water wells in rural Kenya.",
      filterKeywords: "Projects Partner 2 Governance Climate action Ghana",
    },
    {
      id: 3,
      title: "Urban Foodbank Network Q1 2025 Outcome Summary",
      image: "/images/ir1.png",
      impact: "Fed 150,000 individuals through community kitchens.",
      filterKeywords: "Projects Partner 3 Environmental Social Serbia",
    },
    {
      id: 4,
      title: "Urban Foodbank Network Q1 2025 Outcome Summary",
      image: "/images/ir3.png",
      impact: "Fed 150,000 individuals through community kitchens.",
      filterKeywords: "Projects Partner 1 Governance Climate action Peru",
    },
  ];
  const additionalReports: ImpactReportWithKeywords[] = [
    {
      id: 5,
      title: "Education Initiative Q2 2025 Progress Report",
      image: "/images/ir1.png",
      impact: "Provided education to 50,000 children in underserved areas.",
      filterKeywords: "Projects Partner 2 Environmental Social Ghana",
    },
    {
      id: 6,
      title: "Clean Energy Project Summer 2025 Update",
      image: "/images/ir2.png",
      impact: "Installed solar panels in 200 rural communities.",
      filterKeywords: "Projects Partner 3 Governance Climate action Serbia",
    },
    {
      id: 7,
      title: "Healthcare Access Initiative Q2 2025 Summary",
      image: "/images/ir3.png",
      impact: "Delivered medical care to 75,000 patients in remote regions.",
      filterKeywords: "Projects Partner 1 Environmental Social Peru",
    },
    {
      id: 8,
      title: "Environmental Conservation Q2 2025 Report",
      image: "/images/ir1.png",
      impact: "Planted 100,000 trees and restored 500 hectares of forest.",
      filterKeywords: "Projects Partner 2 Governance Climate action Ghana",
    },
  ];
  const displayedReports = showMore
    ? [...impactReports, ...additionalReports]
    : impactReports;

  const handleFilterChange = (key: string, value: string) => {
    setTempFilters((prev) => ({ ...prev, [key]: value }));
  };

  const [appliedFilters, setAppliedFilters] = React.useState(tempFilters);
  const applyFilters = () => {
    setAppliedFilters({ ...tempFilters });
  };
  const clearFilters = () => {
    const cleared = {
      esg: "",
      sdg: "",
      industries: "",
      projects: "",
      partners: "",
    };
    setTempFilters(cleared);
    setAppliedFilters(cleared);
  };

  const router = useRouter();
  return (
    <div className="min-h-screen flex bg-[#FEFDEC]">
      <Sidebar />
      <main className="flex-1 w-full md:ml-16 p-2 sm:p-4 md:p-6 pl-20 md:pl-0 transition-all duration-300">
        <div className="mb-4 pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-blue-900"
              >
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                Impact Reports
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
            <div className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 cursor-pointer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7A7,7 0 0,1 20,14V16A1,1 0 0,0 21,17H22V19H2V17H3A1,1 0 0,0 4,16V14A7,7 0 0,1 11,7V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M6,14A5,5 0 0,0 11,9V7.91C7.06,8.31 4,11.42 4,15.5V16A1,1 0 0,0 5,17A1,1 0 0,0 6,16V14M9,21A3,3 0 0,0 12,24A3,3 0 0,0 15,21H9Z" />
              </svg>
            </div>
            <div
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 cursor-pointer"
              onClick={() => router.push("/messages")}
              title="Messages"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H5.17L4,17.17V4H20V16Z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="text-lg sm:text-xl md:text-2xl text-gray-900 font-medium my-4 sm:my-6 mb-8">
          Take a look at all the <span className="font-bold">Good</span> we are
          doing together
        </div>

        <div className="flex flex-col items-center mb-2">
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg">
            <input
              type="text"
              placeholder=""
              className="w-full py-3 sm:py-4 pl-8 pr-12 rounded-md bg-[#F7F7F7] text-base sm:text-lg focus:outline-none"
              style={{ minWidth: 180 }}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl sm:text-2xl text-gray-700">
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
          </div>
          <div className="text-center text-xs sm:text-sm text-gray-700 mt-2 mb-10">
            Search by keyword, company, or NGO
          </div>
        </div>

        <div className="w-full mb-6">
          <ImpactFiltersBar
            tempFilters={tempFilters}
            handleFilterChange={handleFilterChange}
            applyFilters={applyFilters}
            clearFilters={clearFilters}
          />
        </div>

        <div className="mb-8" />

        {(() => {
          const allReports = showMore
            ? [...impactReports, ...additionalReports]
            : impactReports;

          // For filtering, combine title, impact, and filterKeywords
          const filterMap: Record<
            string,
            (r: ImpactReportWithKeywords) => string
          > = {
            esg: (r) => `${r.impact} ${r.filterKeywords}`,
            sdg: (r) => `${r.impact} ${r.filterKeywords}`,
            industries: (r) => `${r.impact} ${r.filterKeywords}`,
            projects: (r) => `${r.title} ${r.filterKeywords}`,
            partners: (r) => `${r.title} ${r.filterKeywords}`,
          };
          const activeFilters = Object.entries(appliedFilters).filter(
            ([, v]) => v
          );
          const filteredReports =
            activeFilters.length === 0
              ? allReports
              : allReports.filter((report) =>
                  activeFilters.every(([key, value]) => {
                    const getField = filterMap[key];
                    const fieldValue = getField ? getField(report) : "";
                    return fieldValue
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  })
                );

          return (
            <>
              <ImpactSection
                reports={filteredReports}
                showMore={showMore}
                onToggleShowMore={() => setShowMore(!showMore)}
              />
              <div className="flex flex-col sm:flex-row justify-end w-full mb-8 gap-4">
                <button className="bg-[#002B5B] hover:bg-[#012960] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow transition-colors cursor-pointer w-full sm:w-auto">
                  Publish Your Own Report
                </button>
              </div>
            </>
          );
        })()}

        <GlobalReachSection />
      </main>
    </div>
  );
};

export default Impact2Page;
