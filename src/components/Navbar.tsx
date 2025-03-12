
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Search, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CustomButton } from './ui/CustomButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', path: '/menu' },
    { name: 'Rewards', path: '/rewards' },
    { name: 'Gift Cards', path: '/gift-cards' },
    { name: 'Find a Store', path: '/find-store' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'py-2 glass'
          : 'py-4 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center transition-opacity duration-300 hover:opacity-80"
            aria-label="Starbucks Home"
          >
            <div className="h-12 w-12 overflow-hidden">
              <svg viewBox="0 0 60 60" className="h-full w-full fill-starbucks-green">
                <path d="M30,0C13.4,0,0,13.4,0,30s13.4,30,30,30s30-13.4,30-30S46.6,0,30,0z M30,4.7c1.3,0,2.5,0.1,3.8,0.2c-0.5,0.7-1.1,1.4-2,1.9c-1.2,0.6-2.4,0.6-3.6,0.7c-3.2,0.2-6.1,1.1-8.8,2.8c-1.6,1-3,2.1-4.2,3.6c-1.7,2.1-2.8,4.5-3.2,7.2c-0.2,1.3-0.3,2.5-0.1,3.8c0.2,1.3,0.7,2.5,1.6,3.4c1.6,1.6,3.6,2.7,5.7,3.7c4.2,2,8.9,2.9,13.4,3.9c0.9,0.2,1.9,0.4,2.8,0.7c1.5,0.4,2.7,1.5,3.5,2.8c1.1,1.7,1.2,4.1-0.4,5.8c-1.2,1.3-2.8,2.1-4.4,2.7c-2.8,1-5.6,1-8.4,0.3c-1.1-0.3-2.2-0.7-3.3-1c-0.9-0.3-1.9-0.3-2.9-0.2c-2,0.2-3.7,1.2-4.8,2.9c0,0,0,0.1-0.1,0.1c-0.5-0.7-1-1.3-1.5-2C11.4,47,7.5,39.4,8.3,30.2C9.2,20.4,14.6,13,23.4,8.4c2-1,4.1-1.9,6.3-2.8c0-0.1,0.1-0.2,0.1-0.3C29.2,5,28.4,4.7,30,4.7z M35.9,44.1c-2.9-0.8-5.7-1.6-8.6-2.3c-1.5-0.4-3-0.8-4.5-1.1c-0.5-0.1-0.7,0-0.8,0.5c-0.3,1.9,0.4,3.5,1.7,4.9c1.3,1.4,3,2.1,4.8,2.3c2.7,0.3,5.2-0.2,7.4-1.9C36.8,45.7,36.8,44.3,35.9,44.1z M34.7,10.3c2.8,0.4,4.3,0.9,6.2,2c0.4,0.2,0.8,0.5,1.2,0.8c0.3,0.2,0.5,0.1,0.8-0.1c1.9-1.7,4.1-2.7,6.5-3.4c0.2-0.1,0.4-0.1,0.7-0.2c0.1,0.2,0.2,0.3,0.3,0.5c-0.5,0.6-0.9,1.3-1.5,1.8c-1.9,1.6-4,2.8-6.3,3.5c-0.5,0.2-0.7,0.4-0.6,0.9c0.1,1.2,0.2,2.5,0,3.7c-0.4,2.9-1.8,5.3-4.3,7c-1.5,1.1-3.3,1.5-5.2,1.5c-1.9,0-3.7-0.5-5.4-1.5c-1.2-0.7-2.3-1.7-3.3-2.8c-3.3-3.8-3.3-8.7-0.1-12.6C26.5,9.6,31.1,9.8,34.7,10.3z"/>
              </svg>
            </div>
            <span className="ml-2 text-lg font-medium">Starbucks</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium relative py-2 transition-all duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-starbucks-green after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-starbucks-green/10 transition-colors duration-300">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Account" className="p-2 rounded-full hover:bg-starbucks-green/10 transition-colors duration-300">
              <User className="h-5 w-5" />
            </button>
            <button aria-label="Cart" className="p-2 rounded-full hover:bg-starbucks-green/10 transition-colors duration-300">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <CustomButton size="sm" className="bg-starbucks-green text-white hover:bg-starbucks-green/90">
              Sign in
            </CustomButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-starbucks-green/10 transition-colors duration-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 top-16 z-20 bg-white/95 backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full p-6">
            <nav className="flex flex-col space-y-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-medium py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col space-y-4">
              <CustomButton className="w-full bg-starbucks-green text-white hover:bg-starbucks-green/90">
                Sign in
              </CustomButton>
              <CustomButton variant="outline" className="w-full border-starbucks-green text-starbucks-green">
                Join now
              </CustomButton>
              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-100">
                <button aria-label="Search" className="p-2 rounded-full hover:bg-starbucks-green/10 transition-colors duration-300">
                  <Search className="h-5 w-5" />
                </button>
                <button aria-label="Account" className="p-2 rounded-full hover:bg-starbucks-green/10 transition-colors duration-300">
                  <User className="h-5 w-5" />
                </button>
                <button aria-label="Cart" className="p-2 rounded-full hover:bg-starbucks-green/10 transition-colors duration-300">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
