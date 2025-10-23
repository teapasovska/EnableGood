import React from "react";

interface LeaderPlanPageProps {
  onContinue: () => void;
  onPrevious: () => void;
}

const LeaderPlanPage: React.FC<LeaderPlanPageProps> = ({
  onContinue,
  onPrevious,
}) => {
  return (
    <div className="text-black pb-20 color8 min-h-screen">
      <div className="text-center text-5xl pt-20">Onboarding Steps</div>

      <div className="w-11/12 m-auto mt-10">
        <div className="text-2xl flex justify-between mb-4">
          <div className="font-normal">Role Selection</div>
          <div className="font-normal">Details</div>
          <div className="font-normal">Preferences</div>
          <div className="font-normal">Documents</div>
          <div className="font-normal">Subscription</div>
        </div>

        <div className="w-full h-7 rounded-4xl bg-gray-300">
          <div
            className="h-7 rounded-4xl color2 transition-all duration-500"
            style={{ width: "100%" }}
          ></div>
        </div>

        <div className="mt-2 text-black font-bold text-2xl">100%</div>

        <div className="max-w-4xl mx-auto px-8 pt-20">
          <h1 className="text-5xl font-bold text-black mb-8">
            You&apos;re In! Welcome to the Leader Plan
          </h1>

          <p className="text-xl text-gray-700 mb-12">
            You&apos;ve joined the companies leading the way in purpose,
            performance, and real ESG impact.
          </p>

          <div className="mb-12">
            <div className="mb-4">
              <span className="text-lg font-semibold text-black">Plan: </span>
              <span className="text-lg text-gray-700">Leader</span>
            </div>
            <div className="mb-4">
              <span className="text-lg font-semibold text-black">
                Billing:{" "}
              </span>
              <span className="text-lg text-gray-700">$80 / month</span>
            </div>
            <div className="mb-8">
              <span className="text-lg font-semibold text-black">
                Next billing date:{" "}
              </span>
              <span className="text-lg text-gray-700">
                [e.g., June 24, 2025]
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="color7 py-12 mb-12">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-black mb-8">
            What You Can Do Now
          </h2>

          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full color2 mt-3 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Explore & Match with NGOs
                </h3>
                <p className="text-gray-700">
                  Access curated NGO suggestions tailored to your ESG focus.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full color2 mt-3 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Collaborate on Projects
                </h3>
                <p className="text-gray-700">
                  Use your workspace to co-manage initiatives with tasks, files,
                  and timelines.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full color2 mt-3 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Activate the ESG Toolkit
                </h3>
                <p className="text-gray-700">
                  Set and track ESG goals with our advanced alignment tools.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full color2 mt-3 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Access Executive Analytics
                </h3>
                <p className="text-gray-700">
                  View strategic impact data and get quarterly insights.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full color2 mt-3 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Meet Your Account Manager
                </h3>
                <p className="text-gray-700">
                  A dedicated partner will contact you shortly to help align
                  your goals and strategy.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-11/12 m-auto">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-black mb-4">
              Need Help?
            </h3>
            <p className="text-gray-700 mb-2">
              We&apos;re here to support you as you build purpose-driven
              partnerships.
            </p>
            <p className="text-gray-700">
              Contact your support team – support@enablegood.org
            </p>
          </div>
        </div>

        <div className="mt-6 flex pt-20 justify-between">
          <button
            className="bg-transparent border-2 rounded-3xl border-black text-black py-2 px-20 cursor-pointer"
            onClick={onPrevious}
          >
            Previous Step
          </button>
          <button
            className="color2 px-20 py-2 rounded-3xl text-white cursor-pointer"
            onClick={onContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaderPlanPage;
