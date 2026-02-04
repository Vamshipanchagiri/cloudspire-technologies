import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { seoConfig } from '@/data/seoConfig';
import { blogPosts } from '@/data/blogPosts';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const InsightsPage = () => {
  useSEO(seoConfig.insights);

  return (
    <MainLayout>
      <Helmet>
        <title>{seoConfig.insights.title}</title>
        <meta name="description" content={seoConfig.insights.description} />
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
              Insights & Blog
            </h1>
            <div className="w-16 h-px bg-gold mx-auto mb-10"></div>
            <p className="text-xl md:text-2xl text-cream/80 font-body font-light">
              Latest trends, best practices, and perspectives from the tech industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-none shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden group border-t-2 border-transparent hover:border-gold"
              >
                <Link to={`/insights/${post.slug}`}>
                  <div className="p-10">
                    <div className="mb-6">
                      <span className="text-gold text-xs font-display tracking-widest uppercase font-bold">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-display font-bold text-charcoal mb-6 group-hover:text-gold transition-colors duration-300 leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-charcoal/70 text-sm font-body mb-8 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between border-t border-beige/30 pt-6">
                      <div className="flex items-center gap-4 text-xs text-charcoal/50 font-display uppercase tracking-wider">
                         <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                         <span>•</span>
                         <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center text-charcoal font-display font-semibold text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                        Read <ArrowRight className="w-3 h-3 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default InsightsPage;