/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setError("No user found. Please sign up first.");
      return;
    }

    const user = JSON.parse(storedUser);

    if (email === user.email && password === user.password) {
      console.log("Sign in successful:", user);
      router.push("/dashboard"); // Redirect to dashboard
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div
        className="flex-1 flex items-center justify-center"
        style={{ backgroundColor: "#fefdec" }}
      >
        <div className="w-full max-w-sm px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome to Enable Good
            </h1>
            <p className="text-gray-600 text-base">
              Sign In to continue your impact
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white shadow-sm"
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white shadow-sm"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full text-white py-4 px-6 rounded-xl text-base font-semibold transition-colors shadow-md color2 hover-color2"
            >
              Sign In
            </button>
          </form>

          <div className="text-center mt-8">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
            >
              Forgot your password?
            </Link>
          </div>

          <div className="text-center mt-6">
            <span className="text-gray-500 text-sm">
              Don&apos;t have an account?{" "}
            </span>
            <Link
              href="/joinnow"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm"
            >
              Join now
            </Link>
          </div>
        </div>
      </div>

      <div
        className="flex-1 flex items-center justify-center relative"
        style={{ backgroundColor: "#f7dacf" }}
      >
        <div className="text-center z-10">
          <div className="mb-12">
            <div className="text-5xl font-bold mb-2">
              <span className="text-teal-600">Enable Good</span>
            </div>
            <div className="text-xl text-gray-700 font-medium tracking-wider">
              CONNECTING GOOD
            </div>
          </div>

          <div className="relative">
            <img
              src="/image.png"
              alt="Enable Good Pattern"
              className="w-80 h-80 object-contain"
            />
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 right-16 w-24 h-24 bg-pink-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-24 right-24 w-40 h-40 bg-pink-300 rounded-full opacity-15"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-pink-200 rounded-full opacity-25"></div>
          <div className="absolute bottom-1/3 left-16 w-28 h-28 bg-pink-300 rounded-full opacity-10"></div>
          <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-pink-200 rounded-full opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
