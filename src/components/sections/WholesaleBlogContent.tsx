'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ShoppingBag,
  Layers,
  Award,
  Shield,
  HelpCircle,
  TrendingUp,
  Bookmark,
  ArrowUpRight,
  ChevronRight,
  UserCheck,
  Gem,
} from 'lucide-react';

const sectionHeadingClass =
  'text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6 leading-tight';
const sectionLabelClass =
  'text-secondary font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block';
const bodyClass = 'text-stone-600 leading-relaxed text-base md:text-lg';

interface WholesaleBlogContentProps {
  dict: any;
  lang: string;
}

const WholesaleBlogContent = ({ dict, lang }: WholesaleBlogContentProps) => {
  // Safe fallbacks for arrays
  const characteristics = dict?.what?.characteristics || [
    'Soft paste-like consistency',
    '100% Olive-oil & olive base',
    'Rich in vitamin E',
    'No chemical foaming agents'
  ];

  const pairings = dict?.trends?.pairings || [
    'Organic Argan Oil',
    'Rhassoul Clay',
    'Prickly Pear Seed Oil',
    'Exfoliating Kessa Gloves'
  ];

  const targets = dict?.professional?.targets || [
    'Skincare brands',
    'Spas and hammams',
    'Beauty retailers',
    'Natural cosmetic shops',
    'Private label companies',
    'Online stores',
    'Hotels and wellness centers',
    'Distributors and importers'
  ];

  const services = dict?.private?.services || [
    'Custom jar filling and sizing options',
    'Label design and compliance alignment support',
    'Infusions with custom scents (Eucalyptus, Argan, Rose, etc.)',
    'Box packaging and shipping configurations'
  ];

  const checklist = dict?.choose?.checklist || [
    {
      title: 'Check the Texture & Consistency',
      desc: 'The black soap paste should be smooth, easy to apply, and consistent from batch to batch without becoming watery.'
    },
    {
      title: 'Verify Documentation & Testing',
      desc: 'Ensure your supplier provides certificate analysis papers (COA), safety data sheets (SDS), and compliance logs.'
    },
    {
      title: 'Assess Packaging Quality',
      desc: 'Proper airtight packaging prevents leaks, preserves the soap, and withstands air and sea freight conditions.'
    },
    {
      title: 'Review Communication & Logistics',
      desc: 'Choose a supplier with clear communication, transparent pricing, and robust export experience.'
    }
  ];

  const benefits = dict?.benefits?.items || [
    {
      title: 'Market Differentiation',
      text: 'Allows you to stand out from regular skincare lines by offering a traditional hammam ritual product.'
    },
    {
      title: 'Authentic Storytelling',
      text: 'Connects easily with consumers through natural skincare heritage, Moroccan cooperatives, and self-care.'
    },
    {
      title: 'High Profit Margins',
      text: 'Bulk buying allows for low unit cost. When packaged beautifully under your brand, it offers great premium margins.'
    }
  ];

  const benefitsIcons = [Gem, Bookmark, TrendingUp];

  return (
    <article className="bg-white overflow-hidden">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-stone-50 via-white to-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-950/5 skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mx-auto">
            {/* Left Column: Title & Intro */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-2 mb-4">
                <Bookmark className="text-secondary" size={16} />
                <span className="text-xs uppercase tracking-wider font-bold text-secondary">{dict?.hero?.label || 'B2B Sourcing Guide'}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-[1.15] mb-8">
                {dict?.hero?.title || 'Moroccan Black Soap Wholesale Supplier'}
              </h1>
              
              <div className="space-y-6 text-stone-600">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-emerald-900 leading-snug">
                  {dict?.hero?.subtitle || 'Moroccan Black Soap Wholesale: A Natural Beauty Essential for Skincare Brands'}
                </h2>
                <p className={bodyClass}>
                  {dict?.hero?.description || 'Moroccan black soap, also known as Beldi soap, is one of the most iconic traditional beauty products from Morocco. Used for generations in Moroccan hammams, this natural soap has become popular worldwide among skincare brands, spas, wellness centers, beauty retailers, and private label businesses looking for authentic Moroccan body care products.'}
                </p>
                <p className={bodyClass}>
                  {dict?.hero?.intro || 'If your business is searching for Moroccan black soap wholesale, choosing the right supplier is important. Quality, texture, packaging, consistency, and professional support can make a big difference in your final product and customer satisfaction.'}
                </p>
              </div>
            </motion.div>

            {/* Right Column: Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-secondary/20 pointer-events-none translate-x-3 translate-y-3" />
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-2" />
              
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10">
                <Image
                  src="/image/about-hammam-scene.webp"
                  alt="Traditional Moroccan hammam with Beldi soap and kessa glove"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/95 to-transparent p-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Award size={16} className="text-secondary" />
                    <span className="text-xs uppercase tracking-wider font-bold text-secondary">Export Certified</span>
                  </div>
                  <p className="font-serif font-bold text-lg">Direct From Morocco</p>
                  <p className="text-xs text-stone-200">Spas, Hammams & Skincare Brands</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* What is Moroccan Black Soap Section */}
      <section className="py-24 bg-stone-50 relative" aria-labelledby="about-soap-heading">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl border-2 border-emerald-950/10 pointer-events-none -translate-x-3 -translate-y-3" />
              <div className="absolute inset-0 bg-secondary/5 rounded-3xl rotate-2" />
              
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10">
                <Image
                  src="/image/product-natural-beldi.webp"
                  alt="Natural Beldi Soap 250 g jar — Moroccan Organica wholesale grade"
                  fill
                  className="object-contain bg-white p-4 hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-stone-100">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">Traditional Ritual</span>
                </div>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className={sectionLabelClass}>{dict?.what?.label || 'Product Overview'}</span>
                <h2 id="about-soap-heading" className={sectionHeadingClass}>
                  {dict?.what?.title || 'What Is Moroccan Black Soap?'}
                </h2>
                <p className={bodyClass}>
                  {dict?.what?.desc || 'Moroccan black soap is a soft, paste-like soap traditionally made with olive-based ingredients. Unlike regular solid soaps, it has a smooth and creamy texture that makes it easy to apply on the skin. It is commonly used before exfoliation in hammam rituals, especially with a Kessa glove.'}
                </p>
                <p className="text-stone-600 mt-4 leading-relaxed">
                  {dict?.what?.desc2 || 'Its natural appearance, deep color, and traditional origin make it attractive for brands that want to offer authentic Moroccan skincare products. Many beauty businesses use black soap as part of body care collections, spa treatments, hammam kits, exfoliating routines, and natural skincare lines.'}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                <p className="font-bold text-primary text-base">{dict?.what?.boxTitle || 'Key Characteristics:'}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-700 text-sm font-medium">
                  {characteristics.map((char: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-secondary shrink-0" />
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Moroccan Black Soap Is Popular in Wholesale Beauty Section */}
      <section className="py-24 bg-white relative" aria-labelledby="popularity-heading">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className={sectionLabelClass}>{dict?.trends?.label || 'Market Trends'}</span>
                <h2 id="popularity-heading" className={sectionHeadingClass}>
                  {dict?.trends?.title || 'Why It Is Popular in Wholesale Beauty'}
                </h2>
                <p className={bodyClass}>
                  {dict?.trends?.desc || 'The global demand for natural and traditional beauty products continues to grow. Customers are increasingly interested in simple, authentic, and culture-inspired skincare. Moroccan black soap fits perfectly into this trend because it combines tradition, wellness, and natural beauty positioning.'}
                </p>
                <p className="text-stone-600 mt-4 leading-relaxed">
                  {dict?.trends?.desc2 || 'For businesses, wholesale Moroccan black soap is a strong product because it can be sold in many formats. It works well for online stores, beauty shops, spas, hammams, salons, hotels, concept stores, and private label brands.'}
                </p>
              </div>

              <div className="bg-emerald-950/5 p-6 rounded-2xl border border-emerald-950/10 space-y-3">
                <p className="font-bold text-primary text-sm uppercase tracking-wider">{dict?.trends?.boxTitle || 'Perfect Product Pairings'}</p>
                <p className="text-stone-600 text-sm">
                  {dict?.trends?.boxText || 'Beldi soap can be easily paired with other traditional Moroccan products to create high-value beauty routines:'}
                </p>
                <div className="grid grid-cols-2 gap-2 text-stone-700 text-xs font-semibold">
                  {pairings.map((pair: string, idx: number) => (
                    <span key={idx} className="flex items-center gap-1">? {pair}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-secondary/20 pointer-events-none translate-x-3 translate-y-3" />
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-2" />
              
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10">
                <Image
                  src="/image/product-argan-oil.webp"
                  alt="Argan Oil Black Soap jar for premium wholesale beauty lines"
                  fill
                  className="object-contain bg-white p-4 hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-md border border-stone-100 flex items-center gap-3">
                  <div className="p-2 bg-secondary/15 rounded-lg">
                    <TrendingUp size={18} className="text-emerald-800" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">High Market Demand</p>
                    <p className="text-stone-500 text-xs mt-0.5">Growing wellness & eco-cosmetics niche</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bulk Moroccan Black Soap for Professional Use Section */}
      <section className="py-24 bg-stone-50 relative" aria-labelledby="bulk-soap-heading">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-4 rounded-3xl border-2 border-emerald-950/10 pointer-events-none -translate-x-3 -translate-y-3" />
              <div className="absolute inset-0 bg-secondary/5 rounded-3xl rotate-2" />
              
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10">
                <Image
                  src="/image/about-bulk-sizes.webp"
                  alt="Moroccan black soap bulk sizes from 200 g jars to 5 kg tubs"
                  fill
                  className="object-contain bg-white p-3 hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-stone-100 flex items-center gap-2">
                  <ShoppingBag className="text-secondary" size={16} />
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">Bulk Supply Jars</span>
                </div>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 space-y-8"
            >
              <div>
                <span className={sectionLabelClass}>{dict?.professional?.label || 'B2B Wholesale'}</span>
                <h2 id="bulk-soap-heading" className={sectionHeadingClass}>
                  {dict?.professional?.title || 'Bulk Moroccan Black Soap for Professional Use'}
                </h2>
                <p className={bodyClass}>
                  {dict?.professional?.desc || 'Buying black soap in bulk is ideal for companies that need larger quantities for production, packaging, resale, or spa use. Bulk supply helps businesses reduce unit costs and maintain stable inventory.'}
                </p>
                <p className="text-stone-600 mt-4 leading-relaxed">
                  {dict?.professional?.desc2 || 'Depending on your business needs, Moroccan black soap can be supplied in jars, buckets, or larger bulk packaging. This flexibility allows you to choose the best format for your market and budget.'}
                </p>
              </div>

              {/* Target audiences list */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <p className="font-bold text-primary text-base mb-4">{dict?.professional?.boxTitle || 'Our wholesale service is designed for:'}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-700 text-sm font-semibold">
                  {targets.map((target: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      <span>{target}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Private Label Moroccan Black Soap Section */}
      <section className="py-24 bg-white" aria-labelledby="private-label-heading">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className={sectionLabelClass}>{dict?.private?.label || 'Branding & packaging'}</span>
                <h2 id="private-label-heading" className={sectionHeadingClass}>
                  {dict?.private?.title || 'Private Label Moroccan Black Soap'}
                </h2>
                <p className={bodyClass}>
                  {dict?.private?.desc || 'Private label is one of the best options for businesses that want to sell Moroccan black soap under their own brand name. With private label black soap, you can create a professional skincare product without managing the entire manufacturing and sourcing process alone.'}
                </p>
                <p className="text-stone-600 mt-4 leading-relaxed">
                  {dict?.private?.desc2 || 'Private label options may include custom packaging, label design support, different jar sizes, branding guidance, and wholesale supply. This is especially useful for new beauty brands, e-commerce sellers, spa owners, and retailers who want to launch a Moroccan skincare line quickly and professionally.'}
                </p>
              </div>

              <div className="bg-emerald-950 text-white p-6 rounded-2xl border border-emerald-905 shadow-md">
                <h3 className="font-serif font-bold text-lg text-secondary mb-3 flex items-center gap-2">
                  <Layers className="text-secondary" size={18} />
                  {dict?.private?.boxTitle || 'Private Label Services Include'}
                </h3>
                <ul className="space-y-2 text-sm text-emerald-100">
                  {services.map((service: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-secondary/20 pointer-events-none translate-x-3 translate-y-3" />
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-2" />
              
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10">
                <Image
                  src="/image/product-custom-formulations.webp"
                  alt="Private label custom formulation Moroccan black soap jars"
                  fill
                  className="object-contain bg-white p-3 hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-md border border-stone-100 flex items-center gap-3">
                  <div className="p-2 bg-secondary/15 rounded-lg">
                    <UserCheck size={18} className="text-emerald-800" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">Private Label Ready</p>
                    <p className="text-stone-500 text-xs mt-0.5">Customize with your brand logo</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Choose a Moroccan Black Soap Wholesale Supplier Section */}
      <section className="py-24 bg-stone-50 relative" aria-labelledby="choose-supplier-heading">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-4 rounded-3xl border-2 border-emerald-950/10 pointer-events-none -translate-x-3 -translate-y-3" />
              <div className="absolute inset-0 bg-secondary/5 rounded-3xl rotate-2" />
              
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10">
                <Image
                  src="/image/about-production-fill.webp"
                  alt="Filling and weighing Moroccan black soap jars in Marrakesh"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-stone-100 flex items-center gap-2">
                  <HelpCircle className="text-secondary" size={16} />
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">Sourcing Quality</span>
                </div>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 space-y-8"
            >
              <div>
                <span className={sectionLabelClass}>{dict?.choose?.label || 'Buyer Checklist'}</span>
                <h2 id="choose-supplier-heading" className={sectionHeadingClass}>
                  {dict?.choose?.title || 'How to Choose a Wholesale Supplier'}
                </h2>
                <p className={bodyClass}>
                  {dict?.choose?.desc || 'Not all black soap suppliers offer the same quality. Before ordering wholesale, businesses should check several important points to guarantee they are buying premium, safe cosmetics.'}
                </p>
              </div>

              <div className="space-y-4">
                {checklist.map((item: any, idx: number) => (
                  <div key={idx} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-stone-200/60 shadow-sm">
                    <span className="w-8 h-8 rounded-xl bg-secondary/15 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-primary text-base">{item.title}</h4>
                      <p className="text-stone-500 text-xs md:text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits for Your Brand Section */}
      <section className="py-24 bg-white" aria-labelledby="brand-benefits-heading">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16"
          >
            <span className={sectionLabelClass}>{dict?.benefits?.label || 'Value Proposition'}</span>
            <h2 id="brand-benefits-heading" className={sectionHeadingClass}>
              {dict?.benefits?.title || 'Benefits for Your Brand'}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              {dict?.benefits?.desc || 'Adding Moroccan black soap to your product catalog can help your brand stand out and build customer trust.'}
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {benefits.map((item: any, idx: number) => {
              const Icon = benefitsIcons[idx] || Gem;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-stone-50 p-8 rounded-3xl border border-stone-200/60 shadow-sm flex flex-col items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50">
                    <Icon className="text-primary" size={24} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif font-bold text-primary text-xl mt-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm md:text-base leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Order Moroccan Black Soap Wholesale Section (CTA) */}
      <section id="contact" className="py-24 bg-white" aria-labelledby="cta-heading">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-primary rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/moroccan-flower.png')] text-white" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/15 rounded-full blur-3xl pointer-events-none -translate-x-12 -translate-y-12" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-800/20 rounded-full blur-3xl pointer-events-none translate-x-20 translate-y-20" />
            
            <div className="relative z-10">
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
                {dict?.cta?.label || 'Wholesale Inquiry'}
              </span>
              <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                {dict?.cta?.title || 'Order Moroccan Black Soap Wholesale'}
              </h2>
              <p className="text-emerald-50/80 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                {dict?.cta?.desc || 'If you are looking for Moroccan black soap wholesale, bulk Beldi soap, or a trusted supplier for your beauty business, our company is ready to support you. Contact us today to request wholesale prices, packaging details, minimum order quantities, and export information.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="https://wa.me/212638168637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-secondary text-primary px-8 py-4 rounded-full text-base md:text-lg font-bold hover:bg-amber-400 transition-all duration-300 shadow-lg w-full sm:w-auto"
                >
                  {dict?.cta?.btn1 || 'Contact Us on WhatsApp'} <ArrowUpRight size={18} />
                </Link>
                <Link
                  href="mailto:inquiry@moroccanorganica.com"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white px-8 py-4 rounded-full text-base md:text-lg font-bold hover:border-secondary hover:text-secondary transition-all duration-300 w-full sm:w-auto"
                >
                  {dict?.cta?.btn2 || 'Send an Email Inquiry'} <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
};

export default WholesaleBlogContent;
