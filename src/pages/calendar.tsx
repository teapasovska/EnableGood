import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Sidebar from "@/components/common/Sidebar";

const Calendar = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Calendar - Your App</title>
        <meta name="description" content="Calendar page" />
      </Head>
      <div className="flex h-screen color8">
        <Sidebar />
        <div className="flex-1 ml-16 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center text-gray-700">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h1 className="text-2xl font-semibold text-gray-800">Calendar</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-end space-x-4 mb-4">
                <div className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 cursor-pointer">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7A7,7 0 0,1 20,14V16A1,1 0 0,0 21,17H22V19H2V17H3A1,1 0 0,0 4,16V14A7,7 0 0,1 11,7V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M6,14A5,5 0 0,0 11,9V7.91C7.06,8.31 4,11.42 4,15.5V16A1,1 0 0,0 5,17A1,1 0 0,0 6,16V14M9,21A3,3 0 0,0 12,24A3,3 0 0,0 15,21H9Z" />
                  </svg>
                </div>
                <div
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 cursor-pointer"
                  onClick={() => router.push("/messages")}
                  title="Messages"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H5.17L4,17.17V4H20V16Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            style={{ height: "calc(100vh - 140px)" }}
          >
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FBelgrade&showPrint=0&src=cGFzb3Zza2F0ZWFAZ21haWwuY29t&src=ZW4ubWsjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4uc2xvdmVuaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%234285f4&color=%230b8043"
              style={{ border: 0 }}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              title="Personal Google Calendar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
