import React, { useEffect, useMemo, useRef, useState } from "react";
import Sidebar from "@/components/common/Sidebar";
import { useRouter } from "next/router";
import CompanyProfileHeader from "@/components/company/CompanyProfileHeader";
import CompanyProfileTabs from "@/components/company/CompanyProfileTabs";
import CompanyKeyFocus from "@/components/company/CompanyKeyFocus";
import CompanyKPI from "@/components/company/CompanyKPI";

const useIsLg = () => {
  const [isLg, setIsLg] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px)").matches
      : false
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => setIsLg(e.matches);
    setIsLg(mql.matches);
    if (mql.addEventListener) mql.addEventListener("change", handler);
    else mql.addListener(handler);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", handler);
      else mql.removeListener(handler);
    };
  }, []);
  return isLg;
};

const ViewPartnerPage = () => {
  const router = useRouter();
  const sidebarWrapRef = useRef<HTMLDivElement | null>(null);
  const [sidebarW, setSidebarW] = useState<number>(64);

  useEffect(() => {
    const measure = () => {
      if (!sidebarWrapRef.current) return;
      const w =
        sidebarWrapRef.current.offsetWidth ||
        sidebarWrapRef.current.getBoundingClientRect().width ||
        64;
      setSidebarW(Math.round(w));
    };
    measure();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", measure);
      const t = window.setTimeout(measure, 200);
      return () => {
        window.removeEventListener("resize", measure);
        window.clearTimeout(t);
      };
    }
  }, []);

  const isLg = useIsLg();
  const contentStyle = useMemo<React.CSSProperties>(() => {
    return isLg ? { marginLeft: sidebarW } : { paddingLeft: sidebarW };
  }, [isLg, sidebarW]);

  return (
    <div className="flex min-h-screen w-full color8 overflow-x-hidden">
      <div ref={sidebarWrapRef} className="shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 w-full p-6" style={contentStyle}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center text-gray-700">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-gray-800">
              CARE / Our Work
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

        <CompanyProfileHeader />
        <CompanyProfileTabs
          activeTab="About Us"
          onTabClick={(tab) => {
            if (tab === "Our Work") {
              router.push("/viewpartner");
            } else if (tab === "Partners") {
              router.push("/ourwork-partners");
            } else if (tab === "Projects") {
              router.push("/ourwork-projects");
            } else if (tab === "News & Stories") {
              router.push("/ourwork-news");
            } else if (tab === "About Us") {
              router.push("/ourwork-aboutus");
            }
          }}
        />

        {(() => {
          const aboutData = {
            whoWeAre: {
              title: "Who We Are",
              text: `CARE is a global humanitarian organization working to end poverty, promote social justice, and create lasting change in the lives of the world’s most vulnerable communities. For over 75 years, we’ve been delivering aid, building local capacity, and championing the rights of women and marginalized groups across more than 100 countries.`,
            },
            ourVision: {
              title: "Our Vision",
              text: `At CARE, we believe that when the most vulnerable are empowered, everyone benefits. That’s why our work places women and girls at the center—because a more just world begins with those most often left behind.`,
            },
            ourMission: {
              title: "Our Mission",
              text: `To save lives, defeat poverty, and achieve social justice by:`,
              bullets: [
                "Responding to humanitarian emergencies with speed and compassion",
                "Supporting community-led development projects",
                "Empowering women and girls as agents of change",
                "Promoting resilience, education, and sustainable livelihoods",
              ],
            },
            coreValues: {
              title: "Our Core Values",
              values: [
                {
                  label: "Respect",
                  desc: "We believe in the inherent dignity and worth of every individual.",
                },
                {
                  label: "Commitment",
                  desc: "We are dedicated to making a lasting difference.",
                },
                {
                  label: "Integrity",
                  desc: "We act honestly, responsibly, and transparently in all we do.",
                },
                {
                  label: "Empowerment",
                  desc: "We invest in people to lead their own futures.",
                },
              ],
            },
            history: {
              title: "Our History",
              text: `CARE was founded in 1945, in the aftermath of World War II, when 22 American organizations came together to send lifesaving food relief—called “CARE Packages”—to war survivors in Europe. What started as a compassionate emergency response quickly grew into a global movement.\nOver the decades, CARE expanded its mission beyond relief, evolving into a leading force for long-term development, gender equity, and social justice. From crisis response in conflict zones to sustainable agriculture and girls’ education, our work adapts to meet the world’s most pressing challenges.\nToday, CARE remains grounded in its founding spirit of solidarity—working hand in hand with communities to build a future where all people can thrive.`,
            },
          };
          const iconCheck = (
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block align-middle text-green-600 mr-2"
            >
              <circle cx="12" cy="12" r="12" fill="#E6F4EA" />
              <path
                d="M8 12.5l2.5 2.5L16 9.5"
                stroke="#2E7D32"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          );
          return (
            <div className="bg-[#FCFBEA] w-full py-10 px-4 md:px-8 lg:px-0 mt-8">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      {aboutData.whoWeAre.title}
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {aboutData.whoWeAre.text}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      {aboutData.ourVision.title}
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {aboutData.ourVision.text}
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl overflow-hidden mb-12">
                  <img
                    src="/ourwork/our1.png"
                    alt="Who We Are"
                    className="w-full h-64 md:h-72 object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-[#F7E38A] rounded-2xl p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-3">
                      {aboutData.ourMission.title}
                    </h3>
                    <p className="mb-4 text-gray-800">
                      {aboutData.ourMission.text}
                    </p>
                    <ul className="space-y-3">
                      {aboutData.ourMission.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start text-base text-gray-700"
                        >
                          {iconCheck}
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#D6F5D6] rounded-2xl p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-3">
                      {aboutData.coreValues.title}
                    </h3>
                    <ul className="space-y-3">
                      {aboutData.coreValues.values.map((v, i) => (
                        <li key={i} className="text-base text-gray-800">
                          <span className="font-bold">{v.label}</span>
                          {" – "}
                          <span>{v.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    {aboutData.history.title}
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                    {aboutData.history.text}
                  </p>
                </div>

                <div className="rounded-3xl overflow-hidden">
                  <img
                    src="/ourwork/our2.png"
                    alt="Our History"
                    className="w-full h-64 md:h-72 object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default ViewPartnerPage;
