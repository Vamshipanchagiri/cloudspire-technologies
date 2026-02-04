import React from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Privacy Policy - Cloudspire Technologies</title>
        <meta name="description" content="Privacy Policy for Cloudspire Technologies. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-cream p-12 md:p-16 rounded-sm shadow-xl border-t-4 border-gold"
          >
            <h1 className="text-5xl font-display font-bold text-charcoal mb-6">Privacy Policy</h1>
            <p className="text-dark-brown/60 mb-12 font-display text-sm uppercase tracking-wider">Last updated: February 4, 2026</p>

            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:text-charcoal prose-p:font-body prose-p:text-dark-brown/80 prose-li:font-body prose-li:text-dark-brown/80">
              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">1. Introduction</h2>
              <p className="mb-6">
                Cloudspire Technologies ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Name, email address, and contact information</li>
                <li>Company name and job title</li>
                <li>Project requirements and business information</li>
                <li>Communication preferences</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">4. Information Sharing</h2>
              <p className="mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in our operations</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">5. Data Security</h2>
              <p className="mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">7. Cookies</h2>
              <p className="mb-6">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">8. Changes to This Policy</h2>
              <p className="mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">9. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="font-semibold text-charcoal">
                Email: info@cloudspiretechnologies.in<br />
                Address: 8th Floor, SLN Terminus, Gachibowli, Hyderabad, Telangana 500032, India
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PrivacyPolicyPage;