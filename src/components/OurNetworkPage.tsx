import React from 'react';
import Header from './Header';
import Footer from './Footer';

const OurNetworkPage: React.FC = () => {
  return (
    <div className="font-inter text-loko-ink leading-relaxed min-h-screen flex flex-col">
      <Header currentPage="our-network" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px]">
          <div className="absolute inset-0">
            <img 
              src="/photos/photo3.jpg" 
              alt="Healthcare network connecting patients with quality care" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 flex items-center justify-center pt-32">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-white text-center">
                <h1 className="text-6xl font-bold leading-tight mb-6">People on the Value Chain</h1>
                <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">We integrate Community Health Workers, clinicians, pharmacies, and delivery partners into one seamless journey</p>
                <a 
                  href="/contact" 
                  className="inline-block bg-loko-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
                >
                  Join Our Network
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Community Health Workers Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
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
                  Health workers who guide and accompany patients every step of the way, bringing care that respects local culture and context so it never feels intrusive or disruptive.
                </p>
              </div>
            </div>

            {/* Clinicians */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-bold text-loko-green mb-6">Clinicians</h2>
                <p className="text-xl text-loko-muted leading-relaxed mb-8">
                  Compassionate doctors who heal through remote care and guidance.
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
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
                  Local pharmacies who ensure safe and reliable medicines.
                </p>
              </div>
            </div>

            {/* Delivery Partners */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-bold text-loko-green mb-6">Delivery Partners</h2>
                <p className="text-xl text-loko-muted leading-relaxed mb-8">
                  Delivery teams who bring medicines straight to the doorstep.
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
        <section className="py-24 bg-loko-green text-white">
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

      <Footer />
    </div>
  );
};

export default OurNetworkPage;
