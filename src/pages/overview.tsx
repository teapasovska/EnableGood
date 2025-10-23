import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import Sidebar from "@/components/common/Sidebar";
import IntroSection from "@/components/LearningHub/IntroSection";
import PathToImpactSection from "@/components/LearningHub/PathToImpactSection";
import RecommendedSection from "@/components/LearningHub/RecommendedSection";
import router from "next/dist/shared/lib/router/router";

const OverviewPage = () => {
  const [activeTab, setActiveTab] = React.useState("Format");
  const router = useRouter();

  const formatTabs = [
    { id: "Format", label: "Format", active: true },
    { id: "Guides Project Type", label: "Guides Project Type" },
    { id: "Videos", label: "Videos" },
    { id: "Tools", label: "Tools" },
    { id: "Explainers", label: "Explainers" },
  ];
  const forTabs = [
    { id: "For", label: "For", active: true },
    { id: "Companies", label: "Companies" },
    { id: "NGOs", label: "NGOs" },
    { id: "Just exploring", label: "Just exploring" },
  ];
  const esgTabs = [
    { id: "ESG Pillar", label: "ESG Pillar", active: true },
    { id: "Environmental", label: "Environmental" },
    { id: "Social", label: "Social" },
    { id: "Governance", label: "Governance" },
  ];

  const articles = [
    {
      id: 1,
      title: "ESG Writing Boosts What Really Matters",
      image: "/images/lh3.png",
      author: { name: "Sarah Johnson", avatar: "/images/hp2.jpg" },
    },
    {
      id: 2,
      title: "Building Sustainable Communities",
      image: "/images/lh4.png",
      author: { name: "Michael Chen", avatar: "/images/hp1.jpg" },
    },
    {
      id: 3,
      title: "Impact Measurement Best Practices",
      image: "/images/lh5.png",
      author: { name: "Emily Rodriguez", avatar: "/images/hp2.jpg" },
    },
    {
      id: 4,
      title: "How to Align ESG With Strategy",
      image: "/images/videopic.png",
      author: { name: "Raj Patel", avatar: "/images/hp1.jpg" },
    },
    {
      id: 5,
      title: "Governance: From Policy to Practice",
      image: "/dashboardimg/4.jpg",
      author: { name: "Lina Müller", avatar: "/images/hp2.jpg" },
    },
  ];

  const [carouselStart, setCarouselStart] = React.useState(0);
  const cardsPerPage = 3;

  const maxStart = Math.max(0, articles.length - cardsPerPage);
  const canGoLeft = carouselStart > 0;
  const canGoRight = carouselStart < maxStart;

  const visibleArticles = articles.slice(
    carouselStart,
    carouselStart + cardsPerPage
  );

  const handlePrev = () => {
    if (!canGoLeft) return;
    setCarouselStart((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    if (!canGoRight) return;
    setCarouselStart((prev) => Math.min(maxStart, prev + 1));
  };

  return (
    <>
      <Head>
        <title>Project Overview</title>
      </Head>
      <div className="flex flex-col md:flex-row min-h-screen color8">
        <Sidebar />
        <div className="flex-1 w-full md:ml-16 p-2 sm:p-4 md:p-6 pl-20 md:pl-0 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center text-gray-700">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                </svg>
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Project Overview
              </h1>
            </div>
            <div className="flex items-center justify-end space-x-2 sm:space-x-4 mb-4 sm:mb-0">
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

          <IntroSection />
          <PathToImpactSection
            formatTabs={formatTabs}
            forTabs={forTabs}
            esgTabs={esgTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <RecommendedSection
            articles={visibleArticles}
            withGradient={false}
            showArrows={true}
            onPrev={handlePrev}
            onNext={handleNext}
            canGoLeft={canGoLeft}
            canGoRight={canGoRight}
          />
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
