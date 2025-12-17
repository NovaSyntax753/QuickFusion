import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 md:py-32 mt-20 overflow-hidden">
      {/* Background Image Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      )}

      {/* Pattern Overlay */}
      {!backgroundImage && (
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in animate-delay-200">
          {subtitle}
        </p>

        {(ctaText || secondaryCtaText) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animate-delay-400">
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 hover:scale-105 transition-all shadow-lg"
              >
                {ctaText}
              </Link>
            )}
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 hover:scale-105 transition-all"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
