/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/common/Sidebar";
import Input from "@/components/common/Input";
import { useRouter } from "next/router";

const PaymentInfo: React.FC = () => {
  const router = useRouter();

  const [logIn, setLogIn] = useState({
    subscriptionPlan: "",
    billingHistory: "",
    paymentMethod: "",
  });

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) setLogIn(JSON.parse(storedUser));
    } catch {}
  }, []);

  const handleSaveChanges = () => {
    localStorage.setItem("user", JSON.stringify(logIn));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLogIn({
      subscriptionPlan: "",
      billingHistory: "",
      paymentMethod: "",
    });
  };

  // Check if verified
  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("verified") === "true"
    ) {
      setIsVerified(true);
    }
  }, []);

  return (
    <div className="flex justify-between bg-white">
      <div className="w-1/3 p-20 relative">
        <div className="flex flex-col items-center">
          <div className="w-full bg-blue-950 h-24 rounded-t-xl relative" />

          <div
            className="w-full flex justify-center relative"
            style={{ zIndex: 2 }}
          >
            <div
              className="absolute left-1/2"
              style={{
                top: "-48px",
                transform: "translateX(-50%)",
                zIndex: 3,
                background: "white",
                borderRadius: "50%",
                border: "1.5px solid #222",
                width: "120px",
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <Image
                className="object-contain"
                src="/images/care.png"
                alt="Profile"
                fill
                style={{ borderRadius: "50%" }}
              />
              {isVerified && (
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    transform: "translate(40%, -40%)",
                    zIndex: 4,
                  }}
                >
                  <svg
                    width="40"
                    height="40"
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
                      fill="white"
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
              )}
            </div>
          </div>

          <div
            className="w-full bg-white rounded-b-xl"
            style={{ height: "80px" }}
          />
        </div>

        <div className="flex items-center pt-[20%] flex-col mt-6 pb-10">
          <button className="bg-blue-950 w-1/2 py-2 rounded-3xl text-white cursor-pointer">
            Upload Photo
          </button>
          <button className="bg-transparent w-1/2 border-2 mt-10 rounded-3xl border-black text-blue-950 py-2 cursor-pointer">
            Delete photo
          </button>
        </div>

        <hr className="ml-8 bg-gray-200 h-[1%] w-full mb-10" />

        <div className="text-center pb-10">
          <button
            className="bg-yellow-200 w-1/2 border-2 mt-10 rounded-3xl border-black text-blue-950 py-2 cursor-pointer"
            onClick={() => router.push("/verification")}
            disabled={
              typeof window !== "undefined" &&
              localStorage.getItem("verified") === "true"
            }
          >
            {typeof window !== "undefined" &&
            localStorage.getItem("verified") === "true"
              ? "Verified"
              : "Verify now"}
          </button>
        </div>

        <div className="text-center flex space-y-5 flex-col">
          <button
            className="bg-yellow-100 border-2 border-black text-blue-950 py-2 rounded-3xl w-3/4 mx-auto font-semibold hover:bg-yellow-200 transition-colors cursor-pointer"
            onClick={() => router.push("/user/userinfo")}
          >
            User info
          </button>
          <button
            className="bg-yellow-100 border-2 border-black text-blue-950 py-2 rounded-3xl w-3/4 mx-auto font-semibold hover:bg-yellow-200 transition-colors cursor-pointer"
            onClick={() => router.push("/user/paymentinfo")}
          >
            Payment
          </button>
        </div>

        <div className="text-center pt-10">
          <button
            className="bg-blue-950 w-1/2 py-2 rounded-3xl text-white cursor-pointer"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>

        <Sidebar />
      </div>

      <div className="w-2/3 bg-yellow-50">
        <h2 className="text-5xl text-black p-10">Payment Information</h2>

        <div className="p-10 space-y-5">
          <Input
            placeholder="Subscription Plan"
            textcenter={false}
            fullWidth
            value={logIn.subscriptionPlan}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLogIn({ ...logIn, subscriptionPlan: e.target.value })
            }
          />
          <Input
            placeholder="Billing History"
            textcenter={false}
            fullWidth
            value={logIn.billingHistory}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLogIn({ ...logIn, billingHistory: e.target.value })
            }
          />
          <Input
            placeholder="Payment Method"
            textcenter={false}
            fullWidth
            value={logIn.paymentMethod}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLogIn({ ...logIn, paymentMethod: e.target.value })
            }
          />
        </div>

        <div className="p-10">
          <div className="flex justify-between mt-5">
            <button
              className="bg-transparent w-1/4 border-2 rounded-3xl border-black text-blue-950 py-2 cursor-pointer"
              onClick={handleLogout}
            >
              Cancel subscription
            </button>
            <button
              className="bg-blue-950 w-1/4 py-2 rounded-3xl text-white cursor-pointer"
              onClick={handleSaveChanges}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
