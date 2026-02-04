import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = memo(({ title, description, icon: Icon, index }) => {
  // Format number to always be two digits (01, 02, etc.)
  const formattedNumber = `0${index + 1}`.slice(-2);

  return (
    <div className="group h-full">
      <div className="block h-full">
        <div className="h-full flex flex-col md:flex-row bg-cream rounded-sm shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-beige overflow-hidden">
          {/* Number Section */}
          <div className="md:w-24 bg-beige/20 flex items-center justify-center border-b md:border-b-0 md:border-r border-gold/30 p-4 md:p-0 transition-colors duration-300 group-hover:bg-gold/10">
            <span className="text-4xl md:text-5xl font-display font-bold text-gold opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              {formattedNumber}
            </span>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-8 md:p-10 flex flex-col relative">
            <div className="mb-6 transform group-hover:-translate-y-1 transition-transform duration-300">
              <Icon className="w-10 h-10 text-charcoal group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl font-display font-bold text-charcoal mb-4 group-hover:text-gold transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-dark-brown/70 font-body leading-relaxed mb-8 flex-grow">
              {description}
            </p>
            
            <a href="#contact" className="flex items-center text-gold font-medium font-body text-sm tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300 mt-auto">
              Inquire Now <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;