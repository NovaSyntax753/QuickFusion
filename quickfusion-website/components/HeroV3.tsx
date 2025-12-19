"use client";
import Link from "next/link";
import Image from "next/image";

interface HeroV9Props {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

export default function HeroV9({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}: HeroV9Props) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 text-white selection:bg-fuchsia-500/20">
      {/* Enhanced Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div
          className="absolute top-[-20%] left-[-15%] w-[50%] h-[50%] bg-gradient-to-br from-fuchsia-500/20 via-purple-500/15 to-transparent rounded-full blur-[140px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute top-[15%] right-[-20%] w-[45%] h-[45%] bg-gradient-to-bl from-cyan-500/25 via-blue-500/15 to-transparent rounded-full blur-[130px] animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-[-15%] left-[25%] w-[40%] h-[40%] bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-transparent rounded-full blur-[120px] animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "4s" }}
        />

        {/* Fine Mesh Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Content - Enhanced Hierarchy */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-7 text-left max-w-2xl">
            {/* Premium Badge */}
            <div className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 backdrop-blur-xl shadow-lg shadow-fuchsia-500/5 hover:shadow-fuchsia-500/10 transition-all duration-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-fuchsia-500"></span>
              </span>
              <span className="text-xs font-semibold text-fuchsia-200 tracking-wider uppercase">
                New Version 2.0
              </span>
            </div>

            {/* Bold Headline with Strategic Gradient */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] text-balance">
              {title.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 animate-gradient">
                  {title.split(" ").slice(2).join(" ")}
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-400/0 via-fuchsia-400/50 to-fuchsia-400/0 blur-sm"></span>
              </span>
            </h1>

            {/* Refined Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-zinc-300 max-w-xl leading-relaxed font-light">
              {subtitle}
            </p>

            {/* Premium CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              {ctaText && ctaLink && (
                <Link
                  href={ctaLink}
                  className="group relative px-9 py-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_8px_30px_rgba(217,70,239,0.25)] hover:shadow-[0_16px_40px_rgba(217,70,239,0.35)] hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-fuchsia-500/50 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {ctaText}
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              )}

              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="px-9 py-4 bg-zinc-900/50 border-2 border-zinc-700/50 hover:border-zinc-500/70 text-zinc-200 hover:text-white font-semibold rounded-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-zinc-500/30 shadow-lg"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>

            {/* Enhanced Trust Signals */}
            <div className="pt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 border-2 border-zinc-950 flex items-center justify-center text-xs font-bold shadow-lg">
                    A
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-2 border-zinc-950 flex items-center justify-center text-xs font-bold shadow-lg">
                    B
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 border-2 border-zinc-950 flex items-center justify-center text-xs font-bold shadow-lg">
                    C
                  </div>
                  <div className="w-9 h-9 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center text-xs font-bold text-zinc-400 shadow-lg">
                    +
                  </div>
                </div>
                <span className="text-zinc-400 font-medium">
                  Trusted by{" "}
                  <span className="text-white font-semibold">100+ brands</span>
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-3 text-zinc-500">
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                <span className="text-xs font-medium tracking-wide">
                  Fast setup
                </span>
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                <span className="text-xs font-medium tracking-wide">
                  99.9% Uptime
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced 3D Visual */}
          <div className="lg:col-span-6 relative h-[500px] sm:h-[600px] w-full flex items-center justify-center lg:justify-end perspective-[2000px] group">
            {/* 3D Card Stack Container */}
            <div
              className="relative w-full max-w-[400px] h-[480px] sm:h-[560px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Layer 3 - Deep Background Card */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-fuchsia-600/10 to-cyan-600/10 rounded-[2rem] border border-white/5 backdrop-blur-sm transform translate-x-12 translate-y-12 transition-all duration-700 ease-out group-hover:translate-x-16 group-hover:translate-y-16 shadow-2xl"
                style={{
                  transform:
                    "translateZ(-80px) translateX(48px) translateY(48px)",
                }}
              />

              {/* Layer 2 - Middle Shadow Card */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-zinc-900/60 via-zinc-800/50 to-zinc-900/60 rounded-[2rem] border border-white/10 backdrop-blur-md transform translate-x-6 translate-y-6 transition-all duration-700 ease-out group-hover:translate-x-8 group-hover:translate-y-8 shadow-2xl"
                style={{
                  transform:
                    "translateZ(-40px) translateX(24px) translateY(24px)",
                }}
              />

              {/* Layer 1 - Main Glassmorphic Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-zinc-800/80 to-zinc-900/90 rounded-[2rem] border border-white/20 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)] backdrop-blur-2xl flex flex-col p-6 sm:p-8 transition-all duration-700 ease-out group-hover:shadow-[0_30px_100px_-20px_rgba(217,70,239,0.3)]">
                {/* Window Chrome */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70 shadow-inner" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70 shadow-inner" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/70 shadow-inner" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-1.5 w-16 bg-zinc-700/50 rounded-full" />
                    <div className="h-1.5 w-8 bg-zinc-700/50 rounded-full" />
                  </div>
                </div>

                {/* Analytics Dashboard Mock */}
                <div className="flex-1 space-y-6">
                  {/* Animated Bar Chart */}
                  <div className="flex gap-3 items-end h-40 mb-8 px-3 bg-zinc-950/30 rounded-2xl p-4 border border-white/5">
                    <div className="w-1/4 bg-gradient-to-t from-fuchsia-500/40 to-fuchsia-500/20 h-[45%] rounded-t-xl relative group-hover:h-[65%] transition-all duration-700 shadow-lg shadow-fuchsia-500/20">
                      <div className="absolute bottom-0 w-full h-1.5 bg-fuchsia-500 rounded-full" />
                    </div>
                    <div className="w-1/4 bg-gradient-to-t from-purple-500/40 to-purple-500/20 h-[75%] rounded-t-xl relative group-hover:h-[90%] transition-all duration-700 delay-75 shadow-lg shadow-purple-500/20">
                      <div className="absolute bottom-0 w-full h-1.5 bg-purple-500 rounded-full" />
                    </div>
                    <div className="w-1/4 bg-gradient-to-t from-cyan-500/40 to-cyan-500/20 h-[55%] rounded-t-xl relative group-hover:h-[70%] transition-all duration-700 delay-150 shadow-lg shadow-cyan-500/20">
                      <div className="absolute bottom-0 w-full h-1.5 bg-cyan-500 rounded-full" />
                    </div>
                    <div className="w-1/4 bg-gradient-to-t from-indigo-500/40 to-indigo-500/20 h-[85%] rounded-t-xl relative group-hover:h-[100%] transition-all duration-700 delay-200 shadow-lg shadow-indigo-500/20">
                      <div className="absolute bottom-0 w-full h-1.5 bg-indigo-500 rounded-full" />
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-3">
                    <div className="h-3 w-full bg-zinc-800/60 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full shadow-lg" />
                    </div>
                    <div className="h-3 w-4/5 bg-zinc-800/60 rounded-full overflow-hidden">
                      <div className="h-full w-[70%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg" />
                    </div>
                    <div className="h-3 w-3/5 bg-zinc-800/60 rounded-full overflow-hidden">
                      <div className="h-full w-[60%] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg" />
                    </div>
                  </div>
                </div>

                {/* CTA Inside Card */}
                <div className="mt-auto pt-6">
                  <div className="w-full h-12 bg-gradient-to-r from-fuchsia-600/20 to-purple-600/20 rounded-xl border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-300 text-sm font-bold hover:from-fuchsia-600/30 hover:to-purple-600/30 transition-all cursor-pointer shadow-lg shadow-fuchsia-500/10">
                    View Full Dashboard →
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 1 */}
              <div
                className="absolute -left-6 top-16 sm:-left-10 sm:top-20 bg-gradient-to-br from-zinc-800/95 to-zinc-900/95 p-4 sm:p-5 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl transform transition-all duration-700 group-hover:-translate-x-3 group-hover:-translate-y-3 z-10"
                style={{ transform: "translateZ(60px)", animationDelay: "0s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-emerald-500/40">
                    🚀
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-medium">
                      Growth Rate
                    </div>
                    <div className="text-lg sm:text-xl font-black text-white">
                      +128%
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 2 */}
              <div
                className="absolute -right-4 bottom-16 sm:-right-8 sm:bottom-20 bg-gradient-to-br from-zinc-800/95 to-zinc-900/95 p-4 sm:p-5 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl transform transition-all duration-700 group-hover:translate-x-3 group-hover:translate-y-3 z-10"
                style={{ transform: "translateZ(60px)", animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-fuchsia-400 to-purple-600 flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-fuchsia-500/40">
                    ✨
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-medium">
                      Active Users
                    </div>
                    <div className="text-lg sm:text-xl font-black text-white">
                      24.3K
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
