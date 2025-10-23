import React from "react";

const CompanyKeyFocus = () => (
  <div className="mb-40">
    <h2 className="text-5xl font-bold text-gray-900 text-center mb-4">
      Our Key Focus Areas
    </h2>
    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
      We work across diverse sectors to address the root causes of poverty and
      create lasting change.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      <div className="color1 rounded-2xl p-12 text-white min-h-[450px] flex flex-col">
        <h3 className="text-4xl font-bold mb-10">HUMAN RIGHTS</h3>
        <p className="text-xl leading-relaxed flex-1">
          We advocate for social justice and inclusive policies that uphold
          human dignity, protect vulnerable populations, and ensure equitable
          access to resources.
        </p>
      </div>

      <div className="color7 rounded-2xl p-12 min-h-[450px] flex flex-col">
        <h3 className="text-4xl font-bold mb-10 text-gray-900">ENVIRONMENT</h3>
        <p className="text-xl leading-relaxed text-gray-700 flex-1">
          We support communities in building resilience to climate change,
          conserving ecosystems, and promoting sustainable practices through
          local innovation.
        </p>
      </div>

      <div className="color3 rounded-2xl p-12 min-h-[450px] flex flex-col">
        <h3 className="text-4xl font-bold mb-10 text-gray-900">
          CLIMATE JUSTICE
        </h3>
        <p className="text-xl leading-relaxed text-gray-700 flex-1">
          Climate change affects the most vulnerable first. We ensure that
          marginalized communities have a voice in climate adaptation and access
          to adaptation resources.
        </p>
      </div>

      <div className="color4 rounded-2xl p-12 min-h-[450px] flex flex-col">
        <h3 className="text-4xl font-bold mb-10 text-gray-900">EDUCATION</h3>
        <p className="text-xl leading-relaxed text-gray-900 flex-1">
          From early childhood learning to adult literacy, we create access to
          quality education that empowers people to change their futures.
        </p>
      </div>

      <div className="color6 rounded-2xl p-12 text-white min-h-[450px] flex flex-col">
        <h3 className="text-4xl font-bold mb-10">FOOD SECURITY</h3>
        <p className="text-xl leading-relaxed flex-1">
          We tackle hunger by promoting sustainable agriculture, improving
          nutrition, and strengthening food systems in crisis-affected regions.
        </p>
      </div>

      <div className="color2 rounded-2xl p-12 text-white min-h-[450px] flex flex-col">
        <h3 className="text-4xl font-bold mb-10">HEALTH & WELLBEING</h3>
        <p className="text-xl leading-relaxed flex-1">
          We provide essential health services, reproductive care, and hygiene
          education, focusing on the unique needs of women and children.
        </p>
      </div>
    </div>
  </div>
);

export default CompanyKeyFocus;
