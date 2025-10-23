import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Sidebar from "@/components/common/Sidebar";

import FeatureCard from "@/components/common/FeatureCard";
import MeltingCircle from "@/components/common/MeltingCircle";
import ImpactfulPhotos from "@/components/ourwork/ImpactfulPhotos";

const Green = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Green Roots</title>
        <meta name="description" content="green page" />
      </Head>
      <div className="flex min-h-screen color8">
        <Sidebar />
        <div className="flex-1 ml-16 p-6">
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
                Project Overview
              </h1>
            </div>
            <div className="flex items-center space-x-4">
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
          </div>
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
                  <p className="text-gray-700 text-lg leading-tight">
                    July 2024
                  </p>
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

              <button
                className="color2 text-white px-12 py-4 rounded-full font-semibold text-lg self-start hover:opacity-90 transition-opacity"
                onClick={() => router.push("/request")}
              >
                Contact NGO
              </button>
            </div>

            <div className="relative flex items-center">
              <div className="w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/images/project.png"
                  alt="Green Roots Project"
                  width={700}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 color8">
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

          <div className="color8 p-8 lg:p-12 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Green Roots is a joint initiative by CARE and Starbucks aimed at
                helping small-scale coffee farmers adapt to the increasing
                effects of climate change. With coffee-growing regions
                experiencing more frequent droughts, soil degradation, and crop
                diseases, this project equips communities with the tools,
                knowledge, and resources needed to build agricultural resilience
                while maintaining sustainable and resilient agricultural
                practices. The initiative prioritizes gender equality and
                supports women-led farming cooperatives, ensuring they have
                equal access to training, land, and financial tools. Green Roots
                combines Starbucks' deep-rooted supply chain experience with
                CARE's long-standing community presence to promote environmental
                sustainability and economic empowerment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 relative p-8">
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
                      Improve soil health and water retention through
                      regenerative farming
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
                      Improve soil health and water retention through
                      regenerative farming
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
                      Improve soil health and water retention through
                      regenerative farming
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto">
                <MeltingCircle
                  imageUrl="/ourwork/circle.png"
                  percent="58%"
                  label="South America"
                  meltColor="#fff9c4"
                  textColor="#111"
                  width={320}
                  height={320}
                />
              </div>
            </div>
          </div>

          <section className="max-w-7xl mx-auto mt-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-lg p-8 bg-[#f6e8a7] shadow-sm">
                <div className="text-4xl md:text-3xl font-bold mb-2">3.200</div>
                <div className="font-semibold mb-2">Farmers Trained</div>
                <div className="text-sm text-black/80">
                  Local coffee growers are gaining hands-on skills in
                  sustainable and climate-smart farming methods.
                </div>
              </div>

              <div className="rounded-lg p-8 bg-[#e88d7c] shadow-sm">
                <div className="text-4xl md:text-3xl font-bold mb-2">
                  870 ha
                </div>
                <div className="font-semibold mb-2">
                  Land Converted to Sustainable Practices
                </div>
                <div className="text-sm text-black/80">
                  Farming areas are being restored using techniques that improve
                  soil health and biodiversity.
                </div>
              </div>

              <div className="rounded-lg p-8 bg-[#c8eac7] shadow-sm">
                <div className="text-4xl md:text-3xl font-bold mb-2">15</div>
                <div className="font-semibold mb-2">
                  Training Hubs Established
                </div>
                <div className="text-sm text-black/80">
                  Local resource centers are enabling continuous learning, seed
                  distribution, and peer-to-peer support.
                </div>
              </div>
            </div>
          </section>

          <ImpactfulPhotos />
        </div>
      </div>
    </>
  );
};

export default Green;
