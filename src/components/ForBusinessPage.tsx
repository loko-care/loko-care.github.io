import React, { useEffect } from 'react';
import Header from './Header';

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
    <div className="font-inter bg-white text-loko-ink leading-relaxed">
      <Header currentPage="for-business" />

      <main>
        {/* Hero */}
        <section className="pt-24 pb-20 bg-gradient-to-br from-loko-beige to-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-loko-green leading-tight mb-6">
                  Healthcare Benefits That Create Social Impact
                </h1>
                <p className="text-xl text-loko-muted mb-8 leading-relaxed">
                  Partner with Loko to provide comprehensive healthcare for your workforce while directly supporting employment opportunities for Indonesia's underserved communities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#solutions" className="bg-loko-green text-white px-8 py-4 rounded-lg font-semibold text-center hover:-translate-y-0.5 hover:shadow-xl transition-all">
                    Learn More
                  </a>
                  <a href="#contact" className="border-2 border-loko-green text-loko-green px-8 py-4 rounded-lg font-semibold text-center hover:bg-loko-green hover:text-white transition-all">
                    Get in Touch
                  </a>
                </div>
              </div>
              <div className="relative">
                <img src="/photos/pemulung2.jpg" alt="Community health workers providing care" className="rounded-2xl shadow-2xl" />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-loko-green">100%</div>
                  <div className="text-sm text-loko-muted">Community Impact</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-loko-green mb-6">Why Choose Loko for Your Business</h2>
              <p className="text-xl text-loko-muted max-w-3xl mx-auto">
                We deliver exceptional healthcare while creating meaningful employment for people from underserved communities—turning your employee benefits into a force for social good.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-loko-beige">
                <div className="w-16 h-16 bg-loko-green/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-loko-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-loko-green mb-4">Social Impact Employment</h3>
                <p className="text-loko-muted leading-relaxed">
                  Every healthcare service creates jobs for Community Health Workers from marginalized communities, including landfill workers and Indigenous groups.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-loko-beige">
                <div className="w-16 h-16 bg-loko-green/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-loko-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-loko-green mb-4">Comprehensive Coverage</h3>
                <p className="text-loko-muted leading-relaxed">
                  Full healthcare services including teleconsultations, prescription delivery, and culturally-appropriate care pathways for your diverse workforce.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-loko-beige">
                <div className="w-16 h-16 bg-loko-green/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-loko-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-loko-green mb-4">Measurable CSR Impact</h3>
                <p className="text-loko-muted leading-relaxed">
                  Track your social impact with detailed reporting on community employment, health outcomes, and sustainable development goals achieved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="py-20 bg-loko-beige">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-loko-green mb-6">Healthcare Solutions for Every Business</h2>
              <p className="text-xl text-loko-muted">Flexible packages designed to meet your workforce needs while maximizing social impact.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-loko-green mb-6">Employee Health Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-loko-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-loko-green">24/7 Teleconsultations</h4>
                      <p className="text-loko-muted">Round-the-clock access to qualified healthcare professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-loko-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-loko-green">Prescription & Delivery</h4>
                      <p className="text-loko-muted">Medication delivered directly to employees' homes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-loko-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-loko-green">Community Health Workers</h4>
                      <p className="text-loko-muted">Personal health guides from local communities</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src="/photos/pemulung3.jpg" alt="Healthcare delivery to employees" className="rounded-2xl shadow-xl" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img src="/photos/pemulung1.jpg" alt="Community impact measurement" className="rounded-2xl shadow-xl" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-loko-green mb-6">Social Impact Partnership</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-loko-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-loko-green">Direct Employment Creation</h4>
                      <p className="text-loko-muted">Each service creates income for underserved community members</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-loko-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-loko-green">Impact Reporting</h4>
                      <p className="text-loko-muted">Quarterly reports on social and health outcomes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-loko-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-loko-green">Brand Partnership</h4>
                      <p className="text-loko-muted">Co-marketing opportunities highlighting your social impact</p>
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
              <h2 className="text-4xl font-bold text-loko-green mb-6">Let's Start the Conversation</h2>
              <p className="text-xl text-loko-muted">Ready to provide healthcare that creates social impact? We'd love to discuss how Loko can support your business goals.</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold text-loko-green mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-loko-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <div>
                      <div className="font-semibold text-loko-green">Email</div>
                      <a href="mailto:sdemizike@gmail.com" className="text-loko-muted hover:text-loko-green">sdemizike@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-loko-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <div>
                      <div className="font-semibold text-loko-green">Location</div>
                      <div className="text-loko-muted">South Jakarta, Indonesia</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-loko-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <div>
                      <div className="font-semibold text-loko-green">LinkedIn</div>
                      <a href="https://www.linkedin.com/company/lo-ko/" target="_blank" className="text-loko-muted hover:text-loko-green">Connect with us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-loko-ink text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <img className="h-8 brightness-0 invert mb-3" src="/lo_ko_logo.jpg" alt="Loko logo" />
              <p className="text-white/70 mb-4">Healthcare that reaches everyone</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2">
                <a href="/" className="block text-white/70 hover:text-white transition-colors">Home</a>
                <a href="/for-business" className="block text-white/70 hover:text-white transition-colors">For Business</a>
                <a href="/our-network" className="block text-white/70 hover:text-white transition-colors">Our Network</a>
                <a href="/contact" className="block text-white/70 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline">
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

export default ForBusinessPage;
