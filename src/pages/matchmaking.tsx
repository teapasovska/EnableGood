import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "@/components/common/Sidebar";

interface Company {
  id: number;
  name: string;
  image: string;
  matchingRate: number;
}

const Matchmaking = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedProfiles, setSavedProfiles] = useState<number[]>([]);

  // Load saved profiles from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("savedProfiles");
    if (stored) {
      try {
        setSavedProfiles(JSON.parse(stored));
      } catch {}
    }
  }, []);

  // Save to localStorage whenever savedProfiles changes
  useEffect(() => {
    localStorage.setItem("savedProfiles", JSON.stringify(savedProfiles));
  }, [savedProfiles]);

  const companies: Company[] = [
    {
      id: 1,
      name: "TOBLERONE",
      image: "/projects/toblerone.png",
      matchingRate: 35,
    },
    {
      id: 2,
      name: "COMPANY",
      image: "/projects/p4.png",
      matchingRate: 67,
    },
    {
      id: 3,
      name: "BUSINESS",
      image: "/projects/p5.png",
      matchingRate: 82,
    },
    {
      id: 4,
      name: "ENTERPRISE",
      image: "/dashboardimg/12.jpg",
      matchingRate: 45,
    },
    {
      id: 5,
      name: "CORPORATION",
      image: "/dashboardimg/6.jpg",
      matchingRate: 73,
    },
  ];

  const currentCompany = companies[currentIndex];

  const swipeLeft = () => {
    setCurrentIndex((prev) => (prev + 1) % companies.length);
  };

  const swipeRight = () => {
    setCurrentIndex((prev) => (prev - 1 + companies.length) % companies.length);
  };

  const handleSaveProfile = () => {
    if (savedProfiles.includes(currentCompany.id)) {
      setSavedProfiles(savedProfiles.filter((id) => id !== currentCompany.id));
    } else {
      setSavedProfiles([...savedProfiles, currentCompany.id]);
    }
  };

  const [helpOpen, setHelpOpen] = useState(false);

  const handleSeeProfile = () => {
    router.push("/viewpartner");
  };

  const handleContact = () => {
    router.push("/request");
  };

  const router = useRouter();
  return (
    <>
      <Head>
        <title>Matchmaking Hub - Your App</title>
        <meta name="description" content="Matchmaking Hub page" />
      </Head>

      <div className="flex flex-col md:flex-row min-h-screen color8">
        <Sidebar />
        <div className="flex-1 w-full md:ml-16 p-2 sm:p-4 md:p-6 pl-20 md:pl-0 flex flex-col transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center text-gray-700">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12,5.5A3,3 0 0,1 15,2.5A3,3 0 0,1 18,5.5A3,3 0 0,1 15,8.5A3,3 0 0,1 12,5.5M5,8A2.5,2.5 0 0,1 7.5,5.5A2.5,2.5 0 0,1 10,8A2.5,2.5 0 0,1 7.5,10.5A2.5,2.5 0 0,1 5,8M17.5,8A2.5,2.5 0 0,1 20,5.5A2.5,2.5 0 0,1 22.5,8A2.5,2.5 0 0,1 20,10.5A2.5,2.5 0 0,1 17.5,8M15.94,13C16.94,14.56 17.5,16.21 17.5,18V22H6.5V18C6.5,16.21 7.06,14.56 8.06,13H15.94M2.5,14H5.5V22H0.5V18C0.5,16.35 1.15,14.86 2.5,14M18.5,14H21.5C22.85,14.86 23.5,16.35 23.5,18V22H18.5V14Z" />
                </svg>
              </div>
              <h1 className="text-2xl font-semibold text-gray-800">
                Matchmaking Hub
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
          <div className="text-start mb-8 sm:mb-16">
            <p className="text-gray-600 text-base sm:text-lg">
              Our intelligent system matches you with aligned partners based on
              shared values, goals and capacity.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <span
              className="text-gray-700 font-medium cursor-pointer"
              onClick={() => (window.location.href = "/saved-profiles")}
            >
              See Saved Profiles
            </span>
            <button
              onClick={handleSaveProfile}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors font-medium cursor-pointer ${
                savedProfiles.includes(currentCompany.id)
                  ? "color2 text-white"
                  : "bg-white text-color2 border border-color2"
              } group hover:bg-white hover:text-color2 hover:border-color2`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={
                  savedProfiles.includes(currentCompany.id) ? "white" : "none"
                }
                stroke={
                  savedProfiles.includes(currentCompany.id)
                    ? "white"
                    : "#1A2B4A"
                }
                strokeWidth="2"
                className="group-hover:fill-color2 group-hover:stroke-color2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span>
                {savedProfiles.includes(currentCompany.id)
                  ? "Saved"
                  : "Save for Later"}
              </span>
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-8 md:mb-12">
            <button
              onClick={swipeRight}
              className="flex flex-col items-center space-y-2 p-2 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Swipe Left</span>
            </button>
            <div className="relative flex flex-col items-center w-60 h-60 xs:w-72 xs:h-72 sm:w-80 sm:h-80">
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-lg relative flex items-center justify-center bg-white">
                <div className="w-48 h-48 xs:w-60 xs:h-60 sm:w-72 sm:h-72 flex items-center justify-center">
                  <Image
                    src={currentCompany.image}
                    alt="Company image"
                    fill
                    className="object-contain"
                    style={{ objectPosition: "center" }}
                  />
                </div>
                <div
                  className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none"
                  style={{ height: "40%" }}
                >
                  <svg
                    viewBox="0 0 320 140"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    style={{ display: "block", height: "100%" }}
                  >
                    <path
                      d="M0,0 Q40,110 80,80 Q120,50 160,110 Q200,170 240,80 Q280,0 320,80 L320,140 L0,140 Z"
                      fill="#ffe066"
                    />
                  </svg>
                  <div
                    className="absolute w-full flex flex-col items-center justify-center"
                    style={{ top: 0, left: 0, height: "100%" }}
                  >
                    <span
                      className="text-2xl xs:text-3xl sm:text-4xl font-bold text-black"
                      style={{ marginTop: 16 }}
                    >
                      {currentCompany.matchingRate}%
                    </span>
                    <span className="text-base xs:text-lg font-medium text-black">
                      Matching Rate
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={swipeLeft}
              className="flex flex-col items-center space-y-2 p-2 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Swipe Right</span>
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <button
              onClick={handleSeeProfile}
              className="color2 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              See Profile
            </button>
            <button
              onClick={handleContact}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors font-medium"
            >
              Contact
            </button>
          </div>
          <div className="flex justify-center mt-6 xs:mt-8 space-x-2">
            {companies.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "color2" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {!helpOpen && (
            <button
              className="fixed bottom-4 right-4 xs:bottom-8 xs:right-8 color2 text-white px-6 py-3 xs:px-8 xs:py-4 rounded-xl flex items-center gap-3 shadow-lg z-50 cursor-pointer text-base xs:text-lg sm:text-xl font-semibold"
              onClick={() => setHelpOpen(true)}
            >
              Need help?
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  d="M17.5 7.5L16.5 6.5M12 3V5M6.5 6.5L7.5 7.5M3 12H5M19 12H21M12 19V21M16.5 17.5L17.5 16.5M7.5 16.5L6.5 17.5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="12" r="7" stroke="#fff" strokeWidth="2" />
              </svg>
            </button>
          )}
          {helpOpen && (
            <div
              className="fixed bottom-24 right-2 xs:bottom-28 xs:right-8 bg-white border-2 border-color2 rounded-2xl shadow-xl p-4 xs:p-6 w-80 xs:w-96 z-50"
              style={{ minHeight: "120px" }}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400 text-lg">
                  What are you looking for?
                </span>
                <button
                  onClick={() => setHelpOpen(false)}
                  className="text-gray-400 hover:text-color2 text-2xl font-bold cursor-pointer"
                >
                  &times;
                </button>
              </div>
              <div className="flex gap-3 mb-4">
                <button className="border-2 border-color2 rounded-lg w-10 h-10 flex items-center justify-center">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <rect
                      x="9"
                      y="4"
                      width="2"
                      height="12"
                      rx="1"
                      fill="#1A2B4A"
                    />
                    <rect
                      x="4"
                      y="9"
                      width="12"
                      height="2"
                      rx="1"
                      fill="#1A2B4A"
                    />
                  </svg>
                </button>
                <button className="border-2 border-color2 rounded-lg w-10 h-10 flex items-center justify-center">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <circle
                      cx="9"
                      cy="9"
                      r="6.5"
                      stroke="#1A2B4A"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="14.5"
                      y="14.5"
                      width="3"
                      height="1.5"
                      rx="0.75"
                      transform="rotate(45 14.5 14.5)"
                      fill="#1A2B4A"
                    />
                  </svg>
                </button>
                <button className="border-2 border-color2 rounded-lg w-10 h-10 flex items-center justify-center">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <rect
                      x="4"
                      y="4"
                      width="12"
                      height="12"
                      rx="2"
                      stroke="#1A2B4A"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M7 10.5L9 12.5L13 8.5"
                      stroke="#1A2B4A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <button className="border-2 border-color2 rounded-lg w-10 h-10 flex items-center justify-center">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <rect
                      x="3"
                      y="5"
                      width="14"
                      height="10"
                      rx="2"
                      stroke="#1A2B4A"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="6"
                      y="8"
                      width="2"
                      height="2"
                      rx="1"
                      fill="#1A2B4A"
                    />
                    <rect
                      x="10"
                      y="8"
                      width="4"
                      height="2"
                      rx="1"
                      fill="#1A2B4A"
                    />
                  </svg>
                </button>
                <button className="color2 rounded-lg w-10 h-10 flex items-center justify-center ml-auto">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path
                      d="M5 10H15M15 10L12 7M15 10L12 13"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Matchmaking;
