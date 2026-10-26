import type { Metadata } from 'next';
import PrivateLabelContent from '@/components/sections/PrivateLabelContent';
import JsonLd from '@/components/seo/JsonLd';
import { ORGANIZATION, SITE_NAME, SITE_URL } from '@/lib/site';
import { getDictionary } from '@/lib/dictionaries';
import { getLocalizedHref } from '@/lib/utils';
import { buildPageAlternates } from '@/lib/seo';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang, 'private-label');
  const pageTitle = dict?.meta?.title || 'Private Label Moroccan Black Soap – Launch Your Beldi Soap Brand';
  const pageDescription = dict?.meta?.description || 'Create your own Moroccan black soap brand with certified Beldi soap. Custom labels, packaging, private label solutions, and bulk supply for skincare, spas, and cosmetic businesses.';
  const alternates = buildPageAlternates('/private-label', lang);
  const canonicalUrl = alternates.canonical as string;

  return {
    title: { absolute: pageTitle },
    description: pageDescription,
    alternates,
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: SITE_NAME,
      locale: lang === 'ar' ? 'ar_MA' : lang === 'fr' ? 'fr_MA' : 'en_US',
      images: [
        {
          url: `${SITE_URL}/image/private-label-jars.webp`,
          width: 1200,
          height: 1500,
          alt: 'Private Label Moroccan Black Soap Brand Launch',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [`${SITE_URL}/image/private-label-jars.webp`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PrivateLabelPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang, 'private-label');
  const commonDict = await getDictionary(lang, 'common');
  const canonicalUrl = `${SITE_URL}${getLocalizedHref('/private-label', lang)}`;

  const privateLabelSchema = {
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
        '@type': 'WebPage',
        '@id': `${canonicalUrl}/#webpage`,
        url: canonicalUrl,
        name: dict?.meta?.title || 'Private Label Moroccan Black Soap',
        description: dict?.meta?.description || 'Private Label Moroccan Black Soap',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/image/private-label-jars.webp`,
          caption: 'Private Label Moroccan Black Soap',
        },
        breadcrumb: { '@id': `${canonicalUrl}/#breadcrumb` },
        inLanguage: lang === 'ar' ? 'ar' : lang === 'fr' ? 'fr' : 'en',
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
            name: commonDict?.nav?.privateLabel || 'Private Label',
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={privateLabelSchema} />
      <main className="min-h-screen bg-white">
        <PrivateLabelContent dict={dict} lang={lang} />
      </main>
    </>
  );
}
