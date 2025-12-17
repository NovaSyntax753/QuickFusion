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
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group">
      <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600 group-hover:scale-110 group-hover:bg-green-200 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
