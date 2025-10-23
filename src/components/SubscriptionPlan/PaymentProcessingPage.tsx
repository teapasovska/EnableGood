import React from "react";

interface PaymentProcessingPageProps {
  onComplete: () => void;
}

const PaymentProcessingPage: React.FC<PaymentProcessingPageProps> = ({
  onComplete,
}) => {
  // Simulate payment processing and auto-redirect after 3 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="text-black color8 min-h-screen flex flex-col justify-center items-center px-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-12 md:mb-16">
          Processing & Confirmation
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 md:mb-16">
          Processing your payment... this may take a moment.
        </p>

        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 md:h-16 md:w-16 border-b-4 border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcessingPage;
