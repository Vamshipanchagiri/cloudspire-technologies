import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Careers', href: '#careers' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' }
  ];

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-cream/95 backdrop-blur-md shadow-sm border-t-4 border-gold">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleClick(e, '#hero')}
            className="flex items-center space-x-2 group"
          >
            <span className="text-2xl font-display font-bold text-charcoal tracking-tight group-hover:text-gold transition-colors duration-300">Cloudspire</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`font-medium text-sm tracking-wide transition-colors duration-300 pb-1 border-b-2 ${
                  activeSection === item.href.substring(1)
                    ? 'text-gold border-gold'
                    : 'text-charcoal border-transparent hover:text-gold hover:border-gold'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-gold transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-beige pt-4 bg-cream">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`block py-3 px-4 font-display transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-gold bg-beige/30'
                    : 'text-charcoal hover:bg-beige/30'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;