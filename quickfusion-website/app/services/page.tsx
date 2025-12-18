import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore QuickFusion Innovations services: Video Content Creation, Web Development, App Development, AI Solutions, and Digital Transformation. We build custom solutions for modern businesses.",
  openGraph: {
    title: "Our Services - QuickFusion Innovations",
    description:
      "Video Content Creation, Web Development, App Development, AI Solutions, and Digital Transformation services.",
    url: "https://quickfusioninnovations.com/services",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuickFusion Innovations Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - QuickFusion Innovations",
    description:
      "Video Content Creation, Web Development, App Development, AI Solutions, and Digital Transformation.",
  },
};

export default function Services() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive technology solutions designed to accelerate growth, streamline operations, and drive digital transformation for your business."
        backgroundImage="/images/3-removebg-preview.png"
      />

      {/* Main Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Video Content Creation & Editing */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Video Content Creation & Editing
              </h2>
              <p className="text-gray-600 mb-6">
                We transform raw footage into clean, high-impact video content
                that truly connects with your audience. Perfect for coaches and
                personal brands building trust, growing influence, and
                showcasing authenticity.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Professional Video Editing
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Social Media Content
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Personal Brand Videos
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Before & After Transformations
                </li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Web Development
              </h2>
              <p className="text-gray-600 mb-6">
                We create custom, responsive websites and web applications using
                the latest technologies. Our solutions are fast, SEO-friendly,
                and built for scalability.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Next.js & React Development
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  E-commerce Solutions
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Custom Web Applications
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Progressive Web Apps (PWA)
                </li>
              </ul>
            </div>

            {/* App Development */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                App Development
              </h2>
              <p className="text-gray-600 mb-6">
                We build native and cross-platform mobile applications that
                deliver exceptional user experiences. Our apps are optimized for
                performance on both iOS and Android.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  iOS & Android Native Apps
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  React Native & Flutter
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  App Store Optimization
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Maintenance & Support
                </li>
              </ul>
            </div>

            {/* AI Solutions */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                AI Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                We integrate artificial intelligence and machine learning to
                automate processes, extract insights, and create intelligent
                applications that grow with your business.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  AI Chatbots & Assistants
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Machine Learning Integration
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Data Analytics & Insights
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Process Automation
                </li>
              </ul>
            </div>

            {/* Digital Solutions */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Digital Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                End-to-end digital transformation services that modernize your
                operations, enhance efficiency, and position your business for
                future success.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Cloud Migration & Integration
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Digital Strategy Consulting
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  API Development & Integration
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  DevOps & CI/CD Pipelines
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Let&apos;s discuss your project and find the perfect solution for
            your business needs
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
