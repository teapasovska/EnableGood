import React from "react";

interface Plan {
  name: string;
  price: number;
  features: string[];
  isPopular: boolean;
}

interface SubscriptionCardsProps {
  plans: Plan[];
  onPlanSelect?: (planName: string) => void;
}

const SubscriptionCards: React.FC<SubscriptionCardsProps> = ({
  plans,
  onPlanSelect,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`rounded-3xl p-8 shadow-lg relative ${
            plan.isPopular ? "text-white" : "bg-white"
          }`}
          style={plan.isPopular ? { backgroundColor: "#012960" } : {}}
        >
          {plan.isPopular && (
            <div
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-sm font-semibold"
              style={{ backgroundColor: "#fcff64", color: "#000" }}
            >
              Most popular
            </div>
          )}

          <div className={`text-center mb-8 ${plan.isPopular ? "mt-4" : ""}`}>
            <div
              className={`px-6 py-2 rounded-lg font-semibold mb-4 inline-block ${
                plan.isPopular ? "bg-white text-gray-900" : "text-white"
              }`}
              style={!plan.isPopular ? { backgroundColor: "#012960" } : {}}
            >
              {plan.name}
            </div>
            <div
              className={`text-4xl font-bold mb-1 ${
                plan.isPopular ? "" : "text-gray-900"
              }`}
            >
              {plan.price}{" "}
              <span
                className={`text-lg font-normal ${
                  plan.isPopular ? "text-gray-300" : "text-gray-600"
                }`}
              >
                $ / month
              </span>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center">
                <svg
                  className={`w-5 h-5 mr-3 ${
                    plan.isPopular ? "text-white" : ""
                  }`}
                  style={!plan.isPopular ? { color: "#012960" } : {}}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className={plan.isPopular ? "" : "text-gray-700"}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <button
            className={`w-full py-3 rounded-full font-semibold transition-colors cursor-pointer border-2 ${
              plan.isPopular
                ? "bg-white hover:bg-gray-100 border-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-300"
            }`}
            style={plan.isPopular ? { color: "#012960" } : {}}
            onClick={() => onPlanSelect && onPlanSelect(plan.name)}
          >
            Subscribe
          </button>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionCards;
