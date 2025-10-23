import React from "react";

const EnableGoodWorks = () => {
  return (
    <section
      className="px-6 lg:px-20 py-16 lg:py-24"
      style={{ backgroundColor: "#f7dacf" }}
    >
      <div className="text-center mb-16">
        <h2
          className="text-4xl lg:text-5xl font-bold mb-4"
          style={{ color: "#012960" }}
        >
          How Enable Good works
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-900">
          Our streamlined process makes it easy for companies to find, connect
          and collaborate with NGOs that align with their ESG goals
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div
          className="rounded-3xl overflow-hidden"
          style={{ backgroundColor: "#FEFDEC" }}
        >
          <div className="w-full h-80">
            <img
              src="/images/e1.jpg"
              alt="Business meeting - defining ESG goals"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#012960" }}
            >
              Define your ESG goals
            </h3>
            <p className="text-gray-900">
              Identify your sustainability priorities and ESG KPIs within the
              platform
            </p>
          </div>
        </div>

        <div
          className="rounded-3xl overflow-hidden"
          style={{ backgroundColor: "#FEFDEC" }}
        >
          <div className="w-full h-80">
            <img
              src="/images/e2.jpg"
              alt="Volunteers doing charity work with donations"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#012960" }}
            >
              Discover compatible NGOs
            </h3>
            <p className="text-gray-900">
              Browse through verified NGO profiles that match your values and
              objectives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnableGoodWorks;
