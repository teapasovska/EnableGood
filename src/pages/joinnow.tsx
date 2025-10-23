import NavBar from "@/components/common/NavBar";
import SubscriptionCards from "@/components/common/SubscriptionCards";
import ExplorerPlanPage from "@/components/SubscriptionPlan/ExplorerPlanPage";
import CollaboratorPlanPage from "@/components/SubscriptionPlan/CollaboratorPlanPage";
import LeaderPlanPage from "@/components/SubscriptionPlan/LeaderPlanPage";
import PaymentProcessingPage from "@/components/SubscriptionPlan/PaymentProcessingPage";
import ConfirmationPage from "@/components/SubscriptionPlan/ConfirmationPage";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Company = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [steps, setSteps] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<
    "plan" | "processing" | "confirmation" | "welcome"
  >("plan");
  const [logIn, setLogIn] = useState({
    orgName: "",
    country: "",
    website: "",
    sector: "",
    email: "",
    password: "",
  });

  // Redirect to dashboard after 3 seconds when on welcome page
  useEffect(() => {
    if (currentPage === "welcome") {
      const timer = setTimeout(() => {
        router.push("/dashboard");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentPage, router]);

  // Form data state
  const [formData, setFormData] = useState({
    organizationName: "",
    countryRegion: "",
    sectorIndustry: "",
    website: "",
    emailAddress: "",
    description: "",
  });

  // Partnership goals state
  const [selectedPartnershipGoals, setSelectedPartnershipGoals] = useState<
    string[]
  >([]);

  // SDGs state
  const [selectedSDGs, setSelectedSDGs] = useState<string[]>([]);

  // Partnership preferences state
  const [selectedPartnerTypes, setSelectedPartnerTypes] = useState<string[]>(
    []
  );
  const [selectedESGPillars, setSelectedESGPillars] = useState<string[]>([]);

  // Company subscription plans
  const companyPlans = [
    {
      name: "Explorer",
      price: 20,
      features: [
        "NGO discovery & filtering",
        "Standard match suggestions (up to 5/org per month)",
        "Basic project dashboard",
      ],
      isPopular: false,
    },
    {
      name: "Collaborator",
      price: 50,
      features: [
        "Everything in Matcher",
        "Collaborative project workspace (tasks, timelines, file-sharing)",
        "Custom branding on joint initiatives",
      ],
      isPopular: true,
    },
    {
      name: "Leader",
      price: 80,
      features: [
        "Everything in Collaborator",
        "Advanced ESG-alignment toolkit (goal-setting & tracking)",
        "Executive analytics reports & quarterly business reviews",
        "Dedicated account manager",
      ],
      isPopular: false,
    },
  ];

  const handleNext = () => {
    if (steps === 5) {
    }
    setSteps((prev) => Math.min(prev + 1, 6));
    setProgress((prev) => Math.min(prev + 20, 100));
  };

  const handlePrevious = () => {
    setSteps((prev) => Math.max(prev - 1, 0));
    setProgress((prev) => Math.max(prev - 20, 0));
  };

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    setSteps(5);
  };

  const handlePlanContinue = () => {
    setCurrentPage("processing");
  };

  const handlePaymentComplete = () => {
    setCurrentPage("confirmation");
  };

  const handleConfirmationContinue = () => {
    setCurrentPage("welcome");
    setSteps(7);

    // Save to localStorage (stringify because localStorage only stores strings)
    localStorage.setItem("user", JSON.stringify(logIn));
  };

  useEffect(() => {
    if (steps === 7) {
      localStorage.setItem("user", JSON.stringify(logIn));
    }
  }, [steps, logIn]);

  // Handle form input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle partnership goal selection
  const togglePartnershipGoal = (goal: string) => {
    setSelectedPartnershipGoals((prev) => {
      if (prev.includes(goal)) {
        return prev.filter((g) => g !== goal);
      } else {
        return [...prev, goal];
      }
    });
  };

  // Handle SDG selection (no limit)
  const toggleSDG = (sdg: string) => {
    setSelectedSDGs((prev) => {
      if (prev.includes(sdg)) {
        return prev.filter((s) => s !== sdg);
      } else {
        return [...prev, sdg];
      }
    });
  };

  // Handle partner type selection
  const togglePartnerType = (type: string) => {
    setSelectedPartnerTypes((prev) => {
      if (prev.includes(type)) {
        return prev.filter((t) => t !== type);
      } else {
        return [...prev, type];
      }
    });
  };

  // Handle ESG pillar selection
  const toggleESGPillar = (pillar: string) => {
    setSelectedESGPillars((prev) => {
      if (prev.includes(pillar)) {
        return prev.filter((p) => p !== pillar);
      } else {
        return [...prev, pillar];
      }
    });
  };

  console.log(logIn, "LOGIN LOGIC");

  return (
    <div className="text-black pb-20 color8 min-h-screen">
      <NavBar bgColor="#fefdec" />
      {steps <= 4 ? (
        <div>
          <div className="text-center text-5xl pt-20">Onboarding steps</div>
          <div className="w-11/12 m-auto mt-10">
            <div className="text-2xl flex justify-between mb-4">
              <div className="font-normal">Role Selection</div>
              <div className="font-normal">Details</div>
              <div className="font-normal">Preferences</div>
              <div className="font-normal">Documents</div>
              <div className="font-normal">Subscriptions</div>
            </div>

            <div className="w-full h-7 rounded-4xl bg-gray-300">
              <div
                className="h-7 rounded-4xl bg-black transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="mt-2 text-black font-bold text-2xl">
              {progress}%{" "}
            </div>

            {steps < 1 && (
              <h2 className="text-5xl ml-20 pt-20 pb-14 text-black">
                Choose your role
              </h2>
            )}

            {steps === 1 && (
              <div className="max-w-4xl mx-auto mt-16 px-8">
                <div className="space-y-6 mb-16">
                  <div className="bg-white rounded-3xl px-8 py-6 shadow-lg border-0">
                    <input
                      type="text"
                      placeholder="Organization Name"
                      className="w-full text-lg outline-none bg-transparent placeholder-gray-500"
                      value={logIn.orgName}
                      onChange={(e) =>
                        setLogIn({ ...logIn, orgName: e.target.value })
                      }
                    />
                  </div>

                  <div className="bg-white rounded-3xl px-8 py-6 shadow-lg border-0">
                    <input
                      type="text"
                      placeholder="Country / Region"
                      className="w-full text-lg outline-none bg-transparent placeholder-gray-500"
                      value={logIn.country}
                      onChange={(e) =>
                        setLogIn({ ...logIn, country: e.target.value })
                      }
                    />
                  </div>

                  <div className="bg-white rounded-3xl px-8 py-6 shadow-lg border-0">
                    <input
                      type="text"
                      placeholder="Sector / Industry"
                      className="w-full text-lg outline-none bg-transparent placeholder-gray-500"
                      value={logIn.sector}
                      onChange={(e) =>
                        setLogIn({ ...logIn, sector: e.target.value })
                      }
                    />
                  </div>

                  <div className="bg-white rounded-3xl px-8 py-6 shadow-lg border-0">
                    <input
                      type="text"
                      placeholder="Website (optional)"
                      className="w-full text-lg outline-none bg-transparent placeholder-gray-500"
                      value={logIn.website}
                      onChange={(e) =>
                        setLogIn({ ...logIn, website: e.target.value })
                      }
                    />
                  </div>

                  <div className="bg-white rounded-3xl px-8 py-6 shadow-lg border-0">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full text-lg outline-none bg-transparent placeholder-gray-500"
                      value={logIn.email}
                      onChange={(e) =>
                        setLogIn({ ...logIn, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="bg-white rounded-3xl px-8 py-6 shadow-lg border-0">
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full text-lg outline-none bg-transparent placeholder-gray-500"
                      value={logIn.password}
                      onChange={(e) =>
                        setLogIn({ ...logIn, password: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="mb-16">
                  <h2 className="text-5xl font-bold text-black mb-4">
                    Partnership Goals
                  </h2>
                  <p className="text-xl text-gray-700 mb-8">
                    What are you looking for?
                  </p>

                  <div className="flex flex-wrap gap-6 mb-8">
                    <button
                      onClick={() => togglePartnershipGoal("Find partners")}
                      className={`rounded-full px-8 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer ${
                        selectedPartnershipGoals.includes("Find partners")
                          ? "color2 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      Find partners
                    </button>
                    <button
                      onClick={() => togglePartnershipGoal("Join Projects")}
                      className={`rounded-full px-8 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer ${
                        selectedPartnershipGoals.includes("Join Projects")
                          ? "color2 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      Join Projects
                    </button>
                    <button
                      onClick={() => togglePartnershipGoal("Share knowledge")}
                      className={`rounded-full px-8 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer ${
                        selectedPartnershipGoals.includes("Share knowledge")
                          ? "color2 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      Share knowledge
                    </button>
                  </div>

                  <div className="bg-white rounded-3xl px-8 py-6 shadow-lg border-0">
                    <textarea
                      placeholder="Short description or mission (optional)"
                      className="w-full text-lg outline-none bg-transparent resize-none h-32 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div className="mb-16">
                  <h2 className="text-5xl font-bold text-black mb-4">
                    Choose Relevant SDGs
                  </h2>
                  <p className="text-xl text-gray-700 mb-8">
                    Select the UN Sustainable Development Goals your org is
                    working on
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-4 justify-start">
                      <button
                        onClick={() => toggleSDG("No Poverty")}
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes("No Poverty")
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        No Poverty
                      </button>
                      <button
                        onClick={() => toggleSDG("Zero Hunger")}
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes("Zero Hunger")
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Zero Hunger
                      </button>
                      <button
                        onClick={() => toggleSDG("Good Health and Well-Being")}
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes("Good Health and Well-Being")
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Good Health and Well-Being
                      </button>
                      <button
                        onClick={() => toggleSDG("Quality Education")}
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes("Quality Education")
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Quality Education
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-start">
                      <button
                        onClick={() => toggleSDG("Gender Equality")}
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes("Gender Equality")
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Gender Equality
                      </button>
                      <button
                        onClick={() => toggleSDG("Clean Water and Sanitation")}
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes("Clean Water and Sanitation")
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Clean Water and Sanitation
                      </button>
                      <button
                        onClick={() => toggleSDG("Affordable and Clean Energy")}
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes("Affordable and Clean Energy")
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Affordable and Clean Energy
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-start">
                      <button
                        onClick={() =>
                          toggleSDG("Decent Work and Economic Growth")
                        }
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes(
                            "Decent Work and Economic Growth"
                          )
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Decent Work and Economic Growth
                      </button>
                      <button
                        onClick={() =>
                          toggleSDG("Industry, Innovation and Infrastructure")
                        }
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes(
                            "Industry, Innovation and Infrastructure"
                          )
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Industry, Innovation and Infrastructure
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-start">
                      <button
                        onClick={() =>
                          toggleSDG("Responsible Consumption and Production")
                        }
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes(
                            "Responsible Consumption and Production"
                          )
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Responsible Consumption and Production
                      </button>
                      <button
                        onClick={() => toggleSDG("Climate Action")}
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes("Climate Action")
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Climate Action
                      </button>
                      <button
                        onClick={() => toggleSDG("Life Below Water")}
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes("Life Below Water")
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Life Below Water
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-start">
                      <button
                        onClick={() => toggleSDG("Life on Land")}
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes("Life on Land")
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Life on Land
                      </button>
                      <button
                        onClick={() =>
                          toggleSDG("Peace, Justice and Strong Institutions")
                        }
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes(
                            "Peace, Justice and Strong Institutions"
                          )
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Peace, Justice and Strong Institutions
                      </button>
                      <button
                        onClick={() => toggleSDG("Partnerships for the Goals")}
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes("Partnerships for the Goals")
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Partnerships for the Goals
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-start">
                      <button
                        onClick={() => toggleSDG("Reduced Inequalities")}
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes("Reduced Inequalities")
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Reduced Inequalities
                      </button>
                      <button
                        onClick={() =>
                          toggleSDG("Sustainable Cities and Communities")
                        }
                        className={`rounded-3xl px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer text-base ${
                          selectedSDGs.includes(
                            "Sustainable Cities and Communities"
                          )
                            ? "color2 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Sustainable Cities and Communities
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {steps === 2 && (
              <div className="max-w-4xl mx-auto mt-16 px-8">
                <h2 className="text-5xl font-bold text-black mb-4">
                  Partnership Preferences (Optional)
                </h2>
                <p className="text-xl text-gray-700 mb-12">
                  Helps match users with ideal partners down the line.
                </p>

                <div className="mb-12">
                  <div className="flex flex-wrap gap-4 mb-8">
                    <button className="rounded-full px-6 py-3 font-medium shadow-sm border-0 bg-gray-100 text-black cursor-default">
                      Partner type →
                    </button>
                    <button
                      onClick={() => togglePartnerType("Companies")}
                      className={`rounded-full px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer ${
                        selectedPartnerTypes.includes("Companies")
                          ? "color2 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      Companies
                    </button>
                    <button
                      onClick={() => togglePartnerType("NGOs")}
                      className={`rounded-full px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer ${
                        selectedPartnerTypes.includes("NGOs")
                          ? "color2 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      NGOs
                    </button>
                    <button
                      onClick={() => togglePartnerType("Just exploring")}
                      className={`rounded-full px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer ${
                        selectedPartnerTypes.includes("Just exploring")
                          ? "color2 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      Just exploring
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button className="rounded-full px-6 py-3 font-medium shadow-sm border-0 bg-gray-100 text-black cursor-default">
                      ESG pillars →
                    </button>
                    <button
                      onClick={() => toggleESGPillar("Environmental")}
                      className={`rounded-full px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer ${
                        selectedESGPillars.includes("Environmental")
                          ? "color2 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      Environmental
                    </button>
                    <button
                      onClick={() => toggleESGPillar("Social")}
                      className={`rounded-full px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer ${
                        selectedESGPillars.includes("Social")
                          ? "color2 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      Social
                    </button>
                    <button
                      onClick={() => toggleESGPillar("Governance")}
                      className={`rounded-full px-6 py-3 font-medium shadow-sm border-0 hover:shadow-md transition-all cursor-pointer ${
                        selectedESGPillars.includes("Governance")
                          ? "color2 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      Governance
                    </button>
                  </div>
                </div>
              </div>
            )}

            {steps === 3 && (
              <div className="max-w-6xl mx-auto mt-16 px-8">
                <div className="grid grid-cols-3 gap-8 mb-16 items-stretch">
                  <div className="flex flex-col h-full">
                    <h2 className="text-2xl font-bold mb-3 text-black">
                      Give your profile credibility and a visual identity.
                    </h2>
                    <h3 className="text-lg font-semibold mb-2 text-black">
                      Upload organization logo
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      Your logo helps others recognize and remember you
                    </p>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white hover:border-gray-400 transition-colors">
                      <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-black">
                        Drag & drop or click to upload
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Accepted: PNG, JPG, SVG
                      </p>
                      <button className="color2 hover:opacity-90 text-white px-6 py-2 rounded-full transition-colors cursor-pointer">
                        Browse your files
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col h-full">
                    <h2 className="text-2xl font-bold mb-3 text-black">
                      Upload a cover photo / team photo / project image
                    </h2>
                    <h3 className="text-lg font-semibold mb-2 text-black">
                      Upload a Cover or Highlight Image
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      Make your profile feel real with a human touch.
                    </p>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white hover:border-gray-400 transition-colors">
                      <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-black">
                        Drag & drop or click to upload
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Accepted: PNG, JPG, SVG
                      </p>
                      <button className="color2 hover:opacity-90 text-white px-6 py-2 rounded-full transition-colors cursor-pointer">
                        Browse your files
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col h-full">
                    <h2 className="text-2xl font-bold mb-3 text-black">
                      Upload docs/ Financial statement
                    </h2>
                    <h3 className="text-lg font-semibold mb-2 text-black">
                      Financial statement
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      Required for verification
                    </p>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white hover:border-gray-400 transition-colors">
                      <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-black">
                        Drag & drop or click to upload
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Financial statement
                      </p>
                      <button className="color2 hover:opacity-90 text-white px-6 py-2 rounded-full transition-colors cursor-pointer">
                        Browse your files
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-3 text-black">
                    Upload optional docs
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Documents give you credibility and help us verify your
                    profile
                  </p>

                  <div className="grid grid-cols-3 gap-8 items-stretch">
                    <div className="flex flex-col h-full">
                      <div className="min-h-[5.5rem] flex items-start">
                        <h3 className="text-lg font-semibold mb-4 text-black">
                          Registration certificate
                        </h3>
                      </div>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white hover:border-gray-400 transition-colors flex-grow flex flex-col justify-center">
                        <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-black">
                          Drag & drop or click to upload
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">
                          Registration Certificate/ Legal proof of entity status
                        </p>
                        <button className="color2 hover:opacity-90 text-white px-6 py-2 rounded-full transition-colors">
                          Browse your files
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col h-full">
                      <div className="min-h-[5.5rem] flex items-start">
                        <h3 className="text-lg font-semibold mb-4 text-black">
                          ESG report
                        </h3>
                      </div>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white hover:border-gray-400 transition-colors flex-grow flex flex-col justify-center">
                        <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-black">
                          Drag & drop or click to upload
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">
                          Your environmental/social/governance data or goals
                        </p>
                        <button className="color2 hover:opacity-90 text-white px-6 py-2 rounded-full transition-colors">
                          Browse your files
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col h-full">
                      <div className="min-h-[5.5rem] flex items-start">
                        <h3 className="text-lg font-semibold mb-4 text-black">
                          Partnership case study
                          <br />
                          <span className="text-sm font-normal text-gray-500">
                            (optional but useful for credibility)
                          </span>
                        </h3>
                      </div>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white hover:border-gray-400 transition-colors flex-grow flex flex-col justify-center">
                        <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-black">
                          Drag & drop or click to upload
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">
                          Example of real collaboration in action
                        </p>
                        <button className="color2 hover:opacity-90 text-white px-6 py-2 rounded-full transition-colors">
                          Browse your files
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-600 text-center">
                  These documents remain private unless you choose to make them
                  public.
                </p>
              </div>
            )}

            {steps === 4 && (
              <div className="pt-8">
                <div className="text-center mb-16">
                  <button className="color2 text-white px-6 py-3 rounded-lg font-semibold">
                    Company plans
                  </button>
                </div>
                <SubscriptionCards
                  plans={companyPlans}
                  onPlanSelect={handlePlanSelect}
                />
              </div>
            )}

            {steps < 1 && (
              <div className="grid grid-cols-2 gap-8 px-8">
                <div className="color1 text-white p-12 rounded-3xl">
                  <h3 className="text-4xl font-bold mb-8">NGO</h3>
                  <p className="text-lg mb-8">
                    Register as a Non - Governmental Organization to connect
                    with companies and receive support.
                  </p>
                  <div className="flex justify-end">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        style={{ color: "#0a6974" }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className="color2 text-white p-12 rounded-3xl cursor-pointer"
                  onClick={() => {
                    setSteps(1);
                    setProgress(20);
                  }}
                >
                  <h3 className="text-4xl font-bold mb-8">Company</h3>
                  <p className="text-lg mb-8">
                    Register as a company to support NGOs and make a positive
                    impact.
                  </p>
                  <div className="flex justify-end">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        style={{ color: "#012960" }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {steps >= 1 && (
              <div className="mt-6 flex pt-20 justify-between">
                <button
                  className="bg-transparent border-2 rounded-3xl border-black text-bg-blue-950 py-2 px-20 cursor-pointer"
                  onClick={handlePrevious}
                >
                  Previous Step
                </button>
                {steps !== 4 && (
                  <div className="">
                    {steps === 3 && (
                      <button
                        className="bg-transparent mr-5 border-2 rounded-3xl border-black text-bg-blue-950 py-2 px-20 cursor-pointer"
                        onClick={handleNext}
                      >
                        Upload Later
                      </button>
                    )}

                    <button
                      className="bg-blue-950 px-20  py-2 rounded-3xl text-white cursor-pointer"
                      onClick={handleNext}
                    >
                      {steps === 4 ? "Upload & Continue" : "Next"}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : steps === 5 && selectedPlan && currentPage === "plan" ? (
        selectedPlan === "Explorer" ? (
          <ExplorerPlanPage
            onContinue={handlePlanContinue}
            onPrevious={() => setSteps(4)}
          />
        ) : selectedPlan === "Collaborator" ? (
          <CollaboratorPlanPage
            onContinue={handlePlanContinue}
            onPrevious={() => setSteps(4)}
          />
        ) : selectedPlan === "Leader" ? (
          <LeaderPlanPage
            onContinue={handlePlanContinue}
            onPrevious={() => setSteps(4)}
          />
        ) : null
      ) : currentPage === "processing" ? (
        <PaymentProcessingPage onComplete={handlePaymentComplete} />
      ) : currentPage === "confirmation" ? (
        <ConfirmationPage
          selectedPlan={selectedPlan || ""}
          onContinue={handleConfirmationContinue}
        />
      ) : currentPage === "welcome" ? (
        <div className="min-h-screen flex-col flex justify-center items-center relative overflow-hidden color8">
          <div className="absolute -left-32 top-1/3 transform -translate-y-1/2 opacity-30">
            <Image
              src="/image.png"
              alt="Decorative circles"
              width={450}
              height={750}
              className="object-cover"
            />
          </div>

          <div className="absolute -right-32 top-2/3 transform -translate-y-1/2 opacity-30">
            <Image
              src="/image.png"
              alt="Decorative circles"
              width={400}
              height={700}
              className="object-cover"
            />
          </div>

          <div className="relative z-10 text-center">
            <h2 className="font-bold text-5xl mb-10">Welcome abroad!</h2>
            <p className="text-2xl">
              You&apos;re all set to start exploring, connecting, and making an
              impact.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Company;
