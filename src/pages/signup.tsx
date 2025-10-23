import React from "react";
import { useRouter } from "next/router";
import NavBar from "@/components/common/NavBar";

const SignUpPage = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/signin");
  };

  const handleJoinNow = () => {
    router.push("/joinnow");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FEFDEC" }}>
      <NavBar bgColor="#FEFDEC" />

      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">
            Sign up to access this content
          </h1>

          <p className="text-2xl text-gray-600 mb-16">
            You need to create an account or sign in to see more.
          </p>

          <div className="flex gap-6 justify-center">
            <button
              onClick={handleSignIn}
              className="border-2 border-gray-900 bg-transparent px-12 py-4 rounded-full text-gray-900 hover:bg-gray-50 transition-colors text-xl font-medium min-w-[200px]"
            >
              Sign in
            </button>

            <button
              onClick={handleJoinNow}
              className="bg-blue-900 hover:bg-blue-800 rounded-full px-12 py-4 text-white transition-colors text-xl font-medium min-w-[200px]"
            >
              Join Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;
