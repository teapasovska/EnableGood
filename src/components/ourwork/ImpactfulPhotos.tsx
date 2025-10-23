import React from "react";

const ImpactfulPhotos: React.FC = () => (
  <section className="my-16">
    <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
      The 10 most impactful photos
    </h2>
    <p className="text-center text-gray-600 mb-8 text-lg">
      from CARE&#39;s 2024 global image library
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      {[1, 2, 3, 4].map((num) => (
        <img
          key={num}
          src={`/ourwork/our${num}.png`}
          alt={`Impactful photo ${num}`}
          className="w-[220px] h-[220px] object-cover rounded-lg shadow"
          style={{ background: "#eee" }}
        />
      ))}
    </div>
  </section>
);

export default ImpactfulPhotos;
