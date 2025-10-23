/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import ImpactSection, {
  ImpactReport,
} from "@/components/ImpactReporting/ImpactSection";
import GlobalReachSection from "@/components/ImpactReporting/GlobalReachSection";

const ImpactReportingPage = () => {
  const [showMore, setShowMore] = useState(false);

  const impactReports: ImpactReport[] = [
    {
      id: 1,
      title: "Urban Foodbank Network Q1 2025 Outcome Summary",
      image: "/images/ir1.png",
      impact: "Fed 150,000 individuals through community kitchens.",
    },
    {
      id: 2,
      title: "Water Access Project Spring 2025 Field Report",
      image: "/images/ir2.png",
      impact: "Installed 75 clean-water wells in rural Kenya.",
    },
    {
      id: 3,
      title: "Urban Foodbank Network Q1 2025 Outcome Summary",
      image: "/images/ir1.png",
      impact: "Fed 150,000 individuals through community kitchens.",
    },
    {
      id: 4,
      title: "Urban Foodbank Network Q1 2025 Outcome Summary",
      image: "/images/ir3.png",
      impact: "Fed 150,000 individuals through community kitchens.",
    },
  ];

  const additionalReports: ImpactReport[] = [
    {
      id: 5,
      title: "Education Initiative Q2 2025 Progress Report",
      image: "/images/ir1.png",
      impact: "Provided education to 50,000 children in underserved areas.",
    },
    {
      id: 6,
      title: "Clean Energy Project Summer 2025 Update",
      image: "/images/ir2.png",
      impact: "Installed solar panels in 200 rural communities.",
    },
    {
      id: 7,
      title: "Healthcare Access Initiative Q2 2025 Summary",
      image: "/images/ir3.png",
      impact: "Delivered medical care to 75,000 patients in remote regions.",
    },
    {
      id: 8,
      title: "Environmental Conservation Q2 2025 Report",
      image: "/images/ir1.png",
      impact: "Planted 100,000 trees and restored 500 hectares of forest.",
    },
  ];

  const displayedReports = showMore
    ? [...impactReports, ...additionalReports]
    : impactReports;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FEFDEC" }}>
      <NavBar bgColor="#FEFDEC" />

      <main className="px-6 lg:px-20 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Impact Reports
          </h1>
          <p className="text-xl text-gray-700 mb-12">
            Take a look at all the <span className="font-bold">Good</span> we
            are doing together
          </p>
        </div>

        <ImpactSection
          reports={displayedReports}
          showMore={showMore}
          onToggleShowMore={() => setShowMore(!showMore)}
        />

        <GlobalReachSection />
      </main>

      <Footer />
    </div>
  );
};

export default ImpactReportingPage;
