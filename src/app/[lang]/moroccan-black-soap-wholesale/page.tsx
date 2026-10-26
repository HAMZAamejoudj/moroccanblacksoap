import type { Metadata } from 'next';
import WholesaleBlogContent from '@/components/sections/WholesaleBlogContent';
import JsonLd from '@/components/seo/JsonLd';
import { ORGANIZATION, SITE_NAME, SITE_URL } from '@/lib/site';
import { getDictionary } from '@/lib/dictionaries';
import { getLocalizedHref } from '@/lib/utils';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang, 'blog');
  const pageTitle = dict?.meta?.title || 'Moroccan Black Soap Wholesale | Bulk Natural Beldi Soap Supplier';
  const pageDescription = dict?.meta?.description || 'Buy Moroccan black soap wholesale for skincare brands, spas, hammams, retailers, and private label beauty businesses. Natural bulk Beldi soap supplier from Morocco.';
  const canonicalUrl = `${SITE_URL}${getLocalizedHref('/moroccan-black-soap-wholesale', lang)}`;

  return {
    title: { absolute: pageTitle },
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: SITE_NAME,
      locale: lang === 'ar' ? 'ar_MA' : lang === 'fr' ? 'fr_MA' : 'en_US',
      images: [
        {
          url: `${SITE_URL}/image/about-hammam-scene.webp`,
          width: 1200,
          height: 1200,
          alt: 'Moroccan Black Soap Wholesale Supplier',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [`${SITE_URL}/image/about-hammam-scene.webp`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function WholesaleBlogPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang, 'blog');
  const commonDict = await getDictionary(lang, 'common');
  const canonicalUrl = `${SITE_URL}${getLocalizedHref('/moroccan-black-soap-wholesale', lang)}`;

  const blogSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description:
          'Authentic Moroccan black soap wholesale supplier for spas, hammams, beauty brands, and private label businesses.',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: lang === 'ar' ? 'ar' : lang === 'fr' ? 'fr' : 'en',
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: ORGANIZATION.name,
        url: SITE_URL,
        email: ORGANIZATION.email,
        telephone: ORGANIZATION.phone,
        description:
          'Trusted supplier of authentic Moroccan Beldi black soap from Morocco for wholesale, private label, hammam, spa and skincare brands.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: ORGANIZATION.address.streetAddress,
          addressLocality: ORGANIZATION.address.addressLocality,
          addressCountry: ORGANIZATION.address.addressCountry,
        },
        sameAs: [...ORGANIZATION.sameAs],
        areaServed: 'Worldwide',
      },
      {
        '@type': 'TechArticle',
        '@id': `${canonicalUrl}/#article`,
        url: canonicalUrl,
        headline: dict?.hero?.title || 'Moroccan Black Soap Wholesale Supplier',
        description: dict?.meta?.description || 'Buy Moroccan black soap wholesale for skincare brands, spas, hammams, retailers, and private label beauty businesses. Natural bulk Beldi soap supplier from Morocco.',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        inLanguage: lang === 'ar' ? 'ar' : lang === 'fr' ? 'fr' : 'en',
        mainEntityOfPage: canonicalUrl,
        publisher: { '@id': `${SITE_URL}/#organization` },
        image: `${SITE_URL}/image/about-hammam-scene.webp`,
        datePublished: '2026-06-11T10:00:00Z',
        dateModified: '2026-06-11T10:00:00Z',
        author: {
          '@type': 'Organization',
          name: ORGANIZATION.name,
          url: SITE_URL,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: commonDict?.nav?.home || 'Home',
            item: `${SITE_URL}${getLocalizedHref('/', lang)}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: commonDict?.nav?.blog || 'Blog',
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={blogSchema} />
      <main className="min-h-screen bg-white">
        <WholesaleBlogContent dict={dict} lang={lang} />
      </main>
    </>
  );
}
