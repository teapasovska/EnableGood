import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "../components/common/Sidebar";

const AllProjects = () => {
  const [sortBy, setSortBy] = useState("name-ascending");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const projectsData = [
    { id: 1, name: "Aqua Solutions", image: "/projects/p4.png" },
    { id: 2, name: "Blue Ocean Initiative", image: "/projects/p5.png" },
    { id: 3, name: "Coastal Restoration", image: "/projects/p6.jpg" },
    { id: 4, name: "Delta Environmental", image: "/projects/p6.jpg" },
    { id: 5, name: "Echo Green Project", image: "/projects/p6.jpg" },
    { id: 6, name: "Forest Guardian", image: "/projects/p6.jpg" },
    { id: 7, name: "Green Valley Initiative", image: "/projects/p6.jpg" },
    { id: 8, name: "Harbor Clean Up", image: "/projects/p6.jpg" },
    { id: 9, name: "Island Preservation", image: "/projects/p6.jpg" },
    { id: 10, name: "Marine Conservation", image: "/projects/p6.jpg" },
    { id: 11, name: "Nature's Path", image: "/projects/p6.jpg" },
    { id: 12, name: "Ocean Rescue", image: "/projects/p6.jpg" },
    { id: 13, name: "Prairie Restoration", image: "/projects/p4.png" },
    { id: 14, name: "Quantum Clean Energy", image: "/projects/p5.png" },
    { id: 15, name: "River Recovery", image: "/projects/p6.jpg" },
    { id: 16, name: "Solar Solutions", image: "/projects/p4.png" },
    { id: 17, name: "Tree Planting Initiative", image: "/projects/p5.png" },
    { id: 18, name: "Urban Green Spaces", image: "/projects/p6.jpg" },
    { id: 19, name: "Waste Reduction Project", image: "/projects/p4.png" },
    { id: 20, name: "Wetland Protection", image: "/projects/p5.png" },
    { id: 21, name: "Wind Energy Farm", image: "/projects/p6.jpg" },
    { id: 22, name: "Youth Environmental", image: "/projects/p4.png" },
    { id: 23, name: "Zero Waste Campaign", image: "/projects/p5.png" },
    { id: 24, name: "Alpine Conservation", image: "/projects/p6.jpg" },
    { id: 25, name: "Biodiversity Project", image: "/projects/p4.png" },
    { id: 26, name: "Carbon Offset Initiative", image: "/projects/p5.png" },
    { id: 27, name: "Desert Restoration", image: "/projects/p6.jpg" },
    { id: 28, name: "Energy Efficiency", image: "/projects/p4.png" },
    { id: 29, name: "Fish Habitat Recovery", image: "/projects/p5.png" },
    { id: 30, name: "Grassland Protection", image: "/projects/p6.jpg" },
    { id: 31, name: "Habitat Corridor", image: "/projects/p4.png" },
    { id: 32, name: "Indigenous Land Care", image: "/projects/p5.png" },
    { id: 33, name: "Kelp Forest Restoration", image: "/projects/p6.jpg" },
    { id: 34, name: "Land Rehabilitation", image: "/projects/p4.png" },
    { id: 35, name: "Mountain Trail Care", image: "/projects/p5.png" },
    { id: 36, name: "Native Species Recovery", image: "/projects/p6.jpg" },
  ];

  const sortedProjects = [...projectsData].sort((a, b) => {
    if (sortBy === "name-ascending") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "name-descending") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = sortedProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const sortOptions = [
    { value: "name-ascending", label: "Name Ascending" },
    { value: "name-descending", label: "Name Descending" },
  ];

  return (
    <div className="min-h-screen color8 flex">
      <Sidebar />

      <div className="flex-1 ml-16 p-8 px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              <h1 className="text-2xl font-bold text-gray-900">
                All ongoing projects
              </h1>
            </div>
            <div className="flex items-center space-x-4">
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
              <div className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 cursor-pointer">
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

          <div className="mb-6 relative">
            <span className="text-sm text-gray-600 mr-3">Sort by</span>
            <div className="relative inline-block">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center space-x-2"
              >
                <span>
                  {sortOptions.find((option) => option.value === sortBy)?.label}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transform transition-transform ${
                    showSortDropdown ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </button>

              {showSortDropdown && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 min-w-full">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                        sortBy === option.value
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="relative h-40">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
                      </svg>
                      <span>Badge</span>
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Keep your messages short, but make sure they cover
                    everything you need to say.
                  </p>
                  <button
                    className="w-full color1 text-white py-2 px-4 rounded-lg text-sm font-medium cursor-pointer"
                    onClick={() => (window.location.href = "/greenroots")}
                  >
                    See full project
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 mb-8">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg font-medium cursor-pointer ${
                    currentPage === index + 1
                      ? "bg-teal-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
