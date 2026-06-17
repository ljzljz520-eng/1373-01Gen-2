import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; path?: string }[];
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
}: PageHeaderProps) {
  const defaultBreadcrumbs = [
    { label: '首页', path: '/' },
    { label: title },
  ];
  const crumbs = breadcrumbs || defaultBreadcrumbs;

  return (
    <div className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="container relative pt-32 pb-20">
        <nav className="flex items-center text-white/70 text-lg mb-6">
          {crumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-5 h-5 mx-2 text-gold-400/60" />
              )}
              {crumb.path ? (
                <Link
                  to={crumb.path}
                  className="hover:text-gold-300 transition-colors flex items-center gap-2"
                >
                  {index === 0 && <HomeIcon className="w-5 h-5" />}
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
