import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "QuickFusion Innovations - Your trusted partner for innovative software solutions, web development, mobile apps, AI integration, and digital transformation services.",
};

export default function Home() {
  return (
    <>
      <Hero
        title="Transform Your Business with Innovative Technology"
        subtitle="QuickFusion Innovations delivers cutting-edge software and technology solutions that drive growth, efficiency, and digital excellence for modern businesses."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
        backgroundImage="/images/3-removebg-preview.png"
      />

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive technology solutions tailored to meet
              your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={
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
              }
              title="Web Development"
              description="Custom, responsive websites built with modern frameworks like Next.js, React, and cutting-edge technologies."
            />
            <ServiceCard
              icon={
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
              }
              title="App Development"
              description="Native and cross-platform mobile applications designed to deliver exceptional user experiences on iOS and Android."
            />
            <ServiceCard
              icon={
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
              }
              title="AI Solutions"
              description="Intelligent automation and AI-powered tools that streamline operations and unlock new business capabilities."
            />
            <ServiceCard
              icon={
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
              }
              title="Digital Solutions"
              description="End-to-end digital transformation services including cloud integration, automation, and strategic consulting."
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose QuickFusion Innovations?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We combine technical expertise with business acumen to deliver
                solutions that don&apos;t just work—they excel. Our commitment
                to innovation, quality, and client success sets us apart.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0"
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
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Expert Team:</strong>{" "}
                    Skilled developers with proven track records
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0"
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
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      Cutting-Edge Technology:
                    </strong>{" "}
                    We use the latest tools and frameworks
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0"
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
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      Client-Centric Approach:
                    </strong>{" "}
                    Your success is our priority
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0"
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
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Agile Delivery:</strong>{" "}
                    Fast, iterative development that adapts to your needs
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    100+
                  </div>
                  <div className="text-gray-700">Projects Delivered</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-700">Happy Clients</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    5+
                  </div>
                  <div className="text-gray-700">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Let&apos;s discuss how QuickFusion Innovations can help you achieve
            your technology goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
