import type { Metadata } from 'next';
import AboutContent from '@/components/sections/AboutContent';
import AboutBrief from '@/components/sections/AboutBrief';
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
  const dict = await getDictionary(lang, 'about');
  const pageTitle = dict?.meta?.title || 'About Moroccan Black Soap – Organic Beldi Soap Supplier';
  const pageDescription = dict?.meta?.description || 'Learn about Moroccan Black Soap, a trusted supplier of authentic Beldi soap from Morocco for wholesale, private label, hammam, spa and skincare brands.';
  const alternates = buildPageAlternates('/about', lang);
  const canonicalUrl = alternates.canonical as string;
  const isEnglishBrief = dict?.brief === true;

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
          url: isEnglishBrief
            ? `${SITE_URL}/image/black-soap-argan-enriched.webp`
            : `${SITE_URL}/image/beldi-black-soap-paste.webp`,
          alt: isEnglishBrief
            ? dict.hero.imageAlt
            : 'Traditional Moroccan black Beldi soap',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [`${SITE_URL}/image/beldi-black-soap-paste.webp`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang, 'about');
  const commonDict = await getDictionary(lang, 'common');
  const canonicalUrl = `${SITE_URL}${getLocalizedHref('/about', lang)}`;
  const isEnglishBrief = dict?.brief === true;

  const englishSchema = isEnglishBrief
    ? [
        {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Moroccan Black Soap',
          url: canonicalUrl,
          mainEntity: {
            '@type': 'Organization',
            name: 'Moroccan Black Soap Wholesale',
            url: `${SITE_URL}/`,
            logo: `${SITE_URL}/image/moroccan_black_soap_logo_vector.svg`,
            description:
              'Wholesale supplier of authentic Moroccan black soap (Beldi soap) sourced from Moroccan cooperatives.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: ORGANIZATION.address.streetAddress,
              addressLocality: ORGANIZATION.address.addressLocality,
              addressCountry: ORGANIZATION.address.addressCountry,
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: ORGANIZATION.phone,
              email: ORGANIZATION.email,
              contactType: 'sales',
              availableLanguage: ['English', 'French', 'Arabic'],
            },
            sameAs: [...ORGANIZATION.sameAs],
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: dict.faq.items.map((item: { question: string; answer: string }) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        },
      ]
    : null;

  const aboutSchema = {
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
        knowsAbout: [
          'Moroccan black soap',
          'Beldi soap',
          'Wholesale Moroccan black soap',
          'Private label Moroccan black soap',
          'Hammam skincare products',
          'Organic Beldi soap',
        ],
      },
      {
        '@type': 'AboutPage',
        '@id': `${canonicalUrl}/#webpage`,
        url: canonicalUrl,
        name: dict?.meta?.title || 'About Moroccan Black Soap',
        description: dict?.meta?.description || 'Learn about Moroccan Black Soap',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/image/beldi-black-soap-paste.webp`,
          caption: 'Traditional Moroccan black Beldi soap',
        },
        breadcrumb: { '@id': `${canonicalUrl}/#breadcrumb` },
        inLanguage: lang === 'ar' ? 'ar' : lang === 'fr' ? 'fr' : 'en',
        mainEntity: { '@id': `${SITE_URL}/#organization` },
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
            name: commonDict?.nav?.about || 'About',
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={isEnglishBrief ? englishSchema! : aboutSchema} />
      <main className="min-h-screen bg-white">
        {isEnglishBrief ? (
          <AboutBrief dict={dict} lang={lang} />
        ) : (
          <AboutContent dict={dict} lang={lang} />
        )}
      </main>
    </>
  );
}
