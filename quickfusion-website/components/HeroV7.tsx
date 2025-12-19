"use client";
import Link from "next/link";
import Image from "next/image";

interface HeroV13Props {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

export default function HeroV13({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}: HeroV13Props) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white selection:bg-cyan-500/30">
      {/* Cyberpunk Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      {/* Neon Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[150px] animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-fuchsia-500/30 rounded-full blur-[140px] animate-pulse"
          style={{ animationDuration: "8s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
      </div>

      {/* Scanlines Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.02)_50%)] bg-[size:100%_4px] pointer-events-none opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8 text-left">
            {/* Cyberpunk Badge */}
            <div className="group inline-flex items-center gap-3 px-5 py-2.5 border-2 border-cyan-500/50 bg-cyan-500/10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] transition-all duration-300 clip-corner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-bold text-cyan-300 tracking-[0.2em] uppercase">
                ONLINE
              </span>
              <div className="w-px h-4 bg-cyan-500/50" />
              <span className="text-[10px] font-mono text-cyan-400/70">
                v2.0.24
              </span>
            </div>

            {/* Neon Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] uppercase">
              <span className="block text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-[glitchIn_0.8s_ease-out]">
                {title.split(" ").slice(0, 2).join(" ")}
              </span>
              <span className="block mt-3 relative inline-block animate-[neonFlicker_2s_ease-in-out_infinite]">
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 drop-shadow-[0_0_30px_rgba(0,255,255,0.8)] animate-[typewriter_1.5s_steps(20)] opacity-0"
                  style={{
                    animationDelay: "0.5s",
                    animationFillMode: "forwards",
                  }}
                >
                  {title.split(" ").slice(2).join(" ")}
                </span>
                <div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 blur-sm opacity-70 animate-[expandWidth_1s_ease-out]"
                  style={{ animationDelay: "2s" }}
                />
              </span>
            </h1>

            {/* Glitch Subtitle */}
            <div className="relative max-w-xl">
              <p className="text-lg sm:text-xl text-cyan-100/80 leading-relaxed font-light">
                {subtitle}
              </p>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/5 to-fuchsia-500/5 blur-xl -z-10" />
            </div>

            {/* Neon CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              {ctaText && ctaLink && (
                <Link
                  href={ctaLink}
                  className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 text-black font-black rounded-none transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:shadow-[0_0_50px_rgba(0,255,255,0.8)] hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 overflow-hidden uppercase tracking-wider"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <span className="w-2 h-2 bg-black rounded-full" />
                    {ctaText}
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Link>
              )}

              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="px-10 py-5 border-2 border-fuchsia-500/50 hover:border-fuchsia-500 text-fuchsia-300 hover:text-white font-bold rounded-none backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-fuchsia-500/30 shadow-[0_0_20px_rgba(255,0,255,0.3)] hover:shadow-[0_0_40px_rgba(255,0,255,0.5)] uppercase tracking-wider"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>

            {/* Cyber Stats */}
            <div className="pt-8 grid grid-cols-3 gap-6 w-full max-w-md">
              {[
                { label: "USERS", value: "10K+", color: "cyan" },
                { label: "UPTIME", value: "99.9%", color: "fuchsia" },
                { label: "SPEED", value: "<50ms", color: "purple" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    className={`text-2xl sm:text-3xl font-black bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 text-transparent bg-clip-text mb-1 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-zinc-500 tracking-[0.15em] uppercase font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Cyberpunk Terminal */}
          <div className="lg:col-span-5 relative h-[500px] sm:h-[600px] w-full">
            <div className="relative w-full h-full">
              {/* Glowing Background Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-purple-500/10 blur-3xl transform translate-x-8 translate-y-8" />

              {/* Main Terminal Window */}
              <div className="absolute inset-0 bg-black/90 border-2 border-cyan-500/50 shadow-[0_0_50px_rgba(0,255,255,0.3)] backdrop-blur-xl flex flex-col overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-cyan-900/30 to-fuchsia-900/30 border-b-2 border-cyan-500/30">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(255,255,0,0.8)]" />
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(0,255,0,0.8)]" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 tracking-wider">
                    SYSTEM_ONLINE.exe
                  </span>
                </div>

                {/* Terminal Content */}
                <div className="flex-1 p-6 font-mono text-sm space-y-4 overflow-hidden">
                  <div
                    className="text-cyan-400 animate-[typewriter_2s_steps(20)] opacity-0"
                    style={{
                      animationDelay: "0.5s",
                      animationFillMode: "forwards",
                    }}
                  >
                    <span className="text-fuchsia-500">$</span>{" "}
                    initialize_system
                  </div>
                  <div
                    className="text-green-400 animate-[typewriter_2s_steps(30)] opacity-0"
                    style={{
                      animationDelay: "1s",
                      animationFillMode: "forwards",
                    }}
                  >
                    → Loading modules...{" "}
                    <span className="text-cyan-400 animate-pulse">
                      [████████████] 100%
                    </span>
                    {/* Animated Bars */}
                    <div className="space-y-3 pt-6">
                      {[
                        {
                          label: "Performance",
                          width: "90%",
                          color: "cyan",
                          delay: 0,
                        },
                        {
                          label: "Security",
                          width: "95%",
                          color: "fuchsia",
                          delay: 200,
                        },
                        {
                          label: "Innovation",
                          width: "100%",
                          color: "purple",
                          delay: 400,
                        },
                      ].map((bar, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-xs mb-2">
                            <span
                              className={`text-${bar.color}-400 uppercase tracking-wider`}
                            >
                              {bar.label}
                            </span>
                            <span className="text-zinc-500">{bar.width}</span>
                          </div>
                          <div className="h-2 bg-zinc-900 border border-zinc-800 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r from-${bar.color}-500 to-${bar.color}-600 shadow-[0_0_10px_currentColor] transition-all duration-1000 ease-out`}
                              style={{
                                width: bar.width,
                                transitionDelay: `${bar.delay}ms`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="pt-6 text-green-400">
                      → System status:{" "}
                      <span className="text-cyan-400 font-bold">OPTIMAL</span>
                    </div>
                    <div className="text-zinc-600">
                      → Connected nodes:{" "}
                      <span className="text-fuchsia-400">247</span>
                    </div>
                  </div>
                </div>

                {/* Terminal Footer */}
                <div className="px-6 py-4 bg-zinc-900/50 border-t-2 border-cyan-500/30 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-400">
                    READY_
                  </span>
                  <div className="flex gap-2">
                    <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
                    <div
                      className="w-1 h-1 rounded-full bg-fuchsia-500 animate-pulse"
                      style={{ animationDelay: "0.3s" }}
                    />
                    <div
                      className="w-1 h-1 rounded-full bg-purple-500 animate-pulse"
                      style={{ animationDelay: "0.6s" }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Notification */}
              <div
                className="absolute -left-4 top-20 bg-black/95 border-2 border-green-500/70 p-4 w-48 shadow-[0_0_30px_rgba(0,255,0,0.4)] backdrop-blur-xl animate-[slideInLeft_0.8s_ease-out] opacity-0"
                style={{
                  animationDelay: "1.5s",
                  animationFillMode: "forwards",
                }}
              >
                <div
                  className="flex items-center gap-3 mb-2 animate-[bounce_2s_ease-in-out_infinite]"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,0,0.6)]">
                    ✓
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] text-green-400 font-mono uppercase">
                      Success
                    </div>
                    <div className="text-xs font-bold text-white">
                      Connected
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
