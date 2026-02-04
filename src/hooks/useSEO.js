import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSEO = ({
  title = 'Cloudspire Technologies - Enterprise IT Solutions',
  description = 'Leading IT solutions provider offering software development, web applications, mobile apps, cloud services, and IT consulting in Hyderabad, India.',
  keywords = 'IT solutions, software development, web applications, mobile apps, cloud services, DevOps, Hyderabad',
  image = 'https://images.unsplash.com/photo-1562600484-c6ef0ffe27a2',
  type = 'website'
}) => {
  const location = useLocation();
  const baseUrl = 'https://cloudspiretechnologies.in';
  const canonicalUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Set page title
    document.title = title;

    // Set meta tags
    const metaTags = {
      description,
      keywords,
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:url': canonicalUrl,
      'og:type': type,
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    return () => {
      // Cleanup on unmount
    };
  }, [title, description, keywords, image, canonicalUrl, type]);
};