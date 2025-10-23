import React from "react";

type Tab = {
  id: string;
  label: string;
};

type PathToImpactSectionProps = {
  formatTabs: Tab[];
  forTabs: Tab[];
  esgTabs: Tab[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
};

const PathToImpactSection: React.FC<PathToImpactSectionProps> = ({
  formatTabs,
  forTabs,
  esgTabs,
  activeTab,
  setActiveTab,
}) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
      Pick Your Path to Impact
    </h2>
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {formatTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              tab.id === "Format" || activeTab === tab.id
                ? "bg-white text-gray-900 shadow-lg"
                : "bg-white bg-opacity-50 text-gray-700 hover:bg-opacity-75"
            }`}
          >
            {tab.label}
            {tab.id === "Format" && (
              <span className="ml-2 text-gray-600">›</span>
            )}
          </button>
        ))}
      </div>
    </div>
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {forTabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              tab.id === "For"
                ? "bg-white text-gray-900 shadow-lg"
                : "bg-white bg-opacity-50 text-gray-700 hover:bg-opacity-75"
            }`}
          >
            {tab.label}
            {tab.id === "For" && <span className="ml-2 text-gray-600">›</span>}
          </button>
        ))}
      </div>
    </div>
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-4">
        {esgTabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              tab.id === "ESG Pillar"
                ? "bg-white text-gray-900 shadow-lg"
                : "bg-white bg-opacity-50 text-gray-700 hover:bg-opacity-75"
            }`}
          >
            {tab.label}
            {tab.id === "ESG Pillar" && (
              <span className="ml-2 text-gray-600">›</span>
            )}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default PathToImpactSection;
