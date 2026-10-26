'use client';

import {
  Brush,
  Droplets,
  ShieldCheck,
  Scale,
  Crown,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getLocalizedHref } from '@/lib/utils';

interface FeaturesProps {
  dict: any;
  lang: string;
}

const Features = ({ dict, lang }: FeaturesProps) => {
  const localizedFeatures = [
    {
      icon: Brush,
      title: dict?.features?.items?.exfoliation?.title || 'Exfoliation',
      description:
        dict?.features?.items?.exfoliation?.description ||
        'Naturally removes dead skin cells, ideal for skincare formulations and spa treatments.',
    },
    {
      icon: Droplets,
      title: dict?.features?.items?.moisturizing?.title || 'Moisturizing',
      description:
        dict?.features?.items?.moisturizing?.description ||
        'Rich in natural oils, leaving skin soft and nourished after every application.',
    },
    {
      icon: ShieldCheck,
      title: dict?.features?.items?.detoxifying?.title || 'Detoxifying',
      description:
        dict?.features?.items?.detoxifying?.description ||
        'Cleanses pores and draws out impurities for a deep, natural cleanse.',
    },
    {
      icon: Scale,
      title: dict?.features?.items?.balancing?.title || 'Skin Balancing',
      description:
        dict?.features?.items?.balancing?.description ||
        'Suitable for all skin types, including sensitive skin — a versatile wholesale ingredient.',
    },
    {
      icon: Crown,
      title: dict?.features?.items?.luxury?.title || 'Luxury Appeal',
      description:
        dict?.features?.items?.luxury?.description ||
        'Authentic Moroccan heritage, highly valued in natural skincare and premium spa lines.',
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              {dict?.features?.sectionLabel || 'Product Benefits'}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              {dict?.features?.title || 'Why Choose Moroccan Black Soap'}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              {dict?.features?.description1 ||
                "Moroccan black soap, or Beldi soap, is one of Morocco's most treasured natural skincare products. Traditionally used in hammams and daily beauty routines, it is made from olive oil, crushed olives, and natural minerals."}
            </p>
            <p className="text-stone-600 leading-relaxed">
              {dict?.features?.description2 ||
                'Used on its own, or combined with Rhassoul clay, Argan oil, or essential oils, Moroccan black soap can elevate any spa or cosmetic product line.'}
            </p>
            <div className="mt-8">
              <Link
                href={getLocalizedHref('/benefits', lang)}
                className="inline-flex items-center gap-2 bg-primary text-white hover:bg-secondary hover:text-primary px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
              >
                {dict?.features?.ctaButton || 'Discover All Benefits'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white group"
          >
            <Image
              src="/image/moroccan-black-soap-hero.webp"
              alt="Authentic Moroccan black Beldi soap texture and color"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-7 mt-12 lg:mt-16 pt-8">
          {localizedFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="relative w-full bg-white rounded-3xl pt-14 pb-9 px-5 shadow-sm border-2 border-stone-200 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-2 group-hover:border-primary/25 h-full min-h-[200px]">
                  {/* Floating icon badge */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-emerald-800 flex items-center justify-center shadow-lg ring-4 ring-white group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-7 h-7 text-secondary" strokeWidth={1.75} />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-primary mb-3 leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-stone-500 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
