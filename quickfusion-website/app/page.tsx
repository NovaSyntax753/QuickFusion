import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HeroV1 from "@/components/HeroV1";
import HeroV2 from "@/components/HeroV2";
import HeroV3 from "@/components/HeroV3";
import HeroV4 from "@/components/HeroV4";
import HeroV5 from "@/components/HeroV5";
import HeroV6 from "@/components/HeroV6";
import HeroV7 from "@/components/HeroV7";
import HeroV8 from "@/components/HeroV8";
import ServiceCard from "@/components/ServiceCard";
import Counter from "@/components/Counter";
import Portfolio from "@/components/Portfolio";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "QuickFusion Innovations - Where creativity meets technology. Fusing strategic marketing with powerful tech solutions to help brands lead with confidence in the digital world.",
  openGraph: {
    title: "QuickFusion Innovations - Where Creativity Meets Technology",
    description:
      "We create growth engines that empower businesses to think bigger, move faster, and scale smarter.",
    url: "https://quickfusioninnovations.com",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuickFusion Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickFusion Innovations - Where Creativity Meets Technology",
    description:
      "We create growth engines that empower businesses to think bigger, move faster, and scale smarter.",
  },
};

export default function Home() {
  return (
    <>
      {/* Version Label - Original Hero */}
      <div className="bg-gray-900 text-white py-3 text-center font-bold text-lg border-b-4 border-green-500">
        HERO VERSION 1
      </div>
      <Hero
        title="Where Creativity Meets Innovation Technology"
        subtitle="We create growth engines that empower businesses to think bigger, move faster, and scale smarter. Fusing strategic marketing with powerful tech solutions."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
        backgroundImage="/images/3-removebg-preview.png"
      />

      {/* Version Label - Hero V5 */}
      <div className="bg-gray-900 text-white py-3 text-center font-bold text-lg border-b-4 border-emerald-500">
        HERO VERSION 2
      </div>
      <HeroV2
        title="Where Creativity Meets Innovation Technology"
        subtitle="We create growth engines that empower businesses to think bigger, move faster, and scale smarter. Fusing strategic marketing with powerful tech solutions."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
        backgroundImage="/images/3-removebg-preview.png"
      />

      {/* Version Label - Hero V7 */}
      <div className="bg-gray-900 text-white py-3 text-center font-bold text-lg border-b-4 border-purple-500">
        HERO VERSION 3
      </div>
      <HeroV3
        title="Where Creativity Meets Innovation Technology"
        subtitle="We create growth engines that empower businesses to think bigger, move faster, and scale smarter. Fusing strategic marketing with powerful tech solutions."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
        backgroundImage="/images/3-removebg-preview.png"
      />

      {/* Version Label - Hero V9 */}
      <div className="bg-gray-900 text-white py-3 text-center font-bold text-lg border-b-4 border-fuchsia-500">
        HERO VERSION 4
      </div>
      <HeroV4
        title="Where Creativity Meets Innovation"
        subtitle="We create growth engines that empower businesses to think bigger, move faster, and scale smarter. Fusing strategic marketing with powerful tech solutions."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
        backgroundImage="/images/3-removebg-preview.png"
      />

      {/* Version Label - Hero V10 */}
      <div className="bg-gray-900 text-white py-3 text-center font-bold text-lg border-b-4 border-violet-500">
        HERO VERSION 5
      </div>
      <HeroV5
        title="Where Creativity Meets Innovation Technology"
        subtitle="We create growth engines that empower businesses to think bigger, move faster, and scale smarter. Fusing strategic marketing with powerful tech solutions."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
        backgroundImage="/images/3-removebg-preview.png"
      />

      {/* Version Label - Hero V11 */}
      <div className="bg-gray-900 text-white py-3 text-center font-bold text-lg border-b-4 border-cyan-500">
        HERO VERSION 6
      </div>
      <HeroV6
        title="Where Creativity Meets Innovation Technology"
        subtitle="We create growth engines that empower businesses to think bigger, move faster, and scale smarter. Fusing strategic marketing with powerful tech solutions."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
        backgroundImage="/images/3-removebg-preview.png"
      />

      {/* Version Label - Hero V12 */}
      <div className="bg-white text-zinc-900 py-3 text-center font-bold text-lg border-b-4 border-zinc-900">
        HERO VERSION 7
      </div>
      <HeroV7
        title="Where Creativity Meets Innovation"
        subtitle="We create growth engines that empower businesses to think bigger, move faster, and scale smarter. Fusing strategic marketing with powerful tech solutions."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
        backgroundImage="/images/3-removebg-preview.png"
      />

      {/* Version Label - Hero V13 */}
      <div className="bg-black text-cyan-400 py-3 text-center font-bold text-lg border-b-4 border-cyan-500">
        HERO VERSION 8
      </div>
      <HeroV8
        title="Where Creativity Meets Innovation"
        subtitle="We create growth engines that empower businesses to think bigger, move faster, and scale smarter. Fusing strategic marketing with powerful tech solutions."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
        backgroundImage="/images/3-removebg-preview.png"
      />

      {/* Divider - End of Hero Comparisons */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-6 text-center">
        <h3 className="text-2xl font-bold">
          ↑ Choose Your Favorite Hero Design Above ↑
        </h3>
        <p className="mt-2 text-green-100">
          Below is your actual website content
        </p>
      </div>

      {/* Marquee Section - Client Trust Badges */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
              Trusted By Leading Businesses
            </p>
          </div>
          <div className="flex gap-8 items-center justify-center flex-wrap opacity-60 hover:opacity-100 transition-opacity">
            <div className="px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 cursor-pointer hover:-translate-y-1">
              <p className="text-2xl font-bold text-gray-800">
                <Counter end={100} suffix="+" />
              </p>
              <p className="text-xs text-gray-600">Projects</p>
            </div>
            <div className="px-6 py-3 bg-white rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-gray-800">
                <Counter end={50} suffix="+" />
              </p>
              <p className="text-xs text-gray-600">Clients</p>
            </div>
            <div className="px-6 py-3 bg-white rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-gray-800">
                <Counter end={1} suffix="+" />
              </p>
              <p className="text-xs text-gray-600">Year</p>
            </div>
            <div className="px-6 py-3 bg-white rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-gray-800">24/7</p>
              <p className="text-xs text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #16a34a 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Problems */}
            <div className="animate-fade-in-left">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                  😡 Challenges You Face
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Does This Sound Familiar?
              </h2>
              <div className="space-y-4">
                {[
                  "Outdated technology holding your business back",
                  "Slow, inefficient manual processes wasting time",
                  "Struggling to find reliable tech partners",
                  "Need for scalable solutions but limited resources",
                ].map((problem, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100 hover:shadow-lg hover:shadow-red-200/50 hover:border-red-300 transition-all duration-300 cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-gray-700 font-medium">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="animate-fade-in-right">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
                  🚀 Solutions We Bring
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Here's How We Help
              </h2>
              <div className="space-y-4">
                {[
                  "Modern tech stack for future-ready applications",
                  "Automated workflows that save hours every day",
                  "Dedicated team committed to your success",
                  "Flexible solutions that grow with your business",
                ].map((solution, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100 hover:shadow-lg hover:shadow-green-200/50 hover:border-green-300 transition-all duration-300 cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-gray-700 font-medium">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-green-50 relative">
        {/* Decorative Blobs */}
        <div className="absolute top-10 right-0 md:top-20 md:right-10 w-40 h-40 md:w-64 md:h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div
          className="absolute bottom-10 left-0 md:bottom-20 md:left-10 w-40 h-40 md:w-64 md:h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to meet your business
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

          <div className="text-center mt-12 animate-fade-in-up animate-delay-300">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all"
            >
              <span>Explore All Services</span>
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Why Choose Us Section with Stats */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-left">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                  Why QuickFusion
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Built for{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                  Innovation
                </span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We combine technical expertise with business acumen to deliver
                solutions that don't just work—they excel. Our commitment to
                innovation, quality, and client success sets us apart.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Expert Team
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Skilled developers with proven track records
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Cutting-Edge Tech
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Latest tools and frameworks
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Quality First
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Your success is our priority
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Agile Delivery
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Fast iteration that adapts to needs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Stats Grid */}
            <div className="animate-fade-in-right">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    number: 100,
                    suffix: "+",
                    label: "Projects Delivered",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    number: 50,
                    suffix: "+",
                    label: "Happy Clients",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    number: 5,
                    suffix: "+",
                    label: "Years Excellence",
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    number: 0,
                    suffix: "24/7",
                    label: "Support Available",
                    color: "from-orange-500 to-red-500",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="relative group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer hover:scale-105"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}
                    ></div>
                    <div className="relative">
                      <div
                        className={`text-5xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-3`}
                      >
                        {stat.number > 0 ? (
                          <Counter end={stat.number} suffix={stat.suffix} />
                        ) : (
                          stat.suffix
                        )}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-10 left-0 md:top-20 md:left-10 w-24 h-24 md:w-40 md:h-40 bg-green-400 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-10 right-0 md:bottom-20 md:right-10 w-24 h-24 md:w-40 md:h-40 bg-emerald-400 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white text-green-600 rounded-full text-sm font-semibold shadow-sm">
                Our Process
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              How We{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                Work
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to turning your ideas into reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your needs and goals",
              },
              {
                step: "02",
                title: "Design",
                desc: "Creating the perfect solution blueprint",
              },
              {
                step: "03",
                title: "Develop",
                desc: "Building with precision and care",
              },
              {
                step: "04",
                title: "Deliver",
                desc: "Launching and supporting your success",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:shadow-green-200/50 transition-all duration-300 h-full cursor-pointer hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-green-100 mb-6 group-hover:text-green-200 transition-colors">
                    {item.step}
                  </div>
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-300 to-emerald-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Unique Design */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-5 left-0 md:top-10 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
            <div
              className="absolute bottom-5 right-0 md:bottom-10 md:right-10 w-48 h-48 md:w-72 md:h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
                Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how QuickFusion Innovations can help you achieve
              your technology goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105"
              >
                <span className="relative z-10">Start Your Project</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300 hover:scale-105"
              >
                <span>Learn More About Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
