/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavBarProps {
  bgColor?: string;
}

const NavBar = ({ bgColor = "#f7dacf" }: NavBarProps) => {
  const { setUser } = useUser();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Check if we're in onboarding steps
  const isOnboardingPage = router.pathname === "/joinnow";

  return (
    <nav
      className="flex items-center justify-between px-6 lg:px-20 py-4 relative"
      style={{ backgroundColor: bgColor }}
    >
      <Link href="/" className="flex items-center space-x-2 z-20">
        <div className="w-10 h-10 relative">
          <img
            src="/image.png"
            alt="Enable Good Pattern"
            className="w-10 h-10 object-contain"
          />
        </div>
        <div className="text-xl font-semibold text-gray-800">
          <span className="text-teal-600">Enable Good</span>
          <div className="text-xs text-gray-600 -mt-1">CONNECTING GOOD</div>
        </div>
      </Link>

      <div className="flex lg:hidden items-center z-30">
        <button
          className="block lg:hidden"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <svg
            className="w-8 h-8 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop nav links */}
      <div className="hidden lg:flex items-center space-x-8">
        <Link
          href="/learning-hub"
          className="text-gray-700 hover:text-gray-900 transition-colors relative group"
        >
          Learning Hub
          <span
            className={`absolute left-0 bottom-0 h-0.5 bg-gray-900 transition-all duration-300 ${
              router.pathname === "/learning-hub"
                ? "w-full"
                : "w-0 group-hover:w-full"
            }`}
          ></span>
        </Link>
        <Link
          href="/impact-reporting"
          className="text-gray-700 hover:text-gray-900 transition-colors relative group"
        >
          Impact Reporting
          <span
            className={`absolute left-0 bottom-0 h-0.5 bg-gray-900 transition-all duration-300 ${
              router.pathname === "/impact-reporting"
                ? "w-full"
                : "w-0 group-hover:w-full"
            }`}
          ></span>
        </Link>
        <Link
          href="#"
          className="text-gray-700 hover:text-gray-900 transition-colors relative group"
        >
          Matchmaking Hub
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/explore"
          className="text-gray-700 hover:text-gray-900 transition-colors relative group"
        >
          Explore
          <span
            className={`absolute left-0 bottom-0 h-0.5 bg-gray-900 transition-all duration-300 ${
              router.pathname === "/explore"
                ? "w-full"
                : "w-0 group-hover:w-full"
            }`}
          ></span>
        </Link>
        <Link
          href="/about"
          className="text-gray-700 hover:text-gray-900 transition-colors relative group"
        >
          About Us
          <span
            className={`absolute left-0 bottom-0 h-0.5 bg-gray-900 transition-all duration-300 ${
              router.pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </Link>
      </div>

      <div className="hidden lg:flex items-center space-x-3">
        <Link
          href="/signin"
          className="border border-gray-400 bg-white px-6 py-2 rounded-full text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
        >
          Sign in
        </Link>
        {!isOnboardingPage && (
          <button
            className="bg-blue-900 hover:bg-blue-800 rounded-full px-6 py-2 text-white transition-colors cursor-pointer"
            onClick={() => {
              setUser("Company User");
              router.push("/joinnow");
            }}
          >
            Join Now
          </button>
        )}
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 flex flex-col items-center justify-center lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg py-8 px-10 flex flex-col items-center space-y-6 min-w-[70vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="/learning-hub"
              className="text-gray-700 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Learning Hub
            </Link>
            <Link
              href="/impact-reporting"
              className="text-gray-700 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Impact Reporting
            </Link>
            <Link
              href="#"
              className="text-gray-700 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Matchmaking Hub
            </Link>
            <Link
              href="/explore"
              className="text-gray-700 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              href="/about"
              className="text-gray-700 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="flex flex-col items-center space-y-3 pt-4">
              <Link
                href="/signin"
                className="border border-gray-400 bg-white px-6 py-2 rounded-full text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign in
              </Link>
              {!isOnboardingPage && (
                <button
                  className="bg-blue-900 hover:bg-blue-800 rounded-full px-6 py-2 text-white transition-colors cursor-pointer w-full"
                  onClick={() => {
                    setUser("Company User");
                    setMobileMenuOpen(false);
                    router.push("/joinnow");
                  }}
                >
                  Join Now
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
