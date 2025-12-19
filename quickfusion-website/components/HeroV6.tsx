"use client";
import Link from "next/link";
import Image from "next/image";

interface HeroV12Props {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

export default function HeroV12({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}: HeroV12Props) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white text-zinc-950 selection:bg-zinc-200">
      {/* Subtle Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Minimal Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-50/50" />

      {/* Floating Minimal Shapes */}
      <div
        className="absolute top-20 right-[15%] w-2 h-2 rounded-full bg-zinc-300 animate-pulse"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-40 left-[10%] w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse"
        style={{ animationDuration: "4s", animationDelay: "1s" }}
      />
      <div className="absolute top-[60%] right-[8%] w-px h-20 bg-gradient-to-b from-transparent via-zinc-200 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Ultra Minimal */}
          <div className="flex flex-col items-start space-y-10 text-left">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-3 px-1 animate-[fadeInLeft_0.8s_ease-out]">
              <div
                className="w-8 h-px bg-zinc-900 animate-[expandWidth_1s_ease-out]"
                style={{ animationDelay: "0.3s", transformOrigin: "left" }}
              />
              <span className="text-[10px] font-medium text-zinc-500 tracking-[0.2em] uppercase">
                Est. 2024
              </span>
            </div>

            {/* Luxury Headline */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight leading-[0.95]">
              <span
                className="block font-extralight text-zinc-400 animate-[fadeInUp_0.8s_ease-out] opacity-0"
                style={{
                  animationDelay: "0.2s",
                  animationFillMode: "forwards",
                }}
              >
                {title.split(" ")[0]}
              </span>
              <span
                className="block font-medium text-zinc-900 mt-2 animate-[fadeInUp_0.8s_ease-out] opacity-0"
                style={{
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                }}
              >
                {title.split(" ").slice(1, 3).join(" ")}
              </span>
              <span
                className="block font-light text-zinc-600 mt-2 italic animate-[fadeInUp_0.8s_ease-out] opacity-0"
                style={{
                  animationDelay: "0.6s",
                  animationFillMode: "forwards",
                }}
              >
                {title.split(" ").slice(3).join(" ")}
              </span>
            </h1>

            {/* Refined Subtitle */}
            <p
              className="text-lg sm:text-xl text-zinc-600 max-w-lg leading-relaxed font-light border-l-2 border-zinc-200 pl-6 animate-[fadeInLeft_1s_ease-out] opacity-0"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              {subtitle.split(".")[0]}.
            </p>

            {/* Luxury CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-6 animate-[fadeIn_1s_ease-out] opacity-0"
              style={{ animationDelay: "1s", animationFillMode: "forwards" }}
            >
              {ctaText && ctaLink && (
                <Link
                  href={ctaLink}
                  className="group relative px-12 py-5 bg-zinc-900 hover:bg-zinc-800 text-white font-light rounded-none transition-all duration-500 overflow-hidden focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-4 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 text-sm tracking-wider uppercase">
                    {ctaText}
                    <span className="w-8 h-px bg-white group-hover:w-12 transition-all duration-500" />
                  </span>
                </Link>
              )}

              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="px-12 py-5 border border-zinc-300 hover:border-zinc-900 text-zinc-900 font-light rounded-none transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:ring-offset-4"
                >
                  <span className="text-sm tracking-wider uppercase">
                    {secondaryCtaText}
                  </span>
                </Link>
              )}
            </div>

            {/* Minimal Trust Line */}
            <div className="pt-8 flex items-center gap-8 text-xs text-zinc-400 font-light tracking-wider uppercase">
              <span>Award-winning</span>
              <div className="w-px h-8 bg-zinc-200" />
              <span>Since 2024</span>
            </div>
          </div>

          {/* Right Content - Minimal Showcase */}
          <div className="relative h-[550px] sm:h-[650px] w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px] h-full">
              {/* Background Card - Subtle Shadow */}
              <div
                className="absolute inset-0 bg-zinc-50 transform translate-x-8 translate-y-8 transition-all duration-700 group-hover:translate-x-12 group-hover:translate-y-12 animate-[slideInRight_1.2s_ease-out] opacity-0"
                style={{
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                }}
              />

              {/* Main Card - Clean White */}
              <div
                className="absolute inset-0 bg-white shadow-[0_0_60px_-15px_rgba(0,0,0,0.08)] flex flex-col p-10 sm:p-12 transition-all duration-700 animate-[slideInRight_1s_ease-out] opacity-0"
                style={{
                  animationDelay: "0.2s",
                  animationFillMode: "forwards",
                }}
              >
                {/* Minimal Header */}
                <div className="flex items-center justify-between mb-12 pb-6 border-b border-zinc-100">
                  <span className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase font-medium">
                    Portfolio
                  </span>
                  <div className="flex gap-3">
                    <div className="w-1 h-1 rounded-full bg-zinc-300" />
                    <div className="w-1 h-1 rounded-full bg-zinc-300" />
                    <div className="w-1 h-1 rounded-full bg-zinc-900" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 space-y-8">
                  {/* Image Placeholder */}
                  <div className="aspect-[4/3] bg-zinc-100 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-transparent">
                      <div className="h-px w-16 bg-zinc-900 mb-3" />
                      <div className="text-xs text-zinc-500 font-light tracking-wider">
                        Featured Work
                      </div>
                    </div>
                  </div>

                  {/* Text Lines */}
                  <div className="space-y-3">
                    <div className="h-px w-full bg-zinc-100" />
                    <div className="h-px w-4/5 bg-zinc-100" />
                    <div className="h-px w-3/5 bg-zinc-100" />
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-8 border-t border-zinc-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400 tracking-wider uppercase font-light">
                      Explore More
                    </span>
                    <div className="w-6 h-px bg-zinc-900" />
                  </div>
                </div>
              </div>

              {/* Floating Accent Card */}
              <div className="absolute -right-8 bottom-24 bg-zinc-900 text-white p-6 shadow-2xl w-36 transition-all duration-700 hover:-translate-y-2">
                <div className="text-3xl font-light mb-1">128</div>
                <div className="text-[9px] tracking-[0.2em] uppercase text-zinc-400">
                  Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
