import React from "react";

interface CompanyKPIProps {
  gradient?: boolean;
  variant?: "default" | "card";
}

const CompanyKPI: React.FC<CompanyKPIProps> = ({
  gradient = false,
  variant = "default",
}) => {
  if (variant === "card") {
    return (
      <div className="bg-[#143266] rounded-3xl p-8 lg:p-12 mb-8 text-white max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Key Performance Indicators</h2>
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-green-400 flex items-center justify-center flex-shrink-0 bg-transparent">
              <span className="text-green-400 text-lg font-bold">✓</span>
            </div>
            <div>
              <div className="font-bold text-lg text-white">
                Women-led initiatives supported
              </div>
              <div className="text-[#E6EAF3] text-base mt-1">
                78% of our development programs are led or co-designed by women
                in local communities.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-green-400 flex items-center justify-center flex-shrink-0 bg-transparent">
              <span className="text-green-400 text-lg font-bold">✓</span>
            </div>
            <div>
              <div className="font-bold text-lg text-white">
                Access to essential services
              </div>
              <div className="text-[#E6EAF3] text-base mt-1">
                Over 12 million people gained access to clean water, healthcare,
                or education in the past year.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-green-400 flex items-center justify-center flex-shrink-0 bg-transparent">
              <span className="text-green-400 text-lg font-bold">✓</span>
            </div>
            <div>
              <div className="font-bold text-lg text-white">
                Local partnerships established
              </div>
              <div className="text-[#E6EAF3] text-base mt-1">
                CARE collaborates with 1,250+ local organizations to ensure
                sustainable, community-driven impact.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default style (company-profile)
  return (
    <div
      className="relative rounded-3xl p-8 lg:p-12 mb-8 text-white overflow-hidden"
      style={
        gradient
          ? {
              background:
                "linear-gradient(180deg, #012960 0%, #012960 40%, rgba(1, 41, 96, 0.7) 60%, rgba(1, 41, 96, 0.3) 80%, rgba(1, 41, 96, 0.1) 100%)",
            }
          : {}
      }
    >
      {gradient && (
        <div
          className="absolute top-1/2 left-0 right-0 bottom-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(254, 253, 236, 0.05) 20%, rgba(254, 253, 236, 0.15) 60%, rgba(254, 253, 236, 0.25) 100%)",
            backdropFilter: "blur(8px)",
          }}
        ></div>
      )}

      <h2 className="text-2xl font-bold mb-4 relative z-10">
        Key Performance Indicators
      </h2>

      <div className="space-y-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-green-400 flex items-center justify-center flex-shrink-0 bg-transparent">
            <span className="text-green-400 text-lg font-bold">✓</span>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-lg">
              Women-led initiatives supported
            </h3>
            <p className="text-sm opacity-90">
              78% of our development programs are led or co-designed by women in
              local communities.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-green-400 flex items-center justify-center flex-shrink-0 bg-transparent">
            <span className="text-green-400 text-lg font-bold">✓</span>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-lg">
              Access to essential services
            </h3>
            <p className="text-sm opacity-90">
              Over 25 million people achieved access to clean water, healthcare,
              or education in the past year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyKPI;
