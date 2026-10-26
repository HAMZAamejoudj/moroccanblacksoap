import type { Metadata } from 'next';
import BulkOrderContent from '@/components/sections/BulkOrderContent';
import JsonLd from '@/components/seo/JsonLd';
import { ORGANIZATION, SITE_NAME, SITE_URL } from '@/lib/site';
import { getDictionary } from '@/lib/dictionaries';
import { getLocalizedHref } from '@/lib/utils';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang, 'bulk-order');
  const pageTitle = dict?.meta?.title || 'Bulk Moroccan Black Soap – Wholesale Beldi Soap Supplier';
  const pageDescription = dict?.meta?.description || 'Order authentic Moroccan black soap in bulk. 100% organic Beldi soap for spas, hammams, skincare brands, and private label businesses. Flexible MOQs and worldwide shipping.';
  const canonicalUrl = `${SITE_URL}${getLocalizedHref('/bulk-order', lang)}`;

  return {
    title: { absolute: pageTitle },
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: SITE_NAME,
      locale: lang === 'ar' ? 'ar_MA' : lang === 'fr' ? 'fr_MA' : 'en_US',
      images: [
        {
          url: `${SITE_URL}/image/bulk-soap-barrel-200l.webp`,
          width: 1200,
          height: 1600,
          alt: 'Bulk Moroccan Black Soap Wholesale Supplier',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [`${SITE_URL}/image/bulk-soap-barrel-200l.webp`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BulkOrderPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang, 'bulk-order');
  const commonDict = await getDictionary(lang, 'common');
  const canonicalUrl = `${SITE_URL}${getLocalizedHref('/bulk-order', lang)}`;

  const bulkOrderSchema = {
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
        name: dict?.meta?.title || 'Bulk Moroccan Black Soap',
        description: dict?.meta?.description || 'Bulk Moroccan Black Soap',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/image/bulk-soap-barrel-200l.webp`,
          caption: 'Bulk Moroccan Black Soap Barrels',
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
            name: commonDict?.nav?.bulkOrder || 'Bulk Order',
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={bulkOrderSchema} />
      <main className="min-h-screen bg-white">
        <BulkOrderContent dict={dict} lang={lang} />
      </main>
    </>
  );
}
