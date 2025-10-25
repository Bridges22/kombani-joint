
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Lodge', path: '/lodge' },
    { name: 'Car Hire', path: '/car-hire' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-amber-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-16">
          {/* Logo and Business Name */}
          <Link 
            to="/" 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group transition-all duration-300 hover:opacity-90 py-2"
          >
            <div className="relative w-11 h-11 sm:w-14 sm:h-14 flex-shrink-0">
              <img 
                src="https://static.readdy.ai/image/9d58526d71940fdb81d86d5b08ae0257/c81b2e1bee95082383db4e3e3ef31a1f.png" 
                alt="Kombani Joint Pub & Grill" 
                className="w-full h-full object-cover rounded-full border-2 border-amber-200 transition-transform duration-300 group-hover:scale-105 group-hover:border-amber-100"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="text-base sm:text-lg font-bold text-white leading-tight transition-all duration-300 group-hover:text-amber-200">
                Kombani Joint
              </span>
              <span className="text-sm sm:text-sm text-amber-200 leading-tight transition-all duration-300 group-hover:text-amber-100">
                Pub & Grill
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  isActive(link.path)
                    ? 'bg-amber-700 text-white'
                    : 'text-amber-100 hover:bg-amber-800 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-amber-100 hover:bg-amber-800 cursor-pointer"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer ${
                    isActive(link.path)
                      ? 'bg-amber-700 text-white'
                      : 'text-amber-100 hover:bg-amber-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
