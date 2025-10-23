import React from "react";
import MeltingCircle from "@/components/common/MeltingCircle";

const ImpactStatistics = () => {
  return (
    <section
      style={{ backgroundColor: "#FEFDEC" }}
      className="px-6 lg:px-20 py-16 lg:py-24"
    >
      <div className="mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Regional Impact Distribution
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the geographic breakdown of our initiatives and their
            outcomes.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <MeltingCircle
              imageUrl="/images/r1.png"
              percent="42%"
              label="Africa"
              meltColor="#fff9c4"
              textColor="#012960"
            />
          </div>
          <div className="flex flex-col items-center">
            <MeltingCircle
              imageUrl="/images/r2.png"
              percent="67%"
              label="Asia"
              meltColor="#fff9c4"
              textColor="#012960"
            />
          </div>
          <div className="flex flex-col items-center">
            <MeltingCircle
              imageUrl="/images/r3.png"
              percent="58%"
              label="South America"
              meltColor="#fff9c4"
              textColor="#012960"
            />
          </div>
          <div className="flex flex-col items-center">
            <MeltingCircle
              imageUrl="/images/r4.png"
              percent="52%"
              label="Other Regions"
              meltColor="#fff9c4"
              textColor="#012960"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our impact in numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Measure the difference we make together through transformative
            partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            className="p-8 rounded-3xl"
            style={{ backgroundColor: "#f2e390" }}
          >
            <div className="text-5xl font-bold text-gray-900 mb-4">500+</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Organizations
            </h3>
            <p className="text-gray-700">
              NGOs and companies actively collaborating on our platform
            </p>
          </div>

          <div
            className="p-8 rounded-3xl"
            style={{ backgroundColor: "#f47c6a" }}
          >
            <div className="text-5xl font-bold text-gray-900 mb-4">$10.2M</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">NGOs</h3>
            <p className="text-gray-700">
              NGOs and companies actively collaborating on our platform
            </p>
          </div>

          <div
            className="p-8 rounded-3xl"
            style={{ backgroundColor: "#cdefc2" }}
          >
            <div className="text-5xl font-bold text-gray-900 mb-4">1.5M+</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Organizations
            </h3>
            <p className="text-gray-700">
              NGOs and companies actively collaborating on our platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStatistics;
