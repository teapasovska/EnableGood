import React from "react";
import Sidebar from "@/components/common/Sidebar";
import Image from "next/image";
import { useRouter } from "next/router";

const SuccessPage = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen color8">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/image.png"
              alt="Enable Good Logo"
              width={60}
              height={60}
            />
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-[#2E7D5B] leading-tight">
                Enable Good
              </span>
              <span className="text-sm md:text-base font-semibold text-[#7B3B4A] -mt-1 tracking-wide">
                CONNECTING GOOD
              </span>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute left-[-8vw] top-[4vh] w-[48vw] h-[80vh] z-0 opacity-70 pointer-events-none">
          <Image
            src="/image.png"
            alt="Circles"
            width={700}
            height={700}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
            }}
            className="object-contain"
          />
        </div>
        <div className="hidden md:block absolute right-[-8vw] top-[38vh] w-[48vw] h-[80vh] z-0 opacity-40 pointer-events-none">
          <Image
            src="/image.png"
            alt="Circles"
            width={700}
            height={700}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "100%",
              height: "100%",
            }}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-32">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Request successfully sent!
          </h1>
          <p className="text-lg md:text-xl text-center mb-8">
            Let’s build something great — they’ll be in touch with you shortly!
          </p>
          <button
            className="bg-[#062B5B] text-white px-10 py-4 rounded-full font-medium text-lg shadow hover:bg-[#0a3876] transition-colors"
            onClick={() => router.push("/dashboard")}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
