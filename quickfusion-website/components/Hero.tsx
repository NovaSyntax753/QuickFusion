"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface HeroV14Props {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

// Counter animation component
function AnimatedCounter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = end / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={counterRef}>
      {count}
      {suffix}
    </div>
  );
}

export default function HeroV14({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}: HeroV14Props) {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouch = () => {
    setIsTouched(true);
    setTimeout(() => setIsTouched(false), 3000);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-green-950 to-slate-900 text-white selection:bg-green-500/20">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-green-500/20 rounded-full blur-[160px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/20 rounded-full blur-[140px] animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-[30%] right-[20%] w-[40%] h-[40%] bg-green-600/15 rounded-full blur-[120px] animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "4s" }}
        />
      </div>

      {/* Parallax Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(22,163,74,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-8">
            {/* Floating Badge */}
            <div className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-2xl shadow-lg shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-300">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-400 animate-ping" />
              </div>
              <span className="text-xs font-semibold text-green-200 tracking-wider uppercase">
                Innovation in Motion
              </span>
            </div>

            {/* Dynamic Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05]">
              <span className="block text-white">
                {title.split(" ").slice(0, 2).join(" ")}
              </span>
              <span className="block mt-3 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-500">
                  {title.split(" ").slice(2).join(" ")}
                </span>
                <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-green-400/50 via-emerald-400/50 to-green-500/50 blur-md" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              {ctaText && ctaLink && (
                <Link
                  href={ctaLink}
                  className="group relative px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_10px_40px_rgba(22,163,74,0.3)] hover:shadow-[0_20px_50px_rgba(22,163,74,0.4)] hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-500/50 overflow-hidden"
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
                </Link>
              )}

              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="px-10 py-5 bg-slate-800/50 border-2 border-slate-600/50 hover:border-slate-400/70 text-slate-200 hover:text-white font-semibold rounded-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-slate-500/30"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>

            {/* Stats Row */}
            <div className="pt-6 grid grid-cols-3 gap-6 w-full max-w-lg">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Success Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  24/7
                </div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Card Stack with Parallax */}
          <div
            className={`lg:col-span-6 relative h-[550px] sm:h-[650px] w-full perspective-[2000px] group overflow-visible ${
              isTouched ? "touched" : ""
            }`}
            onTouchStart={handleTouch}
            onClick={handleTouch}
          >
            <div
              className="relative w-full h-full overflow-visible"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card 5 - Deepest Layer */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-green-600/15 via-emerald-600/10 to-green-700/15 rounded-3xl border border-white/5 backdrop-blur-sm shadow-2xl transition-all duration-700 ease-out animate-[floatCard_6s_ease-in-out_infinite] opacity-0 group-[.touched]:translate-x-20 group-[.touched]:translate-y-20"
                style={{
                  transform:
                    "translateZ(-200px) translateX(80px) translateY(80px) rotateY(-5deg)",
                  transition: "transform 0.7s ease-out",
                  animationDelay: "0.8s",
                  animationFillMode: "forwards",
                }}
              />

              {/* Card 4 */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-emerald-600/15 via-green-600/10 to-green-700/15 rounded-3xl border border-white/8 backdrop-blur-sm shadow-2xl transition-all duration-700 ease-out group-hover:translate-x-16 group-hover:translate-y-16 group-[.touched]:translate-x-16 group-[.touched]:translate-y-16 animate-[floatCard_5s_ease-in-out_infinite] opacity-0"
                style={{
                  transform:
                    "translateZ(-150px) translateX(60px) translateY(60px) rotateY(-3deg)",
                  animationDelay: "0.6s",
                  animationFillMode: "forwards",
                }}
              />

              {/* Card 3 */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-emerald-600/15 to-green-700/20 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl transition-all duration-700 ease-out group-hover:translate-x-12 group-hover:translate-y-12 group-[.touched]:translate-x-12 group-[.touched]:translate-y-12 animate-[floatCard_4s_ease-in-out_infinite] opacity-0"
                style={{
                  transform:
                    "translateZ(-100px) translateX(40px) translateY(40px) rotateY(-2deg)",
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                }}
              />

              {/* Card 2 - Middle Layer */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-slate-800/80 via-green-900/60 to-slate-800/80 rounded-3xl border border-white/15 backdrop-blur-lg shadow-2xl transition-all duration-700 ease-out group-hover:translate-x-6 group-hover:translate-y-6 group-[.touched]:translate-x-6 group-[.touched]:translate-y-6 animate-[floatCard_3.5s_ease-in-out_infinite] opacity-0"
                style={{
                  transform:
                    "translateZ(-50px) translateX(20px) translateY(20px) rotateY(-1deg)",
                  animationDelay: "0.2s",
                  animationFillMode: "forwards",
                }}
              />

              {/* Card 1 - Main Front Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-green-900/85 to-slate-900/95 rounded-3xl border border-white/20 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] backdrop-blur-2xl flex flex-col p-8 sm:p-10 transition-all duration-700 ease-out group-hover:shadow-[0_40px_120px_-20px_rgba(22,163,74,0.4)] group-[.touched]:shadow-[0_40px_120px_-20px_rgba(22,163,74,0.4)]">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-lg" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-lg" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-lg" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-20 bg-slate-700/50 rounded-full" />
                    <div className="h-2 w-12 bg-slate-700/50 rounded-full" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-1 space-y-6">
                  {/* Feature Cards Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "⚡", label: "Fast", color: "green" },
                      { icon: "🎯", label: "Precise", color: "emerald" },
                      { icon: "🚀", label: "Scalable", color: "green" },
                      { icon: "🔒", label: "Secure", color: "emerald" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`p-4 bg-gradient-to-br from-${item.color}-500/10 to-${item.color}-600/5 border border-${item.color}-500/20 rounded-2xl hover:border-${item.color}-500/40 active:border-${item.color}-500/40 active:scale-95 transition-all duration-300`}
                      >
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <div className="text-sm font-semibold text-white">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Progress Indicators */}
                  <div className="space-y-3 pt-4">
                    {[
                      { width: "90%", color: "green" },
                      { width: "85%", color: "emerald" },
                      { width: "95%", color: "green" },
                    ].map((bar, i) => (
                      <div
                        key={i}
                        className="h-2 bg-slate-800/60 rounded-full overflow-hidden"
                      >
                        <div
                          className={`h-full bg-gradient-to-r from-${bar.color}-500 to-${bar.color}-600 rounded-full shadow-lg transition-all duration-1000 ease-out`}
                          style={{ width: bar.width }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-auto pt-6">
                  <Link
                    href="/services"
                    className="w-full h-12 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-500/30 flex items-center justify-center text-green-300 text-sm font-bold hover:from-green-600/30 hover:to-emerald-600/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                  >
                    Explore Features →
                  </Link>
                </div>
              </div>

              {/* Floating Badges */}
              <div
                className="hidden lg:block absolute -left-8 top-24 bg-gradient-to-br from-slate-800/95 to-green-900/95 p-5 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl transition-all duration-700 group-hover:-translate-x-4 group-hover:-translate-y-4 group-[.touched]:-translate-x-4 group-[.touched]:-translate-y-4 z-20 animate-[bounceIn_1s_ease-out] opacity-0"
                style={{
                  transform: "translateZ(80px)",
                  animationDelay: "1s",
                  animationFillMode: "forwards",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/50">
                    💎
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">
                      Quality
                    </div>
                    <div className="text-xl font-black text-white">Premium</div>
                  </div>
                </div>
              </div>

              <div
                className="hidden lg:block absolute -right-6 bottom-28 bg-gradient-to-br from-slate-800/95 to-emerald-900/95 p-5 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl transition-all duration-700 group-hover:translate-x-4 group-hover:translate-y-4 group-[.touched]:translate-x-4 group-[.touched]:translate-y-4 z-20 animate-[bounceIn_1s_ease-out] opacity-0"
                style={{
                  transform: "translateZ(80px)",
                  animationDelay: "1.2s",
                  animationFillMode: "forwards",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-2xl shadow-lg shadow-green-500/50">
                    ⭐
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">
                      Rating
                    </div>
                    <div className="text-xl font-black text-white">5.0</div>
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
