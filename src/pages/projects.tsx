import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Sidebar from "../components/common/Sidebar";

const Projects = () => {
  const router = useRouter();
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
                <path d="M14,6V4H10V6H4V18H20V6M12,7H18V17H6V7H12Z" />
              </svg>
              <h1 className="text-2xl font-bold text-gray-900">
                Current projects
              </h1>
            </div>
            <div className="flex items-center justify-end space-x-4 mb-4">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Ongoing projects progress
                </h2>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg font-semibold text-gray-900">
                          Pathways Out
                        </span>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
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
                          <span>No poverty</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-600">20%</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-teal-600 h-2 rounded-full"
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg font-semibold text-gray-900">
                          BrightMind Alliance
                        </span>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
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
                          <span>Quality Education</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-600">60%</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-teal-600 h-2 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg font-semibold text-gray-900">
                          EarthPulse Movement
                        </span>
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
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
                          <span>Climate Action</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-600">20%</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-teal-600 h-2 rounded-full"
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4">
                  <button
                    className="text-blue-600 font-medium text-sm flex items-center space-x-2 hover:text-blue-700 cursor-pointer"
                    onClick={() => (window.location.href = "/all-projects")}
                  >
                    <span>See all projects</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  New open projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-xl overflow-hidden">
                    <div className="relative h-40">
                      <Image
                        src="/projects/p1.jpg"
                        alt="Pathways Out"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
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
                          <span>Climate action</span>
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2">
                        Pathways Out
                      </h3>
                      <p className="text-sm text-gray-600">
                        Keep your messages short, but make sure they cover
                        everything you need to say.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl overflow-hidden">
                    <div className="relative h-40">
                      <Image
                        src="/projects/p2.jpg"
                        alt="BrightMind Alliance"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
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
                          <span>Reduce inequality</span>
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2">
                        BrightMind Alliance
                      </h3>
                      <p className="text-sm text-gray-600">
                        Keep your messages short, but make sure they cover
                        everything you need to say.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl overflow-hidden">
                    <div className="relative h-40">
                      <Image
                        src="/projects/p3.jpg"
                        alt="EarthPulse Movement"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
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
                          <span>Climate action</span>
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2">
                        EarthPulse Movement
                      </h3>
                      <p className="text-sm text-gray-600">
                        Keep your messages short, but make sure they cover
                        everything you need to say.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4">
                  <button
                    className="text-blue-600 font-medium text-sm flex items-center space-x-2 hover:text-blue-700 cursor-pointer"
                    onClick={() => (window.location.href = "/all-projects")}
                  >
                    <span>See all new projects</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6 ">
              <div className="bg-white rounded-2xl p-8 py-16 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Statistics
                  </h3>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Monthly activity
                </h2>

                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48">
                    <Image
                      src="/projects/chart.png"
                      alt="Monthly activity chart"
                      width={192}
                      height={192}
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: "#148d40ff" }}
                      ></div>
                      <span className="text-sm text-gray-700">Completed</span>
                    </div>
                    <span className="font-semibold text-gray-900">410</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: "#f2da91ff" }}
                      ></div>
                      <span className="text-sm text-gray-700">In progress</span>
                    </div>
                    <span className="font-semibold text-gray-900">560</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: "#7886a3ff" }}
                      ></div>
                      <span className="text-sm text-gray-700">Planning</span>
                    </div>
                    <span className="font-semibold text-gray-900">600</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: "#df6b6bff" }}
                      ></div>
                      <span className="text-sm text-gray-700">Stalled</span>
                    </div>
                    <span className="font-semibold text-gray-900">820</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed top-20 right-8 space-y-4 z-20 max-w-xs">
          <div className="bg-white rounded-lg p-3 shadow-lg border border-gray-100 flex items-center space-x-3">
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/dashboardimg/12.jpg"
                alt="Porsche"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
            <div className="truncate">
              <span className="font-medium text-gray-900">Porsche</span>
              <span className="text-gray-600 text-sm ml-1">messaged you!</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg border border-gray-100 flex items-center space-x-3">
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/projects/m.jpg"
                alt="Green Roots"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
            <div className="truncate">
              <span className="font-medium text-gray-900">Green Roots</span>
              <span className="text-gray-600 text-sm ml-1">
                project has made progress!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
