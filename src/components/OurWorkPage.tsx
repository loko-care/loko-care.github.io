import React from 'react';
import Header from './Header';
import Footer from './Footer';

const OurWorkPage: React.FC = () => {
  return (
    <div className="font-inter text-loko-ink leading-relaxed min-h-screen flex flex-col">
      <Header currentPage="our-work" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px]">
          <div className="absolute inset-0">
            <img 
              src="/photos/photo6.jpg" 
              alt="Loko's work in bringing healthcare to underserved communities" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 flex items-center justify-center pt-32">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-white text-center">
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Every big change starts small</h1>
                <p className="text-lg mb-8 opacity-90">We're at the beginning of our journey and gearing up to launch our first pilot program. Stay tuned!</p>
            </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurWorkPage;
