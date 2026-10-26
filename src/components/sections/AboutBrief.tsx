import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { getLocalizedHref } from '@/lib/utils';

interface AboutBriefProps {
  dict: any;
  lang: string;
}

const sectionTitleClass = 'text-4xl md:text-5xl font-serif font-bold text-primary leading-tight text-center text-balance mx-auto';
const sectionShellClass = 'container mx-auto max-w-7xl px-6';
const splitGridClass = 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start';
const heroImageClass =
  'relative w-full min-h-[380px] sm:min-h-[440px] md:min-h-[520px] lg:min-h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white';
const sideImageClass =
  'relative w-full min-h-[360px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[560px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white';

const SideHighlights = ({ items }: { items?: string[] }) => {
  if (!items?.length) return null;
  return (
    <ul className="grid gap-3 rounded-2xl border border-stone-100 bg-stone-50 p-5 shadow-sm">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-stone-700 leading-relaxed">
          <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const AboutBrief = ({ dict, lang }: AboutBriefProps) => {
  return (
    <article className="bg-white">
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-white">
        <div className={sectionShellClass}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-[1.15] text-center text-balance mx-auto mb-10 max-w-6xl">
            {dict.hero.title}
          </h1>
          <div className={splitGridClass}>
            <div className="flex flex-col justify-start gap-4 text-lg text-stone-600 leading-relaxed">
              {dict.hero.paragraphs.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <SideHighlights items={dict.hero.highlights} />
            </div>
            <div className={heroImageClass}>
              <Image
                src={dict.hero.image}
                alt={dict.hero.imageAlt}
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 bg-stone-50" aria-labelledby="story-heading">
        <div className={sectionShellClass}>
          <h2 id="story-heading" className={`${sectionTitleClass} mb-10`}>
            {dict.story.title}
          </h2>
          <div className={splitGridClass}>
            <div className={sideImageClass}>
              <Image
                src={dict.story.image}
                alt={dict.story.imageAlt}
                fill
                className="object-cover object-[78%_center]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-start gap-4 text-stone-600 leading-relaxed">
              {dict.story.paragraphs.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <SideHighlights items={dict.story.highlights} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" aria-labelledby="mission-heading">
        <div className={sectionShellClass}>
          <h2 id="mission-heading" className={`${sectionTitleClass} mb-10`}>
            {dict.mission.title}
          </h2>
          <div className={splitGridClass}>
            <p className="text-stone-600 leading-relaxed text-lg lg:text-xl">{dict.mission.description}</p>
            <SideHighlights items={dict.mission.highlights} />
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-50" aria-labelledby="cooperatives-heading">
        <div className={sectionShellClass}>
          <h2 id="cooperatives-heading" className={`${sectionTitleClass} mb-10`}>
            {dict.cooperatives.title}
          </h2>
          <div className={splitGridClass}>
            <div className="space-y-4 text-stone-600 leading-relaxed text-lg">
              {dict.cooperatives.paragraphs.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>{dict.cooperatives.outro}</p>
            </div>
            <ul className="grid gap-4 rounded-2xl border border-stone-100 bg-white p-6 shadow-sm">
              {dict.cooperatives.reasons.map((reason: string) => (
                <li key={reason} className="flex items-start gap-3 text-stone-700 leading-relaxed">
                  <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" aria-labelledby="quality-heading">
        <div className={sectionShellClass}>
          <h2 id="quality-heading" className={`${sectionTitleClass} mb-10`}>
            {dict.quality.title}
          </h2>
          <p className="text-center text-stone-600 leading-relaxed text-lg mb-8 max-w-4xl mx-auto">{dict.quality.intro}</p>
          <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {dict.quality.steps.map((step: string, index: number) => (
              <li key={step} className="flex items-start gap-4 rounded-2xl bg-stone-50 border border-stone-100 p-5 text-stone-600 leading-relaxed">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                  {index + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-center text-stone-600 leading-relaxed mt-8 max-w-4xl mx-auto">{dict.quality.outro}</p>
        </div>
      </section>

      <section className="py-24 bg-stone-50" aria-labelledby="world-heading">
        <div className={sectionShellClass}>
          <h2 id="world-heading" className={`${sectionTitleClass} mb-10`}>
            {dict.world.title}
          </h2>
          <div className={splitGridClass}>
            <div className="flex flex-col justify-start gap-4 text-stone-600 leading-relaxed">
              {dict.world.paragraphs.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <SideHighlights items={dict.world.highlights} />
            </div>
            <div className={sideImageClass}>
              <Image
                src={dict.world.image}
                alt={dict.world.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" aria-labelledby="supply-heading">
        <div className={sectionShellClass}>
          <h2 id="supply-heading" className={`${sectionTitleClass} mb-10`}>
            {dict.supply.title}
          </h2>
          <div className={splitGridClass}>
            <div className="flex flex-col justify-start gap-6">
              <p className="text-stone-600 leading-relaxed">{dict.supply.intro}</p>
              <ul className="grid gap-3">
                {dict.supply.items.map((item: string) => (
                  <li key={item} className="flex items-start gap-3 text-stone-600 leading-relaxed">
                    <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {dict.supply.note ? (
                <p className="text-stone-600 leading-relaxed rounded-2xl border border-stone-100 bg-stone-50 p-5 shadow-sm">
                  {dict.supply.note}
                </p>
              ) : null}
            </div>
            <div className={sideImageClass}>
              <Image
                src={dict.supply.image}
                alt={dict.supply.imageAlt}
                fill
                className="object-cover object-[center_62%]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-50" aria-labelledby="team-heading">
        <div className={sectionShellClass}>
          <h2 id="team-heading" className={`${sectionTitleClass} mb-10`}>
            {dict.team.title}
          </h2>
          <p className="text-center text-stone-600 leading-relaxed text-lg mb-8">{dict.team.intro}</p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dict.team.roles.map((role: string) => (
              <li key={role} className="bg-white rounded-2xl border border-stone-100 p-5 text-stone-600 leading-relaxed shadow-sm">
                {role}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 bg-white" aria-labelledby="trust-heading">
        <div className={sectionShellClass}>
          <h2 id="trust-heading" className={`${sectionTitleClass} mb-10`}>
            {dict.trust.title}
          </h2>
          <div className={splitGridClass}>
            <p className="text-stone-600 leading-relaxed text-lg lg:text-xl">{dict.trust.description}</p>
            <SideHighlights items={dict.trust.highlights} />
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-50" aria-labelledby="values-heading">
        <div className={sectionShellClass}>
          <h2 id="values-heading" className={`${sectionTitleClass} mb-10`}>
            {dict.values.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {dict.values.items.map((item: { title: string; text: string }) => (
              <p key={item.title} className="bg-white rounded-2xl border border-stone-100 p-6 text-stone-600 leading-relaxed shadow-sm">
                <strong className="text-primary">{item.title}. </strong>
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" aria-labelledby="company-heading">
        <div className={sectionShellClass}>
          <h2 id="company-heading" className={`${sectionTitleClass} mb-10`}>
            {dict.company.title}
          </h2>
          <div className={`${splitGridClass} lg:items-center`}>
            <div className="relative mx-auto lg:mx-0 h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 shrink-0">
              <Image
                src={dict.company.logo}
                alt={dict.company.logoAlt}
                fill
                className="object-contain"
                sizes="256px"
              />
            </div>
            <ul className="grid gap-4 rounded-2xl border border-stone-100 bg-stone-50 p-6 shadow-sm">
              {dict.company.items.map((item: string) => (
                <li key={item} className="flex items-start gap-3 text-stone-700 leading-relaxed text-lg">
                  <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-stone-50" aria-labelledby="about-faq-heading">
        <div className={sectionShellClass}>
          <h2 id="about-faq-heading" className={`${sectionTitleClass} mb-10`}>
            {dict.faq.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dict.faq.items.map((item: { question: string; answer: string }) => (
              <div key={item.question} className="rounded-2xl bg-white border border-stone-100 shadow-sm px-6 py-6 text-center">
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{item.question}</h3>
                <span className="mx-auto mb-3 block h-0.5 w-10 rounded-full bg-secondary" />
                <p className="text-stone-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white" aria-labelledby="work-heading">
        <div className={`${sectionShellClass} text-center`}>
          <h2 id="work-heading" className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {dict.cta.title}
          </h2>
          <p className="text-stone-200 leading-relaxed mb-10 max-w-4xl mx-auto text-lg">{dict.cta.description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://wa.me/212638168637"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition-colors"
            >
              {dict.cta.whatsapp}
            </Link>
            <a
              href="mailto:inquiry@moroccanorganica.com"
              className="inline-flex items-center justify-center border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              {dict.cta.email}
            </a>
            <Link
              href={getLocalizedHref('/contact', lang)}
              className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition-colors"
            >
              {dict.cta.quote}
            </Link>
          </div>
          <p className="text-sm text-stone-300 mt-12">{dict.author}</p>
        </div>
      </section>
    </article>
  );
};

export default AboutBrief;
