import React from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Zap, Shield, TrendingUp } from 'lucide-react';

const SoftwareDevelopmentPage = () => {
  const process = [
    {
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define project scope, and create a comprehensive development roadmap.'
    },
    {
      title: 'Design & Architecture',
      description: 'Our architects design scalable solutions with optimal technology choices and system architecture.'
    },
    {
      title: 'Development & Testing',
      description: 'Agile development with continuous testing ensures high-quality code and rapid iterations.'
    },
    {
      title: 'Deployment & Support',
      description: 'Seamless deployment with ongoing maintenance and support to ensure optimal performance.'
    }
  ];

  const technologies = [
    'Java', 'Python', 'C#', '.NET', 'Node.js', 'Spring Boot',
    'Django', 'Ruby on Rails', 'Microservices', 'REST APIs',
    'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Accelerated Development',
      description: 'Agile methodologies and modern tools enable faster time-to-market.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in security best practices protect your data and systems.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Architecture designed to grow with your business needs.'
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>Software Development Services - Cloudspire Technologies</title>
        <meta name="description" content="Custom software development services for enterprise applications. Expert developers delivering scalable, secure solutions." />
      </Helmet>

      {/* Hero */}
      <section className="relative py-32 bg-charcoal">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Code className="w-12 h-12 mx-auto mb-8 text-gold" strokeWidth={1} />
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-10 text-cream">Software Development</h1>
            <p className="text-xl text-cream/80 font-body font-light">
              Build powerful, scalable software solutions that drive business transformation and competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-medium text-center text-charcoal mb-20">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group bg-white p-10 border-t-2 border-gold shadow-sm"
              >
                <div className="text-6xl font-display font-bold text-beige/50 absolute top-4 right-4 z-0">
                  0{index + 1}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-display font-bold text-charcoal mb-4">{step.title}</h3>
                  <p className="text-charcoal/70 font-body leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-display font-medium text-center text-charcoal mb-16">Technologies</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white px-8 py-3 rounded-none text-charcoal font-display font-medium text-sm tracking-wider shadow-sm border border-transparent hover:border-gold transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-medium text-center text-charcoal mb-20">Value Delivered</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-10 bg-white shadow-sm border-l-2 border-gold"
              >
                <div className="mb-6">
                  <benefit.icon className="w-10 h-10 text-charcoal mx-auto" strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-display font-medium text-charcoal mb-4">{benefit.title}</h3>
                <p className="text-charcoal/70 font-body leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-10">Ready to Start Your Project?</h2>
          <p className="text-xl text-cream/70 mb-12 max-w-2xl mx-auto font-body font-light">
            Let's build something amazing together.
          </p>
          <Link to="/contact" className="inline-block bg-gold text-charcoal px-12 py-4 rounded-none font-display font-semibold hover:bg-cream transition-colors duration-300 uppercase tracking-widest border border-gold">
            Contact Us
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default SoftwareDevelopmentPage;