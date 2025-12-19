"use client";
import Link from "next/link";
import Image from "next/image";

interface HeroV11Props {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

export default function HeroV11({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}: HeroV11Props) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mt-16 bg-[#0a0a0a]">
      {/* Dark Brutalist Grid Lines */}
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-white/5"></div>
        <div className="absolute left-[30%] top-0 bottom-0 w-px bg-white/5"></div>
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/5"></div>
        <div className="absolute left-[70%] top-0 bottom-0 w-px bg-white/5"></div>
        <div className="absolute left-[90%] top-0 bottom-0 w-px bg-white/5"></div>
        <div className="absolute top-[25%] left-0 right-0 h-px bg-white/5"></div>
        <div className="absolute top-[50%] left-0 right-0 h-px bg-white/5"></div>
        <div className="absolute top-[75%] left-0 right-0 h-px bg-white/5"></div>
      </div>

      {/* Gradient mesh orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur-[180px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-r from-lime-500 to-emerald-500 rounded-full blur-[150px] opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-[120px] opacity-10"></div>
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-24 h-24 border-4 border-lime-400/30 rotate-12 animate-float"></div>
        <div
          className="absolute bottom-32 left-20 w-16 h-16 bg-violet-500/20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-lime-400 animate-ping"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-fuchsia-400 animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Bold Typography */}
          <div className="space-y-8">
            {/* Tag combining both styles */}
            <div className="inline-flex items-center gap-4">
              <span className="bg-lime-400 text-black px-4 py-2 font-mono text-sm uppercase tracking-widest font-black">
                QuickFusion
              </span>
              <span className="text-white/40 font-mono text-sm">// 2024</span>
            </div>

            {/* Brutalist Title with Gradient accents */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
              <span className="block text-white hover:text-lime-400 transition-all cursor-default">
                {title.split(" ")[0]}
              </span>
              <span
                className="block text-transparent hover:text-white transition-all cursor-default"
                style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}
              >
                {title.split(" ")[1]}
              </span>
              <span className="block bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-500 text-transparent bg-clip-text">
                {title.split(" ").slice(2, 4).join(" ")}
              </span>
              <span className="block text-lime-400 mt-2">
                {title.split(" ").slice(4).join(" ")}
              </span>
            </h1>

            {/* Subtitle with brutalist border */}
            <p className="font-mono text-lg text-white/60 max-w-lg border-l-4 border-lime-400 pl-4 leading-relaxed">
              {subtitle}
            </p>

            {/* Hybrid Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {ctaText && ctaLink && (
                <Link href={ctaLink} className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:opacity-0 transition-opacity"></div>
                  <div className="absolute inset-0 bg-lime-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10 block px-8 py-4 font-black uppercase tracking-wider text-white group-hover:text-black transition-colors border-4 border-transparent group-hover:border-lime-400">
                    {ctaText}
                  </span>
                </Link>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="px-8 py-4 font-black uppercase tracking-wider text-white/80 border-4 border-white/20 hover:border-lime-400 hover:text-lime-400 transition-all"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>

            {/* Hybrid Stats - Brutalist boxes with gradient accents */}
            <div className="flex gap-0 pt-8">
              <div className="border-4 border-white/20 p-5 bg-white/5 backdrop-blur-sm hover:bg-lime-400 hover:border-lime-400 hover:text-black transition-all group cursor-default">
                <div className="text-4xl font-black text-white group-hover:text-black">
                  500+
                </div>
                <div className="font-mono text-xs uppercase text-white/50 group-hover:text-black/70">
                  Projects
                </div>
              </div>
              <div className="border-4 border-white/20 border-l-0 p-5 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm hover:bg-violet-500 hover:border-violet-500 transition-all cursor-default group">
                <div className="text-4xl font-black text-white">100+</div>
                <div className="font-mono text-xs uppercase text-white/50 group-hover:text-white/80">
                  Clients
                </div>
              </div>
              <div className="border-4 border-white/20 border-l-0 p-5 bg-white/5 backdrop-blur-sm hover:bg-lime-400 hover:border-lime-400 hover:text-black transition-all group cursor-default">
                <div className="text-4xl font-black text-white group-hover:text-black">
                  50+
                </div>
                <div className="font-mono text-xs uppercase text-white/50 group-hover:text-black/70">
                  Team
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image with brutalist + aesthetic frame */}
          <div className="relative">
            {/* Offset shadow with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 translate-x-4 translate-y-4 opacity-50"></div>

            {/* Main frame */}
            <div className="relative bg-[#0a0a0a] border-4 border-white/20 p-4 h-[500px] backdrop-blur-xl">
              {backgroundImage && (
                <div className="relative w-full h-full">
                  <Image
                    src={backgroundImage}
                    alt="Hero"
                    fill
                    className="object-contain drop-shadow-[0_0_30px_rgba(163,230,53,0.3)]"
                    priority
                  />
                </div>
              )}

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-lime-400"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-violet-500"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-fuchsia-500"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-lime-400"></div>

              {/* Label */}
              <div className="absolute top-0 right-0 bg-lime-400 px-3 py-1 font-mono text-xs uppercase text-black font-bold">
                Fig. 01
              </div>
            </div>

            {/* Floating annotation */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-4 font-mono text-sm max-w-[220px] border-l-4 border-lime-400">
              <span className="text-lime-400 font-bold">*</span> Where
              creativity meets innovation.
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-lime-400 text-black font-black text-sm uppercase animate-bounce">
              New
            </div>
          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="mt-20 border-t-2 border-b-2 border-white/10 py-4 overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center">
                <span className="font-black text-xl uppercase text-white/80">
                  Web Development
                </span>
                <span className="text-lime-400 text-xl">✦</span>
                <span className="font-black text-xl uppercase text-white/80">
                  UI/UX Design
                </span>
                <span className="text-violet-400 text-xl">✦</span>
                <span className="font-black text-xl uppercase text-white/80">
                  AI Solutions
                </span>
                <span className="text-fuchsia-400 text-xl">✦</span>
                <span className="font-black text-xl uppercase text-white/80">
                  Marketing
                </span>
                <span className="text-orange-400 text-xl">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
