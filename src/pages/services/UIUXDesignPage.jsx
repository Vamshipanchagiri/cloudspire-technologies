import React from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette } from 'lucide-react';

const UIUXDesignPage = () => {
  const technologies = [
    'Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle',
    'Framer', 'User Research', 'Prototyping', 'Design Systems'
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>UI/UX Design Services - Cloudspire Technologies</title>
        <meta name="description" content="Professional UI/UX design services. Create beautiful, intuitive user experiences." />
      </Helmet>

      <section className="relative py-32 bg-charcoal">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Palette className="w-12 h-12 mx-auto mb-8 text-gold" strokeWidth={1} />
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-10 text-cream">UI/UX Design</h1>
            <p className="text-xl text-cream/80 font-body font-light">
              Create delightful user experiences with beautiful, intuitive designs that resonate.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-display font-medium text-center text-charcoal mb-16">Design Tools & Process</h2>
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
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-10">Let's Design Something Amazing</h2>
          <Link to="/contact" className="inline-block bg-gold text-charcoal px-12 py-4 rounded-none font-display font-semibold hover:bg-cream transition-colors duration-300 uppercase tracking-widest border border-gold">
            Get Started
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default UIUXDesignPage;