import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about QuickFusion Innovations - a leading software and technology solutions company dedicated to delivering innovative digital transformation services.",
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                QuickFusion Innovations was founded with a clear mission: to
                bridge the gap between cutting-edge technology and practical
                business solutions. We recognized that many businesses struggle
                to leverage modern technology effectively, and we set out to
                change that.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Today, we are a trusted partner for businesses seeking to
                modernize their operations, enhance their digital presence, and
                unlock new opportunities through technology. Our team of skilled
                developers, designers, and strategists work collaboratively to
                deliver solutions that exceed expectations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From startups to established enterprises, we provide the
                expertise and support needed to navigate the complexities of
                digital transformation and achieve sustainable growth.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-700">
                    To empower businesses with innovative technology solutions
                    that drive growth, efficiency, and competitive advantage in
                    the digital age.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-700">
                    To be the leading technology partner recognized for
                    delivering transformative digital solutions that shape the
                    future of business.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    Our Values
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-600 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Innovation
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-600 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Excellence
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-600 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Integrity
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-600 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Collaboration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders driving innovation at QuickFusion
              Innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CEO & Founder */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src="/images/team-member.jpg"
                  alt="Pratik - CEO & Founder of QuickFusion Innovations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  Pratik
                </h3>
                <p className="text-green-600 font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  Visionary leader driving innovation and strategic growth at
                  QuickFusion Innovations. Passionate about delivering
                  world-class technology solutions.
                </p>
              </div>
            </div>

            {/* Co-Founder */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src="/images/cofounder.jpg"
                  alt="Co-Founder of QuickFusion Innovations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  Purab Patel
                </h3>
                <p className="text-green-600 font-medium mb-3">Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  Driving technical excellence and strategic vision to deliver
                  world-class technology solutions for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our unique approach combines technical expertise with business
              insight
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Rapid Innovation
              </h3>
              <p className="text-gray-600">
                We leverage the latest technologies and methodologies to deliver
                solutions quickly without compromising quality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Client Partnership
              </h3>
              <p className="text-gray-600">
                We work as an extension of your team, ensuring alignment with
                your goals and seamless collaboration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Proven Reliability
              </h3>
              <p className="text-gray-600">
                Our track record speaks for itself with successful projects
                delivered on time and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
