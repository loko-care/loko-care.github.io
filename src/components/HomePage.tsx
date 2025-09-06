import React, { useState } from 'react';
import Header from './Header';

const HomePage: React.FC = () => {
  const [logoSrc, setLogoSrc] = useState('/lo_ko_logo.jpg');

  const onLogoError = () => {
    setLogoSrc(''); // Hide logo if it fails to load
  };

  return (
    <div className="font-inter bg-white text-loko-ink leading-relaxed">
      <Header currentPage="home" />

      <main>
        {/* Hero */}
        <section className="relative h-screen min-h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/photos/pemulung1.jpg" 
              alt="Community health workers delivering care to underserved communities in Indonesia" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 flex items-center">
            <div className="max-w-6xl mx-auto px-6">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl font-bold leading-tight mb-4">Healthcare that reaches everyone</h1>
                <p className="text-xl mb-8 opacity-90">Breaking barriers to bring quality care directly to Indonesia's most underserved communities.</p>
                <a 
                  href="#contact" 
                  className="inline-block bg-loko-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-loko-beige">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="/photos/pemulung2.jpg" 
                    alt="Approachable healthcare with Community Health Workers guiding patients" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-loko-green text-2xl font-semibold mb-3">Approachable</h3>
                  <p className="text-loko-muted">CHWs guide and accompany patients, making healthcare accessible and non-intimidating.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="/photos/pemulung3.jpg" 
                    alt="Appropriate healthcare adapted to local customs and traditions" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-loko-green text-2xl font-semibold mb-3">Appropriate</h3>
                  <p className="text-loko-muted">Care pathways adapted to local customs and community structures.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="/photos/pemulung1.jpg" 
                    alt="Affordable healthcare with automated subsidies for underserved communities" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-loko-green text-2xl font-semibold mb-3">Affordable</h3>
                  <p className="text-loko-muted">Automated subsidies and partnerships make care accessible to all.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-loko-green text-4xl font-bold mb-6">Our Approach</h2>
                <p className="text-loko-muted text-lg leading-relaxed">
                  We integrate clinicians, pharmacies, delivery partners, and Community Health Workers into one seamless care journey. CHWs guide patients through teleconsultations, prescriptions, and follow-ups—making healthcare approachable for communities that traditional systems leave behind.
                </p>
              </div>
              <div>
                <img 
                  src="/photos/pemulung2.jpg" 
                  alt="Community health worker assisting patient with healthcare access" 
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-20 bg-loko-beige">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-loko-green text-4xl font-bold text-center mb-12">Our Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-loko-green text-2xl font-semibold mb-3">Sirsak</h3>
                <p className="text-loko-muted">Startup partner providing health benefits for landfill workers in Cilegon.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-loko-green text-2xl font-semibold mb-3">KKI Warsi</h3>
                <p className="text-loko-muted">NGO partner helping us reach Indigenous communities in Sumatra through their community service programs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Role in the Care Journey */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-loko-green mb-6">Our Role in the Care Journey</h2>
              <p className="text-xl text-loko-muted max-w-3xl mx-auto">
                We bridge the gap between patients and quality healthcare through our integrated platform and dedicated Community Health Workers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Image */}
              <div>
                <img 
                  src="/photos/pemulung2.jpg" 
                  alt="Community Health Worker guiding patient through telehealth consultation" 
                  className="rounded-2xl shadow-xl"
                />
              </div>

              {/* Right side - Journey Steps */}
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-loko-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-loko-green mb-2">Connect & Guide</h3>
                      <p className="text-loko-muted leading-relaxed">
                        Community Health Workers reach patients at their doors, providing guidance and support throughout the entire healthcare journey.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-loko-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-loko-green mb-2">Coordinate Care</h3>
                      <p className="text-loko-muted leading-relaxed">
                        Our telehealth platform seamlessly integrates clinicians, pharmacies, and delivery partners for comprehensive care coordination.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-loko-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-loko-green mb-2">Culturally Adapt</h3>
                      <p className="text-loko-muted leading-relaxed">
                        Care pathways are structured with instructions, reminders, and tasks that CHWs adapt to local customs and community needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-loko-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-loko-green mb-2">Ensure Accessibility</h3>
                      <p className="text-loko-muted leading-relaxed">
                        Automated subsidies and partnerships make quality healthcare affordable and accessible to underserved communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-loko-green text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-loko-muted">Ready to learn more about our healthcare solutions? We'd love to hear from you.</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <div>
                  <p className="text-loko-muted leading-relaxed mb-6">
                    <span className="text-loko-green font-semibold">Email:</span><br/>
                    <a href="mailto:sdemizike@gmail.com" className="text-loko-green font-semibold hover:underline">sdemizike@gmail.com</a>
                  </p>
                  
                  <p className="text-loko-muted leading-relaxed mb-6">
                    <span className="text-loko-green font-semibold">Primary Contact:</span><br/>
                    Sainsna Demizike<br/>
                    Founder and CEO
                  </p>
                  
                  <p className="text-loko-muted leading-relaxed mb-6">
                    <span className="text-loko-green font-semibold">Location:</span><br/>
                    South Jakarta, Indonesia
                  </p>
                </div>
                
                <div>
                  <p className="text-loko-muted leading-relaxed mb-6">
                    <span className="text-loko-green font-semibold">Focus Areas:</span><br/>
                    Health, Mental Health, Economic Empowerment
                  </p>

                  <p className="text-loko-muted leading-relaxed">
                    <span className="text-loko-green font-semibold">Technology:</span><br/>
                    Open Source, Mobile App, Web App, SMS
                  </p>
                </div>
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
              {logoSrc && (
                <img 
                  className="h-8 brightness-0 invert mb-3" 
                  src={logoSrc} 
                  alt="Loko logo" 
                  onError={onLogoError}
                />
              )}
              <p className="text-white/70 mb-4">Healthcare that reaches everyone</p>
              <div>
                <a 
                  href="https://www.linkedin.com/company/lo-ko/" 
                  target="_blank" 
                  rel="noopener" 
                  aria-label="Follow us on LinkedIn"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <p className="text-white/70 mb-2">
                <a href="mailto:sdemizike@gmail.com" className="text-white hover:underline">sdemizike@gmail.com</a>
              </p>
              <p className="text-white/70">South Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-5 text-center">
            <p className="text-white/50">© {new Date().getFullYear()} Loko</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
