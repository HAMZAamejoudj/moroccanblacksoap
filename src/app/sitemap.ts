import type { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { sitemapPaths } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    { path: '/', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/benefits', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/bulk-order', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/private-label', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/moroccan-black-soap-wholesale', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.75, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.85, changeFrequency: 'monthly' as const },
  ];

  const pages = staticPaths.flatMap(({ path, priority, changeFrequency }) =>
    sitemapPaths(path, priority, changeFrequency),
  );

  const productPages = products.flatMap((product) =>
    sitemapPaths(`/products/${product.slug}`, 0.8, 'monthly'),
  );

  return [...pages, ...productPages];
}
