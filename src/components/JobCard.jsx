import React, { memo } from 'react';
import { MapPin, Clock, Briefcase } from 'lucide-react';

const JobCard = memo(({ job, index }) => {
  return (
    <div className="bg-white p-10 rounded-none shadow-sm hover:shadow-lg transition-all duration-300 border-l-2 border-gold group">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="flex-grow">
          <h3 className="text-2xl font-display font-bold text-charcoal mb-4 group-hover:text-gold transition-colors duration-300">{job.title}</h3>
          
          <div className="flex flex-wrap gap-6 text-sm text-charcoal/60 font-body mb-6 uppercase tracking-wider">
            <div className="flex items-center">
              <Briefcase className="w-4 h-4 mr-2" />
              {job.department}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {job.location}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {job.type}
            </div>
          </div>
          
          <p className="text-charcoal/80 font-body mb-6 leading-relaxed max-w-3xl">{job.description}</p>
          
          <div className="mb-2">
            <span className="text-xs font-bold text-gold font-display uppercase tracking-widest">Experience: </span>
            <span className="text-sm text-charcoal/70 font-body ml-2">{job.experience}</span>
          </div>
        </div>
        
        <div className="flex-shrink-0 pt-2">
          <a href="#contact" className="inline-block border border-charcoal text-charcoal hover:bg-charcoal hover:text-white hover:border-charcoal px-8 py-3 text-sm font-display tracking-widest uppercase transition-all duration-300">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
});

JobCard.displayName = 'JobCard';

export default JobCard;