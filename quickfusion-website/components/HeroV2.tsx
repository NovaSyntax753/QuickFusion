"use client";
import Link from "next/link";
import Image from "next/image";

interface HeroV7Props {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

export default function HeroV7({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}: HeroV7Props) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mt-16 bg-[#0a0a0a]">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-pink-500/30 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[100px]">
          {/* Main Title Card */}
          <div className="col-span-12 md:col-span-8 row-span-3 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 flex flex-col justify-center hover:bg-white/10 transition-all duration-500 group">
            <span className="text-sm font-mono text-purple-400 mb-4 tracking-wider">
              // QUICKFUSION.INNOVATIONS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              {title.split(" ").slice(0, 2).join(" ")}
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
                {title.split(" ").slice(2).join(" ")}
              </span>
            </h1>
          </div>

          {/* Stats Card 1 */}
          <div className="col-span-6 md:col-span-4 row-span-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl border border-white/10 p-6 flex flex-col justify-center items-center hover:scale-105 transition-all duration-500">
            <span className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              500+
            </span>
            <span className="text-white/60 text-sm mt-2 font-medium">
              Projects Delivered
            </span>
          </div>

          {/* CTA Card */}
          <div className="col-span-6 md:col-span-4 row-span-2 bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl p-6 flex flex-col justify-center items-center hover:scale-105 transition-all duration-500 cursor-pointer group">
            {ctaText && ctaLink && (
              <Link href={ctaLink} className="text-center">
                <span className="text-white text-xl font-bold block">
                  {ctaText}
                </span>
                <span className="text-white/80 text-sm mt-1 block group-hover:translate-x-2 transition-transform">
                  → Let&apos;s build together
                </span>
              </Link>
            )}
          </div>

          {/* Subtitle Card */}
          <div className="col-span-12 md:col-span-6 row-span-2 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 flex items-center hover:bg-white/10 transition-all duration-500">
            <p className="text-white/70 text-lg leading-relaxed">{subtitle}</p>
          </div>

          {/* Image Card */}
          <div className="col-span-12 md:col-span-6 row-span-3 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden relative hover:scale-[1.02] transition-all duration-500">
            {backgroundImage && (
              <Image
                src={backgroundImage}
                alt="Hero"
                fill
                className="object-contain p-4"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Stats Card 2 */}
          <div className="col-span-4 md:col-span-2 row-span-1 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
            <span className="text-2xl font-bold text-white">100+</span>
          </div>

          {/* Stats Card 3 */}
          <div className="col-span-4 md:col-span-2 row-span-1 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
            <span className="text-2xl font-bold text-purple-400">50+</span>
          </div>

          {/* Secondary CTA */}
          <div className="col-span-4 md:col-span-2 row-span-1 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="text-white/80 text-sm font-medium hover:text-white"
              >
                {secondaryCtaText} →
              </Link>
            )}
          </div>
        </div>

        {/* Floating Tags */}
        <div className="flex flex-wrap gap-3 mt-8 justify-center">
          {[
            "Web Dev",
            "AI/ML",
            "Marketing",
            "Design",
            "Mobile Apps",
            "Cloud",
          ].map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/60 text-sm hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
