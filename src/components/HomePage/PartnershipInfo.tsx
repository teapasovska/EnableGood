import React from "react";

const PartnershipInfo = () => {
  return (
    <section className="color8 px-8 lg:px-32 py-16 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Simplifying Corporate - NGO Partnerships
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          We provide all the tools you need to discover, establish, and manage
          impactful partnerships while meeting your ESG goals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto h-[400px]">
        <div className="flex flex-col gap-4">
          <div className="color1 text-white p-6 rounded-3xl flex flex-col justify-between h-[70%]">
            <div>
              <h3 className="text-2xl font-bold mb-4 leading-tight">
                Intelligent
                <br />
                Matching
              </h3>
              <p className="text-teal-100 mb-6 text-sm leading-relaxed">
                Connect with NGOs aligned to your ESG values and sustainable
                development goals
              </p>
            </div>
            <button className="border-2 border-white text-white px-4 py-2 rounded-full text-xs font-medium transition-all hover:bg-white hover:text-teal-600 self-start">
              Learn More
            </button>
          </div>
          <div className="color4 text-gray-900 p-4 rounded-3xl h-[30%] flex items-center">
            <h3 className="text-lg font-bold leading-tight">
              Global &<br />
              Local Impact
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-0 rounded-3xl overflow-hidden">
          <div className="h-[70%] relative">
            <img
              src="/images/hp1.jpg"
              alt="Certificate"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="color2 text-white p-4 h-[30%] flex flex-col justify-center">
            <h3 className="text-lg font-bold mb-2 leading-tight">
              Tiered
              <br />
              Certification
            </h3>
            <p className="text-blue-200 text-xs leading-relaxed">
              Bronze, Silver, and Gold certification levels for transparency and
              credibility
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-0 rounded-3xl overflow-hidden">
          <div className="h-[70%] relative">
            <img
              src="/images/hp2.jpg"
              alt="Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="color2 text-white p-4 h-[30%] flex flex-col justify-center">
            <h3 className="text-lg font-bold mb-2 leading-tight">Management</h3>
            <p className="text-blue-200 text-xs leading-relaxed">
              Tools for reporting, collaborating, and integrating ESG data into
              financial statements
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="color4 text-gray-900 p-4 rounded-3xl h-[30%] flex items-center">
            <h3 className="text-lg font-bold leading-tight">
              Streamlined
              <br />
              Compliance
            </h3>
          </div>
          <div className="color1 text-white p-6 rounded-3xl h-[70%] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-3 leading-tight">
                End-to-End ESG
                <br />
                Management
              </h3>
              <p className="text-teal-200 text-sm mb-4 leading-relaxed">
                Tools for reporting, collaborating, and integrating ESG data
                into financial statement
              </p>
            </div>
            <button className="border-2 border-white text-white px-4 py-2 rounded-full text-xs font-medium transition-all hover:bg-white hover:text-teal-700 self-start">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipInfo;
