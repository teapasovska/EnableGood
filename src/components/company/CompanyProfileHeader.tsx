import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const CompanyProfileHeader = () => {
  const router = useRouter();
  const handleContact = () => {
    if (router.pathname !== "/company-profile") {
      router.push("/request");
    }
  };
  return (
    <div className="color8 rounded-3xl p-8 lg:p-12 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center">
              <Image
                src="/images/care.png"
                alt="CARE Logo"
                width={120}
                height={75}
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-2 -right-16 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-lg">
            CARE is a global leader within a worldwide movement dedicated to
            ending poverty. We are known everywhere for our unshakeable
            commitment to the dignity of people.
          </p>

          <div className="flex items-center gap-3 mb-8 self-start">
            <span
              className="text-sm text-blue-600 font-medium cursor-pointer hover:underline"
              onClick={() => router.push("/calendar")}
            >
              Check availability
            </span>
            <div className="w-8 h-8 color2 rounded flex items-center justify-center">
              <span className="text-white text-xs">📅</span>
            </div>
          </div>

          <div className="flex gap-4 w-full">
            <button
              className="color2 text-white px-12 py-2 rounded-full font-medium text-lg flex-1"
              onClick={handleContact}
            >
              Contact
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-12 py-2 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors flex-1">
              Follow
            </button>
          </div>
        </div>

        <div>
          <div className="color2 rounded-2xl p-8 text-white mb-6">
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-1">1256</div>
                <div className="text-sm opacity-90">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-1">156</div>
                <div className="text-sm opacity-90">Partners</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-1">322</div>
                <div className="text-sm opacity-90">Projects</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold mb-1">93%</div>
                <div className="text-xs opacity-90">Local staff</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-1">25M</div>
                <div className="text-xs opacity-90">People supported</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-1">100+</div>
                <div className="text-xs opacity-90">Countries</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex gap-3 mb-3">
              <span className="px-6 py-3 border-2 border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Human Rights
              </span>
              <span className="px-6 py-3 border-2 border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Environment
              </span>
            </div>
            <div className="flex gap-3">
              <span className="px-6 py-3 border-2 border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Climate Justice
              </span>
              <span className="px-6 py-3 border-2 border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Education
              </span>
              <span className="px-6 py-3 border-2 border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Food Security
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileHeader;
