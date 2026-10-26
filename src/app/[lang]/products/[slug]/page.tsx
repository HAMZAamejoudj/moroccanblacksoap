import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import { getProduct, products } from '@/lib/products';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import { getLocalizedHref } from '@/lib/utils';
import { buildPageAlternates } from '@/lib/seo';

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export function generateStaticParams() {
  return ['en', 'fr', 'ar'].flatMap((lang) =>
    products.map((product) => ({ lang, slug: product.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const alternates = buildPageAlternates(`/products/${product.slug}`, lang);
  const canonicalUrl = alternates.canonical as string;
  const title = `${product.title} | Moroccan Black Soap Wholesale`;

  return {
    title: { absolute: title },
    description: product.summary,
    alternates,
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title,
      description: product.summary,
      siteName: SITE_NAME,
      images: [{ url: `${SITE_URL}${product.image}`, alt: product.imageAlt }],
    },
  };
}

const sectionTitle = 'text-2xl md:text-3xl font-serif font-bold text-primary mb-6';
const cardClass = 'rounded-2xl border border-stone-100 bg-white p-5 shadow-sm text-stone-600 leading-relaxed';

export default async function ProductPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: [...product.paragraphs, product.note].join(' '),
    image: `${SITE_URL}${product.image}`,
    brand: { '@type': 'Brand', name: SITE_NAME },
  };

  return (
    <main className="min-h-screen bg-stone-50 pt-32 pb-24">
      <JsonLd data={productSchema} />
      <div className="container mx-auto max-w-7xl px-6">
        <Link
          href={`${getLocalizedHref('/', lang)}#range`}
          className="inline-flex text-sm font-medium text-primary hover:text-secondary"
        >
          Back to the range
        </Link>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary text-center text-balance mt-8 mb-10">
          {product.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start mb-16">
          <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              priority
              className="object-contain bg-white p-4 object-center"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p className="text-xl text-primary font-medium">{product.summary}</p>
            {product.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={getLocalizedHref('/contact', lang)}
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-900 transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="https://wa.me/212638168637"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition-colors"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <section aria-labelledby="product-highlights">
            <h2 id="product-highlights" className={sectionTitle}>
              Key points
            </h2>
            <ul className="grid gap-3">
              {product.highlights.map((item) => (
                <li key={item} className={`flex items-start gap-3 ${cardClass}`}>
                  <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="product-ideal">
            <h2 id="product-ideal" className={sectionTitle}>
              Ideal for
            </h2>
            <ul className="grid gap-3">
              {product.idealFor.map((item) => (
                <li key={item} className={`flex items-start gap-3 ${cardClass}`}>
                  <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <section aria-labelledby="product-usage">
            <h2 id="product-usage" className={sectionTitle}>
              How to use (hammam protocol)
            </h2>
            <ol className="grid gap-3">
              {product.usageSteps.map((step, index) => (
                <li key={step} className={`flex items-start gap-4 ${cardClass}`}>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </section>
          <section aria-labelledby="product-packaging">
            <h2 id="product-packaging" className={sectionTitle}>
              Packaging options
            </h2>
            <ul className="grid gap-3">
              {product.packaging.map((item) => (
                <li key={item} className={`flex items-start gap-3 ${cardClass}`}>
                  <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <section aria-labelledby="product-specs">
            <h2 id="product-specs" className={sectionTitle}>
              Specifications
            </h2>
            <dl className={`divide-y divide-stone-100 ${cardClass} p-0 overflow-hidden`}>
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex flex-col sm:flex-row sm:gap-4 px-5 py-4 even:bg-stone-50/80">
                  <dt className="font-semibold text-primary shrink-0 sm:w-40">{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section aria-labelledby="product-docs">
            <h2 id="product-docs" className={sectionTitle}>
              Documentation with your order
            </h2>
            <ul className="grid gap-3 mb-6">
              {product.documents.map((item) => (
                <li key={item} className={`flex items-start gap-3 ${cardClass}`}>
                  <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className={`${cardClass} bg-primary/5 border-primary/10 text-stone-700`}>{product.note}</p>
          </section>
        </div>

        <section className="rounded-3xl bg-primary text-white px-8 py-10 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Order {product.title}</h2>
          <p className="text-stone-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Request samples, a bulk quote or a private label estimate. We reply from Marrakesh with pricing, lead time and
            documents for your market.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={getLocalizedHref('/contact', lang)}
              className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="https://wa.me/212638168637"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              WhatsApp +212638168637
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
