import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Store in localStorage
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      
      toast({
        title: (
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-gold" />
            <span className="font-display font-bold text-charcoal">Message Sent Successfully!</span>
          </div>
        ),
        description: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        className: "bg-cream border-l-4 border-gold text-charcoal shadow-lg",
        duration: 5000,
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setIsSubmitting(false);
    } else {
      toast({
        title: (
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <span className="font-display font-bold text-charcoal">Validation Error</span>
          </div>
        ),
        description: "Please check the form for errors and try again.",
        variant: "destructive",
        className: "bg-white border-l-4 border-red-500 text-charcoal",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-xs font-display font-bold text-charcoal mb-2 uppercase tracking-widest">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-4 bg-beige/10 text-charcoal border-b-2 ${
            errors.name ? 'border-red-500' : 'border-charcoal/10'
          } focus:border-gold focus:bg-white focus:outline-none transition-all duration-300 font-body placeholder:text-charcoal/30`}
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1 font-body">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-display font-bold text-charcoal mb-2 uppercase tracking-widest">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-4 bg-beige/10 text-charcoal border-b-2 ${
            errors.email ? 'border-red-500' : 'border-charcoal/10'
          } focus:border-gold focus:bg-white focus:outline-none transition-all duration-300 font-body placeholder:text-charcoal/30`}
          placeholder="your@email.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1 font-body">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-display font-bold text-charcoal mb-2 uppercase tracking-widest">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-4 bg-beige/10 text-charcoal border-b-2 ${
            errors.subject ? 'border-red-500' : 'border-charcoal/10'
          } focus:border-gold focus:bg-white focus:outline-none transition-all duration-300 font-body placeholder:text-charcoal/30`}
          placeholder="How can we help?"
        />
        {errors.subject && <p className="text-red-500 text-xs mt-1 font-body">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-display font-bold text-charcoal mb-2 uppercase tracking-widest">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-4 bg-beige/10 text-charcoal border-b-2 ${
            errors.message ? 'border-red-500' : 'border-charcoal/10'
          } focus:border-gold focus:bg-white focus:outline-none transition-all duration-300 font-body resize-none placeholder:text-charcoal/30`}
          placeholder="Tell us about your project or inquiry..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1 font-body">{errors.message}</p>}
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-charcoal hover:bg-gold text-cream py-6 text-sm font-display tracking-widest uppercase transition-all duration-500 rounded-sm disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-md hover:shadow-lg"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </motion.form>
  );
};

export default ContactForm;