import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '@/components/ContactForm';
import ServiceCard from '@/components/ServiceCard';
import JobCard from '@/components/JobCard';
import { 
  Code, Globe, Smartphone, Cloud, TestTube, Palette, Headphones, 
  Target, Eye, Heart, Award, Shield, Users, TrendingUp, Coffee,
  Building2, ShoppingCart, Factory, Store, GraduationCap, Truck, Home,
  ArrowRight, Calendar, User
} from 'lucide-react';
import { jobListings } from '@/data/jobListings';
import { blogPosts } from '@/data/blogPosts';

const SinglePageApp = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs. From enterprise applications to scalable platforms, we build software that drives efficiency.',
    },
    {
      icon: Globe,
      title: 'Web Application Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies. We create fast, secure, and user-friendly web solutions.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. Engaging mobile experiences that connect with your users.',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Services',
      description: 'Comprehensive cloud solutions and DevOps practices. Leverage cloud infrastructure for scalability, reliability, and cost optimization.',
    },
    {
      icon: TestTube,
      title: 'QA & Software Testing',
      description: 'Rigorous quality assurance and testing services. We ensure your software is reliable, secure, and performs flawlessly.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user experiences that delight users. Our designers create interfaces that are visually stunning and highly functional.',
    },
    {
      icon: Headphones,
      title: 'IT Consulting & Support',
      description: 'Expert IT consulting and ongoing support services. Strategic guidance and technical expertise to help your business succeed.',
    }
  ];

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

  const values = [
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'We prioritize our clients\' success, delivering solutions that exceed expectations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards, ensuring every project is executed with precision.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies to adapt quickly to changing market demands.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Building long-term partnerships through transparency, honesty, and ethical practices.'
    }
  ];

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
    <>
      <Helmet>
        <title>Cloudspire Technologies | Enterprise Software Solutions</title>
        <meta name="description" content="Cloudspire Technologies delivers bespoke enterprise software solutions, web and mobile applications, cloud services, and IT consulting to drive business innovation." />
      </Helmet>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#252525] to-black opacity-90" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-10 leading-tight text-cream tracking-tight">
              Crafting Digital <span className="text-gold italic font-light">Excellence</span>
            </h1>
            <p className="text-lg md:text-2xl text-cream/80 font-body mb-16 leading-relaxed font-light max-w-3xl mx-auto">
              We empower enterprises with bespoke technology solutions that drive innovation, efficiency, and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#services"
                className="inline-block bg-gold text-charcoal px-10 py-4 rounded-none font-display font-semibold hover:bg-cream transition-all duration-300 text-sm uppercase tracking-widest border border-gold"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="inline-block bg-transparent border border-cream text-cream px-10 py-4 rounded-none font-display font-semibold hover:bg-cream hover:text-charcoal transition-all duration-300 text-sm uppercase tracking-widest"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-cream scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-8">About Cloudspire</h2>
            <div className="w-16 h-px bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-charcoal/70 font-body max-w-3xl mx-auto leading-relaxed font-light">
              We are architects of digital transformation, empowering businesses through innovative technology solutions since 2015.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto mb-20">
            <div className="bg-white p-12 rounded-none border-t-2 border-gold shadow-sm hover:shadow-md transition-shadow duration-300">
              <Target className="w-10 h-10 text-gold mb-8" strokeWidth={1} />
              <h2 className="text-3xl font-display font-medium text-charcoal mb-6">Our Mission</h2>
              <p className="text-charcoal/70 font-body leading-relaxed text-lg">
                To deliver world-class IT solutions that enable businesses to thrive in the digital age. 
                We are committed to excellence, innovation, and creating lasting value for our clients.
              </p>
            </div>
            <div className="bg-white p-12 rounded-none border-t-2 border-charcoal shadow-sm hover:shadow-md transition-shadow duration-300">
              <Eye className="w-10 h-10 text-charcoal mb-8" strokeWidth={1} />
              <h2 className="text-3xl font-display font-medium text-charcoal mb-6">Our Vision</h2>
              <p className="text-charcoal/70 font-body leading-relaxed text-lg">
                To be recognized globally as a trusted technology partner that drives digital transformation 
                and innovation, creating a future where every business has access to enterprise-grade solutions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-cream p-8 rounded-none shadow-sm hover:shadow-md transition-all duration-300 group border-b-2 border-transparent hover:border-gold"
              >
                <div className="mb-6 text-charcoal group-hover:text-gold transition-colors duration-300">
                  <value.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-bold text-charcoal mb-4 group-hover:text-gold transition-colors">{value.title}</h3>
                <p className="text-charcoal/70 text-sm font-body leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-beige/20 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-gold font-display font-bold uppercase tracking-widest text-xs block mb-6">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-8">
              Comprehensive Solutions
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-charcoal/70 font-body max-w-3xl mx-auto leading-relaxed font-light">
              Tailored strategies designed to transform your business landscape with precision and elegance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-cream scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-8">Industries We Serve</h2>
            <div className="w-16 h-px bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-charcoal/70 font-body max-w-3xl mx-auto leading-relaxed font-light">
              Tailored IT solutions across diverse sectors, driving innovation and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-none shadow-sm hover:shadow-md transition-all duration-300 border-l-2 border-transparent hover:border-gold group"
              >
                <div className="mb-6 text-charcoal group-hover:text-gold transition-colors duration-300">
                  <industry.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-bold text-charcoal mb-4">{industry.name}</h3>
                <p className="text-charcoal/70 text-sm font-body mb-8 leading-relaxed">{industry.description}</p>
                <div className="space-y-3 border-t border-beige/30 pt-6">
                  {industry.services.map((service, idx) => (
                    <div key={idx} className="text-xs text-charcoal/60 font-body uppercase tracking-widest">• {service}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-24 bg-charcoal text-cream scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-cream mb-8">Join Our Team</h2>
            <div className="w-16 h-px bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-cream/80 font-body max-w-3xl mx-auto leading-relaxed font-light">
              Build your career with a team that values innovation, growth, and collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 p-8 rounded-none border border-white/10 hover:border-gold transition-colors duration-300 group"
              >
                <div className="mb-6 text-gold">
                  <benefit.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-bold text-cream mb-4">{benefit.title}</h3>
                <p className="text-cream/70 text-sm font-body leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <h3 className="text-2xl font-display text-center text-cream mb-8">Open Positions</h3>
            {jobListings.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Insights/Blog Section */}
      <section id="insights" className="py-24 bg-cream scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-8">Insights & Blog</h2>
            <div className="w-16 h-px bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-charcoal/70 font-body max-w-3xl mx-auto leading-relaxed font-light">
              Latest trends, best practices, and perspectives from the tech industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-none shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group border-t-2 border-transparent hover:border-gold"
              >
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
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-beige/30 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-8">Get in Touch</h2>
            <div className="w-16 h-px bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-charcoal/70 font-body max-w-3xl mx-auto leading-relaxed font-light">
              Ready to transform your business? Let's discuss your next project.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-12 shadow-md border-t-4 border-charcoal">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePageApp;