/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "It's more than a platform—it's a community that understands purpose.",
      description:
        "We're used to platforms that feel transactional—where NGOs are expected to pitch constantly and hope for attention. Enable Good flipped that dynamic. Here, we found companies already interested in collaboration, already aligned with our values. The partnership we built on this platform wasn't forced—it felt like a natural extension of our mission. We're now co-developing workshops on urban sustainability with corporate teams we genuinely admire.",
      author: "Luis F., Director, Future City Lab",
      avatar: "/images/testimonials1.png",
    },
    {
      quote: "Enable Good made collaboration effortless.",
      description:
        "Instead of chasing sponsors, we connected directly with partners who shared our mission. The process felt authentic, and we quickly built a project that made sense for everyone.",
      author: "Anna K., NGO Lead",
      avatar: "/images/lh1.png",
    },
    {
      quote: "We found the right NGO match in days.",
      description:
        "The platform gave us access to organizations already aligned with our sustainability goals. It saved us months of outreach and negotiations.",
      author: "David M., Corporate CSR Manager",
      avatar: "/images/lh4.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      style={{ backgroundColor: "#FEFDEC" }}
      className="px-6 lg:px-20 py-16 lg:py-24"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          What our Partners Say
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Hear from companies and NGOs that have created meaningful impact
          through Enable Good
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center transition-all duration-500 ease-in-out">
          {/* Left side - testimonial */}
          <div className="relative lg:w-[70%]">
            <div
              className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
              style={{ backgroundColor: "#012960" }}
            ></div>

            <div className="pl-12">
              <blockquote className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {testimonials[currentTestimonial].description}
              </p>

              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full mr-4 overflow-hidden">
                  <Image
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].author}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].author}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - stats */}
          <div className="text-center relative lg:w-[30%]">
            <div
              className="w-48 h-48 flex flex-col items-center justify-center rounded-full mb-8 mx-auto"
              style={{ backgroundColor: "#fcff64" }}
            >
              <div className="text-5xl font-semibold text-gray-900">97%</div>
              <div className="text-lg font-medium text-gray-900 mt-1">
                Matching Rate
              </div>
            </div>

            {/* Floating bubbles */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-16 left-8 w-6 h-6 rounded-full"
                style={{ backgroundColor: "#f47c6a" }}
              ></div>
              <div
                className="absolute top-32 right-12 w-8 h-8 rounded-full"
                style={{ backgroundColor: "#f47c6a" }}
              ></div>
              <div
                className="absolute top-8 right-20 w-4 h-4 rounded-full"
                style={{ backgroundColor: "#f7dacf" }}
              ></div>
              <div
                className="absolute bottom-24 left-16 w-5 h-5 rounded-full"
                style={{ backgroundColor: "#f47c6a" }}
              ></div>
              <div
                className="absolute bottom-16 right-8 w-7 h-7 rounded-full"
                style={{ backgroundColor: "#f7dacf" }}
              ></div>
              <div
                className="absolute top-24 left-1/4 w-3 h-3 rounded-full"
                style={{ backgroundColor: "#f7dacf" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                  currentTestimonial === index ? "bg-[#012960]" : "bg-[#f7dacf]"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
