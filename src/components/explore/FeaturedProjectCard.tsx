import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

type Partner = { name: string; logo: string };
type Impact = { [key: string]: string };

type FeaturedProjectCardProps = {
  project: {
    title: string;
    categories: string[];
    impact?: Impact;
    description: string;
    partners: Partner[];
    image: string;
    video?: boolean;
  };

  onViewPartner?: () => void;
  partnerRoute?: "/company-profile" | "/viewpartner";
};

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  project,
  onViewPartner,
  partnerRoute,
}) => {
  const router = useRouter();

  const handleViewPartner = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onViewPartner) {
      onViewPartner();
      return;
    }
    router.push(partnerRoute || "/viewpartner");
  };

  return (
    <div className="mb-12">
      <div
        className="rounded-3xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
        style={{ backgroundColor: "#f2e390" }}
      >
        <div className="flex gap-3 p-6 pb-0">
          {project.categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex-1 py-3 text-center text-sm font-medium text-white rounded-lg"
              style={{ backgroundColor: "#0a6974" }}
            >
              {cat}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 lg:p-12 pt-6">
            <div
              onClick={() => router.push("/project")}
              className="cursor-pointer"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                {project.title}
              </h2>

              {project.impact && (
                <div className="mb-6">
                  <div className="text-sm font-bold text-gray-700 mb-2">
                    IMPACT:
                  </div>
                  <div className="flex flex-wrap gap-6">
                    {Object.values(project.impact).map((val, idx) => (
                      <span
                        key={idx}
                        className="text-lg font-bold text-gray-900"
                      >
                        {val}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-gray-700 mb-8 text-lg">
                {project.description}
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex gap-3">
                  {project.partners.map((partner, index) => (
                    <div
                      key={index}
                      className="w-14 h-10 rounded-lg flex items-center justify-center shadow-sm overflow-hidden"
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={44}
                        height={30}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleViewPartner}
              className="text-white px-8 py-4 rounded-full font-semibold transition-colors text-lg cursor-pointer hover:opacity-90"
              style={{ backgroundColor: "#012960" }}
            >
              View Partner
            </button>
          </div>

          <div
            onClick={() => router.push("/project")}
            className="relative h-64 lg:h-auto pt-6 pr-6 pb-6 cursor-pointer"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
            {project.video && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white bg-opacity-95 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all shadow-lg cursor-pointer">
                  <div className="w-0 h-0 border-l-[24px] border-l-gray-800 border-y-[16px] border-y-transparent ml-1"></div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
