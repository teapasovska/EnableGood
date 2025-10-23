import React from "react";

type Filters = {
  esg: string;
  sdg: string;
  industries: string;
  projects: string;
  partners: string;
};

type FiltersBarProps = {
  tempFilters: Filters;
  handleFilterChange: (key: string, value: string) => void;
  applyFilters: () => void;
  clearFilters: () => void;
};

const FiltersBar: React.FC<FiltersBarProps> = ({
  tempFilters,
  handleFilterChange,
  applyFilters,
  clearFilters,
}) => (
  <div className="mb-8">
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Customize Your View
        </h3>
        <p className="text-gray-600">
          Use filters to explore relevant ESG collaborations.
        </p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={clearFilters}
          className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium cursor-pointer"
        >
          Clear
        </button>
        <button
          onClick={applyFilters}
          className="px-6 py-3 text-white rounded-lg transition-colors font-medium cursor-pointer"
          style={{ backgroundColor: "#012960" }}
        >
          Apply
        </button>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-sm py-4 px-6">
      <div className="flex gap-4 flex-wrap justify-between">
        <div className="relative bg-gray-50 rounded-md shadow-sm px-3 py-2">
          <select
            onChange={(e) => handleFilterChange("esg", e.target.value)}
            value={tempFilters.esg}
            className="appearance-none bg-transparent border-0 px-0 py-1 pr-6 text-gray-700 font-medium focus:outline-none cursor-pointer min-w-[120px]"
          >
            <option value="">ESG goals</option>
            <option value="Environmental">Environmental</option>
            <option value="Governance">Governance</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div className="relative bg-gray-50 rounded-md shadow-sm px-3 py-2">
          <select
            onChange={(e) => handleFilterChange("sdg", e.target.value)}
            value={tempFilters.sdg}
            className="appearance-none bg-transparent border-0 px-0 py-1 pr-6 text-gray-700 font-medium focus:outline-none cursor-pointer min-w-[120px]"
          >
            <option value="">SDG goals</option>
            <option value="Social">Social</option>
            <option value="Climate action">Climate action</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div className="relative bg-gray-50 rounded-md shadow-sm px-3 py-2">
          <select
            onChange={(e) => handleFilterChange("industries", e.target.value)}
            value={tempFilters.industries}
            className="appearance-none bg-transparent border-0 px-0 py-1 pr-6 text-gray-700 font-medium focus:outline-none cursor-pointer min-w-[120px]"
          >
            <option value="">Filter Industries</option>
            <option value="Peru">Peru</option>
            <option value="Ghana">Ghana</option>
            <option value="Serbia">Serbia</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div className="relative bg-gray-50 rounded-md shadow-sm px-3 py-2">
          <select
            onChange={(e) => handleFilterChange("projects", e.target.value)}
            value={tempFilters.projects}
            className="appearance-none bg-transparent border-0 px-0 py-1 pr-6 text-gray-700 font-medium focus:outline-none cursor-pointer min-w-[120px]"
          >
            <option value="">Filter Projects</option>
            <option value="Solar">Solar</option>
            <option value="Clean Water">Clean Water</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div className="relative bg-gray-50 rounded-md shadow-sm px-3 py-2">
          <select
            onChange={(e) => handleFilterChange("partners", e.target.value)}
            value={tempFilters.partners}
            className="appearance-none bg-transparent border-0 px-0 py-1 pr-6 text-gray-700 font-medium focus:outline-none cursor-pointer min-w-[120px]"
          >
            <option value="">Filter Partners</option>
            <option value="Partner 1">Partner 1</option>
            <option value="Partner 2">Partner 2</option>
            <option value="Partner 3">Partner 3</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FiltersBar;
