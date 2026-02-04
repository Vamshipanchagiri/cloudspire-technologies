export const generateSitemap = () => {
  const baseUrl = 'https://cloudspiretechnologies.in';
  const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/services/software-development', priority: '0.8', changefreq: 'monthly' },
    { path: '/services/web-application', priority: '0.8', changefreq: 'monthly' },
    { path: '/services/mobile-app', priority: '0.8', changefreq: 'monthly' },
    { path: '/services/cloud-devops', priority: '0.8', changefreq: 'monthly' },
    { path: '/services/qa-testing', priority: '0.8', changefreq: 'monthly' },
    { path: '/services/ui-ux-design', priority: '0.8', changefreq: 'monthly' },
    { path: '/services/it-consulting', priority: '0.8', changefreq: 'monthly' },
    { path: '/industries', priority: '0.7', changefreq: 'monthly' },
    { path: '/careers', priority: '0.7', changefreq: 'weekly' },
    { path: '/insights', priority: '0.7', changefreq: 'daily' },
    { path: '/contact', priority: '0.9', changefreq: 'monthly' },
    { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms-conditions', priority: '0.3', changefreq: 'yearly' }
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};