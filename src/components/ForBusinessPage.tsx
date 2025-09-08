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

      <main className="flex-grow bg-gradient-to-br from-loko-beige to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-loko-green leading-tight mb-6">
              Looking for a care provider for underserved labor groups?
            </h1>
            <p className="text-xl text-loko-muted mb-8 leading-relaxed">
              Give your workers care at their door.
            </p>
            <div className="flex justify-center">
              <a href="/contact" className="bg-loko-green text-white px-8 py-4 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ForBusinessPage;
