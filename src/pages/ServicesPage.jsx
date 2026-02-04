import React from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '@/layouts/MainLayout';
import ServiceCard from '@/components/ServiceCard';
import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { seoConfig } from '@/data/seoConfig';
import { Link } from 'react-router-dom';
import { Code, Globe, Smartphone, Cloud, TestTube, Palette, Headphones } from 'lucide-react';

const ServicesPage = () => {
  useSEO(seoConfig.services);

  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs. From enterprise applications to scalable platforms, we build software that drives efficiency.',
      path: '/services/software-development'
    },
    {
      icon: Globe,
      title: 'Web Application Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies. We create fast, secure, and user-friendly web solutions.',
      path: '/services/web-application'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. Engaging mobile experiences that connect with your users.',
      path: '/services/mobile-app'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Services',
      description: 'Comprehensive cloud solutions and DevOps practices. Leverage cloud infrastructure for scalability, reliability, and cost optimization.',
      path: '/services/cloud-devops'
    },
    {
      icon: TestTube,
      title: 'QA & Software Testing',
      description: 'Rigorous quality assurance and testing services. We ensure your software is reliable, secure, and performs flawlessly.',
      path: '/services/qa-testing'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user experiences that delight users. Our designers create interfaces that are visually stunning and highly functional.',
      path: '/services/ui-ux-design'
    },
    {
      icon: Headphones,
      title: 'IT Consulting & Support',
      description: 'Expert IT consulting and ongoing support services. Strategic guidance and technical expertise to help your business succeed.',
      path: '/services/it-consulting'
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>{seoConfig.services.title}</title>
        <meta name="description" content={seoConfig.services.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 bg-charcoal">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-10 text-cream">
              Our Expertise
            </h1>
            <div className="w-16 h-px bg-gold mx-auto mb-10"></div>
            <p className="text-xl md:text-2xl text-cream/80 font-body leading-relaxed font-light">
              Comprehensive IT solutions designed to transform your business and drive digital success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-charcoal p-20 rounded-none text-cream shadow-md border-t-4 border-gold"
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-10">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cream/80 mb-12 font-body font-light">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gold text-charcoal px-12 py-4 rounded-none font-display font-semibold hover:bg-cream transition-all duration-300 uppercase tracking-widest border border-gold"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicesPage;