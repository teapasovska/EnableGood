/* eslint-disable react/no-unescaped-entities */
import React from "react";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import { useRouter } from "next/router";
import MeltingCircle from "@/components/common/MeltingCircle";

const AboutPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <NavBar bgColor="#fefdec" />

      <section
        className="px-6 lg:px-20 py-16 relative overflow-hidden"
        style={{ backgroundColor: "#fefdec" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-4 h-4 bg-pink-200 rounded-full opacity-40"></div>
          <div className="absolute top-32 right-32 w-6 h-6 bg-pink-300 rounded-full opacity-30"></div>
          <div className="absolute top-48 right-16 w-8 h-8 bg-pink-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 right-40 w-12 h-12 bg-pink-300 rounded-full opacity-25"></div>
          <div className="absolute bottom-32 right-60 w-5 h-5 bg-pink-200 rounded-full opacity-35"></div>
          <div className="absolute bottom-48 right-20 w-10 h-10 bg-pink-300 rounded-full opacity-20"></div>
          <div className="absolute top-60 right-80 w-7 h-7 bg-pink-200 rounded-full opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-2xl lg:text-2xl font-bold text-gray-900 mb-3">
                At Enable Good, we started with a simple question:
              </h1>
              <h2 className="text-2xl lg:text-2xl font-bold text-gray-900 mb-3">
                What if doing good didn't have to be so hard?
              </h2>
              <div className="space-y-0.5 text-base text-gray-600">
                <p>
                  We saw a world full of companies eager to make a difference —
                  not just in profits, but in people's lives and the planet's
                  future. We saw NGOs doing the hard, important work on the
                  ground, often with too few resources and too little
                  visibility.
                </p>
                <p>But between them, there was a gap.</p>
                <p>Too much friction. Too many emails.</p>
                <p>Too many mismatched goals and unclear expectations.</p>
              </div>
              <div className="mt-3">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  We exist to close that gap.
                </h3>
                <div className="space-y-0.5 text-base text-gray-600">
                  <p>
                    Enable Good was built to be the bridge — a platform that
                    makes meaningful partnerships not only possible, but
                    effortless. We connect companies with NGOs who share their
                    values, and we equip both sides with the tools to
                    collaborate, track progress, and tell powerful stories of
                    real-world impact.
                  </p>
                  <p>This isn't just about checkboxes or compliance.</p>
                  <p>
                    It's about doing ESG the way it was meant to be with heart,
                    clarity, and purpose.
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-base text-gray-600">
                  We believe that doing good should feel good — energizing,
                  empowering, and honest. That's why we're here: to make the
                  good work easier, more visible, and more impactful for
                  everyone involved.
                </p>
                <p className="text-base text-gray-600 mt-0.5">
                  Together, we can build a future where purpose leads the way —
                  one partnership at a time.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/au1.png"
                alt="Team collaboration"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-6 lg:px-20 py-16 pb-32 relative"
        style={{ backgroundColor: "#f7dacf" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Values at Enable Good
            </h2>
            <p className="text-xl text-gray-600">
              Together, these values define how we show up—for each other, our
              partners, and the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                title: "Kindness",
                image: "/images/circle1.png",
              },
              {
                title: "Integrity",
                image: "/images/circle2.png",
              },
              {
                title: "Respect",
                image: "/images/circle3.png",
              },
              {
                title: "Inclusivity",
                image: "/images/circle4.png",
              },
              {
                title: "Transparency",
                image: "/images/circle5.png",
              },
            ].map((value, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-2">
                  <MeltingCircle
                    imageUrl={value.image}
                    percent=""
                    label={value.title}
                    meltColor="#f6b1c3"
                    textColor="#fff"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <div className="relative w-full h-32">
            <div className="absolute bottom-5 left-10 w-3 h-3 bg-pink-300 rounded-full opacity-40"></div>
            <div className="absolute bottom-8 left-24 w-5 h-5 bg-pink-200 rounded-full opacity-30"></div>
            <div className="absolute bottom-3 left-40 w-4 h-4 bg-pink-300 rounded-full opacity-35"></div>
            <div className="absolute bottom-12 left-56 w-6 h-6 bg-pink-200 rounded-full opacity-25"></div>
            <div className="absolute bottom-6 left-72 w-3 h-3 bg-pink-300 rounded-full opacity-40"></div>
            <div className="absolute bottom-15 left-88 w-5 h-5 bg-pink-200 rounded-full opacity-30"></div>
            <div className="absolute bottom-4 left-96 w-4 h-4 bg-pink-300 rounded-full opacity-35"></div>
            <div className="absolute bottom-10 right-16 w-6 h-6 bg-pink-200 rounded-full opacity-25"></div>
            <div className="absolute bottom-4 right-32 w-3 h-3 bg-pink-300 rounded-full opacity-40"></div>
            <div className="absolute bottom-7 right-48 w-5 h-5 bg-pink-200 rounded-full opacity-30"></div>
            <div className="absolute bottom-2 right-64 w-4 h-4 bg-pink-300 rounded-full opacity-35"></div>
            <div className="absolute bottom-14 right-80 w-6 h-6 bg-pink-200 rounded-full opacity-25"></div>
            <div className="absolute bottom-9 right-96 w-3 h-3 bg-pink-300 rounded-full opacity-40"></div>
            <div className="absolute bottom-20 left-32 w-4 h-4 bg-pink-200 rounded-full opacity-30"></div>
            <div className="absolute bottom-25 left-64 w-5 h-5 bg-pink-300 rounded-full opacity-35"></div>
            <div className="absolute bottom-18 right-24 w-7 h-7 bg-pink-200 rounded-full opacity-25"></div>
            <div className="absolute bottom-22 right-56 w-4 h-4 bg-pink-300 rounded-full opacity-40"></div>
            <div className="absolute bottom-16 left-20 w-5 h-5 bg-pink-200 rounded-full opacity-30"></div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 py-16 color8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                The Problem We Solve
              </h2>
              <div className="space-y-2 text-gray-600">
                <p className="text-base">
                  Today, companies are under growing pressure to show real
                  progress on ESG goals. At the same time, NGOs are working
                  tirelessly to create social and environmental change — but
                  they often struggle to connect with the right partners and
                  secure lasting support.
                </p>
                <p>
                  Despite shared intentions, the connection between businesses
                  and NGOs is often broken:
                </p>
                <ul className="space-y-1 ml-6">
                  <li className="flex items-start">
                    <span className="mr-3 text-color6">•</span>
                    Companies don't know where to start or how to find aligned,
                    trustworthy partners.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-color6">•</span>
                    NGOs lack the visibility and tools to present their work in
                    ways companies can easily engage with.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-color6">•</span>
                    Partnerships are often slow, one-sided, or lack long-term
                    alignment.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-color6">•</span>
                    Reporting and impact tracking are manual, inconsistent, and
                    confusing.
                  </li>
                </ul>
                <p className="text-base font-medium text-gray-800">
                  These challenges create missed opportunities, wasted time, and
                  partnerships that never reach their full potential.
                </p>
                <p className="text-base font-medium text-gray-800">
                  That's why Enable Good exists:
                </p>
                <p className="text-base">
                  To make partnerships between companies and NGOs easier,
                  smarter, and more impactful so both sides can focus on what
                  really matters: doing good.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/au2.png"
                alt="Problem illustration"
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 py-16 color8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/au3.png"
                alt="Platform features"
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-base text-gray-600 mb-4">
                At Enable Good, we make it simple for companies and NGOs to find
                each other, work together, and create real, measurable impact.
                Our platform is designed to remove barriers, streamline
                communication, and foster partnerships rooted in shared purpose.
              </p>
              <ul className="space-y-1 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-color6">•</span>
                  <span>
                    <strong>Curated Matchmaking</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-color6">•</span>
                  <span>
                    <strong>Transparent Impact Tracking</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-color6">•</span>
                  <span>
                    <strong>Collaboration Tools</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-color6">•</span>
                  <span>
                    <strong>A Growing Network of Good</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-color6">•</span>
                  <span>
                    <strong>Aligned and Accountable</strong>
                  </span>
                </li>
              </ul>
              <p className="text-base text-gray-600 mt-4">
                Whether you're a company looking to lead with action, or an NGO
                ready to scale your impact, we're here to enable good, together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 py-16 color8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-16 w-4 h-4 bg-pink-200 rounded-full opacity-40"></div>
          <div className="absolute top-28 right-28 w-6 h-6 bg-pink-300 rounded-full opacity-30"></div>
          <div className="absolute top-44 right-12 w-5 h-5 bg-pink-200 rounded-full opacity-35"></div>
          <div className="absolute bottom-16 right-32 w-7 h-7 bg-pink-300 rounded-full opacity-25"></div>
          <div className="absolute bottom-28 right-48 w-4 h-4 bg-pink-200 rounded-full opacity-40"></div>
          <div className="absolute bottom-44 right-16 w-6 h-6 bg-pink-300 rounded-full opacity-20"></div>
          <div className="absolute top-52 right-64 w-5 h-5 bg-pink-200 rounded-full opacity-30"></div>
          <div className="absolute top-36 right-40 w-3 h-3 bg-pink-300 rounded-full opacity-45"></div>
          <div className="absolute bottom-36 right-20 w-8 h-8 bg-pink-200 rounded-full opacity-25"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Elpida Vasiliadis – Founder & CEO
              </h2>
              <p className="text-base text-gray-600 mb-4">
                Purpose-driven strategist. Community builder. Believer in better
                systems. Elpida leads with vision and keeps us grounded in our
                mission: making impact scalable and human.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Where we work
              </h3>
              <div className="space-y-1 text-gray-600">
                <p>
                  We're proud to call Athens, Attiki, Greece our home base, a
                  city where ancient ideas meet bold new visions.
                </p>
                <p>
                  While our impact reaches across borders, our roots are here,
                  in a place full of culture, resilience, and creativity.
                </p>
                <p>
                  From the heart of Athens, we collaborate with people and
                  organizations across the globe, proving that good ideas and
                  good intentions can start anywhere and grow everywhere. Enable
                  Good is built in Greece. Made for the world.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/au4.png"
                alt="Elpida Vasiliadis - Founder & CEO"
                className="w-2/3 h-auto shadow-lg mx-auto"
              />

              <div className="absolute top-4 left-8 w-3 h-3 bg-pink-300 rounded-full opacity-60"></div>
              <div className="absolute top-12 left-4 w-2 h-2 bg-pink-400 rounded-full opacity-70"></div>
              <div className="absolute top-20 left-12 w-4 h-4 bg-pink-300 rounded-full opacity-50"></div>
              <div className="absolute top-32 left-6 w-2 h-2 bg-pink-400 rounded-full opacity-80"></div>
              <div className="absolute bottom-16 left-10 w-3 h-3 bg-pink-300 rounded-full opacity-60"></div>
              <div className="absolute bottom-8 left-4 w-4 h-4 bg-pink-400 rounded-full opacity-70"></div>
              <div className="absolute bottom-4 left-14 w-2 h-2 bg-pink-300 rounded-full opacity-80"></div>
              <div className="absolute bottom-12 left-2 w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
              <div className="absolute top-8 right-12 w-2 h-2 bg-pink-300 rounded-full opacity-70"></div>
              <div className="absolute top-24 right-8 w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-20 right-10 w-2 h-2 bg-pink-300 rounded-full opacity-80"></div>
              <div className="absolute bottom-6 right-6 w-3 h-3 bg-pink-400 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-6 lg:px-20 py-16"
        style={{ backgroundColor: "#f7dacf" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Impact So Far
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            120+ partnerships formed between companies and NGOs
          </p>

          <div className="flex justify-center items-center">
            <img
              src="/images/logos.png"
              alt="Partner company logos"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: "#012960" }}
        className="text-white px-6 lg:px-20 py-16 lg:py-24"
      >
        <div className="text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join Enable Good and be part of a growing community creating
            meaningful change through strategic partnerships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
              Explore Projects
            </button>
            <button
              onClick={() => router.push("/joinnow")}
              className="px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              style={{ backgroundColor: "#fcff64", color: "#000" }}
            >
              Join Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
