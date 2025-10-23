import React from "react";

const projects = [
  {
    title: "Safe Waters",
    partner: "PepsiCo Foundation",
    sector: "Water",
    description:
      "Building clean water systems in drought-affected communities.",
    logo: "/ourwork/shell.png",
    percent: 80,
  },
  {
    title: "Stronger Shelters",
    partner: "UPS",
    sector: "Relief",
    description:
      "Rapid deployment of emergency shelters after natural disasters.",
    logo: "/ourwork/cn.jpg",
    percent: 80,
  },
  {
    title: "Her Health First",
    partner: "Pfizer",
    sector: "Health",
    description:
      "Expanding access to reproductive and maternal healthcare services.",
    logo: "/ourwork/company.jpg",
    percent: 80,
  },
  {
    title: "Voices Rising",
    partner: "Mastercard Center",
    sector: "Finance",
    description:
      "Financial literacy programs and mobile banking solutions for women entrepreneurs.",
    logo: "/ourwork/lego.png",
    percent: 80,
  },
  {
    title: "Harvest Futures",
    partner: "Cargill",
    sector: "Agriculture",
    description:
      "Supporting sustainable agriculture and food security initiatives.",
    logo: "/ourwork/bussiness.png",
    percent: 80,
  },
  {
    title: "Code for Her",
    partner: "Microsoft",
    sector: "Education",
    description:
      "Empowering girls and women through technology and coding education.",
    logo: "/ourwork/idk.jpg",
    percent: 80,
  },
];

const ProjectShowcaseGrid: React.FC = () => (
  <section className="my-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((p, i) => (
        <div
          key={i}
          className="bg-[#F7E38A] rounded-lg p-8 flex flex-col justify-between min-h-[240px] shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-[#143266] mb-1">
                {p.title}
              </h3>
              <div className="text-gray-700 text-base mb-1">
                with {p.partner}
              </div>
              <div className="text-[#143266] text-sm mb-2">{p.sector}</div>
            </div>
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow">
              <img
                src={p.logo}
                alt="logo"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
          <div className="flex items-center mb-2">
            <div className="flex-1 h-2 bg-white rounded-full overflow-hidden mr-4">
              <div
                className="h-2 bg-[#143266] rounded-full"
                style={{ width: `${p.percent}%` }}
              />
            </div>
            <span className="text-[#143266] text-xl font-bold">
              {p.percent}%
            </span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="text-gray-800 text-base flex-1">
              {p.description}
            </div>
            <button className="ml-4 w-9 h-9 rounded-full bg-[#143266] flex items-center justify-center text-white hover:bg-[#0e2447] transition">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path
                  d="M5 10H15M15 10L12 7M15 10L12 13"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectShowcaseGrid;
