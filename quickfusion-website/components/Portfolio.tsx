"use client";
import { useState } from "react";
import Image from "next/image";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    category: "Web Development",
    description:
      "Complete redesign of a modern e-commerce platform with enhanced UX and conversion optimization.",
    image: "/images/portfolio/ecommerce.jpg",
    tags: ["Next.js", "React", "Tailwind", "Stripe"],
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    category: "Mobile App",
    description:
      "Patient management system with appointment scheduling and telemedicine features.",
    image: "/images/portfolio/healthcare.jpg",
    tags: ["React Native", "Firebase", "Redux"],
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    category: "SaaS Platform",
    description:
      "Real-time analytics dashboard with AI-driven insights and predictive modeling.",
    image: "/images/portfolio/analytics.jpg",
    tags: ["Python", "TensorFlow", "D3.js", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Digital Marketing Campaign",
    category: "Marketing",
    description:
      "Multi-channel digital marketing campaign that increased client ROI by 250%.",
    image: "/images/portfolio/marketing.jpg",
    tags: ["SEO", "Social Media", "PPC", "Content"],
  },
  {
    id: 5,
    title: "Restaurant Management System",
    category: "Web Development",
    description:
      "Complete restaurant POS system with inventory management and online ordering.",
    image: "/images/portfolio/restaurant.jpg",
    tags: ["Node.js", "MongoDB", "Socket.io"],
  },
  {
    id: 6,
    title: "Real Estate Marketplace",
    category: "Web Platform",
    description:
      "Property listing platform with advanced search, 3D tours, and mortgage calculator.",
    image: "/images/portfolio/realestate.jpg",
    tags: ["Vue.js", "Laravel", "MySQL", "AWS"],
  },
  {
    id: 7,
    title: "Fitness Tracking App",
    category: "Mobile App",
    description:
      "Comprehensive fitness app with workout plans, nutrition tracking, and social features.",
    image: "/images/portfolio/fitness.jpg",
    tags: ["Flutter", "Firebase", "HealthKit"],
  },
  {
    id: 8,
    title: "Educational Learning Platform",
    category: "EdTech",
    description:
      "Interactive online learning platform with video courses, quizzes, and certification.",
    image: "/images/portfolio/education.jpg",
    tags: ["React", "Node.js", "MongoDB", "WebRTC"],
  },
  {
    id: 9,
    title: "Fintech Payment Gateway",
    category: "Fintech",
    description:
      "Secure payment processing system with multi-currency support and fraud detection.",
    image: "/images/portfolio/fintech.jpg",
    tags: ["Java", "Spring", "PostgreSQL", "Redis"],
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile App",
  "Marketing",
  "SaaS Platform",
  "Web Platform",
  "EdTech",
  "Fintech",
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-green-50 text-green-600 font-medium rounded-full text-sm border border-green-200">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work Speaks for{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
              Itself
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of successful projects across various
            industries
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-green-500 hover:text-green-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-green-100 to-emerald-100 overflow-hidden">
                {/* Placeholder for image - using gradient with pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                      {project.title}
                    </p>
                  </div>
                </div>

                {/* Overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="w-full py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors duration-300">
                      View Project
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
            View All Projects
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
