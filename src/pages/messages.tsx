import React from "react";
import Sidebar from "@/components/common/Sidebar";
import Image from "next/image";

const chatList = [
  {
    name: "Porsche",
    subtitle: "Automobile Ind.",
    date: "12 April 2024",
    message: "Keep your messages short, but make su...",
    avatar: "/images/hp1.jpg",
    active: true,
  },
  ...Array(6).fill({
    name: "Organisation",
    subtitle: "Field",
    date: "12 April 2024",
    message: "Keep your messages short, but make su...",
    avatar: "/images/hp2.jpg",
    active: false,
  }),
];

const messages = [
  {
    from: "me",
    text: "Lorem ipsum proin massa proin eget dui felis malesuada ut donec massa amet at tortor arcu morbi euismod et viverra.",
    time: "",
  },
  {
    from: "other",
    text: "Lorem ipsum proin massa proin eget dui felis malesuada ut donec massa amet at tortor arcu morbi euismod et viverra.",
    time: "",
  },
  {
    from: "me",
    text: "Lorem ipsum in placerat tristique bibendum semper feugiat dignissim cursus ut morbi nisi eget elit.",
    time: "",
  },
  {
    from: "other",
    text: "Lorem ipsum proin massa proin eget dui felis malesuada ut donec massa amet at tortor arcu morbi euismod et viverra.",
    time: "",
  },
];

const attachments = [
  { src: "/projects/p1.jpg", title: "Attachment 1", date: "Time & date" },
  { src: "/projects/p2.jpg", title: "Attachment 1", date: "Time & date" },
  { src: "/projects/p3.jpg", title: "Attachment 1", date: "Time & date" },
];

const events = [
  { title: "Follow up meeting", date: "12 April 2025 at 20:00" },
  { title: "Follow up meeting", date: "12 April 2025 at 20:00" },
];

export default function MessagesPage() {
  return (
    <div className="flex h-screen color8">
      <Sidebar />
      <div className="flex-1 ml-16 p-6 flex">
        <div className="w-[350px] border-r border-[#E5E7EB] bg-[#FCF9ED] flex flex-col">
          <div className="p-8 pb-4 text-3xl font-extrabold text-[#23223A]">
            <span className="inline-flex items-center gap-3">
              <span className="w-8 h-8 flex items-center justify-center text-gray-700">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H5.17L4,17.17V4H20V16Z" />
                </svg>
              </span>
              Messages
            </span>
          </div>
          <div className="flex-1 overflow-y-auto px-6">
            {chatList.map((chat, i) => (
              <div
                key={i}
                className={`rounded-2xl px-4 py-3 mb-2 cursor-pointer ${
                  chat.active ? "bg-[#B6C7E3]" : "hover:bg-[#F3F4F6]"
                } flex items-center justify-between`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={chat.avatar}
                    alt={chat.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-base text-[#23223A]">
                      {chat.name}
                    </div>
                    <div className="text-xs text-[#23223A] opacity-60">
                      {chat.subtitle}
                    </div>
                    <div className="text-xs text-[#23223A] opacity-60 mt-1">
                      {chat.message}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-[#23223A] opacity-60 whitespace-nowrap ml-2">
                  {chat.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col bg-[#FCF9ED]">
          <div className="flex items-center gap-4 px-10 py-6 border-b border-[#E5E7EB]">
            <Image
              src="/images/hp1.jpg"
              alt="Porsche"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div>
              <div className="font-bold text-xl text-[#23223A]">Porsche</div>
              <div className="text-sm text-[#23223A] opacity-60">
                Automobile industry
              </div>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#E5E7EB]"
                title="Video Call"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  <polygon points="22 7 16 12 22 17 22 7"></polygon>
                </svg>
              </button>

              <button
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#E5E7EB]"
                title="Phone"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#111827"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 16.92v4a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.05 5.18 2 2 0 0 1 4 3h4.09a2 2 0 0 1 2 1.72 12.44 12.44 0 0 0 .7 2.81 2 2 0 0 1-.45 2L8.09 11a16 16 0 0 0 6 6l1.47-2.24a2 2 0 0 1 2-.45 12.44 12.44 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </button>

              <button
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#E5E7EB]"
                title="Calendar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#111827"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                  <line x1="12" y1="14" x2="12" y2="20"></line>
                  <line x1="9" y1="17" x2="15" y2="17"></line>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 px-10 py-8 overflow-y-auto bg-[#FCF9ED]">
            <div className="flex flex-col gap-6">
              {messages.map((msg, i) =>
                msg.from === "me" ? (
                  <div key={i} className="flex justify-end">
                    <div className="bg-[#7B97B8] text-white rounded-xl px-6 py-4 max-w-xl text-base">
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  <div key={i} className="flex items-start gap-2">
                    <Image
                      src="/images/hp1.jpg"
                      alt="Porsche"
                      width={24}
                      height={24}
                      className="rounded-full object-cover mt-2"
                    />
                    <div className="bg-white text-[#23223A] rounded-xl px-6 py-4 max-w-xl text-base shadow-sm">
                      {msg.text}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="px-10 py-6 border-t border-[#E5E7EB] bg-[#FCF9ED] flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#E5E7EB]">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 5v14m7-7H5"
                  stroke="#23223A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <input
              className="flex-1 rounded-full border border-[#E5E7EB] px-6 py-3 text-base bg-white focus:outline-none"
              placeholder="Write a message"
            />
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#E5E7EB]">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path
                  d="M22 2L11 13"
                  stroke="#23223A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="#23223A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#E5E7EB]">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path
                  d="M17 10.5V7A5 5 0 0 0 7 7v3.5M12 17v2m-6 0h12a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2Z"
                  stroke="#23223A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="w-[350px] bg-[#0B2C5B] flex flex-col px-6 py-8 text-white">
          <div className="font-bold text-lg mb-6">Other media</div>
          <div className="bg-white rounded-xl p-4 mb-6">
            <div className="text-[#23223A] font-bold mb-2 text-base">
              Ongoing project progress
            </div>
            <div className="font-semibold text-[#23223A] mb-1">
              Pathways Out
            </div>
            <div className="w-full h-2 bg-[#E5E7EB] rounded-full mb-2">
              <div
                className="h-2 bg-[#4B963A] rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>
            <div className="text-[#4B963A] text-xs font-bold cursor-pointer">
              See full progress <span className="ml-1">↓</span>
            </div>
          </div>
          <div className="font-bold text-base mb-2">Attachments</div>
          <div className="flex flex-col gap-2 mb-4">
            {attachments.map((att, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded-xl p-2 cursor-pointer"
              >
                <Image
                  src={att.src}
                  alt={att.title}
                  width={56}
                  height={40}
                  className="rounded-lg object-cover"
                />
                <div>
                  <div className="text-[#23223A] font-bold text-sm">
                    {att.title}
                  </div>
                  <div className="text-[#23223A] text-xs opacity-60">
                    {att.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-xs text-[#B6C7E3] cursor-pointer mb-6">
            See all attachments <span className="ml-1">↓</span>
          </div>
          <div className="font-bold text-base mb-2">Scheduled events</div>
          <div className="flex flex-col gap-2">
            {events.map((ev, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-3 text-[#23223A] mb-2"
              >
                <div className="font-bold text-sm">{ev.title}</div>
                <div className="text-xs opacity-60">{ev.date}</div>
              </div>
            ))}
          </div>
          <div className="text-xs text-[#B6C7E3] cursor-pointer mt-2">
            See all scheduled events <span className="ml-1">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}
