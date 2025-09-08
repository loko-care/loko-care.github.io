import React from 'react';

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
