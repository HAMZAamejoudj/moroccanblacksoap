import type { Metadata } from 'next';
import ContactContent from '@/components/sections/ContactContent';
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
  const dict = await getDictionary(lang, 'contact');
  const pageTitle = dict?.meta?.title || 'Contact Moroccan Black Soap Supplier – Wholesale & Private Label';
  const pageDescription = dict?.meta?.description || 'Get in touch with our team for authentic Moroccan black soap wholesale orders, private label quotes, free sample requests, and global logistics information.';
  const alternates = buildPageAlternates('/contact', lang);
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
          alt: 'Contact Moroccan Black Soap Supplier',
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

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang, 'contact');
  const commonDict = await getDictionary(lang, 'common');
  const canonicalUrl = `${SITE_URL}${getLocalizedHref('/contact', lang)}`;

  const contactSchema = {
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
        '@type': 'ContactPage',
        '@id': `${canonicalUrl}/#contactpage`,
        url: canonicalUrl,
        name: dict?.meta?.title || 'Contact Moroccan Black Soap Supplier',
        description: dict?.meta?.description || 'Get in touch with our team',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        breadcrumb: { '@id': `${canonicalUrl}/#breadcrumb` },
        inLanguage: lang === 'ar' ? 'ar' : lang === 'fr' ? 'fr' : 'en',
        mainEntity: {
          '@type': 'Organization',
          name: ORGANIZATION.name,
          email: ORGANIZATION.email,
          telephone: ORGANIZATION.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: ORGANIZATION.address.streetAddress,
            addressLocality: ORGANIZATION.address.addressLocality,
            addressCountry: ORGANIZATION.address.addressCountry,
          },
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
            name: commonDict?.nav?.contact || 'Contact',
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={contactSchema} />
      <main className="min-h-screen bg-white">
        <ContactContent dict={dict} lang={lang} />
      </main>
    </>
  );
}
