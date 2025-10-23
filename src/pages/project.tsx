/* eslint-disable react/no-unescaped-entities */
import React from "react";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import SeeMore from "@/components/common/SeeMore";
import FeatureCard from "@/components/common/FeatureCard";
import Image from "next/image";

const ProjectPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FEFDEC" }}>
      <NavBar bgColor="#FEFDEC" />

      <main className="px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-12 leading-tight">
              Green Roots
            </h1>

            <div className="space-y-4 mb-12">
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-lg">
                  Location:
                </h3>
                <p className="text-gray-700 text-lg leading-tight">
                  Honduras, Uganda, and Indonesia
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-lg">
                  Start Date:
                </h3>
                <p className="text-gray-700 text-lg leading-tight">July 2024</p>
                <h3 className="font-bold text-gray-900 mb-1 mt-2 text-lg">
                  Estimated Completion:
                </h3>
                <p className="text-gray-700 text-lg leading-tight">
                  December 2026
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-lg">
                  Team Contacts:
                </h3>
                <p className="text-gray-700 text-lg mb-1 leading-tight">
                  Ana López, Project Lead – CARE Honduras
                </p>
                <p className="text-gray-700 text-lg leading-tight">
                  Maya Kim, Sustainability Program Manager – Starbucks
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-12">
              <span className="text-gray-900 font-medium text-lg">
                Documents & Reports
              </span>
              <div className="w-12 h-12 color2 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <button className="color2 text-white px-12 py-4 rounded-full font-semibold text-lg self-start hover:opacity-90 transition-opacity">
              Contact NGO
            </button>
          </div>

          <div className="relative flex items-center">
            <div className="w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/project.png"
                alt="Green Roots Project"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <FeatureCard
            title="CARE<br/>ORGANIZATION"
            features={[
              "Empowering communities to lift themselves out of poverty.",
            ]}
            buttonText="View Profile"
            bgColorClass="color1"
            buttonColorClass="color4 hover:bg-yellow-500"
            showTicks={false}
          />

          <FeatureCard
            title="STARBUCKS<br/>CORPORATION"
            features={[
              "Committed to ethical sourcing and sustainability in every cup.",
            ]}
            buttonText="View Profile"
            bgColorClass="color2"
            buttonColorClass="color4 hover:bg-yellow-500"
            showTicks={false}
          />
        </div>
      </main>

      <div className="color7 p-8 lg:p-12 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Project Overview
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Green Roots is a joint initiative by CARE and Starbucks aimed at
            helping small-scale coffee farmers adapt to the increasing effects
            of climate change. With coffee-growing regions experiencing more
            frequent droughts, soil degradation, and crop diseases, this project
            equips communities with the tools, knowledge, and resources needed
            to build agricultural resilience while maintaining sustainable and
            resilient agricultural practices. The initiative prioritizes gender
            equality and supports women-led farming cooperatives, ensuring they
            have equal access to training, land, and financial tools. Green
            Roots combines Starbucks' deep-rooted supply chain experience with
            CARE's long-standing community presence to promote environmental
            sustainability and economic empowerment.
          </p>
        </div>
      </div>

      <main className="px-6 lg:px-20 py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 relative">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Goals & Objectives
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 text-lg">
                    Train 10,000 farmers in climate-smart agricultural
                    techniques
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 text-lg">
                    Introduce agroforestry practices across 2,000 hectares of
                    farmland
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 text-lg">
                    Improve soil health and water retention through regenerative
                    farming
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-full overflow-hidden relative">
              <Image
                src="/images/e2.jpg"
                alt="Farmers working"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(254, 253, 236, 1) 0%, rgba(254, 253, 236, 0.95) 30%, rgba(254, 253, 236, 0.8) 60%, rgba(254, 253, 236, 0.3) 85%, transparent 100%)",
          }}
        ></div>
      </main>

      <SeeMore />
      <Footer />
    </div>
  );
};

export default ProjectPage;
