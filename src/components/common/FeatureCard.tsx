import React from "react";

interface FeatureCardProps {
  title: string;
  features: string[];
  buttonText: string;
  bgColorClass: string;
  buttonColorClass?: string;
  showTicks?: boolean;
  onButtonClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  features,
  buttonText,
  bgColorClass,
  buttonColorClass = "color4 hover:bg-yellow-500",
  showTicks = true,
  onButtonClick,
}) => {
  return (
    <div className={`${bgColorClass} text-white p-12 rounded-3xl`}>
      <h3
        className="text-4xl font-bold mb-8"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            {showTicks && (
              <svg
                className="w-6 h-6 mr-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <span className="text-lg">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <a href="#" onClick={onButtonClick}>
          <button
            className={`${buttonColorClass} text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors cursor-pointer`}
          >
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default FeatureCard;
