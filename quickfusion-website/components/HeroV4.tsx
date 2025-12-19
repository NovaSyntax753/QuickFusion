"use client";
import Link from "next/link";
import Image from "next/image";

interface HeroV10Props {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

export default function HeroV10({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}: HeroV10Props) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mt-16 bg-slate-950">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-slate-950"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur-[150px] opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-rose-600 to-orange-600 rounded-full blur-[150px] opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur-[120px] opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Floating aesthetic shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-20 h-20 border border-white/20 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-40 w-32 h-32 border border-white/10 rounded-2xl rotate-45 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-r from-violet-500/20 to-transparent rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div
          className="absolute bottom-1/3 left-20 w-2 h-2 bg-violet-400 rounded-full animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Aesthetic tag with glow */}
            <div className="inline-flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-violet-500 blur-md opacity-50"></div>
                <span className="relative px-4 py-2 bg-gradient-to-r from-violet-600/80 to-indigo-600/80 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-violet-400/30">
                  ✨ Digital Excellence
                </span>
              </div>
              <span className="text-white/40 text-sm">•</span>
              <span className="text-white/40 text-sm font-mono">v2024</span>
            </div>

            {/* Gradient text title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-white/90 block">
                {title.split(" ").slice(0, 2).join(" ")}
              </span>
              <span className="block mt-2 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 text-transparent bg-clip-text">
                {title.split(" ").slice(2).join(" ")}
              </span>
            </h1>

            {/* Subtitle with glassmorphism */}
            <div className="relative max-w-xl">
              <p className="text-xl text-white/60 leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Aesthetic buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {ctaText && ctaLink && (
                <Link
                  href={ctaLink}
                  className="group relative px-8 py-4 overflow-hidden rounded-2xl font-semibold text-lg transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 text-white flex items-center gap-2">
                    {ctaText}
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                  </span>
                </Link>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white/80 font-semibold text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>

            {/* Floating cards stats */}
            <div className="flex flex-wrap gap-4 pt-8">
              <div className="group px-6 py-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all cursor-default">
                <div className="text-3xl font-bold text-white group-hover:text-violet-400 transition-colors">
                  500+
                </div>
                <div className="text-sm text-white/50">Projects</div>
              </div>
              <div className="group px-6 py-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-fuchsia-500/50 transition-all cursor-default">
                <div className="text-3xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">
                  100+
                </div>
                <div className="text-sm text-white/50">Clients</div>
              </div>
              <div className="group px-6 py-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all cursor-default">
                <div className="text-3xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  50+
                </div>
                <div className="text-sm text-white/50">Team</div>
              </div>
            </div>
          </div>

          {/* Right - Floating cards with image */}
          <div className="lg:col-span-5 relative h-[600px]">
            {/* Main image card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Glow behind */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl blur-2xl opacity-30"></div>
                {/* Card */}
                <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-4 overflow-hidden">
                  {backgroundImage && (
                    <Image
                      src={backgroundImage}
                      alt="Hero"
                      fill
                      className="object-contain"
                      priority
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Floating small cards */}
            <div className="absolute top-10 right-0 px-4 py-3 bg-gradient-to-r from-violet-600/80 to-indigo-600/80 backdrop-blur-sm rounded-xl border border-violet-400/30 animate-float">
              <span className="text-white text-sm font-medium">
                🚀 Innovate
              </span>
            </div>
            <div
              className="absolute bottom-20 left-0 px-4 py-3 bg-gradient-to-r from-fuchsia-600/80 to-pink-600/80 backdrop-blur-sm rounded-xl border border-fuchsia-400/30 animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-white text-sm font-medium">💡 Create</span>
            </div>
            <div
              className="absolute top-1/2 right-0 px-4 py-3 bg-gradient-to-r from-orange-600/80 to-amber-600/80 backdrop-blur-sm rounded-xl border border-orange-400/30 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <span className="text-white text-sm font-medium">⚡ Scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
