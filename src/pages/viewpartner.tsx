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

      <div className="flex-1 w-full p-4 sm:p-6" style={contentStyle}>
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
          onTabClick={(tab) => {
            if (tab === "Our Work") router.push("/viewpartner");
            else if (tab === "Partners") router.push("/ourwork-partners");
            else if (tab === "Projects") router.push("/ourwork-projects");
            else if (tab === "News & Stories") router.push("/ourwork-news");
            else if (tab === "About Us") router.push("/ourwork-aboutus");
          }}
        />

        <CompanyKeyFocus />
        <CompanyKPI variant="card" />

        <section className="mt-20 mb-16 px-2 sm:px-0">
          <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">
            Voices from the Field
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Stories and testimonials from the people and communities at the
            heart of our mission.
          </p>

          <div className="flex flex-col gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="images/new.png"
                alt="Testimonial 1"
                className="w-full max-w-[320px] h-[200px] object-cover rounded-xl shadow"
                style={{ background: "#eee" }}
              />
              <blockquote className="text-xl text-gray-900 font-normal md:flex-1 h-full">
                <div>
                  “CARE helped me start my own small farm and feed my family
                  after the floods. I never thought I could become a provider
                  again.”
                  <br />
                  <span className="font-bold block mt-2">
                    – Fatima, CARE beneficiary in Mozambique
                  </span>
                </div>
              </blockquote>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="images/ir1.png"
                alt="Testimonial 2"
                className="w-full max-w-[320px] h-[200px] object-cover rounded-xl shadow"
                style={{ background: "#eee" }}
              />
              <blockquote className="text-xl text-gray-900 font-normal md:flex-1 h-full">
                <div>
                  “Before CARE arrived, we had no access to clean water. Now,
                  not only do we have a well in our village, but we also know
                  how to maintain it. It changed our daily life.”
                  <br />
                  <span className="font-bold block mt-2">
                    – Samuel, community member in northern India
                  </span>
                </div>
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ViewPartnerPage;
