import React, { useState, useEffect } from "react";
import Image from "next/image";
import Sidebar from "@/components/common/Sidebar";
import { useRouter } from "next/router";

const staticProfiles = [
  {
    id: "patagonia1",
    name: "Company name",
    image: "/projects/p4.png",
    badge: "ESG",
    description:
      "Keep your messages short, but make sure they cover everything you need to say.",
  },
  {
    id: "cocacola1",
    name: "Company name",
    image: "/projects/p5.png",
    badge: "Badge",
    description:
      "Keep your messages short, but make sure they cover everything you need to say.",
  },
  {
    id: "patagonia2",
    name: "Company name",
    image: "/projects/p4.png",
    badge: "Badge",
    description:
      "Keep your messages short, but make sure they cover everything you need to say.",
  },
  {
    id: "cocacola2",
    name: "Company name",
    image: "/projects/p5.png",
    badge: "Badge",
    description:
      "Keep your messages short, but make sure they cover everything you need to say.",
  },
];

const companies = [
  {
    id: 1,
    name: "TOBLERONE",
    image: "/projects/toblerone.png",
    badge: "Saved",
    description: "This is your saved project.",
  },
  {
    id: 2,
    name: "COMPANY",
    image: "/projects/p4.png",
    badge: "Saved",
    description: "This is your saved project.",
  },
  {
    id: 3,
    name: "BUSINESS",
    image: "/projects/p5.png",
    badge: "Saved",
    description: "This is your saved project.",
  },
  {
    id: 4,
    name: "ENTERPRISE",
    image: "/dashboardimg/12.jpg",
    badge: "Saved",
    description: "This is your saved project.",
  },
  {
    id: 5,
    name: "CORPORATION",
    image: "/dashboardimg/6.jpg",
    badge: "Saved",
    description: "This is your saved project.",
  },
];

const SavedProfiles = ({ extraProfiles = [] }) => {
  const [dynamicSaved, setDynamicSaved] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem("savedProfiles");
    if (stored) {
      try {
        setDynamicSaved(JSON.parse(stored));
      } catch {}
    }
  }, []);

  // Map saved ids to company objects
  // Show dynamically saved cards first, most recent first
  const dynamicCards = [...dynamicSaved]
    .reverse()
    .map((id) => companies.find((c) => c.id === id))
    .filter((c): c is (typeof companies)[number] => Boolean(c));
  const allProfiles = [...dynamicCards, ...staticProfiles, ...extraProfiles];
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allProfiles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProfiles = allProfiles.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="flex min-h-screen bg-[#FFFDEB]">
      <Sidebar />
      <div className="flex-1 p-20 px-30">
        <div className="flex items-center mb-8">
          <svg
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 24 24"
            className="mr-2"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              stroke="#1A2B4A"
              strokeWidth="2"
            />
          </svg>
          <span className="text-xl font-semibold">Your saved Profiles</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {currentProfiles.map((profile, idx) =>
            profile ? (
              <div
                key={String(profile.id) + "-" + idx}
                className="bg-white rounded-xl shadow-lg p-0 overflow-hidden flex flex-col"
                style={{ minWidth: 320 }}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-contain bg-white"
                  />
                  <span
                    className="absolute left-3 bottom-3 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded"
                    style={{ zIndex: 2 }}
                  >
                    {profile.badge}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="font-bold text-lg mb-1">{profile.name}</div>
                  <div className="text-gray-600 text-sm mb-4">
                    {profile.description}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <button className="bg-[#007080] text-white px-6 py-2 rounded-full font-medium">
                      Connect
                    </button>
                    <button className="border border-gray-300 px-6 py-2 rounded-full font-medium">
                      Not for me
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )}
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
  );
};

export default SavedProfiles;
