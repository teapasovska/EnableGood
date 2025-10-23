import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const HeroSection = () => {
  const router = useRouter();
  return (
    <section
      className="px-8 lg:px-32 py-16 lg:py-24"
      style={{ backgroundColor: "#f7dacf" }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Creating
            <br />
            Pathways for
            <br />
            <span className="text-gray-800">Impact</span>
          </h1>

          <p className="text-lg text-gray-700 mb-8 max-w-md">
            Connecting Organizations with impactful projects. Build partnerships
            that create lasting change in communities worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="color1 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-colors cursor-pointer"
              onClick={() => router.push("/signup")}
            >
              Find your next partner
            </button>
            <button className="border border-gray-400 bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-full font-medium transition-colors cursor-pointer">
              Learn More
            </button>
          </div>

          <p className="text-sm text-gray-600 mt-6">
            Join 500+ organizations already making an impact
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            <img
              src="/image.png"
              alt="Impact Pattern"
              className="w-[480px] h-[480px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
