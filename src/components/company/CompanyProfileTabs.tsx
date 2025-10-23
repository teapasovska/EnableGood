interface CompanyProfileTabsProps {
  onTabClick?: (tab: string) => void;
  activeTab?: string;
}

const TABS = ["Our Work", "Partners", "Projects", "News & Stories", "About Us"];

const CompanyProfileTabs: React.FC<CompanyProfileTabsProps> = ({
  onTabClick,
  activeTab,
}) => {
  const current = activeTab || "Our Work";
  return (
    <div className="flex justify-center mb-20">
      <div className="flex bg-white rounded-lg p-2 shadow-lg border-2 border-gray-100 w-full max-w-7xl">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={
              (current === tab
                ? "color2 text-white "
                : "text-gray-600 hover:bg-gray-50 ") +
              "px-16 py-2 rounded-lg text-base font-medium flex-1 transition-colors"
            }
            onClick={onTabClick ? () => onTabClick(tab) : undefined}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CompanyProfileTabs;
