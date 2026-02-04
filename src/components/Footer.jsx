import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-cream relative overflow-hidden">
      {/* Subtle warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <span className="text-3xl font-display font-bold text-cream tracking-tight">Cloudspire</span>
            </div>
            <p className="text-beige/80 text-sm leading-relaxed font-body mb-6">
              Elevating enterprise technology through innovation and precision. We craft digital solutions that stand the test of time.
            </p>
            <div className="w-12 h-0.5 bg-gold/50"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3 font-body text-sm">
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="text-beige/80 hover:text-gold transition-colors duration-300">About Us</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="text-beige/80 hover:text-gold transition-colors duration-300">Services</a></li>
              <li><a href="#industries" onClick={(e) => handleSmoothScroll(e, '#industries')} className="text-beige/80 hover:text-gold transition-colors duration-300">Industries</a></li>
              <li><a href="#careers" onClick={(e) => handleSmoothScroll(e, '#careers')} className="text-beige/80 hover:text-gold transition-colors duration-300">Careers</a></li>
              <li><a href="#insights" onClick={(e) => handleSmoothScroll(e, '#insights')} className="text-beige/80 hover:text-gold transition-colors duration-300">Insights</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-gold">Expertise</h3>
            <ul className="space-y-3 font-body text-sm">
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="text-beige/80 hover:text-gold transition-colors duration-300">Software Development</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="text-beige/80 hover:text-gold transition-colors duration-300">Web Applications</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="text-beige/80 hover:text-gold transition-colors duration-300">Cloud & DevOps</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="text-beige/80 hover:text-gold transition-colors duration-300">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-gold">Contact</h3>
            <div className="space-y-4 font-body">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-gold/70 group-hover:text-gold transition-colors duration-300" />
                <p className="text-beige/80 text-sm leading-relaxed">
                  8th Floor, SLN Terminus,<br />
                  Gachibowli, Hyderabad,<br />
                  Telangana 500032, India
                </p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 flex-shrink-0 text-gold/70 group-hover:text-gold transition-colors duration-300" />
                <a href="mailto:info@cloudspiretechnologies.in" className="text-beige/80 hover:text-gold transition-colors duration-300 text-sm">
                  info@cloudspiretechnologies.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-beige/60 text-sm font-body">
              &copy; {currentYear} Cloudspire Technologies. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <span className="text-beige/60 hover:text-gold transition-colors duration-300 text-sm font-body cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-beige/60 hover:text-gold transition-colors duration-300 text-sm font-body cursor-pointer">
                Terms & Conditions
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;