import { Link } from 'react-router-dom';
import { Users, Home, Image, BookOpen, ArrowRight, LucideIcon } from 'lucide-react';

interface ArchiveCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
}

const iconMap: Record<string, LucideIcon> = {
  Users,
  Home,
  Image,
  BookOpen,
};

export default function ArchiveCard({
  title,
  description,
  icon,
  route,
}: ArchiveCardProps) {
  const IconComponent = iconMap[icon] || BookOpen;

  return (
    <Link
      to={route}
      className="card group block p-8 border-2 border-transparent hover:border-primary-200"
    >
      <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
        <IconComponent className="w-8 h-8 text-primary-700" strokeWidth={1.8} />
      </div>
      <h3 className="font-serif text-2xl font-bold text-ink-900 mb-3 group-hover:text-primary-700 transition-colors">
        {title}
      </h3>
      <p className="text-ink-600 leading-relaxed mb-5 line-clamp-3">
        {description}
      </p>
      <div className="flex items-center text-primary-700 font-medium group-hover:text-primary-800">
        <span>查看详情</span>
        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
