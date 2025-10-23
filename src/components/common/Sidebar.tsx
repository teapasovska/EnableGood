import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="fixed left-0 top-0 h-screen w-16 color2 flex flex-col items-center py-4 justify-between z-10">
      <div
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src="/image.png"
          alt="Logo"
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </div>

      <div className="flex flex-col space-y-4">
        <div
          className={`w-8 h-8 flex items-center justify-center text-white rounded cursor-pointer relative ${
            router.pathname === "/dashboard"
              ? "bg-blue-600 bg-opacity-30"
              : "hover-color2"
          }`}
          onClick={() => router.push("/dashboard")}
        >
          {router.pathname === "/dashboard" && (
            <div className="absolute -left-2 top-0 bottom-0 w-1 bg-white rounded-r"></div>
          )}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>

        <div
          className={`w-8 h-8 flex items-center justify-center text-white rounded cursor-pointer relative ${
            router.pathname === "/projects"
              ? "bg-blue-600 bg-opacity-30"
              : "hover-color2"
          }`}
          onClick={() => router.push("/projects")}
        >
          {router.pathname === "/projects" && (
            <div className="absolute -left-2 top-0 bottom-0 w-1 bg-white rounded-r"></div>
          )}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,6V4H10V6H4V18H20V6M12,7H18V17H6V7H12Z" />
          </svg>
        </div>

        <div
          className={`w-8 h-8 flex items-center justify-center text-white rounded cursor-pointer relative ${
            router.pathname === "/calendar"
              ? "bg-blue-600 bg-opacity-30"
              : "hover-color2"
          }`}
          onClick={() => router.push("/calendar")}
        >
          {router.pathname === "/calendar" && (
            <div className="absolute -left-2 top-0 bottom-0 w-1 bg-white rounded-r"></div>
          )}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" />
          </svg>
        </div>

        <div
          className={`w-8 h-8 flex items-center justify-center text-white rounded cursor-pointer relative ${
            router.pathname === "/matchmaking"
              ? "bg-blue-600 bg-opacity-30"
              : "hover-color2"
          }`}
          onClick={() => router.push("/matchmaking")}
        >
          {router.pathname === "/matchmaking" && (
            <div className="absolute -left-2 top-0 bottom-0 w-1 bg-white rounded-r"></div>
          )}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,5.5A3,3 0 0,1 15,2.5A3,3 0 0,1 18,5.5A3,3 0 0,1 15,8.5A3,3 0 0,1 12,5.5M5,8A2.5,2.5 0 0,1 7.5,5.5A2.5,2.5 0 0,1 10,8A2.5,2.5 0 0,1 7.5,10.5A2.5,2.5 0 0,1 5,8M17.5,8A2.5,2.5 0 0,1 20,5.5A2.5,2.5 0 0,1 22.5,8A2.5,2.5 0 0,1 20,10.5A2.5,2.5 0 0,1 17.5,8M15.94,13C16.94,14.56 17.5,16.21 17.5,18V22H6.5V18C6.5,16.21 7.06,14.56 8.06,13H15.94M2.5,14H5.5V22H0.5V18C0.5,16.35 1.15,14.86 2.5,14M18.5,14H21.5C22.85,14.86 23.5,16.35 23.5,18V22H18.5V14Z" />
          </svg>
        </div>

        <div
          className={`w-8 h-8 flex items-center justify-center text-white rounded cursor-pointer relative ${
            router.pathname === "/explore2"
              ? "bg-blue-600 bg-opacity-30"
              : "hover-color2"
          }`}
          onClick={() => router.push("/explore2")}
        >
          {router.pathname === "/explore2" && (
            <div className="absolute -left-2 top-0 bottom-0 w-1 bg-white rounded-r"></div>
          )}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3" />
          </svg>
        </div>

        <div
          className={`w-8 h-8 flex items-center justify-center text-white rounded cursor-pointer relative ${
            router.pathname === "/overview"
              ? "bg-blue-600 bg-opacity-30"
              : "hover-color2"
          }`}
          onClick={() => router.push("/overview")}
        >
          {router.pathname === "/overview" && (
            <div className="absolute -left-2 top-0 bottom-0 w-1 bg-white rounded-r"></div>
          )}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
          </svg>
        </div>

        <div
          className={`w-8 h-8 flex items-center justify-center text-white rounded cursor-pointer relative ${
            router.pathname === "/impact2"
              ? "bg-blue-600 bg-opacity-30"
              : "hover-color2"
          }`}
          onClick={() => router.push("/impact2")}
        >
          {router.pathname === "/impact2" && (
            <div className="absolute -left-2 top-0 bottom-0 w-1 bg-white rounded-r"></div>
          )}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
        </div>

        <div
          className={`w-8 h-8 flex items-center justify-center text-white rounded cursor-pointer relative ${
            router.pathname === "/statistics"
              ? "bg-blue-600 bg-opacity-30"
              : "hover-color2"
          }`}
          onClick={() => router.push("/statistics")}
        >
          {router.pathname === "/statistics" && (
            <div className="absolute -left-2 top-0 bottom-0 w-1 bg-white rounded-r"></div>
          )}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22,21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21M16,8H18V15H16V8M12,2H14V15H12V2M8,9H10V15H8V9M4,11H6V15H4V11Z" />
          </svg>
        </div>
      </div>

      <div
        className="w-10 h-10 rounded-full overflow-hidden bg-white cursor-pointer flex items-center justify-center"
        onClick={() => router.push("/user")}
      >
        <Image
          src="/images/care.png"
          alt="Profile"
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
      </div>
    </div>
  );
};

export default Sidebar;
