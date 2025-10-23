import React, { useState } from "react";

const categories = [
  "Human Rights",
  "Climate Justice",
  "Education",
  "Food Security",
  "Environment",
];

const stories = [
  {
    image: "/ourwork/our4.png",
    title: "Small Farms, Big Impact: Women Leading the Way in Guatemala",
    summary:
      "Local women are transforming their communities by adopting climate-smart agriculture techniques and sharing them with future generations.",
    link: "#",
  },
  {
    image: "/ourwork/our3.png",
    title: "When Disaster Strikes: Inside CARE's Emergency Response in Sudan",
    summary:
      "A behind-the-scenes look at how CARE teams respond within hours to deliver food, water, and medical supplies where they're needed most.",
    link: "#",
  },
  {
    image: "/ourwork/our2.png",
    title: "Clean Water, Clear Future: A Village Transformed in Bangladesh",
    summary:
      "Access to clean water doesn't just improve health—it changes lives. Discover how a single well sparked a wave of opportunity for one community.",
    link: "#",
  },
];

const NewsFeaturedAndStories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Food Security");
  return (
    <div className="w-full mx-auto mt-16">
      <h1 className="md:text-4xl font-bold mb-2 text-gray-900">
        Stay Informed, Stay Inspired
      </h1>
      <p className="text-gray-700 mb-8  text-base md:text-lg">
        Discover how CARE is making a difference around the world—one story at a
        time. From frontline updates to personal journeys of resilience, this is
        where you will find the voices, victories, and vital work shaping a more
        just future.
      </p>
      <div className="flex flex-col md:flex-row bg-[#F7E38A] rounded-2xl p-8 md:p-10 items-center mb-10 gap-8">
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-lg mb-2 text-[#143266]">
            Featured Story
          </div>
          <div className="text-2xl md:text-3xl font-bold mb-3 text-[#143266]">
            “From Crisis to Classroom: Rebuilding Hope Through Education in
            Lebanon”
          </div>
          <div className="text-gray-800 mb-4">
            After losing her home and access to school during the crisis,
            12-year-old Amira is now back in class thanks to a CARE-supported
            learning center. Her dream of becoming a teacher lives on.
          </div>
          <a
            href="#"
            className="text-[#143266] font-semibold underline text-base"
          >
            Read More
          </a>
        </div>
        <div className="flex-shrink-0">
          <img
            src="/dashboardimg/1.jpg"
            alt="Featured story"
            className="w-[180px] h-[180px] object-cover rounded-xl"
            style={{ background: "#eee" }}
          />
        </div>
      </div>

      <div className="flex gap-3 mb-10 w-full justify-between">
        {categories.map((cat) => (
          <button
            key={cat}
            className={
              (activeCategory === cat
                ? "bg-[#143266] text-white "
                : "bg-white text-[#143266] border border-[#143266] ") +
              "px-5 py-2 rounded-full font-medium text-base transition"
            }
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
        Latest Stories
      </h2>
      <div className="flex flex-col gap-8">
        {stories.map((story, idx) => (
          <div key={idx} className="flex items-start gap-6">
            <img
              src={story.image}
              alt={story.title}
              className="w-[120px] h-[120px] object-cover rounded-xl"
              style={{ background: "#eee" }}
            />
            <div>
              <div className="text-xl font-bold mb-1 text-gray-900">{`“${story.title}”`}</div>
              <div className="text-gray-700 mb-2 text-base w-full">
                {story.summary}
              </div>
              <a
                href={story.link}
                className="text-[#143266] font-semibold underline text-base"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeaturedAndStories;
