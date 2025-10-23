import React from "react";
import { useRouter } from "next/router";

const SeeMore: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 color8">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          To see more, join our community
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Or just curious how you could team up for good? Let&apos;s explore
          what&apos;s possible — together.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-10 py-4 border-2 border-gray-900 text-gray-900 rounded-full text-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 min-w-[160px] shadow-sm cursor-pointer">
            Learn more
          </button>

          <button
            onClick={() => router.push("/joinnow")}
            className="px-10 py-4 color2 text-white rounded-full text-lg font-medium hover:opacity-90 transition-all duration-300 min-w-[160px] shadow-lg cursor-pointer"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeeMore;
