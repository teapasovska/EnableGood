import React from "react";
import Sidebar from "@/components/common/Sidebar";
import Image from "next/image";

const gallery = [
  "/request/1.jpg",
  "/request/2.png",
  "/request/3.jpg",
  "/request/4.png",
];

const RequestPage = () => {
  return (
    <div className="flex min-h-screen color8">
      <Sidebar />
      <div className="flex-1 ml-16 p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          <div className="flex items-center gap-3">
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="#1A2B4A"
                strokeWidth="2"
              />
              <path d="M3 7l9 6 9-6" stroke="#1A2B4A" strokeWidth="2" />
            </svg>
            <span className="text-2xl font-bold tracking-tight">
              Partnership request
            </span>
          </div>
          <div className="flex items-center gap-3 mt-2 md:mt-0">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7A7,7 0 0,1 20,14V16A1,1 0 0,0 21,17H22V19H2V17H3A1,1 0 0,0 4,16V14A7,7 0 0,1 11,7V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M6,14A5,5 0 0,0 11,9V7.91C7.06,8.31 4,11.42 4,15.5V16A1,1 0 0,0 5,17A1,1 0 0,0 6,16V14M9,21A3,3 0 0,0 12,24A3,3 0 0,0 15,21H9Z" />
              </svg>
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full  hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
              onClick={() => (window.location.href = "/messages")}
              title="Messages"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H5.17L4,17.17V4H20V16Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 mb-10 w-full">
          <Image
            src="/request/cl.png"
            alt="Request Logo"
            width={300}
            height={300}
          />

          <div className="flex-1 border border-red-300 rounded-lg p-4 text-sm text-gray-800  flex items-center w-full">
            <div className="w-full">
              In 2023, Médecins Sans Frontières deployed over 69,000 staff
              across more than 70 countries, delivering essential medical care
              to millions in conflict zones, disaster areas, and regions
              grappling with epidemics. <br />
              Guided by the principle of providing aid “regardless of race,
              religion, creed or political convictions,” Doctors Without Borders
              remains a global leader in impartial, ethical humanitarian action.
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-[30%] w-full">
            <div className="mb-4 font-semibold text-lg">Gallery</div>
            <div className="flex flex-col gap-3">
              {gallery.map((img, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden w-full h-44 relative"
                >
                  <Image
                    src={img}
                    alt="Gallery"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-[70%] w-full">
            <div className="font-semibold text-lg mb-4">Connect with Us!</div>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "/success";
              }}
            >
              <input
                className="rounded-lg border border-gray-300 px-4 py-3 text-base shadow-sm"
                placeholder="Your Company Name"
              />
              <input
                className="rounded-lg border border-gray-300 px-4 py-3 text-base shadow-sm"
                placeholder="Project Interest"
              />
              <input
                className="rounded-lg border border-gray-300 px-4 py-3 text-base shadow-sm"
                placeholder="Proposed Timeline"
              />
              <input
                className="rounded-lg border border-gray-300 px-4 py-3 text-base shadow-sm"
                placeholder="Engagement Goals"
              />
              <textarea
                className="rounded-lg border border-gray-300 px-4 py-3 text-base shadow-sm min-h-[60px]"
                placeholder="Message to NGO"
              />
              <div>
                <div className="font-semibold mb-2">Schedule a Meeting</div>
                <div className="flex gap-2 items-center">
                  <input
                    type="date"
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  />
                  <select className="border border-gray-300 rounded-lg px-2 py-2">
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i}>
                        {(i + 1).toString().padStart(2, "0")}
                      </option>
                    ))}
                  </select>
                  <span>:</span>
                  <select className="border border-gray-300 rounded-lg px-2 py-2">
                    {Array.from({ length: 60 }, (_, i) => (
                      <option key={i}>{i.toString().padStart(2, "0")}</option>
                    ))}
                  </select>
                  <select className="border border-gray-300 rounded-lg px-2 py-2">
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  type="button"
                  className="border-2 border-color2 text-color2 px-8 py-3 rounded-full font-medium text-base bg-white hover:bg-gray-50 transition-colors flex-1"
                  onClick={() => (window.location.href = "/dashboard")}
                >
                  Back to Dashboard
                </button>
                <button
                  type="submit"
                  className="color2 text-white px-8 py-3 rounded-full font-medium text-base flex-1"
                >
                  Send Request
                </button>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Your details are shared only with this organization and stored
                securely.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPage;
