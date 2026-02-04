import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Navigate, Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogPosts';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <MainLayout>
      <Helmet>
        <title>{post.title} - Cloudspire Technologies</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-20 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link to="/insights" className="inline-flex items-center text-beige/60 hover:text-gold mb-8 transition-colors font-display text-sm tracking-widest uppercase">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>
            
            <div className="mb-6">
              <span className="bg-gold text-cream px-4 py-1.5 rounded-sm text-xs font-display tracking-widest uppercase">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-cream leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-8 text-beige/60 font-display text-sm uppercase tracking-wider border-t border-white/10 pt-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-gold" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-gold" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-gold" />
                {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto prose prose-lg prose-slate prose-headings:font-display prose-headings:text-charcoal prose-p:font-body prose-p:text-dark-brown/80 prose-a:text-gold prose-strong:text-charcoal prose-blockquote:border-gold prose-blockquote:bg-beige/20 prose-blockquote:font-display prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-beige/20 border-t border-beige">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-charcoal mb-12 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/insights/${relatedPost.slug}`}
                  className="bg-cream rounded-sm shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden group border border-beige"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 sepia-[0.1] group-hover:sepia-0"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-display font-bold text-charcoal mb-3 group-hover:text-gold transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-dark-brown/70 text-sm font-body line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default BlogPostPage;