'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getLocalizedHref } from '@/lib/utils';

const audiences = [
  'Cosmetic brands',
  'Spas and wellness centers',
  'Private label beauty lines',
  'Retailers and online stores',
];

interface HeroProps {
  dict: any;
  lang: string;
}

const Hero = ({ dict, lang }: HeroProps) => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const currentAudiences = dict?.hero?.audiences || audiences;
  const heroParagraphs: string[] | undefined = dict?.hero?.paragraphs;

  if (heroParagraphs) {
    return (
      <section className="relative flex min-h-[100svh] items-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={dict.hero.image}
            alt={dict.hero.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-emerald-950/65" />
        </div>
        <div className="relative z-10 container mx-auto px-6 py-32 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1]"
            >
              {dict.hero.title}
            </motion.h1>
            <div className="space-y-4 max-w-3xl mx-auto">
              {heroParagraphs.map((paragraph) => (
                <motion.p
                  key={paragraph}
                  variants={fadeInUp}
                  className="text-base md:text-lg text-white/90 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
            >
              <Link
                href="https://wa.me/212638168637"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-secondary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-amber-400 transition-colors"
              >
                {dict.hero.ctaQuote}
                <ArrowRight size={20} />
              </Link>
              <Link
                href={getLocalizedHref('/contact', lang)}
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-colors"
              >
                {dict.hero.ctaSamples}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-32 pb-16">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-950/5 skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8 max-w-2xl"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-[1.15]">
                {dict?.hero?.title || 'Authentic Moroccan Black Soap Wholesale'}{' '}
                <span className="text-secondary">{dict?.hero?.titleHighlight || 'Pure, Organic Beldi Soap'}</span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-stone-600 leading-relaxed font-sans"
            >
              {dict?.hero?.description ||
                'Welcome to Moroccan Black Soap Wholesale. We supply 100% authentic, organic Beldi soap in bulk — sourced directly from Moroccan cooperatives, produced using traditional methods, and available for wholesale and export.'}
            </motion.p>

            <motion.ul
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2"
            >
              {currentAudiences.map((item: string) => (
                <li key={item} className="flex items-center gap-2 text-stone-600 text-sm">
                  <CheckCircle2 size={14} className="text-secondary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 pt-2">
              <Link
                href="https://wa.me/212638168637"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 bg-primary text-neutral px-8 py-5 rounded-full text-lg font-bold hover:bg-emerald-900 transition-all duration-300 shadow-xl hover:shadow-primary/20"
              >
                {dict?.hero?.ctaQuote || 'Request a Quote'}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="#pricing"
                className="flex items-center justify-center gap-2 border-2 border-primary/20 text-primary px-8 py-5 rounded-full text-lg font-bold hover:border-secondary hover:text-secondary transition-all duration-300"
              >
                {dict?.hero?.ctaPricing || 'View Pricing'}
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-8 pt-2"
            >
              <div className="flex flex-col">
                <span className="text-primary font-bold text-xl font-serif">100%</span>
                <span className="text-xs text-stone-500 uppercase tracking-tighter">
                  {dict?.hero?.statsOrganic || 'Organic'}
                </span>
              </div>
              <div className="w-px h-8 bg-stone-200" />
              <div className="flex flex-col">
                <span className="text-primary font-bold text-xl font-serif">
                  ECOCERT
                </span>
                <span className="text-xs text-stone-500 uppercase tracking-tighter">
                  {dict?.hero?.statsCertified || 'Certified'}
                </span>
              </div>
              <div className="w-px h-8 bg-stone-200" />
              <div className="flex flex-col">
                <span className="text-primary font-bold text-xl font-serif">
                  {lang === 'ar' ? 'جاهز' : lang === 'fr' ? 'Prêt' : 'Export'}
                </span>
                <span className="text-xs text-stone-500 uppercase tracking-tighter">
                  {dict?.hero?.statsReady || 'Ready'}
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square relative rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-stone-200">
              <Image
                src={dict?.hero?.image || '/assets/hero/hero-product.png'}
                alt={dict?.hero?.imageAlt || 'Wholesale Moroccan black Beldi soap bulk supply'}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
