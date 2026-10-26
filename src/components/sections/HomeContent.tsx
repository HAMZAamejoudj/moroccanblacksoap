import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { products } from '@/lib/products';
import { getLocalizedHref } from '@/lib/utils';

interface HomeContentProps {
  dict: any;
  lang: string;
}

const sectionTitleClass = 'text-4xl md:text-5xl font-serif font-bold text-primary leading-tight';

const HomeContent = ({ dict, lang }: HomeContentProps) => {
  const whatIs = dict.whatIs;
  const audiences = dict.audiences;
  const why = dict.why;
  const range = dict.range;
  const sourcing = dict.sourcing;
  const pricing = dict.pricing;
  const privateLabel = dict.privateLabel;
  const authentic = dict.authentic;
  const ordering = dict.ordering;
  const faq = dict.faq;
  const cta = dict.cta;

  return (
    <>
      <div className="bg-stone-50">
      <section className="py-24" aria-labelledby="what-is-heading">
        <div className="container mx-auto px-6">
          <h2 id="what-is-heading" className={`${sectionTitleClass} text-center text-balance mx-auto mb-14`}>
            {whatIs.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 lg:gap-12 items-stretch">
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src={whatIs.image}
                alt={whatIs.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 34vw, 100vw"
              />
            </div>
            <div className="space-y-3 text-stone-600 leading-relaxed">
              {whatIs.paragraphs.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="rounded-2xl bg-white border border-stone-100 p-5 shadow-sm space-y-3">
                <p className="font-medium text-primary">{whatIs.compositionIntro}</p>
                <ul className="space-y-2">
                  {whatIs.ingredients.map((item: string) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p>{whatIs.analysis}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" aria-labelledby="audiences-heading">
        <div className="container mx-auto px-6">
          <h2 id="audiences-heading" className={`${sectionTitleClass} text-center text-balance mx-auto mb-10`}>
            {audiences.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="flex flex-col justify-start gap-4">
              <p className="text-stone-600 leading-relaxed">{audiences.intro}</p>
              <div className="space-y-4">
                {audiences.items.map((item: string) => (
                  <p key={item} className="text-stone-600 leading-relaxed border-l-2 border-secondary/60 pl-4">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative min-h-[280px] self-stretch rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src={audiences.image}
                alt={audiences.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" aria-labelledby="why-heading">
        <div className="container mx-auto px-6">
          <h2 id="why-heading" className={`${sectionTitleClass} text-center text-balance mx-auto mb-10`}>
            {why.title}
          </h2>
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border-8 border-white mb-10">
            <Image
              src={why.image}
              alt={why.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 70vw, 100vw"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {why.items.map((item: { title: string; text: string }) => (
              <p key={item.title} className="bg-white rounded-2xl border border-stone-100 p-6 text-stone-600 leading-relaxed shadow-sm">
                <strong className="text-primary">{item.title}. </strong>
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="range" className="py-24" aria-labelledby="range-heading">
        <div className="container mx-auto px-6">
          <h2 id="range-heading" className={`${sectionTitleClass} text-center text-balance mx-auto mb-10`}>
            {range.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={getLocalizedHref(`/products/${product.slug}`, lang)}
                aria-label={`${product.title} — wholesale product details`}
                className="group flex flex-col rounded-3xl overflow-hidden border border-stone-100 bg-white shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-contain bg-white p-2 sm:p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-stone-100 bg-white p-6">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-2">{product.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{product.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" aria-labelledby="sourcing-heading">
        <div className="container mx-auto px-6">
          <h2 id="sourcing-heading" className={`${sectionTitleClass} text-center text-balance mx-auto mb-10`}>
            {sourcing.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="flex flex-col justify-start gap-4 text-stone-600 leading-relaxed">
              {sourcing.paragraphs.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul className="space-y-2">
                {sourcing.points.map((point: string) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[280px] self-stretch rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src={sourcing.image}
                alt={sourcing.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24" aria-labelledby="pricing-heading">
        <div className="container mx-auto px-6">
          <h2 id="pricing-heading" className={`${sectionTitleClass} text-center text-balance mx-auto mb-10`}>
            {pricing.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-12">
            <div className="flex flex-col justify-start gap-6">
              <p className="text-stone-600 leading-relaxed">{pricing.note}</p>
              <div className="space-y-3">
                <p className="text-secondary font-bold uppercase tracking-widest text-xs">{pricing.packagingTitle}</p>
                <ul className="space-y-2">
                  {pricing.packaging.map((item: string) => (
                    <li key={item} className="flex items-start gap-3 text-stone-600 leading-relaxed">
                      <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative min-h-[280px] self-stretch rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src={pricing.image}
                alt={pricing.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-5 font-serif font-bold text-sm uppercase tracking-wider">
                      {pricing.headers.quantity}
                    </th>
                    <th className="px-6 py-5 font-serif font-bold text-sm uppercase tracking-wider">
                      {pricing.headers.price}
                    </th>
                    <th className="px-6 py-5 font-serif font-bold text-sm uppercase tracking-wider">
                      {pricing.headers.packaging}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.rows.map((row: { quantity: string; price: string; packaging: string }, index: number) => (
                    <tr
                      key={row.quantity}
                      className={`border-t border-stone-100 ${index % 2 === 0 ? 'bg-neutral/30' : 'bg-white'}`}
                    >
                      <td className="px-6 py-5 font-bold text-primary">{row.quantity}</td>
                      <td className="px-6 py-5 text-secondary font-bold text-lg">{row.price}</td>
                      <td className="px-6 py-5 text-stone-600 text-sm">{row.packaging}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" aria-labelledby="private-label-heading">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 id="private-label-heading" className={`${sectionTitleClass} text-center text-balance mx-auto mb-10`}>
            {privateLabel.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center justify-center rounded-3xl border border-stone-100 bg-white px-8 py-10 shadow-sm">
                <div className="relative h-44 w-full max-w-[280px] sm:h-52">
                  <Image
                    src={privateLabel.logo ?? privateLabel.image}
                    alt={privateLabel.logoAlt ?? privateLabel.imageAlt}
                    fill
                    className="object-contain"
                    sizes="280px"
                  />
                </div>
                {privateLabel.tagline ? (
                  <p className="mt-6 text-center text-sm font-semibold uppercase tracking-[0.12em] text-primary/80">
                    {privateLabel.tagline}
                  </p>
                ) : null}
              </div>
              <div className="relative aspect-[16/10] rounded-3xl border border-stone-100 bg-white overflow-hidden shadow-sm">
                <Image
                  src={privateLabel.image}
                  alt={privateLabel.imageAlt}
                  fill
                  className="object-contain bg-white p-3"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-6 rounded-3xl border border-stone-100 bg-stone-50 p-8 lg:p-10 shadow-sm">
              <p className="text-lg text-stone-600 leading-relaxed">{privateLabel.description}</p>
              <ul className="grid gap-3">
                {privateLabel.points.map((point: string) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-2xl bg-white border border-stone-100 px-4 py-3 text-stone-600 leading-relaxed shadow-sm"
                  >
                    <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={getLocalizedHref('/private-label', lang)}
                className="inline-flex items-center justify-center self-start bg-primary text-white px-8 py-3.5 rounded-full font-bold hover:bg-emerald-900 transition-colors"
              >
                Explore private label services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" aria-labelledby="authentic-heading">
        <div className="container mx-auto px-6">
          <h2 id="authentic-heading" className={`${sectionTitleClass} text-center text-balance mb-10`}>
            {authentic.title}
          </h2>
          <ol className="mx-auto max-w-3xl rounded-2xl bg-white border border-stone-100 shadow-sm divide-y divide-stone-100">
            {authentic.items.map((item: string, index: number) => (
              <li key={item} className="flex items-start gap-4 p-5 text-stone-600 leading-relaxed">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                  {index + 1}
                </span>
                <span className="pt-1">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24" aria-labelledby="ordering-heading">
        <div className="container mx-auto px-6">
          <h2 id="ordering-heading" className={`${sectionTitleClass} text-center text-balance mb-10`}>
            {ordering.title}
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ordering.steps.map((step: string, index: number) => (
              <li key={step} className="flex items-start gap-4 rounded-2xl bg-white border border-stone-100 p-5 text-stone-600 leading-relaxed shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-primary text-sm font-bold">
                  {index + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className="py-24" aria-labelledby="faq-heading">
        <div className="container mx-auto px-6">
          <h2 id="faq-heading" className={`${sectionTitleClass} text-center text-balance mb-10`}>
            {faq.title}
          </h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-4">
            {faq.items.map((item: { question: string; answer: string }, index: number) => (
              <div
                key={item.question}
                className={`rounded-2xl bg-white border border-stone-100 shadow-sm px-6 py-6 text-center ${
                  index === faq.items.length - 1 && faq.items.length % 2 === 1 ? 'md:col-span-2 md:max-w-xl md:justify-self-center' : ''
                }`}
              >
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{item.question}</h3>
                <span className="mx-auto mb-3 block h-0.5 w-10 rounded-full bg-secondary" />
                <p className="text-stone-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      <section className="py-24 bg-primary text-white" aria-labelledby="order-heading">
        <div className="container mx-auto px-6 text-center">
          <h2 id="order-heading" className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {cta.title}
          </h2>
          <p className="text-stone-200 leading-relaxed mb-10">{cta.description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://wa.me/212638168637"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition-colors"
            >
              {cta.whatsapp}
            </Link>
            <a
              href="mailto:inquiry@moroccanorganica.com"
              className="inline-flex items-center justify-center border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              {cta.email}
            </a>
            <Link
              href={getLocalizedHref('/contact', lang)}
              className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition-colors"
            >
              {cta.quote}
            </Link>
          </div>
          <p className="text-sm text-stone-300 mt-12">{dict.author}</p>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
