import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [logoSrc, setLogoSrc] = useState('/lo_ko_logo.jpg');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoError = () => {
    setLogoSrc(''); // Hide logo if it fails to load
  };

  const navigateTo = (url: string) => {
    navigate(url === '' ? '/' : `/${url}`);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Determine current page from location if not explicitly passed
  const getCurrentPage = () => {
    if (currentPage !== 'home') return currentPage;
    const path = location.pathname;
    if (path.includes('for-business')) return 'for-business';
    if (path.includes('our-network')) return 'our-network';
    if (path.includes('contact')) return 'contact';
    return 'home';
  };

  const activePage = getCurrentPage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <button onClick={() => navigateTo('')} className="focus:outline-none">
            {logoSrc && (
              <img 
                className="h-8" 
                src={logoSrc} 
                alt="Loko logo" 
                onError={handleLogoError}
              />
            )}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => navigateTo('')}
              className={`${
                activePage === 'home' 
                  ? 'text-loko-green font-bold' 
                  : 'text-loko-muted font-medium'
              } hover:text-loko-green`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('for-business')}
              className={`${
                activePage === 'for-business' 
                  ? 'text-loko-green font-bold' 
                  : 'text-loko-muted font-medium'
              } hover:text-loko-green`}
            >
              For Business
            </button>
            <button
              onClick={() => navigateTo('our-network')}
              className={`${
                activePage === 'our-network' 
                  ? 'text-loko-green font-bold' 
                  : 'text-loko-muted font-medium'
              } hover:text-loko-green`}
            >
              Our Network
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`${
                activePage === 'contact' 
                  ? 'bg-loko-green text-white px-4 py-2 rounded-lg font-bold' 
                  : 'bg-loko-green text-white px-4 py-2 rounded-lg font-semibold'
              } hover:bg-opacity-90`}
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Burger Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // Close Icon (X)
              <svg className="w-6 h-6 text-loko-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Burger Icon
              <svg className="w-6 h-6 text-loko-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-black/5 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => navigateTo('')}
                className={`${
                  activePage === 'home' 
                    ? 'text-loko-green font-bold' 
                    : 'text-loko-muted font-medium'
                } hover:text-loko-green text-left`}
              >
                Home
              </button>
              <button
                onClick={() => navigateTo('for-business')}
                className={`${
                  activePage === 'for-business' 
                    ? 'text-loko-green font-bold' 
                    : 'text-loko-muted font-medium'
                } hover:text-loko-green text-left`}
              >
                For Business
              </button>
              <button
                onClick={() => navigateTo('our-network')}
                className={`${
                  activePage === 'our-network' 
                    ? 'text-loko-green font-bold' 
                    : 'text-loko-muted font-medium'
                } hover:text-loko-green text-left`}
              >
                Our Network
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className={`${
                  activePage === 'contact' 
                    ? 'bg-loko-green text-white px-4 py-2 rounded-lg font-bold' 
                    : 'bg-loko-green text-white px-4 py-2 rounded-lg font-semibold'
                } hover:bg-opacity-90`}
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
