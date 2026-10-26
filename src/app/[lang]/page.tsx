import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import BulkSupply from "@/components/sections/Ritual";
import ContentDetails from "@/components/sections/ContentDetails";
import HomeContent from "@/components/sections/HomeContent";
import JsonLd from "@/components/seo/JsonLd";
import { getDictionary } from "@/lib/dictionaries";
import { ORGANIZATION, SITE_NAME, SITE_URL } from "@/lib/site";
import { buildPageAlternates } from "@/lib/seo";
import { Metadata } from "next";

interface HomeProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: HomeProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang, "home");
  const pageTitle = dict?.meta?.title || "Wholesale Moroccan Black Soap";
  const pageDescription = dict?.meta?.description || "Authentic bulk Beldi soap";
  const alternates = buildPageAlternates("/", lang);
  const canonicalUrl = alternates.canonical as string;
  const isEnglishBrief = Boolean(dict?.whatIs);

  return {
    title: isEnglishBrief ? { absolute: pageTitle } : pageTitle,
    description: pageDescription,
    alternates,
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: dict?.meta?.ogTitle || pageTitle,
      description: pageDescription,
      siteName: SITE_NAME,
      locale: lang === "ar" ? "ar_MA" : lang === "fr" ? "fr_MA" : "en_US",
      images: isEnglishBrief
        ? [
            {
              url: `${SITE_URL}${dict.hero.image}`,
              alt: dict.hero.imageAlt,
            },
          ]
        : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "home");
  const isEnglishBrief = Boolean(dict?.whatIs);

  const pageUrl = `${SITE_URL}/${lang}`;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: pageUrl,
    inLanguage: lang === "ar" ? "ar" : lang === "fr" ? "fr" : "en",
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION.name,
      sameAs: ORGANIZATION.sameAs,
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Moroccan Black Soap Wholesale",
    url: pageUrl,
    logo: `${SITE_URL}/image/moroccan_black_soap_logo_vector.svg`,
    description:
      "Wholesale supplier of authentic Moroccan black soap (Beldi soap) sourced from Moroccan cooperatives.",
    address: {
      "@type": "PostalAddress",
      streetAddress: ORGANIZATION.address.streetAddress,
      addressLocality: ORGANIZATION.address.addressLocality,
      addressCountry: ORGANIZATION.address.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: ORGANIZATION.phone,
      email: ORGANIZATION.email,
      contactType: "sales",
      availableLanguage: ["English", "French", "Arabic"],
    },
    sameAs: ORGANIZATION.sameAs,
  };

  const faqSchema = isEnglishBrief
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: dict.faq.items.map((item: { question: string; answer: string }) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={
          isEnglishBrief && faqSchema
            ? [websiteSchema, organizationSchema, faqSchema]
            : [websiteSchema, organizationSchema]
        }
      />
      <Hero dict={dict} lang={lang} />
      {isEnglishBrief ? (
        <HomeContent dict={dict} lang={lang} />
      ) : (
        <>
          <Features dict={dict} lang={lang} />
          <BulkSupply dict={dict} lang={lang} />
          <ContentDetails dict={dict} lang={lang} />
        </>
      )}
    </main>
  );
}
