import React from "react";
import Image from "next/image";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/router";

const CTASection = () => {
  const { setUser } = useUser();
  const router = useRouter();

  return (
    <section
      style={{ backgroundColor: "#012960" }}
      className="text-white px-6 lg:px-20 py-16 lg:py-24"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-6xl font-bold mb-6">
          Ready to make a Difference?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join Enable Good and be part of a growing community creating
          meaningful change through strategic partnerships.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Explore Projects
          </button>
          <button
            className="px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            style={{ backgroundColor: "#fcff64", color: "#000" }}
            onClick={() => {
              setUser("Company User");
              router.push("/joinnow");
            }}
          >
            Join Now
          </button>
        </div>
      </div>

      <div className="border-t border-blue-800 pt-12">
        <div className="flex justify-center items-center opacity-60">
          <Image
            src="/images/logos2.png"
            alt="Partner company logos"
            width={800}
            height={120}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
