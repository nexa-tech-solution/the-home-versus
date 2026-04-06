import { MetadataRoute } from 'next';
import { SITE_CONFIG, CATEGORIES, COMPARISONS, PRODUCT_DATA } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const fallbackLastModified = new Date("2026-04-06");

  // Static routes
  const routes = [
    '',
    '/comparisons',
    '/products',
    '/about',
    '/contact',
    '/privacy',
    '/affiliate-disclosure',
    '/editorial-policy',
    '/methodology',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: fallbackLastModified,
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Category routes
  const categoryRoutes = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: fallbackLastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Comparison article routes
  const comparisonRoutes = COMPARISONS.map((comp) => ({
    url: `${baseUrl}/compare/${comp.slug}`,
    lastModified: fallbackLastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Product review routes
  const productRoutes = Object.keys(PRODUCT_DATA).map((slug) => ({
    url: `${baseUrl}/product/${slug}`,
    lastModified: fallbackLastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...categoryRoutes, ...comparisonRoutes, ...productRoutes];
}
