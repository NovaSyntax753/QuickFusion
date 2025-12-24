import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about QuickFusion Innovations - Founded in 2024 by Purab Patel, we believe innovation happens when creativity meets technology. Based in Nagpur, serving clients worldwide.",
  openGraph: {
    title: "About QuickFusion Innovations - Our Story",
    description:
      "Founded in 2024 by Purab Patel. We believe innovation happens when creativity meets technology.",
    url: "https://quickfusioninnovations.com/about",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "About QuickFusion Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About QuickFusion Innovations",
    description:
      "Founded in 2024 by Purab Patel. We believe innovation happens when creativity meets technology.",
  },
};

export default function About() {
  return (
    <>
      <Hero
        title="About QuickFusion Innovations"
        subtitle="We are a forward-thinking technology company committed to transforming businesses through innovative software solutions and digital excellence."
        backgroundImage="/images/3-removebg-preview.png"
      />

      {/* Company Story Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-0 md:top-20 md:right-10 w-40 h-40 md:w-64 md:h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div
          className="absolute bottom-10 left-0 md:bottom-20 md:left-10 w-40 h-40 md:w-64 md:h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
                  Our Journey
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Building the{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                  Future
                </span>{" "}
                Together
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-base md:text-lg">
                QuickFusion Innovations was founded in 2024 by Purab Patel with
                a clear mission: to bridge the gap between cutting-edge
                technology and practical business solutions. We believe that
                innovation happens when creativity meets technology.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                In today's digital era, businesses can't rely on just one side
                of the equation. Technology alone can't create impact. Marketing
                alone can't build a future. But when both come together, that's
                where transformation begins.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                Today, we are a trusted partner for businesses seeking to
                modernize their operations, enhance their digital presence, and
                unlock new opportunities through technology. Our team of skilled
                developers, designers, and strategists work collaboratively to
                deliver solutions that exceed expectations.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                From startups to established enterprises, we provide the
                expertise and support needed to navigate the complexities of
                digital transformation and achieve sustainable growth.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Based in Nagpur, Maharashtra, we serve clients across India and
                beyond, helping brands not just survive, but lead with
                confidence in the digital world.
              </p>
            </div>

            <div className="animate-fade-in-right">
              <div className="relative">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      number: "100+",
                      label: "Projects Completed",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      number: "50+",
                      label: "Happy Clients",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      number: "1+",
                      label: "Year in Business",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      number: "24/7",
                      label: "Support Available",
                      color: "from-orange-500 to-red-500",
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}
                      ></div>
                      <div className="relative">
                        <div
                          className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-2 sm:mb-3`}
                        >
                          {stat.number}
                        </div>
                        <div className="text-sm sm:text-base text-gray-600 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-semibold">
                What Drives Us
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                Principles
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-green-600"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with innovative technology solutions
                  that drive growth, efficiency, and competitive advantage in
                  the digital age.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading technology partner recognized for delivering
                  transformative digital solutions that shape the future of
                  business.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Values
                </h3>
                <ul className="space-y-2">
                  {[
                    "Innovation",
                    "Integrity",
                    "Excellence",
                    "Collaboration",
                  ].map((value, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-purple-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                Choose Us
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We bring a unique combination of skills, experience, and
              dedication to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-white p-8 rounded-xl border border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Expert Team
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Skilled professionals with years of industry experience and
                proven track records in delivering excellence.
              </p>
            </div>

            <div className="group relative bg-white p-8 rounded-xl border border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cutting-Edge Technology
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We use the latest tools, frameworks, and best practices to build
                future-ready solutions.
              </p>
            </div>

            <div className="group relative bg-white p-8 rounded-xl border border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Client-Centric Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your success is our priority. We listen, understand, and deliver
                exactly what you need.
              </p>
            </div>

            <div className="group relative bg-white p-8 rounded-xl border border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Agile Methodology
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fast, iterative development that adapts to your changing needs
                and market conditions.
              </p>
            </div>

            <div className="group relative bg-white p-8 rounded-xl border border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quality Assurance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Rigorous testing and quality checks ensure bug-free, reliable,
                and performant solutions.
              </p>
            </div>

            <div className="group relative bg-white p-8 rounded-xl border border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Long-term Partnership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We're here for the long haul, providing ongoing support and
                continuous improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                Leadership
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              The visionary leaders driving QuickFusion Innovations forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* CEO & Founder */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square relative bg-gradient-to-br from-green-100 to-emerald-100">
                <Image
                  src="/images/team-member.jpg"
                  alt="Pratik - CEO & Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  Pratik
                </h3>
                <p className="text-green-600 font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  Visionary leader with a passion for technology and innovation.
                  Driving strategic growth and delivering world-class solutions.
                </p>
              </div>
            </div>

            {/* Co-Founder */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square relative bg-gradient-to-br from-blue-100 to-cyan-100">
                <Image
                  src="/images/cofounder.jpg"
                  alt="Purab Patel - Co-Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  Purab Patel
                </h3>
                <p className="text-green-600 font-medium mb-3">Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  Technical expert driving innovation and excellence. Committed
                  to delivering cutting-edge solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
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
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
                Amazing
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Ready to take your business to the next level? Get in touch with
              our team today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all"
            >
              <span>Contact Us Now</span>
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
    </>
  );
}
