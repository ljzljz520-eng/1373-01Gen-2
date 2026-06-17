import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Archive } from 'lucide-react';
import { siteInfo } from '@/data/archiveData';

const navLinks = [
  { label: '首页', path: '/' },
  { label: '户籍档案', path: '/household' },
  { label: '房产档案', path: '/property' },
  { label: '老照片', path: '/photos' },
  { label: '地方志', path: '/chronicles' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-800/95 backdrop-blur-sm shadow-lg'
          : 'bg-primary-800'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center group-hover:bg-gold-400 transition-colors">
              <Archive className="w-7 h-7 text-primary-800" strokeWidth={2} />
            </div>
            <div className="text-white">
              <h1 className="font-serif text-xl font-bold tracking-wide">
                {siteInfo.name}
              </h1>
              <p className="text-xs text-gold-300 tracking-widest">
                {siteInfo.subtitle}
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 text-lg font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-gold-400 bg-primary-900/50'
                    : 'text-white/90 hover:text-gold-300 hover:bg-primary-900/30'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden w-12 h-12 flex items-center justify-center text-white hover:bg-primary-900/30 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3.5 text-lg font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-gold-400 bg-primary-900/50'
                    : 'text-white/90 hover:text-gold-300 hover:bg-primary-900/30'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
