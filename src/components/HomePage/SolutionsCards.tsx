import React from "react";
import FeatureCard from "../common/FeatureCard";

const SolutionsCards = () => {
  const ngoFeatures = [
    "Project Showcase",
    "Resource Access",
    "Impact Measurement",
    "Partner Matching",
  ];

  const companyFeatures = [
    "Project Showcase",
    "Impact Reporting",
    "Employee Engagement",
    "Brand Recognition",
  ];

  return (
    <section className="color7 px-6 lg:px-20 py-16 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Powerful Solutions for NGOs and Companies
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We provide tailored platforms for both non-profits seeking support and
          companies looking to make a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <FeatureCard
          title="FOR NGOs &<br />NON PROFITS"
          features={ngoFeatures}
          buttonText="Learn more"
          bgColorClass="color1"
        />

        <FeatureCard
          title="FOR<br />COMPANIES"
          features={companyFeatures}
          buttonText="Learn more"
          bgColorClass="color2"
        />
      </div>
    </section>
  );
};

export default SolutionsCards;
