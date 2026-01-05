"use client";
import { useState, lazy, Suspense } from "react";

interface VideoItem {
  id: number;
  title: string;
  category: string;
  client: string;
  videoUrl: string;
  thumbnail?: string;
  views?: string;
}

// Sample portfolio data - replace with your actual video URLs
const portfolioData: VideoItem[] = [
  {
    id: 1,
    title: "Brand Story - Product Launch",
    category: "Video Production",
    client: "Tech Startup",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: "10K+",
  },
  {
    id: 2,
    title: "Instagram Reel - Fashion Campaign",
    category: "Short Form",
    client: "Fashion Brand",
    videoUrl: "https://www.youtube.com/embed/L_jWHffIx5E",
    views: "25K+",
  },
  {
    id: 3,
    title: "Corporate Video - Company Profile",
    category: "Corporate",
    client: "Finance Corp",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: "15K+",
  },
  {
    id: 4,
    title: "Social Media Ad - Product Demo",
    category: "Advertisement",
    client: "E-Commerce",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: "50K+",
  },
  {
    id: 5,
    title: "Event Highlights - Conference 2024",
    category: "Event Coverage",
    client: "Event Agency",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: "8K+",
  },
  {
    id: 6,
    title: "YouTube Short - Viral Content",
    category: "Short Form",
    client: "Influencer",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: "100K+",
  },
  {
    id: 7,
    title: "Testimonial Video Series",
    category: "Testimonials",
    client: "Healthcare",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: "12K+",
  },
  {
    id: 8,
    title: "Motion Graphics - Explainer",
    category: "Motion Graphics",
    client: "SaaS Company",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: "30K+",
  },
  {
    id: 9,
    title: "Music Video Production",
    category: "Music Video",
    client: "Independent Artist",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: "75K+",
  },
];

const categories = [
  "All",
  "Video Production",
  "Short Form",
  "Corporate",
  "Advertisement",
  "Event Coverage",
  "Testimonials",
  "Motion Graphics",
  "Music Video",
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#49af2f]/10 text-[#49af2f] font-medium rounded-full text-sm border border-[#49af2f]/20">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Creative{" "}
            <span className="bg-gradient-to-r from-[#49af2f] to-[#3d8f26] text-transparent bg-clip-text">
              Work
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of stunning videos and shorts crafted for
            leading brands
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-[#49af2f] mb-2">100+</div>
            <div className="text-gray-600 text-sm">Videos Produced</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-[#49af2f] mb-2">50+</div>
            <div className="text-gray-600 text-sm">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-[#49af2f] mb-2">5M+</div>
            <div className="text-gray-600 text-sm">Total Views</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-[#49af2f] mb-2">95%</div>
            <div className="text-gray-600 text-sm">Client Satisfaction</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#49af2f] text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-[#49af2f] hover:text-[#49af2f]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((video) => (
            <div
              key={video.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Video Player */}
              <div
                className="relative w-full bg-black overflow-hidden"
                style={{ paddingTop: "177.78%" /* 9:16 aspect ratio */ }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={video.videoUrl}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {/* View count badge */}
                {video.views && (
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 z-10">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {video.views}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-[#49af2f]/10 text-[#49af2f] text-xs font-semibold rounded-full">
                    {video.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#49af2f] transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Client: <span className="font-semibold">{video.client}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#49af2f] text-white font-semibold rounded-xl hover:bg-[#3d8f26] hover:shadow-xl hover:scale-105 transition-all duration-300">
            View All Videos
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
