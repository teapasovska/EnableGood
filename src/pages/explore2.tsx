import React, { useState } from "react";
import { useRouter } from "next/router";

import Sidebar from "@/components/common/Sidebar";
import FiltersBar from "@/components/explore/FiltersBar";
import FeaturedProjectCard from "@/components/explore/FeaturedProjectCard";
import ProjectCard from "@/components/explore/ProjectCard";

const ExplorePage2 = () => {
  const [appliedFilters, setAppliedFilters] = useState({
    esg: "",
    sdg: "",
    industries: "",
    projects: "",
    partners: "",
  });
  const [tempFilters, setTempFilters] = useState({
    esg: "",
    sdg: "",
    industries: "",
    projects: "",
    partners: "",
  });

  const projects = [
    {
      id: 1,
      title: "Reforesting Kenya: A Model for Scalable Impact",
      categories: ["Environmental", "Climate action", "Completed"],
      impact: {
        trees: "500K TREES",
        jobs: "300 JOBS",
        water: "CLEAN WATER",
      },
      description: "Over 500K trees planted with 3 cross-sector partners",
      partners: [
        { name: "Coca Cola", logo: "/images/cc.png" },
        { name: "Save the Children", logo: "/images/cc.png" },
        { name: "Patagonia", logo: "/images/cc.png" },
      ],
      image: "/images/videopic.png",
      video: true,
    },
    {
      id: 2,
      title: "Solar Classrooms for Remote Peru",
      categories: ["Environmental", "Social", "Peru"],
      description:
        "Off-grid solar energy systems installed in 25 schools across rural Andes",
      partners: [
        { name: "Partner 1", logo: "/images/cc.png" },
        { name: "Partner 2", logo: "/images/cc.png" },
      ],
      image: "/images/hp1.jpg",
    },
    {
      id: 3,
      title: "Clean Water Access in Ghana: Innovation through Partnership",
      categories: ["Environmental", "Completed", "Ghana"],
      description:
        "Smart filtration and rainwater systems deployed in rural Ghana together",
      partners: [
        { name: "Partner 1", logo: "/images/cc.png" },
        { name: "Partner 2", logo: "/images/cc.png" },
      ],
      image: "/images/hp2.jpg",
    },
    {
      id: 4,
      title: "Inclusive Tech Labs in Serbia: Digital Skills for All",
      categories: ["Governance", "Ongoing", "Serbia"],
      description:
        "Tech education centers launched for underserved youth and person with disabilities",
      partners: [
        { name: "Partner 1", logo: "/images/cc.png" },
        { name: "Partner 2", logo: "/images/cc.png" },
      ],
      image: "/images/hp1.jpg",
    },
    {
      id: 5,
      title: "Women in Tech: Empowering Rural India",
      categories: ["Social", "Ongoing", "India"],
      description:
        "Digital literacy and entrepreneurship programs for women in rural India.",
      partners: [
        { name: "Partner 1", logo: "/images/cc.png" },
        { name: "Partner 2", logo: "/images/cc.png" },
      ],
      image: "/images/hp2.jpg",
    },
  ];

  const filteredProjects = projects.slice(1).filter((project) => {
    const {
      esg,
      sdg,
      industries,
      projects: projFilter,
      partners,
    } = appliedFilters;

    const lc = (s: string) => s.toLowerCase();

    const matchesESG =
      !esg || project.categories.some((c) => lc(c) === lc(esg));

    const matchesSDG =
      !sdg || project.categories.some((c) => lc(c) === lc(sdg));

    const matchesIndustry =
      !industries || project.categories.some((c) => lc(c) === lc(industries));

    const matchesProjectTitle =
      !projFilter || lc(project.title).includes(lc(projFilter));

    const matchesPartner =
      !partners ||
      project.partners.some((p) => lc(p.name).includes(lc(partners)));

    return (
      matchesESG &&
      matchesSDG &&
      matchesIndustry &&
      matchesProjectTitle &&
      matchesPartner
    );
  });

  const handleFilterChange = (key: string, value: string) => {
    setTempFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    setAppliedFilters(tempFilters);
    setCarouselIndex(0);
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
    setCarouselIndex(0);
  };

  const [carouselIndex, setCarouselIndex] = useState(0);
  const cardsToShow = 3;
  const maxIndex = Math.max(0, filteredProjects.length - cardsToShow);

  const handlePrev = () => setCarouselIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setCarouselIndex((i) => Math.min(maxIndex, i + 1));

  const router = useRouter();
  return (
    <div
      className="flex min-h-screen color8"
      style={{ backgroundColor: "#FEFDEC" }}
    >
      <Sidebar />
      <div className="flex-1 ml-16 p-6 md:p-10 lg:p-12">
        <main>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center p-1 cursor-pointer text-[#012960]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3" />
                </svg>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Explore projects
              </h1>
            </div>
            <div className="flex items-center gap-4">
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

          <FiltersBar
            tempFilters={tempFilters}
            handleFilterChange={handleFilterChange}
            applyFilters={applyFilters}
            clearFilters={clearFilters}
          />

          <FeaturedProjectCard
            project={projects[0]}
            onViewPartner={() => router.push("/viewpartner")}
          />

          <div className="relative">
            <div className="flex items-center">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow mr-2 disabled:opacity-30"
                onClick={handlePrev}
                disabled={carouselIndex === 0}
                aria-label="Previous"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="overflow-hidden flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects
                    .slice(carouselIndex, carouselIndex + cardsToShow)
                    .map((project) => (
                      <div key={project.id}>
                        <ProjectCard
                          project={project}
                          noGradient
                          onClick={() => router.push("/greenroots")}
                        />
                      </div>
                    ))}
                </div>
              </div>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow ml-2 disabled:opacity-30"
                onClick={handleNext}
                disabled={carouselIndex === maxIndex}
                aria-label="Next"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {filteredProjects.length === 0 && (
              <p className="text-center text-gray-600 col-span-full mt-8">
                No projects match the selected filters.
              </p>
            )}
          </div>

          <div className="flex flex-col items-center mt-16 mb-8">
            <h2 className="uppercase tracking-widest text-xs font-semibold text-gray-700 mb-8">
              Changemakers around the globe
            </h2>
            <img
              src="/images/logos3.png"
              alt="Changemaker logos"
              className="w-auto max-w-full h-12 md:h-16 lg:h-20"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ExplorePage2;
