import React from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/common/Sidebar";

const initialDocuments = [
  {
    name: "Q1 Financial Report.pdf",
    uploaded: "2024-06-13",
    size: "2.5 MB",
    status: "Saved",
    lastModified: "2024-06-13",
    verification: "Pending",
  },
  {
    name: "Annual Compliance Summary.docx",
    uploaded: "2024-06-13",
    size: "2.5 MB",
    status: "Saved",
    lastModified: "2024-06-13",
    verification: "Success",
  },
  {
    name: "Market Research Analysis.pdf",
    uploaded: "2024-06-13",
    size: "2.5 MB",
    status: "Saved",
    lastModified: "2024-06-13",
    verification: "Success",
  },
  {
    name: "Product Roadmap 2025.pdf",
    uploaded: "2024-06-13",
    size: "2.5 MB",
    status: "Saved",
    lastModified: "2024-06-13",
    verification: "Pending",
  },
  {
    name: "User Journey 2023.fig",
    uploaded: "2024-06-13",
    size: "2.5 MB",
    status: "Saved",
    lastModified: "2024-06-13",
    verification: "Success",
  },
  {
    name: "Project Management Plans 2022.pdf",
    uploaded: "2024-06-13",
    size: "2.5 MB",
    status: "Saved",
    lastModified: "2024-06-13",
    verification: "Pending",
  },
];

const VerificationPage = () => {
  const [step, setStep] = React.useState(0);
  const [documents] = React.useState(initialDocuments);

  // Step 1: Why verify (with tiers)
  const renderStep1 = () => (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-[70%]">
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <span className="text-4xl font-bold text-green-700 mr-4">1</span>
            <h2 className="text-2xl font-semibold text-blue-950">
              Why should I verify?
            </h2>
          </div>
          <div className="text-gray-700 text-base mb-4">
            <b>
              Verifying your company on{" "}
              <span className="text-blue-950">Enable Good</span>
            </b>{" "}
            signals to NGOs and fellow corporate partners that you&apos;re
            serious about transparency and impact. Through a simple upload of
            compliance documents and ESG reports, you&apos;ll earn a Bronze,
            Silver, or Gold certification badge that appears on your profile—no
            more wondering whether a partner walks the talk. These tiered
            credentials build instant credibility, unlocking priority access to
            high-impact projects and streamlined collaboration. In today&apos;s
            competitive ESG landscape, a verified badge isn&apos;t just a
            symbol—it&apos;s your passport to trusted, lasting partnerships.
          </div>
        </div>
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <span className="text-4xl font-bold text-green-700 mr-4">2</span>
            <h2 className="text-2xl font-semibold text-blue-950">
              How do I get a certification badge?
            </h2>
          </div>
          <div className="text-gray-700 text-base mb-4">
            When you complete the verification process—submitting your ESG
            policies, financial statements, and impact reports—our platform
            automatically evaluates your commitment to transparency and ethical
            practice. Based on this review, you&apos;ll be awarded a{" "}
            <b>Bronze, Silver, or Gold certification badge</b> that&apos;s
            displayed prominently on your profile page.
          </div>
        </div>
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <span className="text-4xl font-bold text-green-700 mr-4">3</span>
            <h2 className="text-2xl font-semibold text-blue-950">
              Why should I want a higher badge?
            </h2>
          </div>
          <div className="text-gray-700 text-base mb-4">
            This tiered system not only demonstrates your adherence to industry
            best practices, but also fast-tracks your access to premium
            partnership opportunities with NGOs and fellow corporates. As you
            climb from Bronze to Gold, you signal an ever-stronger level of
            trustworthiness, making other organizations far more likely to
            choose you as a collaborative partner. Ultimately, verification and
            certification work hand-in-hand to guarantee that every match you
            make is built on a foundation of accountability and credibility.
          </div>
        </div>
      </div>
      <div className="w-full md:w-[30%] flex flex-col gap-6 relative">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-950">
            Certification Tiers
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 bg-yellow-50 rounded-lg p-3 shadow-sm">
              <span
                className="inline-flex items-center justify-center"
                style={{ width: 36, height: 36 }}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#FFD600"
                    strokeWidth="7"
                    fill="none"
                  />
                  <polygon
                    points="50,20 56,40 77,40 60,52 66,72 50,60 34,72 40,52 23,40 44,40"
                    fill="#FFD600"
                  />
                  <polygon
                    points="50,20 56,40 77,40 60,52 66,72 50,60 34,72 40,52 23,40 44,40"
                    fill="#FFD600"
                    opacity="0.3"
                  />
                  <polygon
                    points="50,28 54,40 67,40 56,48 60,60 50,52 40,60 44,48 33,40 46,40"
                    fill="#FFD600"
                  />
                </svg>
              </span>
              <div>
                <b>Gold</b> - Represents the pinnacle of ethical practice with
                regular audits and robust, ongoing impact metrics, instantly
                earning you priority access to flagship projects and top-tier
                co-branding opportunities.
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-100 rounded-lg p-3 shadow-sm">
              <span
                className="inline-flex items-center justify-center"
                style={{ width: 36, height: 36 }}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#C0C0C0"
                    strokeWidth="7"
                    fill="none"
                  />
                  <polygon
                    points="50,20 56,40 77,40 60,52 66,72 50,60 34,72 40,52 23,40 44,40"
                    fill="#C0C0C0"
                  />
                  <polygon
                    points="50,20 56,40 77,40 60,52 66,72 50,60 34,72 40,52 23,40 44,40"
                    fill="#C0C0C0"
                    opacity="0.3"
                  />
                  <polygon
                    points="50,28 54,40 67,40 56,48 60,60 50,52 40,60 44,48 33,40 46,40"
                    fill="#C0C0C0"
                  />
                </svg>
              </span>
              <div>
                <b>Silver</b> - Showcases your deeper commitment through
                comprehensive impact reports and measurable outcomes,
                positioning you as a results-driven collaborator in the ESG
                community.
              </div>
            </div>
            <div className="flex items-start gap-3 bg-orange-50 rounded-lg p-3 shadow-sm">
              <span
                className="inline-flex items-center justify-center"
                style={{ width: 36, height: 36 }}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#CD7F32"
                    strokeWidth="7"
                    fill="none"
                  />
                  <polygon
                    points="50,20 56,40 77,40 60,52 66,72 50,60 34,72 40,52 23,40 44,40"
                    fill="#CD7F32"
                  />
                  <polygon
                    points="50,20 56,40 77,40 60,52 66,72 50,60 34,72 40,52 23,40 44,40"
                    fill="#CD7F32"
                    opacity="0.3"
                  />
                  <polygon
                    points="50,28 54,40 67,40 56,48 60,60 50,52 40,60 44,48 33,40 46,40"
                    fill="#CD7F32"
                  />
                </svg>
              </span>
              <div>
                <b>Bronze</b> - Demonstrates your company&apos;s foundational
                transparency by verifying essential ESG policies and financial
                statements, signaling reliability for introductory NGO
                partnerships.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="px-8 py-3 rounded-full bg-blue-950 text-white font-semibold hover:bg-blue-900 text-lg"
            onClick={() => setStep(1)}
          >
            Start now
          </button>
        </div>
      </div>
    </div>
  );

  // Step 2: Upload documentation
  const renderStep2 = () => (
    <div className="flex flex-col min-h-[70vh] relative">
      <div className="mb-8">
        <div className="flex items-center">
          <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-900 rounded-full"
              style={{ width: "33%" }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between mt-2 text-lg font-medium text-blue-950 mb-26">
          <span className="ml-2">Upload Your Documentation</span>
          <span>Expert Review</span>
          <span className="mr-2">Earn Your Badge & Unlock Benefits</span>
        </div>
      </div>

      <div className="flex flex-row gap-8 flex-1 ">
        <div className="w-full md:w-2/3 flex flex-col justify-start pt-8">
          <p className="text-gray-700 text-lg mb-6">
            Gather and submit key compliance files –<br />
            ESG reports, audited financial statements, impact reports, and any
            legal or environmental certifications you hold.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Consider also uploading –<br />
            sustainability roadmaps, code of conduct, board diversity
            statements, environmental impact assessments, and anti-corruption
            policies to bolster your submission.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center justify-start pt-4">
          <div className="border-2 border-dashed border-gray-400 rounded-xl p-10 flex flex-col items-center w-full max-w-md bg-white">
            <div className="mb-4 flex flex-col items-center">
              <span className="text-4xl mb-2">📤</span>
              <span className="font-semibold text-lg mb-2">
                Upload your documents
              </span>
              <span className="text-gray-500 text-sm mb-4 text-center">
                Drag and drop your report file or click to browse
              </span>
              <button className="px-6 py-2 rounded-full bg-blue-950 text-white font-semibold hover:bg-blue-900">
                Browse your files
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute left-0 w-full flex justify-between px-2 md:px-8 pb-8"
        style={{ bottom: 0, transform: "translateY(64px)" }}
      >
        <button
          className="px-6 py-2 rounded-full border-2 border-blue-950 text-blue-950 bg-white font-semibold hover:bg-blue-50"
          onClick={() => setStep(0)}
        >
          Previous Step
        </button>
        <button
          className="px-6 py-2 rounded-full bg-blue-950 text-white font-semibold hover:bg-blue-900"
          onClick={() => setStep(2)}
        >
          Next Step
        </button>
      </div>
    </div>
  );

  // Step 3: Document review table
  const renderStep3 = () => (
    <div className="flex flex-col min-h-[70vh]">
      <div className="mb-20">
        <div className="w-full flex items-center justify-center">
          <div className="w-[95%] h-6 flex items-center">
            <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden flex items-center">
              <div
                className="h-6 bg-blue-900 rounded-full"
                style={{ width: "66%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between mt-2 text-xl font-semibold">
          <span className="ml-8">Upload Your Documentation</span>
          <span>Expert review</span>
          <span className="mr-8">Earn Your Badge & Unlock Benefits</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 flex-1">
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-gray-700 text-lg mb-8">
            Once submitted, our dedicated verification team carefully examines
            each file for completeness and authenticity. This thorough human-led
            process ensures your disclosures meet our rigorous
            standards—typically wrapped up within 48 hours.
          </p>
          <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
            <h3 className="text-xl font-semibold mb-4 text-blue-950">
              Your submitted documents
            </h3>
            <table className="min-w-full text-left text-gray-700">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Uploaded</th>
                  <th className="py-2 px-4">Size</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Last Modified</th>
                  <th className="py-2 px-4">Verification</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4 text-blue-700 underline cursor-pointer">
                      {doc.name}
                    </td>
                    <td className="py-2 px-4">{doc.uploaded}</td>
                    <td className="py-2 px-4">{doc.size}</td>
                    <td className="py-2 px-4">
                      <span className="px-3 py-1 rounded-full border border-gray-300 bg-gray-100 text-gray-700 text-sm">
                        {doc.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">{doc.lastModified}</td>
                    <td className="py-2 px-4">
                      {doc.verification === "Success" ? (
                        <span className="px-3 py-1 rounded-full bg-green-600 text-white text-sm">
                          Success
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">
                          Pending
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between mt-8">
            <button
              className="px-6 py-2 rounded-full border-2 border-blue-950 text-blue-950 bg-white font-semibold hover:bg-blue-50"
              onClick={() => setStep(1)}
            >
              Previous Step
            </button>
            <button
              className="px-6 py-2 rounded-full bg-blue-950 text-white font-semibold hover:bg-blue-900"
              onClick={() => setStep(3)}
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Step 4: Gold badge earned
  const renderStep4 = () => {
    const router = useRouter();
    return (
      <div className="flex flex-col min-h-[70vh] bg-[#FFFDEB]">
        <div className="w-full max-w-5xl mx-auto mt-6 mb-10">
          <div className="flex flex-col">
            <div className="w-full h-5 flex items-center mb-2">
              <div className="w-full h-3 bg-blue-900 rounded-full" />
            </div>
            <div className="flex justify-between text-lg font-semibold text-blue-950 mt-1">
              <span>Upload Your Documentation</span>
              <span>Expert review</span>
              <span>Earn Your Badge & Unlock Benefits</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center flex-1">
          <div className="flex flex-row items-start gap-8 mb-6 w-full max-w-4xl">
            <div className="flex flex-col items-center justify-center min-w-[120px]">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke="#FFD600"
                  strokeWidth="7"
                  fill="none"
                />
                <polygon
                  points="50,20 56,40 77,40 60,52 66,72 50,60 34,72 40,52 23,40 44,40"
                  fill="#FFD600"
                />
                <polygon
                  points="50,20 56,40 77,40 60,52 66,72 50,60 34,72 40,52 23,40 44,40"
                  fill="#FFD600"
                  opacity="0.3"
                />
                <polygon
                  points="50,28 54,40 67,40 56,48 60,60 50,52 40,60 44,48 33,40 46,40"
                  fill="#FFD600"
                />
              </svg>
            </div>
            <div className="flex-1 flex flex-col items-start">
              <h2 className="text-3xl font-bold mb-2 text-blue-950 text-left">
                Congratulations—You’ve Earned Your Gold Badge!
              </h2>
              <p className="text-gray-700 text-lg mb-2 text-left">
                Your commitment to transparency is now recognized.
              </p>
              <p className="text-gray-700 text-lg mb-2 text-left">
                Having earned the Gold badge, your company is now recognized as
                an industry leader in transparency and ethical practice,
                instantly building trust with NGOs and corporate peers. You’ll
                receive priority access to flagship projects, exclusive
                co-branding opportunities, and tailored CSR insights to amplify
                your impact. Your badge will remain on your profile as long as
                your disclosures are up to date.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-blue-950 text-center">
            Your Benefits
          </h3>
          <div className="flex flex-wrap gap-4 justify-center mb-10 w-full max-w-4xl">
            <div className="bg-blue-950 text-white px-6 py-4 rounded-2xl font-semibold text-center min-w-[220px]">
              Fast-track NGO introductions
            </div>
            <div className="bg-blue-950 text-white px-6 py-4 rounded-2xl font-semibold text-center min-w-[220px]">
              Dashboard analytics and insights
            </div>
            <div className="bg-blue-950 text-white px-6 py-4 rounded-2xl font-semibold text-center min-w-[220px]">
              Co-branding opportunities
            </div>
            <div className="bg-blue-950 text-white px-6 py-4 rounded-2xl font-semibold text-center min-w-[220px]">
              Exclusive CSR newsletters
            </div>
            <div className="bg-blue-950 text-white px-6 py-4 rounded-2xl font-semibold text-center min-w-[220px]">
              Early access to flagship programs
            </div>
            <div className="bg-blue-950 text-white px-6 py-4 rounded-2xl font-semibold text-center min-w-[220px]">
              Priority customer support
            </div>
          </div>
          <div className="flex gap-8 mt-2 mb-4">
            <button
              className="px-10 py-3 rounded-full border-2 border-blue-950 text-blue-950 bg-white font-semibold hover:bg-blue-50 text-lg transition"
              onClick={() => {
                localStorage.setItem("verified", "true");
                router.push("/dashboard");
              }}
            >
              Back to Dashboard
            </button>
            <button
              className="px-10 py-3 rounded-full bg-blue-950 text-white font-semibold hover:bg-blue-900 text-lg transition"
              onClick={() => {
                localStorage.setItem("verified", "true");
                router.push("/user/userinfo");
              }}
            >
              Share your Badge
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen color8">
      <Sidebar />
      <div className="flex-1 flex flex-col p-10 pl-0 md:pl-18 lg:pl-36 transition-all duration-300">
        {step === 0 && renderStep1()}
        {step === 1 && renderStep2()}
        {step === 2 && renderStep3()}
        {step === 3 && renderStep4()}
      </div>
    </div>
  );
};

export default VerificationPage;
