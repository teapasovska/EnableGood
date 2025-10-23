import React from "react";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import SeeMore from "@/components/common/SeeMore";
import { useRouter } from "next/router";
import CompanyProfileHeader from "@/components/company/CompanyProfileHeader";
import CompanyKeyFocus from "@/components/company/CompanyKeyFocus";
import CompanyProfileTabs from "@/components/company/CompanyProfileTabs";
import CompanyKPI from "@/components/company/CompanyKPI";

const CompanyProfilePage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FEFDEC" }}>
      <NavBar bgColor="#FEFDEC" />

      <main className="px-6 lg:px-20 py-12">
        <CompanyProfileHeader />
        <CompanyProfileTabs />
        <CompanyKeyFocus />
        <CompanyKPI gradient />

        <div className="text-center mb-16">
          <button
            onClick={() => router.push("/signup")}
            className="text-blue-900 hover:text-blue-700 font-medium text-lg underline cursor-pointer"
          >
            See more
          </button>
        </div>
      </main>

      <SeeMore />

      <Footer />
    </div>
  );
};

export default CompanyProfilePage;
