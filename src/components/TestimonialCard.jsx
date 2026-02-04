import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialCard = memo(({ quote, author, position, company, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white p-12 rounded-none shadow-sm hover:shadow-md transition-shadow duration-500 border-t-2 border-gold relative h-full flex flex-col"
    >
      <div className="mb-8">
        <Quote className="w-8 h-8 text-gold/80" strokeWidth={1} />
      </div>
      
      <p className="text-charcoal font-display text-xl leading-relaxed mb-8 italic flex-grow">
        "{quote}"
      </p>
      
      <div className="flex items-center pt-6 border-t border-beige/30">
        <div>
          <p className="font-display font-bold text-charcoal text-lg">{author}</p>
          <p className="text-sm font-body text-charcoal/60 uppercase tracking-wider mt-1">{position}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;