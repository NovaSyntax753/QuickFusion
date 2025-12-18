interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group relative bg-white p-8 rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

      {/* Card Content */}
      <div className="relative z-10 bg-white rounded-2xl p-8 border-2 border-gray-100 group-hover:border-green-200 transition-all duration-500">
        {/* Icon Container with 3D Effect */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
          <div className="relative w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center text-green-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

        {/* Learn More Link */}
        <div className="flex items-center gap-2 text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
          <span className="text-sm">Learn more</span>
          <svg
            className="w-4 h-4"
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
        </div>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}
