import React from 'react';
import Header from './Header';

const OurNetworkPage: React.FC = () => {
  return (
    <div className="font-inter text-loko-ink leading-relaxed min-h-screen flex flex-col">
      <Header currentPage="our-network" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-loko-beige to-loko-beige/50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-loko-green leading-tight mb-6">
              People on the Value Chain
            </h1>
            <p className="text-xl text-loko-muted mb-8 leading-relaxed max-w-3xl mx-auto">
              We integrate Community Health Workers, clinicians, pharmacies, and delivery partners into one seamless journey
            </p>
          </div>
        </section>

        {/* Community Health Workers Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="/photos/photo1.jpg" 
                  alt="Community Health Worker supporting patient in their community" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-loko-green mb-6">Community Health Workers</h2>
                <p className="text-xl text-loko-muted leading-relaxed mb-8">
                  Our Community Health Workers (CHWs) are the backbone of our network. They come from the communities they serve, understanding local customs, languages, and challenges firsthand.
                </p>
                
              </div>
            </div>

            {/* Clinicians */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-bold text-loko-green mb-6">Clinicians</h2>
                <p className="text-xl text-loko-muted leading-relaxed mb-8">
                  Our network includes licensed healthcare professionals who provide remote consultations, diagnoses, and treatment plans through our telehealth platform.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/photos/photo3.jpg" 
                  alt="Healthcare professional providing remote consultation" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>

            {/* Pharmacy Partners */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <img 
                  src="/photos/photo4.jpg" 
                  alt="Trusted pharmacy partners ensuring medication availability and quality" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-loko-green mb-6">Pharmacy Partners</h2>
                <p className="text-xl text-loko-muted leading-relaxed mb-8">
                  Our trusted pharmacy partners ensure medication availability and quality, working closely with our network to provide safe, effective treatments for our patients.
                </p>
              </div>
            </div>

            {/* Delivery Partners */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-bold text-loko-green mb-6">Delivery Partners</h2>
                <p className="text-xl text-loko-muted leading-relaxed mb-8">
                  Our reliable delivery partners ensure that prescribed medications reach patients safely, affordably, and on time, completing the care journey to their doorstep.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/photos/photo5.jpg" 
                  alt="Delivery partners ensuring medications reach patients safely and on time" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Network CTA */}
        <section className="py-20 bg-loko-green text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/photos/photo6.jpg" 
                  alt="Join our network of healthcare professionals" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Join Our Network</h2>
                <p className="text-xl mb-8 opacity-90">
                  Are you a healthcare professional, pharmacy, or delivery service interested in bringing quality care to underserved communities? We'd love to partner with you.
                </p>
                <a href="/contact" className="bg-white text-loko-green px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all inline-block">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-loko-ink text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div>
              <img className="h-8 brightness-0 invert mb-3" src="/lo_ko_logo.jpg" alt="Loko logo" />
              <p className="text-white/70 mb-4">Healthcare that reaches everyone</p>
            </div>
            <div className="text-right">
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <p className="text-white/70 mb-2">
                <a href="mailto:sdemizike@gmail.com" className="hover:text-white transition-colors">sdemizike@gmail.com</a>
              </p>
              <p className="text-white/70 mb-4">South Jakarta, Indonesia</p>
              <a 
                href="https://www.linkedin.com/company/lo-ko/" 
                target="_blank" 
                rel="noopener" 
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline mr-2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Follow us on LinkedIn
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-5 text-center">
            <p className="text-white/50">© 2024 Loko. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OurNetworkPage;
