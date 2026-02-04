import React from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';

const TermsConditionsPage = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Terms & Conditions - Cloudspire Technologies</title>
        <meta name="description" content="Terms and Conditions for using Cloudspire Technologies services. Read our terms of service, usage policies, and legal agreements." />
      </Helmet>

      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-cream p-12 md:p-16 rounded-sm shadow-xl border-t-4 border-gold"
          >
            <h1 className="text-5xl font-display font-bold text-charcoal mb-6">Terms & Conditions</h1>
            <p className="text-dark-brown/60 mb-12 font-display text-sm uppercase tracking-wider">Last updated: February 4, 2026</p>

            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:text-charcoal prose-p:font-body prose-p:text-dark-brown/80 prose-li:font-body prose-li:text-dark-brown/80">
              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">1. Acceptance of Terms</h2>
              <p className="mb-6">
                By accessing and using the services provided by Cloudspire Technologies, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">2. Services Description</h2>
              <p className="mb-6">
                Cloudspire Technologies provides IT consulting, software development, web application development, mobile app development, cloud services, DevOps, QA testing, UI/UX design, and related technology services.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">3. User Obligations</h2>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services for any unlawful purpose</li>
                <li>Not interfere with or disrupt our services</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">4. Intellectual Property</h2>
              <p className="mb-6">
                All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, and hyperlinks, are the property of or licensed to Cloudspire Technologies and are protected by applicable intellectual property laws.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">5. Project Terms</h2>
              <p className="mb-6">
                Specific project terms, including scope, deliverables, timelines, and pricing, will be outlined in separate project agreements or statements of work. These documents will supplement and be governed by these Terms & Conditions.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">6. Payment Terms</h2>
              <p className="mb-6">
                Payment terms will be specified in individual project agreements. Generally, payments are due as per the agreed milestones or invoice terms. Late payments may incur additional charges as specified in the agreement.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">7. Confidentiality</h2>
              <p className="mb-6">
                Both parties agree to maintain confidentiality of proprietary information shared during the course of the engagement. Specific confidentiality terms may be outlined in separate Non-Disclosure Agreements (NDAs).
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">8. Warranties and Disclaimers</h2>
              <p className="mb-6">
                We strive to provide high-quality services but make no warranties regarding the uninterrupted or error-free operation of our services. Our services are provided "as is" without warranty of any kind, either express or implied.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">9. Limitation of Liability</h2>
              <p className="mb-6">
                To the maximum extent permitted by law, Cloudspire Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">10. Termination</h2>
              <p className="mb-6">
                Either party may terminate services as outlined in the specific project agreement. Upon termination, you must cease all use of our services and return or destroy any confidential information.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">11. Governing Law</h2>
              <p className="mb-6">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">12. Changes to Terms</h2>
              <p className="mb-6">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the updated terms on our website.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-6 border-b border-beige pb-4">13. Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms & Conditions, please contact us at:
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

export default TermsConditionsPage;