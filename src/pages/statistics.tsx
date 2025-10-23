import React from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/common/Sidebar";

const StatisticsPage = () => {
  const router = useRouter();
  return (
    <div className="flex h-min-screen bg-[#FEFDEC]">
      <Sidebar />
      <div className="flex-1 ml-16 p-20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22,21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21M16,8H18V15H16V8M12,2H14V15H12V2M8,9H10V15H8V9M4,11H6V15H4V11Z" />
            </svg>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Statistics
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="font-bold text-lg mb-2">Statistics</h2>
              <div className="font-semibold text-xl mb-4">
                Monthly investment statistics
              </div>

              <div className="h-64 flex items-center justify-center">
                <img
                  src="/projects/graph.png"
                  alt="Monthly investment statistics graph"
                  className="h-full object-contain"
                />
              </div>
              <div className="flex gap-6 mt-6 items-center">
                <span className="flex items-center gap-1">
                  <span className="w-6 h-6 rounded-lg flex items-center justify-center bg-[#012960]">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 10.5L9 14.5L15 7.5"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-bold text-[#012960] text-base">
                    All ESG goals
                  </span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-6 h-6 rounded-lg border-2 border-[#14532D] flex items-center justify-center"></span>
                  <span className="font-medium text-[#14532D] text-base">
                    Environmental goals
                  </span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-6 h-6 rounded-lg border-2 border-[#64748B] flex items-center justify-center"></span>
                  <span className="font-medium text-[#64748B] text-base">
                    Social goals
                  </span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-6 h-6 rounded-lg border-2 border-[#F87171] flex items-center justify-center"></span>
                  <span className="font-medium text-[#F87171] text-base">
                    Governance goals
                  </span>
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex gap-4 mb-4 bg-[#012960] rounded-lg px-4 py-3 text-white font-bold text-lg items-center">
                <span className="flex-1 flex items-center">
                  Company{" "}
                  <svg
                    className="ml-1"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="w-32 flex items-center">
                  KPI 1{" "}
                  <svg
                    className="ml-1"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="w-32 flex items-center">
                  KPI 2{" "}
                  <svg
                    className="ml-1"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="w-32 flex items-center">
                  KPI 3{" "}
                  <svg
                    className="ml-1"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              {[
                { kpi1: 60, kpi2: 20, kpi3: 80 },
                { kpi1: 60, kpi2: 0, kpi3: 0 },
                { kpi1: 40, kpi2: 0, kpi3: 60 },
                { kpi1: 100, kpi2: 20, kpi3: 20 },
                { kpi1: 20, kpi2: 40, kpi3: 20 },
                { kpi1: 40, kpi2: 80, kpi3: 20 },
                { kpi1: 20, kpi2: 40, kpi3: 60 },
              ].map((row, i) => (
                <div key={i} className="flex gap-4 items-center mb-4">
                  <div className="flex-1 flex items-center gap-2">
                    <div className="bg-gray-100 rounded p-1">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="24"
                          height="24"
                          rx="4"
                          fill="#012960"
                          fillOpacity="0.08"
                        />
                        <path
                          d="M8 12h8M8 16h8M8 8h8"
                          stroke="#012960"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-black">Youtube</div>
                      <div className="text-xs text-gray-500">
                        Project description
                      </div>
                    </div>
                  </div>

                  <div className="w-32 flex items-center gap-2">
                    <span className="font-semibold text-black w-10">
                      {row.kpi1}%
                    </span>
                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-3 rounded-full"
                        style={{
                          width: `${row.kpi1}%`,
                          background: row.kpi1 === 100 ? "#F87171" : "#22C55E",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="w-32 flex items-center gap-2">
                    <span className="font-semibold text-black w-10">
                      {row.kpi2}%
                    </span>
                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-3 rounded-full"
                        style={{
                          width: `${row.kpi2}%`,
                          background:
                            row.kpi2 === 20 && row.kpi1 === 100
                              ? "#FCA5A5"
                              : "#60A5FA",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="w-32 flex items-center gap-2">
                    <span className="font-semibold text-black w-10">
                      {row.kpi3}%
                    </span>
                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-3 rounded-full"
                        style={{ width: `${row.kpi3}%`, background: "#22C55E" }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-4 text-[#012960] font-bold cursor-pointer flex items-center gap-2 hover:underline">
                See all projects{" "}
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path
                    d="M5 10H15M15 10L12 7M15 10L12 13"
                    stroke="#012960"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="font-bold mb-2">Statistics</div>
              <div className="font-semibold mb-2">Monthly activity</div>
              <div className="flex items-center justify-between h-48">
                <div className="flex-shrink-0 flex items-center justify-center h-full">
                  <img
                    src="/projects/chart.png"
                    alt="Monthly activity chart"
                    className="h-44 w-44 object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2 ml-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#15803D] inline-block"></span>
                    <span className="font-medium text-gray-800 text-sm">
                      Completed
                    </span>
                    <span className="font-bold text-gray-900 ml-1 text-base">
                      410
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FDE68A] inline-block border border-[#FDE68A]"></span>
                    <span className="font-medium text-gray-800 text-sm">
                      In progress
                    </span>
                    <span className="font-bold text-gray-900 ml-1 text-base">
                      560
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#64748B] inline-block"></span>
                    <span className="font-medium text-gray-800 text-sm">
                      Planning
                    </span>
                    <span className="font-bold text-gray-900 ml-1 text-base">
                      600
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#F87171] inline-block"></span>
                    <span className="font-medium text-gray-800 text-sm">
                      Stalled
                    </span>
                    <span className="font-bold text-gray-900 ml-1 text-base">
                      820
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="font-bold mb-2 text-lg text-[#23223A]">
                Community
              </div>
              <div className="font-extrabold mb-4 text-2xl text-[#23223A]">
                Reviews qualification
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="rounded-xl bg-[#D17867] w-12 h-10"></span>
                <span className="rounded-xl bg-[#FDE68A] w-32 h-10"></span>
                <span className="rounded-xl bg-[#4B963A] w-72 h-10"></span>
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex flex-col items-center flex-1">
                  <span className="font-semibold text-[#23223A] mb-1">
                    Negative
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full bg-[#D17867] inline-block"></span>
                    <span className="font-extrabold text-lg text-[#23223A]">
                      16
                    </span>
                  </span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <span className="font-semibold text-[#23223A] mb-1">
                    Neutral
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full bg-[#FDE68A] inline-block"></span>
                    <span className="font-extrabold text-lg text-[#23223A]">
                      45
                    </span>
                  </span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <span className="font-semibold text-[#23223A] mb-1">
                    Positive
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full bg-[#4B963A] inline-block"></span>
                    <span className="font-extrabold text-lg text-[#23223A]">
                      2,113
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="font-bold mb-2">ESG goals investment</div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/projects/circlesgraph.png"
                  alt="ESG goals investment chart"
                  className="w-72 h-48 object-contain mb-2"
                />
                <div className="flex gap-8 mt-2 items-center">
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#64748B] inline-block"></span>
                    <span className="font-medium text-[#64748B] text-xs">
                      Social
                    </span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#4B963A] inline-block"></span>
                    <span className="font-medium text-[#4B963A] text-xs">
                      Environmental
                    </span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#D17867] inline-block"></span>
                    <span className="font-medium text-[#D17867] text-xs">
                      Governance
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
              <div className="font-bold mb-2">See full report</div>
              <div className="text-sm text-gray-600 mb-2">
                Download a full report of all statistics from the previous year
                in any format that suits your needs
              </div>
              <button className="bg-[#012960] text-white font-semibold py-2 px-6 rounded-full cursor-pointer hover:bg-blue-900 transition flex items-center justify-center gap-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path
                    d="M10 3V13M10 13L6 9M10 13L14 9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="4"
                    y="15"
                    width="12"
                    height="2"
                    rx="1"
                    fill="white"
                  />
                </svg>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
