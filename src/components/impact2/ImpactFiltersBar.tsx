import React from "react";

type Filters = {
  esg: string;
  sdg: string;
  industries: string;
  projects: string;
  partners: string;
};

type ImpactFiltersBarProps = {
  tempFilters: Filters;
  handleFilterChange: (key: string, value: string) => void;
  applyFilters: () => void;
  clearFilters: () => void;
};

const ImpactFiltersBar: React.FC<ImpactFiltersBarProps> = ({
  tempFilters,
  handleFilterChange,
  applyFilters,
  clearFilters,
}) => (
  <div className="mb-6 w-full lg:w-full">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-3 mb-3 w-full lg:w-full lg:max-w-none">
      <button className="bg-white rounded-xl px-4 py-2 text-sm lg:px-8 lg:py-3 lg:text-lg font-bold shadow text-gray-900 border border-gray-200 hover:bg-gray-50 transition w-fit">
        Today <span className="ml-1 lg:ml-2">&gt;</span>
      </button>
      <div className="flex gap-2 lg:gap-3">
        <button
          onClick={clearFilters}
          className="px-4 py-2 lg:px-8 lg:py-3 border border-[#012960] rounded-full text-[#012960] bg-transparent hover:bg-[#012960] hover:text-white transition-colors font-medium text-sm lg:text-xl shadow"
        >
          Clear
        </button>
        <button
          onClick={applyFilters}
          className="px-4 py-2 lg:px-8 lg:py-3 rounded-full text-white bg-[#012960] hover:bg-blue-900 transition-colors font-medium text-sm lg:text-xl shadow"
        >
          Apply
        </button>
      </div>
    </div>
    <div className="bg-white rounded-xl shadow-sm py-3 px-2 lg:py-4 lg:px-6 w-full lg:w-full">
      <div className="flex gap-2 lg:gap-4 flex-wrap justify-between">
        <div className="relative bg-gray-50 rounded-md shadow-sm px-2 py-1 lg:px-3 lg:py-2">
          <select
            onChange={(e) => handleFilterChange("esg", e.target.value)}
            value={tempFilters.esg}
            className="appearance-none bg-transparent border-0 px-0 py-1 pr-5 text-gray-700 font-bold focus:outline-none cursor-pointer min-w-[80px] lg:min-w-[120px] text-xs lg:text-base"
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
        <div className="relative bg-gray-50 rounded-md shadow-sm px-2 py-1 lg:px-3 lg:py-2">
          <select
            onChange={(e) => handleFilterChange("sdg", e.target.value)}
            value={tempFilters.sdg}
            className="appearance-none bg-transparent border-0 px-0 py-1 pr-5 text-gray-700 font-bold focus:outline-none cursor-pointer min-w-[80px] lg:min-w-[120px] text-xs lg:text-base"
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
        <div className="relative bg-gray-50 rounded-md shadow-sm px-2 py-1 lg:px-3 lg:py-2">
          <select
            onChange={(e) => handleFilterChange("industries", e.target.value)}
            value={tempFilters.industries}
            className="appearance-none bg-transparent border-0 px-0 py-1 pr-5 text-gray-700 font-bold focus:outline-none cursor-pointer min-w-[80px] lg:min-w-[120px] text-xs lg:text-base"
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
        <div className="relative bg-gray-50 rounded-md shadow-sm px-2 py-1 lg:px-3 lg:py-2">
          <select
            onChange={(e) => handleFilterChange("projects", e.target.value)}
            value={tempFilters.projects}
            className="appearance-none bg-transparent border-0 px-0 py-1 pr-5 text-gray-700 font-bold focus:outline-none cursor-pointer min-w-[80px] lg:min-w-[120px] text-xs lg:text-base"
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
        <div className="relative bg-gray-50 rounded-md shadow-sm px-2 py-1 lg:px-3 lg:py-2">
          <select
            onChange={(e) => handleFilterChange("partners", e.target.value)}
            value={tempFilters.partners}
            className="appearance-none bg-transparent border-0 px-0 py-1 pr-5 text-gray-700 font-bold focus:outline-none cursor-pointer min-w-[80px] lg:min-w-[120px] text-xs lg:text-base"
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

export default ImpactFiltersBar;
