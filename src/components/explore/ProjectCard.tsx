import React from "react";
import Image from "next/image";

type Partner = { name: string; logo: string };
type ProjectCardProps = {
  project: {
    id: number;
    title: string;
    categories: string[];
    description: string;
    partners: Partner[];
    image: string;
  };
  noGradient?: boolean;
  onClick?: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  noGradient,
  onClick,
}) => (
  <div className="relative">
    <div
      className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer h-full min-h-[200px] flex flex-col"
      style={{ backgroundColor: "#f2e390" }}
      onClick={onClick}
    >
      <div className="flex gap-2 p-4 pb-0">
        {project.categories.map((category, index) => (
          <div
            key={index}
            className="flex-1 py-2 text-center text-xs font-medium rounded-lg border-2"
            style={{
              borderColor: "#0a6974",
              color: "#0a6974",
              backgroundColor: "transparent",
            }}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="p-6 pt-4 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
          {project.title}
        </h3>
        <p className="text-gray-700 mb-6 text-sm leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex items-center gap-3 mt-auto">
          {project.partners.slice(0, 2).map((partner, index) => (
            <div
              key={index}
              className="w-10 h-7 rounded-lg flex items-center justify-center shadow-sm overflow-hidden"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={28}
                height={20}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
        <button className="mt-6 text-base font-medium text-black flex items-center gap-1  self-end cursor-pointer">
          View Partner <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>

    {!noGradient && (
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.7) 60%, rgba(255, 255, 255, 0.9) 100%)",
          backdropFilter: "blur(2px)",
        }}
      />
    )}
  </div>
);

export default ProjectCard;
