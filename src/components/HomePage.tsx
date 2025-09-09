import React from 'react';
import { Home, Users, DollarSign, HeartPlus, Bike } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const HomePage: React.FC = () => {

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
        <section className="py-20 bg-white">
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
        <section className="py-20 bg-loko-beige">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Text Content - First on mobile, Right side on desktop */}
              <div className="text-center lg:text-left lg:col-span-3 lg:order-2">
                <h2 className="text-4xl font-bold text-loko-green mb-6">Our role in the care journey</h2>
                <p className="text-xl text-loko-muted">
                  We connect every part of the healthcare journey into one ecosystem — from patients to Community Health Workers (CHWs), pharmacies, and delivery partners — ensuring care that is approachable, appropriate, and affordable.
                </p>
              </div>
              
              {/* Circular Ecosystem Diagram - Second on mobile, Left side on desktop */}
              <div className="relative max-w-lg mx-auto lg:mx-0 lg:col-span-2 lg:order-1">
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
            </div>
          </div>
        </section>

        {/* Indonesia's Underserved Communities */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-loko-green mb-6">We aim to reach Indonesia's underserved communities</h2>
                <p className="text-xl text-loko-muted leading-relaxed">
                  From landfill workers, street vendors, to Indigenous groups—many remain underserved.
                </p>
              </div>
              
              {/* Indonesian Map */}
              <div className="flex justify-center">
                <img 
                  src="/id.svg" 
                  alt="Map of Indonesia showing underserved communities across the archipelago" 
                  className="w-full max-w-lg h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Take Action Now - CTA */}
        <section className="py-20 bg-loko-beige">
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

      <Footer />
    </div>
  );
};

export default HomePage;