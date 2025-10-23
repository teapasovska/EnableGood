import React, { useState } from "react";
import SubscriptionCards from "../common/SubscriptionCards";

const SubscriptionPlans = () => {
  const [activeTab, setActiveTab] = useState("Company plans");

  const companyPlans = [
    {
      name: "Explorer",
      price: 20,
      features: [
        "NGO discovery & filtering",
        "Standard match suggestions (up to 5/org per month)",
        "Basic project dashboard",
      ],
      isPopular: false,
    },
    {
      name: "Collaborator",
      price: 50,
      features: [
        "Everything in Matcher",
        "Collaborative project workspace (tasks, timelines, file-sharing)",
        "Custom branding on joint initiatives",
      ],
      isPopular: true,
    },
    {
      name: "Leader",
      price: 80,
      features: [
        "Everything in Collaborator",
        "Advanced ESG-alignment toolkit (goal-setting & tracking)",
        "Executive analytics reports & quarterly business reviews",
        "Dedicated account manager",
      ],
      isPopular: false,
    },
  ];

  const ngoPlans = [
    {
      name: "Explorer",
      price: 10,
      features: [
        "Company discovery & filtering",
        "Standard match suggestions (up to 10/org per month)",
        "Basic project dashboard",
      ],
      isPopular: false,
    },
    {
      name: "Collaborator",
      price: 25,
      features: [
        "Everything in Matcher",
        "Collaborative project workspace (tasks, timelines, file-sharing)",
        "Impact measurement tools",
      ],
      isPopular: true,
    },
    {
      name: "Leader",
      price: 40,
      features: [
        "Everything in Collaborator",
        "Advanced impact reporting toolkit",
        "Donor engagement analytics & quarterly reports",
        "Dedicated account manager",
      ],
      isPopular: false,
    },
  ];

  const currentPlans = activeTab === "Company plans" ? companyPlans : ngoPlans;

  return (
    <section
      style={{ backgroundColor: "#f7dacf" }}
      className="px-6 lg:px-20 py-16 lg:py-24"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Subscription plans for every need
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Find the perfect subscription plan tailored to your NGO or
          company&apos;s specific requirements
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="bg-white rounded-lg p-1 inline-flex">
          <button
            onClick={() => setActiveTab("Company plans")}
            className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "Company plans"
                ? "text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
            style={
              activeTab === "Company plans"
                ? { backgroundColor: "#012960" }
                : {}
            }
          >
            Company plans
          </button>
          <button
            onClick={() => setActiveTab("NGO plans")}
            className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "NGO plans"
                ? "text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
            style={
              activeTab === "NGO plans" ? { backgroundColor: "#012960" } : {}
            }
          >
            NGO plans
          </button>
        </div>
      </div>

      <SubscriptionCards plans={currentPlans} />
    </section>
  );
};

export default SubscriptionPlans;
