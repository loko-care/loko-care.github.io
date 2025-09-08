import React, { useState } from 'react';
import { Home, Users, DollarSign, HeartPlus, Bike } from 'lucide-react';
import Header from './Header';

const HomePage: React.FC = () => {
  const [logoSrc, setLogoSrc] = useState('/lo_ko_logo.jpg');

  const onLogoError = () => {
    setLogoSrc(''); // Hide logo if it fails to load
  };

  return (
    <div className="font-inter bg-white text-loko-ink leading-relaxed min-h-screen flex flex-col">
      <Header currentPage="home" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px]">
          <div className="absolute inset-0">
            <img 
              src="/photos/photo2.jpg" 
              alt="Community health workers delivering care to underserved communities in Indonesia" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 flex items-center justify-center pt-32">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-white text-center">
                <h1 className="text-6xl font-bold leading-tight mb-6">Healthcare that reaches everyone</h1>
                <p className="text-lg mb-8 opacity-90">We break barriers to bring quality care to Indonesia's underserved groups at their doors.</p>
                <a 
                  href="/contact" 
                  className="inline-block bg-loko-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Human Insight & Technology */}
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-loko-green mb-6">Our approach</h2>
            <p className="text-xl text-loko-muted mb-16 max-w-4xl mx-auto">
              We leverage human insight and technology to improve health outcomes through being: 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-20 h-20 bg-loko-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="w-10 h-10 text-loko-green" />
                </div>
                <h3 className="text-2xl font-bold text-loko-green mb-4">Approachable</h3>
                <p className="text-loko-muted">Care is delivered right to the doorstep.</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-20 h-20 bg-loko-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-loko-green" />
                </div>
                <h3 className="text-2xl font-bold text-loko-green mb-4">Appropriate</h3>
                <p className="text-loko-muted">Care is tailored to local customs, cultures, and contexts.</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-20 h-20 bg-loko-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-10 h-10 text-loko-green" />
                </div>
                <h3 className="text-2xl font-bold text-loko-green mb-4">Affordable</h3>
                <p className="text-loko-muted">Care is made accessible through subsidies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Role in the Care Journey - Ecosystem */}
        <section className="py-16 bg-loko-beige">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Circular Ecosystem Diagram - Left Side */}
              <div className="relative max-w-lg mx-auto lg:mx-0 lg:col-span-2">
              <svg viewBox="0 0 400 400" className="w-full h-auto">
                {/* Circular arrows with different colors - rotated counterclockwise */}
                  {/* Top to right arc */}
                  <path
                    d="M 200 100 A 100 100 0 0 1 300 200"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="35"
                    opacity="0.8"
                  />
                  
                  {/* Right to bottom arc */}
                  <path
                    d="M 300 200 A 100 100 0 0 1 200 300"
                    fill="none"
                    stroke="#15803d"
                    strokeWidth="35"
                    opacity="0.8"
                  />
                  
                  {/* Bottom to left arc */}
                  <path
                    d="M 200 300 A 100 100 0 0 1 100 200"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="35"
                    opacity="0.8"
                  />
                  
                  {/* Left to top arc */}
                  <path
                    d="M 100 200 A 100 100 0 0 1 200 100"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="35"
                    opacity="0.8"
                  />
                  
                  {/* Center circle - Loko Ecosystem */}
                  <circle cx="200" cy="200" r="45" fill="#15803d" />
                  
                  {/* Center text */}
                  <text x="200" y="195" textAnchor="middle" className="fill-white font-bold" fontSize="20">LOKO</text>
                  <text x="200" y="210" textAnchor="middle" className="fill-white opacity-90" fontSize="14">Ecosystem</text>
              </svg>
              
              {/* Icons and labels positioned around the circle */}
              <div className="absolute inset-0">
                {/* Patients - Top Left */}
                <div className="absolute top-4 left-12 text-center">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="#f97316" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold" style={{ color: '#f97316' }}>Patients</h3>
                </div>
                
                {/* Community Health Workers - Top Right */}
                <div className="absolute top-4 right-12 text-center">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <HeartPlus className="w-6 h-6" style={{ color: '#dc2626' }} />
                  </div>
                  <h3 className="text-sm font-semibold" style={{ color: '#dc2626' }}>CHWs</h3>
                </div>
                
                {/* Pharmacy - Bottom Right */}
                <div className="absolute bottom-4 right-12 text-center">
                  <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="#15803d" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold" style={{ color: '#15803d' }}>Pharmacy</h3>
                </div>
                
                {/* Delivery - Bottom Left */}
                <div className="absolute bottom-4 left-12 text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Bike className="w-6 h-6" style={{ color: '#22c55e' }} />
                  </div>
                  <h3 className="text-sm font-semibold" style={{ color: '#22c55e' }}>Delivery</h3>
                </div>
              </div>
              </div>
              
              {/* Text Content - Right Side */}
              <div className="text-left lg:col-span-3">
                <h2 className="text-4xl font-bold text-loko-green mb-6">Our role in the care journey</h2>
                <p className="text-xl text-loko-muted">
                  We connect every part of the healthcare journey into one ecosystem — from patients to Community Health Workers (CHWs), pharmacies, and delivery partners — ensuring care that is approachable, appropriate, and affordable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Take Action Now - CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-loko-green mb-6">Take action now</h2>
            <p className="text-xl text-loko-muted mb-8">
              Be a part of the movement to make care accessible for everyone
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-loko-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-loko-ink text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div>
              {logoSrc && (
                <img 
                  className="h-8 brightness-0 invert mb-3" 
                  src={logoSrc} 
                  alt="Loko logo" 
                  onError={onLogoError}
                />
              )}
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

export default HomePage;