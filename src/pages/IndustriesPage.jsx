import React from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { seoConfig } from '@/data/seoConfig';
import { Link } from 'react-router-dom';
import { 
  Building2, Heart, ShoppingCart, Factory, Store, 
  GraduationCap, Truck, Home 
} from 'lucide-react';

const IndustriesPage = () => {
  useSEO(seoConfig.industries);

  const industries = [
    {
      icon: Building2,
      name: 'Finance & Banking',
      description: 'Secure, compliant fintech solutions including payment systems, trading platforms, and banking applications.',
      services: ['Mobile Banking', 'Payment Processing', 'Risk Management', 'Compliance Solutions']
    },
    {
      icon: Heart,
      name: 'Healthcare',
      description: 'HIPAA-compliant healthcare software including telemedicine platforms, EMR systems, and patient portals.',
      services: ['Telemedicine', 'EMR/EHR Systems', 'Healthcare Analytics', 'Patient Management']
    },
    {
      icon: ShoppingCart,
      name: 'E-commerce & Retail',
      description: 'Scalable e-commerce platforms with advanced features for inventory, payments, and customer experience.',
      services: ['Online Stores', 'Inventory Management', 'Payment Integration', 'Customer Analytics']
    },
    {
      icon: Factory,
      name: 'Manufacturing',
      description: 'Digital transformation solutions for manufacturing including IoT, automation, and supply chain optimization.',
      services: ['IoT Integration', 'Process Automation', 'Supply Chain', 'Quality Management']
    },
    {
      icon: Store,
      name: 'Retail',
      description: 'Omnichannel retail solutions connecting online and offline experiences for modern consumers.',
      services: ['POS Systems', 'Loyalty Programs', 'Omnichannel Commerce', 'Customer Insights']
    },
    {
      icon: GraduationCap,
      name: 'Education',
      description: 'EdTech solutions including learning management systems, virtual classrooms, and student portals.',
      services: ['LMS Platforms', 'Virtual Classrooms', 'Student Portals', 'Learning Analytics']
    },
    {
      icon: Truck,
      name: 'Logistics & Transportation',
      description: 'Fleet management, route optimization, and logistics software for efficient operations.',
      services: ['Fleet Management', 'Route Optimization', 'Warehouse Management', 'Tracking Systems']
    },
    {
      icon: Home,
      name: 'Real Estate',
      description: 'Property management platforms, listing portals, and CRM systems for real estate businesses.',
      services: ['Property Management', 'Listing Portals', 'CRM Systems', 'Virtual Tours']
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>{seoConfig.industries.title}</title>
        <meta name="description" content={seoConfig.industries.description} />
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
              Industries We Serve
            </h1>
            <div className="w-16 h-px bg-gold mx-auto mb-10"></div>
            <p className="text-xl md:text-2xl text-cream/80 font-body font-light">
              Tailored IT solutions across diverse sectors, driving innovation and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-none shadow-sm hover:shadow-md transition-all duration-500 border-l-2 border-transparent hover:border-gold group"
              >
                <div className="mb-6 text-charcoal group-hover:text-gold transition-colors duration-500">
                  <industry.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-bold text-charcoal mb-4">{industry.name}</h3>
                <p className="text-charcoal/70 text-sm font-body mb-8 leading-relaxed">{industry.description}</p>
                <div className="space-y-3 border-t border-beige/30 pt-6">
                  {industry.services.map((service, idx) => (
                    <div key={idx} className="text-xs text-charcoal/60 font-body uppercase tracking-widest">• {service}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-charcoal p-20 rounded-none text-cream shadow-md"
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-10">
              Partner With Industry Experts
            </h2>
            <p className="text-xl text-cream/80 mb-12 font-body font-light">
              Let's discuss how we can help transform your business.
            </p>
            <Link to="/contact" className="inline-block bg-cream text-charcoal px-12 py-4 rounded-none font-display font-semibold hover:bg-gold hover:text-white transition-colors duration-300 uppercase tracking-widest">
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default IndustriesPage;