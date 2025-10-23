import React from "react";

interface ConfirmationPageProps {
  selectedPlan: string;
  onContinue: () => void;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({
  selectedPlan,
  onContinue,
}) => {
  return (
    <div className="text-black color8 min-h-screen flex flex-col justify-center items-center px-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-12 md:mb-16">
          You&apos;re all set!
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Thanks for subscribing to the {selectedPlan} Plan
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-16">
          Check your email for your receipt and onboarding checklist
        </p>

        <button
          className="color2 px-16 py-4 rounded-full text-white text-xl font-semibold cursor-pointer hover:opacity-90 transition-opacity"
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
