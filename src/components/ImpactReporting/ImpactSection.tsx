/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

export type ImpactReport = {
  id: number;
  title: string;
  image: string;
  impact: string;
};

type ImpactSectionProps = {
  reports: ImpactReport[];
  showMore: boolean;
  onToggleShowMore: () => void;
};

const ImpactSection: React.FC<ImpactSectionProps> = ({
  reports,
  showMore,
  onToggleShowMore,
}) => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
      This is our Impact
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {reports.map((report) => (
        <div
          key={report.id}
          className="rounded-2xl overflow-hidden shadow-lg h-96"
          style={{ backgroundColor: "#cdefc2" }}
        >
          <div className="p-8 h-full flex flex-col">
            <h3 className="text-sm font-semibold text-gray-900 mb-6 leading-tight">
              {report.title}
            </h3>
            <div className="mb-6 flex-grow">
              <Image
                src={report.image}
                alt={report.title}
                width={200}
                height={160}
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-800 font-medium">
              "{report.impact}"
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center">
      <button
        onClick={onToggleShowMore}
        className="text-gray-700 text-sm hover:text-gray-900 transition-colors underline cursor-pointer"
      >
        {showMore ? "See less" : "See more"}
      </button>
    </div>
  </section>
);

export default ImpactSection;
