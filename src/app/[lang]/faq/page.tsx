import type { Metadata } from 'next';
import FaqContent from '@/components/sections/FaqContent';
import JsonLd from '@/components/seo/JsonLd';
import { ORGANIZATION, SITE_NAME, SITE_URL } from '@/lib/site';
import { getDictionary } from '@/lib/dictionaries';
import { getLocalizedHref } from '@/lib/utils';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang, 'faq');
  const pageTitle = dict?.meta?.title || 'Moroccan Black Soap FAQ – Wholesale & Private Label Questions';
  const pageDescription = dict?.meta?.description || 'Find answers to frequently asked questions about Moroccan black soap (Beldi soap) wholesale supply, bulk ordering, private label branding, shipping, and export certifications.';
  const canonicalUrl = `${SITE_URL}${getLocalizedHref('/faq', lang)}`;

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
          url: `${SITE_URL}/image/wholesale-black-soap-display.webp`,
          width: 1200,
          height: 1200,
          alt: 'Frequently Asked Questions - Moroccan Black Soap',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [`${SITE_URL}/image/wholesale-black-soap-display.webp`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function FaqPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang, 'faq');
  const commonDict = await getDictionary(lang, 'common');
  const canonicalUrl = `${SITE_URL}${getLocalizedHref('/faq', lang)}`;

  const faqSchema = {
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
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}/#faqpage`,
        url: canonicalUrl,
        name: dict?.meta?.title || 'Moroccan Black Soap FAQ',
        description: dict?.meta?.description || 'Frequently Asked Questions',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        breadcrumb: { '@id': `${canonicalUrl}/#breadcrumb` },
        inLanguage: lang === 'ar' ? 'ar' : lang === 'fr' ? 'fr' : 'en',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Moroccan Black Soap (Beldi soap)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Moroccan black soap, known locally as Beldi soap, is a 100% natural, soft, paste-like soap traditionally made from pure saponified olive oil and crushed black olives. Rich in vitamin E, it is renowned for its skin-softening, deep-cleansing, and exfoliating properties.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you use Moroccan black soap in a traditional hammam ritual?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Apply a thin layer of the soap onto warm, damp skin in a hot bath or steam room. Leave it on for 5 to 10 minutes to soften the skin. Rinse thoroughly with warm water until no soap remains, then scrub the skin firmly in long strokes using a Moroccan Kessa exfoliating glove to roll away dead skin cells and impurities.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is your minimum order quantity (MOQ) for wholesale orders?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our standard wholesale minimum order quantity starts at 50 units for pre-packaged retail-ready jars, and 25 kg for raw bulk paste. We offer flexible options for growing brands, boutique spas, and startups to scale gradually.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does your Private Label program work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our private label program is a complete turn-key solution. You select the formulation (e.g., Eucalyptus Beldi) and packaging (e.g., glass jar or plastic tub), send us your logo and design guidelines, and we handle the manufacturing, filling, labeling, and export-compliant shipping under your brand name.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you ship internationally and provide certificate documentation for customs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, we ship worldwide via express carriers (DHL, FedEx) or palletized air/sea freight directly from Morocco. Every export shipment is accompanied by a Certificate of Analysis (COA), Safety Data Sheets (SDS), Material Safety Data Sheets (MSDS), and organic certificates where applicable.',
            },
          },
        ],
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
            name: commonDict?.nav?.faq || 'FAQ',
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <main className="min-h-screen bg-white">
        <FaqContent dict={dict} lang={lang} />
      </main>
    </>
  );
}
