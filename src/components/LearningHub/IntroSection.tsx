import React from "react";

const IntroSection = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
    <div>
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Not Sure Where to Start?
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        No worries — we have you covered. Whether you are new to ESG or looking
        to deepen your impact, our Learning Hub is your go-to resource.
      </p>
      <p className="text-lg text-gray-700 mb-8">
        Explore everything from beginner-friendly ESG 101s to in-depth toolkits,
        case studies, and real-world success stories. It is all designed to help
        companies and NGOs take meaningful steps — at your own pace, on your own
        terms.
      </p>
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview:</h3>
        <p className="text-gray-700">
          Enable Good is a purpose-driven platform connecting companies and NGOs
          through transparent, strategic ESG partnerships. By streamlining
          discovery, alignment, and certification, it helps businesses achieve
          sustainability goals while amplifying NGO impact. The platform blends
          joyful design, storytelling, and user-centered tools to inspire trust,
          action, and lasting change.
        </p>
      </div>
    </div>
    <div className="relative">
      <div className="relative w-full h-96 lg:h-full rounded-2xl overflow-hidden">
        <img
          src="/images/lh1.png"
          alt="Learning Hub Video"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute left-0 right-0 py-4 px-6 flex items-center justify-center gap-4"
          style={{ backgroundColor: "#F5E7A3", top: "60%" }}
        >
          <span className="text-gray-900 font-medium">
            New here? Let’s dive in.
          </span>
          <button className="w-12 h-12 bg-gray-900 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
            <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default IntroSection;
