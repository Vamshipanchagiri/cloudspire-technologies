import React from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '@/layouts/MainLayout';
import JobCard from '@/components/JobCard';
import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { seoConfig } from '@/data/seoConfig';
import { jobListings } from '@/data/jobListings';
import { Heart, TrendingUp, Users, Coffee, Award, Globe } from 'lucide-react';

const CareersPage = () => {
  useSEO(seoConfig.careers);

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance coverage for you and your family.'
    },
    {
      icon: Globe,
      title: 'Remote Work',
      description: 'Flexible remote and hybrid work options for better work-life balance.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear career advancement paths.'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible hours and generous paid time off to recharge.'
    },
    {
      icon: Award,
      title: 'Competitive Pay',
      description: 'Industry-leading salaries and performance-based bonuses.'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Collaborative culture with talented professionals from diverse backgrounds.'
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>{seoConfig.careers.title}</title>
        <meta name="description" content={seoConfig.careers.description} />
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
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-10 text-cream">
              Join Our Team
            </h1>
            <div className="w-16 h-px bg-gold mx-auto mb-10"></div>
            <p className="text-xl md:text-2xl text-cream/80 font-body font-light">
              Build your career with a team that values innovation, growth, and collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-white p-12 border-l-2 border-gold"
            >
               <h3 className="font-display text-2xl text-charcoal italic leading-relaxed">
                  "We're not just building software—we're building careers, fostering innovation, and making a real impact."
               </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-10">
                Why Join Cloudspire?
              </h2>
              <p className="text-charcoal/80 font-body leading-relaxed mb-8 text-lg font-light">
                At Cloudspire Technologies, we believe in creating an environment where talent thrives. 
              </p>
              <p className="text-charcoal/80 font-body leading-relaxed text-lg font-light">
                Join a team of passionate professionals who are committed to excellence, continuous 
                learning, and pushing the boundaries of what's possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-8">
              Benefits & Perks
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-8"></div>
            <p className="text-charcoal/70 max-w-2xl mx-auto font-body text-lg">
              We invest in our people with comprehensive benefits and a supportive work environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream p-10 rounded-none shadow-sm hover:shadow-md transition-all duration-300 border-b-2 border-transparent hover:border-gold group"
              >
                <div className="mb-6 text-charcoal group-hover:text-gold transition-colors duration-300">
                  <benefit.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-bold text-charcoal mb-4">{benefit.title}</h3>
                <p className="text-charcoal/70 text-sm font-body leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-8">
              Open Positions
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto font-body text-lg">
              Explore opportunities to grow your career with us.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {jobListings.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CareersPage;