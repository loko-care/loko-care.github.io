import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const ForBusinessPage: React.FC = () => {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute('href')!);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="font-inter text-loko-ink leading-relaxed min-h-screen flex flex-col">
      <Header currentPage="for-business" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px]">
          <div className="absolute inset-0">
            <img 
              src="/photos/photo5.jpg" 
              alt="Healthcare solutions for businesses and labor groups" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 flex items-center justify-center pt-32">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-white text-center">
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Looking for a care provider for underserved labor groups?</h1>
                <p className="text-lg mb-8 opacity-90">Give your workers care at their door.</p>
                <a 
                  href="/contact" 
                  className="inline-block bg-loko-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ForBusinessPage;
