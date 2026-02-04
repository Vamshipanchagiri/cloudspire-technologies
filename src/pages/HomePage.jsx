import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { seoConfig } from '@/data/seoConfig';
import { Code, Globe, Smartphone, Cloud, TestTube, Palette, ArrowRight } from 'lucide-react';

const HomePage = () => {
  useSEO(seoConfig.home);

  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs, built with cutting-edge technologies.',
      path: '/services/software-development'
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Modern, responsive web applications that deliver exceptional user experiences.',
      path: '/services/web-application'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      path: '/services/mobile-app'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud solutions and DevOps practices for optimal performance.',
      path: '/services/cloud-devops'
    },
    {
      icon: TestTube,
      title: 'QA Testing',
      description: 'Comprehensive testing services ensuring reliability and quality.',
      path: '/services/qa-testing'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that users love to interact with.',
      path: '/services/ui-ux-design'
    }
  ];

  const testimonials = [
    {
      quote: 'Cloudspire Technologies transformed our legacy systems into a modern, cloud-based platform. Their expertise and professionalism exceeded our expectations.',
      author: 'Rajesh Mehta',
      position: 'CTO',
      company: 'FinTech Solutions Inc.'
    },
    {
      quote: 'The mobile app they developed for us has been a game-changer. User engagement increased by 200% within the first three months.',
      author: 'Priya Sharma',
      position: 'Product Manager',
      company: 'RetailConnect'
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>{seoConfig.home.title}</title>
        <meta name="description" content={seoConfig.home.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-charcoal overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#252525] to-black opacity-90" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-10 leading-tight text-cream tracking-tight">
              Crafting Digital <span className="text-gold italic font-light">Excellence</span>
            </h1>
            <p className="text-lg md:text-2xl text-cream/80 font-body mb-16 leading-relaxed font-light max-w-3xl mx-auto">
              We empower enterprises with bespoke technology solutions that drive innovation, efficiency, and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/services"
                className="inline-block bg-gold text-charcoal px-10 py-4 rounded-none font-display font-semibold hover:bg-cream transition-all duration-500 text-sm uppercase tracking-widest border border-gold"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-transparent border border-cream text-cream px-10 py-4 rounded-none font-display font-semibold hover:bg-cream hover:text-charcoal transition-all duration-500 text-sm uppercase tracking-widest"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-gold font-display font-bold uppercase tracking-widest text-xs block mb-6">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-8">
              Comprehensive Solutions
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-charcoal/70 font-body max-w-3xl mx-auto leading-relaxed font-light">
              Tailored strategies designed to transform your business landscape with precision and elegance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Link
              to="/services"
              className="inline-flex items-center text-charcoal font-display font-semibold text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300 border-b border-charcoal/20 hover:border-gold pb-2"
            >
              View All Services <ArrowRight className="w-4 h-4 ml-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-gold font-display font-bold uppercase tracking-widest text-xs block mb-6">Client Success</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-8">
              Voices of Trust
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display font-medium mb-10 leading-tight">
              Ready to Redefine Your Future?
            </h2>
            <p className="text-xl text-cream/70 font-body mb-12 leading-relaxed font-light">
              Let's collaborate to build technology that propels your business forward.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gold text-charcoal px-12 py-5 rounded-none font-display font-semibold hover:bg-cream transition-all duration-500 text-sm uppercase tracking-widest border border-gold"
            >
              Start Your Project Today
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;