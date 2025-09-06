import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [logoSrc, setLogoSrc] = useState('/lo_ko_logo.jpg');

  const handleLogoError = () => {
    setLogoSrc(''); // Hide logo if it fails to load
  };


  const navigateTo = (url: string) => {
    navigate(url === '' ? '/' : `/${url}`);
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
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => navigateTo('')}
              className={`${
                activePage === 'home' 
                  ? 'text-loko-green font-bold' 
                  : 'text-loko-muted font-medium'
              } hover:text-loko-green transition-colors`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('for-business')}
              className={`${
                activePage === 'for-business' 
                  ? 'text-loko-green font-bold' 
                  : 'text-loko-muted font-medium'
              } hover:text-loko-green transition-colors`}
            >
              For Business
            </button>
            <button
              onClick={() => navigateTo('our-network')}
              className={`${
                activePage === 'our-network' 
                  ? 'text-loko-green font-bold' 
                  : 'text-loko-muted font-medium'
              } hover:text-loko-green transition-colors`}
            >
              Our Network
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`${
                activePage === 'contact' 
                  ? 'bg-loko-green text-white px-4 py-2 rounded-lg font-bold' 
                  : 'bg-loko-green text-white px-4 py-2 rounded-lg font-semibold'
              } hover:bg-opacity-90 transition-all`}
            >
              Contact Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
