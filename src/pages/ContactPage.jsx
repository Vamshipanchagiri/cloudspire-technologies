import React from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '@/layouts/MainLayout';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { seoConfig } from '@/data/seoConfig';
import { MapPin, Mail } from 'lucide-react';

const ContactPage = () => {
  useSEO(seoConfig.contact);

  return (
    <MainLayout>
      <Helmet>
        <title>{seoConfig.contact.title}</title>
        <meta name="description" content={seoConfig.contact.description} />
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
              Get in Touch
            </h1>
            <div className="w-16 h-px bg-gold mx-auto mb-10"></div>
            <p className="text-xl md:text-2xl text-cream/80 font-body font-light">
              Let's discuss how we can help transform your business with technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 border-t-2 border-gold shadow-sm"
            >
              <h2 className="text-3xl font-display font-medium text-charcoal mb-12">Contact Information</h2>
              
              <div className="space-y-10 mb-12">
                <div className="flex items-start space-x-6 group">
                  <MapPin className="w-6 h-6 text-gold mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display font-bold text-charcoal text-lg mb-2">Our Office</h3>
                    <p className="text-charcoal/70 font-body leading-relaxed text-lg">
                      8th Floor, SLN Terminus,<br />
                      Gachibowli, Hyderabad,<br />
                      Telangana 500032, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <Mail className="w-6 h-6 text-gold mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display font-bold text-charcoal text-lg mb-2">Email Us</h3>
                    <a href="mailto:info@cloudspiretechnologies.in" className="text-charcoal hover:text-gold transition-colors font-body text-lg underline decoration-gold/30 hover:decoration-gold">
                      info@cloudspiretechnologies.in
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 shadow-md border-t-4 border-charcoal"
            >
              <h2 className="text-3xl font-display font-medium text-charcoal mb-10">Send us a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;