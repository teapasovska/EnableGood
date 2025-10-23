import React, { useEffect, useMemo, useRef, useState } from "react";
import Sidebar from "@/components/common/Sidebar";
import { useRouter } from "next/router";
import CompanyProfileHeader from "@/components/company/CompanyProfileHeader";
import CompanyProfileTabs from "@/components/company/CompanyProfileTabs";
import ProjectShowcaseGrid from "@/components/ourwork/ProjectShowcaseGrid";
import ImpactfulPhotos from "@/components/ourwork/ImpactfulPhotos";

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
          activeTab="Projects"
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
        <ProjectShowcaseGrid />
        <ImpactfulPhotos />
      </div>
    </div>
  );
};

export default ViewPartnerPage;
