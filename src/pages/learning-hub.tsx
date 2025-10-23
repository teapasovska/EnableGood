import React, { useState } from "react";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import Testimonials from "@/components/HomePage/Testimonials";
import Image from "next/image";
import { useRouter } from "next/router";
import IntroSection from "@/components/LearningHub/IntroSection";
import PathToImpactSection from "@/components/LearningHub/PathToImpactSection";
import RecommendedSection from "@/components/LearningHub/RecommendedSection";

const LearningHubPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Format");

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
      author: {
        name: "Sarah Johnson",
        avatar: "/images/hp2.jpg",
      },
    },
    {
      id: 2,
      title: "Building Sustainable Communities",
      image: "/images/lh4.png",
      author: {
        name: "Michael Chen",
        avatar: "/images/hp1.jpg",
      },
    },
    {
      id: 3,
      title: "Impact Measurement Best Practices",
      image: "/images/lh5.png",
      author: {
        name: "Emily Rodriguez",
        avatar: "/images/hp2.jpg",
      },
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FEFDEC" }}>
      <NavBar bgColor="#FEFDEC" />

      <main className="px-6 lg:px-20 py-12">
        <IntroSection />
        <PathToImpactSection
          formatTabs={formatTabs}
          forTabs={forTabs}
          esgTabs={esgTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <RecommendedSection
          articles={articles}
          onSeeMore={() => router.push("/signup")}
          withGradient={true}
        />
        <div className="-mx-6 lg:-mx-20 mb-16 pt-26">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div
              className="pt-16 px-12 pb-12 text-center flex flex-col justify-center"
              style={{ backgroundColor: "#f2e390" }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Put Your Learning into Practice?
              </h3>
              <p className="text-gray-700 mb-12 text-lg">
                Join impact Enable Good and be part of a growing community
                creating meaningful change through strategic partnerships.
              </p>
              <button
                onClick={() => router.push("/joinnow")}
                className="px-8 py-4 text-white rounded-full font-semibold transition-colors text-lg mx-auto"
                style={{ backgroundColor: "#0a6974" }}
              >
                Join Now
              </button>
            </div>
            <div className="relative h-64 lg:h-auto">
              <Image
                src="/images/lh2.png"
                alt="Learning Community"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default LearningHubPage;
