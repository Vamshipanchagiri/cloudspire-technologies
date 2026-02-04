import React from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { seoConfig } from '@/data/seoConfig';
import { Target, Eye, Heart, Users, TrendingUp, Award, Globe, Shield } from 'lucide-react';

const AboutPage = () => {
  useSEO(seoConfig.about);

  const values = [
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'We prioritize our clients\' success, delivering solutions that exceed expectations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards, ensuring every project is executed with precision.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies to adapt quickly to changing market demands.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Building long-term partnerships through transparency, honesty, and ethical practices.'
    }
  ];

  const stats = [
    { label: 'Years in Business', value: '9+' },
    { label: 'Clients Served', value: '150+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Expert Team', value: '75+' }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>{seoConfig.about.title}</title>
        <meta name="description" content={seoConfig.about.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 bg-charcoal">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-10 text-cream">
              About Cloudspire
            </h1>
            <div className="w-16 h-px bg-gold mx-auto mb-10"></div>
            <p className="text-xl md:text-2xl text-cream/80 font-body leading-relaxed font-light">
              We are architects of digital transformation, empowering businesses through innovative technology solutions since 2015.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-none border-t-2 border-gold shadow-sm"
            >
              <Target className="w-10 h-10 text-gold mb-8" strokeWidth={1} />
              <h2 className="text-3xl font-display font-medium text-charcoal mb-6">Our Mission</h2>
              <p className="text-charcoal/70 font-body leading-relaxed text-lg">
                To deliver world-class IT solutions that enable businesses to thrive in the digital age. 
                We are committed to excellence, innovation, and creating lasting value for our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-none border-t-2 border-charcoal shadow-sm"
            >
              <Eye className="w-10 h-10 text-charcoal mb-8" strokeWidth={1} />
              <h2 className="text-3xl font-display font-medium text-charcoal mb-6">Our Vision</h2>
              <p className="text-charcoal/70 font-body leading-relaxed text-lg">
                To be recognized globally as a trusted technology partner that drives digital transformation 
                and innovation, creating a future where every business has access to enterprise-grade solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-8">Our Core Values</h2>
            <div className="w-16 h-px bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream p-8 rounded-none shadow-sm hover:shadow-md transition-all duration-500 group border-b-2 border-transparent hover:border-gold"
              >
                <div className="mb-6 text-charcoal group-hover:text-gold transition-colors duration-500">
                  <value.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-bold text-charcoal mb-4 group-hover:text-gold transition-colors">{value.title}</h3>
                <p className="text-charcoal/70 text-sm font-body leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-10">Cultivating Excellence</h2>
              <p className="text-charcoal/80 font-body leading-relaxed mb-10 text-lg font-light">
                At Cloudspire Technologies, we believe our people are our greatest asset. We've built a 
                culture that encourages innovation, collaboration, and continuous learning.
              </p>
              <div className="space-y-8 font-body">
                <div className="flex items-start space-x-6">
                  <Users className="w-6 h-6 text-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <span className="font-bold text-charcoal block mb-2 font-display">Collaborative Environment</span>
                    <span className="text-charcoal/70">Fostering teamwork across all departments.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <span className="font-bold text-charcoal block mb-2 font-display">Growth Opportunities</span>
                    <span className="text-charcoal/70">Continuous learning paths for all members.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <Heart className="w-6 h-6 text-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <span className="font-bold text-charcoal block mb-2 font-display">Work-Life Balance</span>
                    <span className="text-charcoal/70">Supportive environment valuing well-being.</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-full flex items-center justify-center bg-beige/20 p-8"
            >
              <div className="text-center p-8 border border-gold/30">
                <p className="font-display text-2xl text-charcoal italic leading-relaxed">
                  "Our success is built on the passion and dedication of our team members."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-display font-medium mb-4 text-gold">{stat.value}</div>
                <div className="text-cream/60 text-xs font-body uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;