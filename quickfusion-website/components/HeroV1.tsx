"use client";
import Link from "next/link";
import Image from "next/image";

interface HeroV5Props {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

export default function HeroV5({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}: HeroV5Props) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mt-16 bg-gradient-to-br from-emerald-950 via-gray-900 to-teal-950">
      {/* Animated lines background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, #10b981 2px, #10b981 3px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #14b8a6 2px, #14b8a6 3px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Gradient orbs with different positions */}
      <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-emerald-500/20 rounded-full filter blur-[130px] animate-pulse"></div>
      <div
        className="absolute bottom-40 right-10 w-[400px] h-[400px] bg-teal-500/20 rounded-full filter blur-[130px] animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 backdrop-blur-sm">
              <svg
                className="w-5 h-5 text-emerald-400 animate-spin"
                style={{ animationDuration: "3s" }}
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
              <span className="text-emerald-300 text-sm font-semibold">
                Powered by Innovation
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="text-white block">
                {title.split(" ").slice(0, 3).join(" ")}
              </span>
              <span className="block mt-3 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-transparent bg-clip-text animate-pulse">
                {title.split(" ").slice(3).join(" ")}
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">{subtitle}</p>

            {/* Buttons with hover animations */}
            <div className="flex flex-col sm:flex-row gap-4">
              {ctaText && ctaLink && (
                <Link
                  href={ctaLink}
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50"
                >
                  <span className="relative z-10">{ctaText}</span>
                  <svg
                    className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-400/50 text-emerald-300 font-bold rounded-2xl hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-700">
              <div className="text-center p-4 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all">
                <div className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
                  500+
                </div>
                <div className="text-xs text-gray-400 mt-2 font-semibold uppercase tracking-wider">
                  Projects
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-teal-500/10 to-transparent rounded-xl border border-teal-500/20 hover:border-teal-500/50 transition-all">
                <div className="text-4xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
                  100+
                </div>
                <div className="text-xs text-gray-400 mt-2 font-semibold uppercase tracking-wider">
                  Clients
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
                  50+
                </div>
                <div className="text-xs text-gray-400 mt-2 font-semibold uppercase tracking-wider">
                  Experts
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image with 3D effect */}
          <div className="relative lg:h-[650px] h-96 order-1 lg:order-2">
            {/* Layered card effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-[2rem] backdrop-blur-2xl border border-emerald-400/30 transform rotate-3 scale-95"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-[2rem] backdrop-blur-2xl border border-teal-400/30 transform -rotate-2 scale-95"></div>
            <div className="relative h-full w-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-[2rem] backdrop-blur-3xl border border-emerald-400/30 p-8">
              {backgroundImage && (
                <Image
                  src={backgroundImage}
                  alt="Hero illustration"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              )}
            </div>

            {/* Floating Elements with different animations */}
            <div className="absolute top-10 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-500/40 to-teal-500/40 rounded-2xl backdrop-blur-lg border border-emerald-400/50 animate-bounce shadow-xl"></div>
            <div className="absolute bottom-16 -left-6 w-20 h-20 bg-gradient-to-br from-teal-500/40 to-cyan-500/40 rounded-full backdrop-blur-lg border border-teal-400/50 animate-pulse shadow-xl"></div>
            <div
              className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-cyan-500/40 to-emerald-500/40 rounded-xl backdrop-blur-lg border border-cyan-400/50 animate-bounce shadow-xl"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
