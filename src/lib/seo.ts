import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { getLocalizedHref } from '@/lib/utils';

export const LOCALES = ['en', 'fr', 'ar'] as const;

type ChangeFrequency = MetadataRoute.Sitemap[number]['changeFrequency'];

/** Canonical + hreflang (including self-referential) for a localized path. */
export function buildPageAlternates(path: string, lang: string) {
  const canonicalUrl = `${SITE_URL}${getLocalizedHref(path, lang)}`;
  const localized = (locale: string) =>
    `${SITE_URL}${getLocalizedHref(path, locale)}`;

  return {
    canonical: canonicalUrl,
    languages: {
      en: localized('en'),
      fr: localized('fr'),
      ar: localized('ar'),
      'x-default': localized('en'),
    },
  };
}

/** One sitemap row per locale for a path. */
export function sitemapPaths(
  path: string,
  priority: number,
  changeFrequency: ChangeFrequency = 'monthly',
): MetadataRoute.Sitemap {
  return LOCALES.map((lang) => ({
    url: `${SITE_URL}${getLocalizedHref(path, lang)}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
