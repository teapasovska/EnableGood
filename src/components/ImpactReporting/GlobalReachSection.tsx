import React from "react";
import Image from "next/image";

type GlobalReachSectionProps = {
  mapImage?: string;
};

const GlobalReachSection: React.FC<GlobalReachSectionProps> = ({
  mapImage = "/images/map.png",
}) => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
      View Our Global Reach
    </h2>
    <div className="flex justify-center">
      <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden">
        <Image
          src={mapImage}
          alt="World Map with Impact Locations"
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  </section>
);

export default GlobalReachSection;
