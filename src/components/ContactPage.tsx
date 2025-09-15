import React from 'react';
import Header from './Header';
import Footer from './Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="font-inter text-loko-ink leading-relaxed min-h-screen flex flex-col">
      <Header currentPage="contact" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px]">
          <div className="absolute inset-0">
            <img 
              src="/photos/photo4.jpg" 
              alt="Get in touch with Loko healthcare team" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 flex items-center justify-center pt-32">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-white text-center">
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Contact Us</h1>
                <p className="text-lg mb-8 opacity-90">Got an inquiry or two? Drop us a hello and we'll get back to you as soon as we can!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-gradient-to-br from-loko-beige to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            {/* Contact Information */}
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-loko-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-loko-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-loko-green mb-2">Email</h3>
                  <a href="mailto:sdemizike@gmail.com" className="text-loko-muted hover:text-loko-green transition-colors">
                    sdemizike@gmail.com
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-loko-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-loko-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-loko-green mb-2">Location</h3>
                  <p className="text-loko-muted">South Jakarta, Indonesia</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-loko-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-loko-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-loko-green mb-2">LinkedIn</h3>
                  <a href="https://www.linkedin.com/company/lo-ko/" target="_blank" rel="noopener" className="text-loko-muted hover:text-loko-green transition-colors">
                    Follow us on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
