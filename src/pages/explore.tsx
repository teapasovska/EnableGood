import React, { useState } from "react";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import FiltersBar from "@/components/explore/FiltersBar";
import FeaturedProjectCard from "@/components/explore/FeaturedProjectCard";
import ProjectCard from "@/components/explore/ProjectCard";
import { useRouter } from "next/router";

const ExplorePage = () => {
  const router = useRouter();
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
  ];

  const filteredProjects = projects.slice(1).filter((project) => {
    const { esg, sdg, industries, projects, partners } = appliedFilters;
    const matchesESG = !esg || project.categories.includes(esg);
    const matchesSDG = !sdg || project.categories.includes(sdg);
    const matchesIndustry =
      !industries || project.categories.includes(industries);
    const matchesProject = !projects || project.title.includes(projects);
    const matchesPartner =
      !partners || project.partners.some((p) => p.name.includes(partners));
    return (
      matchesESG &&
      matchesSDG &&
      matchesIndustry &&
      matchesProject &&
      matchesPartner
    );
  });

  const handleFilterChange = (key: string, value: string) => {
    setTempFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    setAppliedFilters(tempFilters);
  };

  const clearFilters = () => {
    setTempFilters({
      esg: "",
      sdg: "",
      industries: "",
      projects: "",
      partners: "",
    });
    setAppliedFilters({
      esg: "",
      sdg: "",
      industries: "",
      projects: "",
      partners: "",
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FEFDEC" }}>
      <NavBar bgColor="#FEFDEC" />
      <main className="px-6 lg:px-20 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Good Things Happen When We Team Up
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            From planting forests to empowering communities — explore real
            stories of companies and NGOs making impact happen, together.
          </p>
        </div>

        <FiltersBar
          tempFilters={tempFilters}
          handleFilterChange={handleFilterChange}
          applyFilters={applyFilters}
          clearFilters={clearFilters}
        />

        <FeaturedProjectCard
          project={projects[0]}
          onViewPartner={() => router.push("/company-profile")}
        />
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => router.push("/project")}
                />
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                No projects match the selected filters.
              </p>
            )}
          </div>
          <div className="text-center mb-16">
            <button
              onClick={() => router.push("/signup")}
              className="text-blue-900 hover:text-blue-700 font-medium text-lg underline cursor-pointer"
            >
              See more
            </button>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Got a project in mind?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Or just curious how you could team up for good? Let&#39;s explore
            what&#39;s possible — together.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 border-2 border-gray-400 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors cursor-pointer">
              Learn more
            </button>
            <button
              onClick={() => router.push("/joinnow")}
              className="px-8 py-3 text-white rounded-full font-medium transition-colors cursor-pointer"
              style={{ backgroundColor: "#012960" }}
            >
              Join Now
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExplorePage;
