import React from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone } from 'lucide-react';

const MobileAppPage = () => {
  const technologies = [
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase',
    'iOS', 'Android', 'Cross-Platform', 'Native Development'
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>Mobile App Development - Cloudspire Technologies</title>
        <meta name="description" content="Professional mobile app development for iOS and Android. Native and cross-platform solutions." />
      </Helmet>

      <section className="relative py-32 bg-charcoal">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Smartphone className="w-12 h-12 mx-auto mb-8 text-gold" strokeWidth={1} />
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-10 text-cream">Mobile App Development</h1>
            <p className="text-xl text-cream/80 font-body font-light">
              Build engaging mobile experiences for iOS and Android platforms that captivate users.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-display font-medium text-center text-charcoal mb-16">Our Expertise</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-white px-8 py-3 rounded-none text-charcoal font-display font-medium text-sm tracking-wider shadow-sm border border-transparent hover:border-gold transition-all cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-charcoal text-cream">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-10">Let's Build Your Mobile App</h2>
          <Link to="/contact" className="inline-block bg-gold text-charcoal px-12 py-4 rounded-none font-display font-semibold hover:bg-cream transition-colors duration-300 uppercase tracking-widest border border-gold">
            Contact Us
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default MobileAppPage;