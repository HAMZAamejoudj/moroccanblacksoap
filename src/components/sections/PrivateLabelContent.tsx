'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Tag,
  Package,
  Layers,
  Shield,
  FileCheck,
  TrendingUp,
  Award,
  ChevronRight,
  ArrowUpRight,
  Zap,
  Hammer,
  Truck,
  Gem,
  Globe,
  Leaf,
  Heart,
  Store,
  Building2,
  ShoppingBag,
} from 'lucide-react';

const sectionHeadingClass =
  'text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6 leading-tight';
const sectionLabelClass =
  'text-secondary font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block';
const bodyClass = 'text-stone-600 leading-relaxed text-base md:text-lg';

interface PrivateLabelContentProps {
  dict: any;
  lang: string;
}

const PrivateLabelContent = ({ dict, lang }: PrivateLabelContentProps) => {
  // Safe fallbacks for arrays
  const advantages = dict?.hero?.advantages || [
    'Apply your logo and branding',
    'Customize packaging and jar sizes',
    'Access bulk supply with flexible MOQ',
    'Certified organic soap with documentation',
    'Export-ready support for global logistics'
  ];

  const whyItems = dict?.why?.items || [
    { title: 'Authenticity', text: 'True Moroccan origin sourced ethically from local cooperatives.' },
    { title: 'Premium Appeal', text: 'Traditional hammam ritual product with natural ingredients.' },
    { title: 'Health & Beauty', text: 'Proven exfoliating, hydrating, and anti-aging benefits.' },
    { title: 'Customer Trust', text: 'Certified, traceable, and ethically manufactured.' }
  ];

  const processSteps = dict?.process?.steps || [
    {
      step: '01',
      title: 'Choose Your Product',
      text: 'Select pure Beldi soap or request a custom formulation with natural additives like Argan oil, essential oils, or herbs.'
    },
    {
      step: '02',
      title: 'Design Your Brand',
      text: 'Submit your logo, color palette, and label concept. Our design team can help create professional labels matching your brand.'
    },
    {
      step: '03',
      title: 'Approve Samples',
      text: 'We send a sample of your custom-branded soap for approval. Adjustments to label, packaging, or formula can be made.'
    },
    {
      step: '04',
      title: 'Production & Shipping',
      text: 'Once approved, we produce your order, quality-check each batch, and prepare export-ready shipments with full certificates.'
    }
  ];

  const productItems = dict?.products?.items || [
    {
      title: 'Classic Beldi Soap',
      subtitle: 'Pure olive-based black soap',
      desc: 'The traditional formulation without additives. Ideal for pure hammam routines and classic natural positioning.',
      sizeLabel: 'Sizes: 250g, 500g, 1kg',
      moqLabel: 'MOQ: 50 units',
      timeLabel: 'Lead Time: 4–8 days',
      pkgLabel: 'Packaging: Jars / Tubs',
      btn: 'Request Pricing',
      image: '/image/beldi-black-soap-paste.webp'
    },
    {
      title: 'Luxury Beldi Soap b Argan',
      subtitle: 'With Organic Cold-Pressed Argan Oil',
      desc: 'Combines the deep exfoliating properties of Beldi soap with the intense moisturizing power of pure Moroccan argan oil.',
      sizeLabel: 'Sizes: 250g, 500g',
      moqLabel: 'MOQ: 50 units',
      timeLabel: 'Lead Time: 4–8 days',
      pkgLabel: 'Packaging: Glass or Tubs',
      btn: 'Request Pricing',
      image: '/image/black-soap-argan-enriched.webp'
    },
    {
      title: 'Herbal Infused Beldi Soap',
      subtitle: 'Eucalyptus, Rose, or Chamomile',
      desc: 'Blends natural botanical extracts and aromatherapy oils. Ideal for luxury wellness lines and aromatic spa treatments.',
      sizeLabel: 'Sizes: Custom jars',
      moqLabel: 'MOQ: 50 units',
      timeLabel: 'Lead Time: 4–8 days',
      pkgLabel: 'Packaging: Eco packaging',
      btn: 'Request Pricing',
      image: '/image/black-soap-eucalyptus.webp'
    },
    {
      title: 'Spa & Hammam Bulk',
      subtitle: 'Large tubs for professional treatment',
      desc: 'Large-scale containers designed specifically for high-frequency use in hammams, thermal baths, and spa backbar systems.',
      sizeLabel: 'Sizes: 2kg, 5kg, 10kg',
      moqLabel: 'MOQ: 50 units',
      timeLabel: 'Lead Time: 4–8 days',
      pkgLabel: 'Packaging: HDPE Tubs',
      btn: 'Request Pricing',
      image: '/image/beldi-black-soap-paste.webp'
    },
    {
      title: 'White Label – Quick Launch',
      subtitle: 'Apply your logo to existing stock',
      desc: 'Apply your custom logo stickers directly to our pre-packaged, high-quality standard inventory jars. Perfect for market testing.',
      sizeLabel: 'Sizes: Standard jars',
      moqLabel: 'MOQ: 50 units',
      timeLabel: 'Lead Time: 4–8 days',
      pkgLabel: 'Ideal for: Startups',
      btn: 'Request Pricing',
      image: '/image/private-label-jars-alt.webp'
    },
    {
      title: 'Full Private Label – Premium',
      subtitle: 'Custom formulation and packaging',
      desc: 'Fully customized formulation, unique scents, custom jars, and dedicated retail boxes. Tailored for established brands.',
      sizeLabel: 'Formula: Bespoke',
      moqLabel: 'MOQ: 200-500 units',
      timeLabel: 'Lead Time: 1–2 weeks',
      pkgLabel: 'Ideal for: Premium Brands',
      btn: 'Request Sourcing',
      image: '/image/moroccan-organic-cosmetics.webp'
    }
  ];

  // Hardcoded product images mapping based on index
  const productImages = [
    '/image/beldi-black-soap-paste.webp',
    '/image/black-soap-argan-enriched.webp',
    '/image/black-soap-eucalyptus.webp',
    '/image/beldi-black-soap-paste.webp',
    '/image/private-label-jars-alt.webp',
    '/image/moroccan-organic-cosmetics.webp'
  ];

  const trustItems = dict?.trust?.items || [
    { title: 'Authenticity Sourced', desc: 'Direct partnerships with Moroccan cooperatives guarantee genuine Beldi soap.' },
    { title: 'Certified Organic', desc: 'ECOCERT and USDA Organic raw certification support available.' },
    { title: 'Flexible MOQ', desc: 'Start small with just 50 units and scale your brand gradually.' },
    { title: 'Custom Packaging', desc: 'Various jar, tub, or luxury paperbox options customized for your target market.' },
    { title: 'Export-Ready Logistics', desc: 'Full COA, SDS, MSDS, and custom certificates supplied with every order.' },
    { title: 'Private Label Expertise', desc: 'Assisting brand owners and online cosmetic retailers worldwide to launch efficiently.' }
  ];

  const trustIcons = [Gem, Leaf, Layers, Package, Truck, Award];

  const targetPartners = dict?.target?.partners || [
    { label: 'Spas & Wellness Centers', icon: Heart },
    { label: 'Cosmetic Startups', icon: Zap },
    { label: 'Online Retailers', icon: ShoppingBag },
    { label: 'Boutique Stores', icon: Store },
    { label: 'Subscription Box Brands', icon: Package },
    { label: 'Luxury Hotel Groups', icon: Building2 }
  ];

  const targetIcons = [Heart, Zap, ShoppingBag, Store, Package, Building2];

  const summaryItems = dict?.summary?.items || [
    { title: 'Authenticity', desc: 'Real Moroccan Beldi soap using traditional preparation protocols.', icon: Gem },
    { title: 'Premium Appeal', desc: 'Adds high aesthetic value and an exotic story to your skincare line.', icon: Award },
    { title: 'Customer Trust', desc: 'Certified, traceable, and organic raw ingredients.', icon: Shield },
    { title: 'Flexible Orders', desc: 'Low startup MOQs (50 units) or large-scale shipping options.', icon: Layers },
    { title: 'Fully Customizable', desc: 'Custom formulations, fragrance options, label layouts, and packaging.', icon: Tag },
    { title: 'Global Reach', desc: 'Export-ready documentation for smooth customs clearance.', icon: Globe },
    { title: 'Sustainability', desc: 'Directly supports Moroccan women cooperatives and clean harvesting.', icon: Leaf }
  ];

  const summaryIcons = [Gem, Award, Shield, Layers, Tag, Globe, Leaf];

  return (
    <article className="bg-white overflow-hidden">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mx-auto">
            {/* Left Column: Title & Intro */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <span className={sectionLabelClass}>{dict?.hero?.label || 'Custom Branding'}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-[1.15] mb-8">
                {dict?.hero?.title || 'Launch Your Private Label Moroccan Black Soap Brand'}
              </h1>
              
              <div className="space-y-6 text-stone-600">
                <p className="text-lg md:text-xl font-medium text-emerald-950/80 border-l-4 border-secondary pl-4 py-1">
                  {dict?.hero?.description || 'At Moroccan Black Soap, we provide authentic Beldi soap for businesses seeking to create a private label skincare or spa brand.'}
                </p>
                <p className={bodyClass}>
                  {dict?.hero?.p2 || 'Moroccan black soap, known for its natural exfoliating, hydrating, and detoxifying properties, is ideal for cosmetic lines, hammam treatments, and luxury skincare products. This solution enables startups, salons, retailers, and cosmetic brands to launch a Moroccan black soap product line without investing in manufacturing facilities.'}
                </p>
              </div>

              {/* Bullet list of core advantages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                {advantages.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 text-stone-700 text-sm font-semibold">
                    <CheckCircle2 size={16} className="text-secondary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
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
                  src="/image/private-label-jars.webp"
                  alt="Launch Your Private Label Moroccan Black Soap Brand"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/95 to-transparent p-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Tag size={16} className="text-secondary" />
                    <span className="text-xs uppercase tracking-wider font-bold text-secondary">{dict?.hero?.badge || 'Private Label Solutions'}</span>
                  </div>
                  <p className="font-serif font-bold text-lg">{dict?.hero?.badgeTitle || 'Custom Branded Jars'}</p>
                  <p className="text-xs text-stone-200">{dict?.hero?.badgeDesc || 'Start with flexible low MOQ orders'}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Why Choose Moroccan Black Soap for Private Label */}
      <section className="py-24 bg-stone-50 relative" aria-labelledby="why-private-label-heading">
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
              
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white z-10">
                <Image
                  src="/image/about-labeling-line.webp"
                  alt="Moroccan black soap private label jars being labeled in Marrakesh"
                  fill
                  className="object-cover object-center hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
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
                <span className={sectionLabelClass}>{dict?.why?.label || 'Value Proposition'}</span>
                <h2 id="why-private-label-heading" className={sectionHeadingClass}>
                  {dict?.why?.title || 'Why Choose It for Private Label'}
                </h2>
                <p className={bodyClass}>
                  {dict?.why?.desc || 'Beldi soap is globally recognized for its effectiveness and cultural heritage. By private labeling it, your brand can leverage a product with deep storytelling potential and clean positioning.'}
                </p>
                <p className="text-stone-600 mt-4 leading-relaxed">
                  {dict?.why?.p2 || 'Using Moroccan black soap in your product line enhances brand value, appeals to eco-conscious consumers, and allows authentic storytelling about heritage and natural skincare.'}
                </p>
              </div>

              {/* Pillars list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyItems.map((item: any, idx: number) => (
                  <div key={idx} className="p-5 bg-white rounded-xl border border-stone-200/60 shadow-sm">
                    <h4 className="font-bold text-primary text-base mb-1">{item.title}</h4>
                    <p className="text-stone-500 text-xs md:text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Private Label Process Section */}
      <section className="py-24 bg-white" aria-labelledby="process-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={sectionLabelClass}>{dict?.process?.label || 'Step-by-step Sourcing'}</span>
            <h2 id="process-heading" className={sectionHeadingClass}>
              {dict?.process?.title || 'Our Private Label Process'}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-stone-100 hidden md:block pointer-events-none -translate-y-6" />
            
            {processSteps.map((item: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm relative z-10 flex flex-col items-start hover:shadow-md transition-shadow"
              >
                <span className="text-secondary font-serif font-bold text-4xl mb-4 block">{item.step}</span>
                <h3 className="font-serif font-bold text-primary text-lg mb-2 leading-snug">{item.title}</h3>
                <p className="text-stone-600 text-xs md:text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Options for Private Label Section */}
      <section className="py-24 bg-stone-50" aria-labelledby="products-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={sectionLabelClass}>{dict?.products?.label || 'Product Catalog'}</span>
            <h2 id="products-heading" className={sectionHeadingClass}>
              {dict?.products?.title || 'Product Options for Private Label'}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productItems.map((item: any, idx: number) => {
              const imagePath = productImages[idx] || '/image/beldi-black-soap-paste.webp';
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-56 w-full">
                      <Image
                        src={imagePath}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-serif font-bold text-lg">{item.title}</h3>
                        <p className="text-xs text-stone-200">{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <p className="text-stone-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-stone-600 border-t pt-4">
                        <div>{item.sizeLabel}</div>
                        <div>{item.moqLabel}</div>
                        <div>{item.timeLabel}</div>
                        <div>{item.pkgLabel}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <Link href="#contact" className="inline-flex items-center gap-1 text-primary hover:text-secondary font-bold text-sm">
                      {item.btn || 'Request Pricing'} <ChevronRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Brands Trust Us Section */}
      <section className="py-24 bg-white" aria-labelledby="trust-heading">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Trust credentials */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <span className={sectionLabelClass}>{dict?.trust?.label || 'B2B Credentials'}</span>
              <h2 id="trust-heading" className="text-3xl md:text-4xl font-serif font-bold text-primary leading-tight">
                {dict?.trust?.title || 'Why Brands Trust Us'}
              </h2>
              <p className={bodyClass}>
                {dict?.trust?.desc || 'We combine traditional harvesting methods with modern export practices to ensure international brands receive compliant, premium skincare.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {trustItems.map((item: any, idx: number) => {
                  const Icon = trustIcons[idx] || Gem;
                  return (
                    <div
                      key={idx}
                      className="flex h-full flex-col rounded-xl bg-white p-5 shadow-[0_2px_16px_rgba(2,44,34,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(2,44,34,0.1)]"
                    >
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                        <Icon className="text-primary" size={20} strokeWidth={1.75} />
                      </div>
                      <h4 className="mb-1.5 font-serif text-sm font-bold leading-snug text-primary md:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-stone-500 md:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: Target clients & wholesale */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6 rounded-3xl border border-stone-200 bg-white p-8 md:p-10 shadow-[0_2px_16px_rgba(2,44,34,0.07)]"
            >
              <span className={sectionLabelClass}>{dict?.target?.label || 'Target Market'}</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary leading-tight">
                {dict?.target?.title || 'Who We Partner With'}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {dict?.target?.desc || 'Our private label clients run various kinds of beauty and wellness businesses:'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {targetPartners.map((partner: any, idx: number) => {
                  const Icon = targetIcons[idx] || Heart;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-xl border border-stone-100 bg-white p-3 transition-colors hover:border-primary/15"
                    >
                      <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                        <Icon className="text-primary" size={18} strokeWidth={1.75} />
                      </div>
                      <span className="text-sm font-semibold leading-snug text-stone-700">
                        {partner.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-3 border-t border-stone-100 pt-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                    <Globe className="text-primary" size={20} strokeWidth={1.75} />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-primary">
                    {dict?.target?.exportTitle || 'Wholesale & Global Export'}
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-stone-600 md:text-sm">
                  {dict?.target?.exportDesc || 'For clients seeking bulk shipping, we offer transparent pricing models, packaging optimized for sea and air freight, and full assistance with customs logs. This ensures your custom-branded soap reaches you safely and professionally anywhere in the world.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summary of Benefits Section */}
      <section className="py-24 bg-stone-50" aria-labelledby="summary-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={sectionLabelClass}>{dict?.summary?.label || 'Summary'}</span>
            <h2 id="summary-heading" className={sectionHeadingClass}>
              {dict?.summary?.title || 'Benefits of Private Label Beldi Soap'}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {summaryItems.map((item: any, idx: number) => {
              const Icon = summaryIcons[idx] || Gem;
              return (
                <div
                  key={idx}
                  className="flex h-full flex-col rounded-xl bg-white p-6 shadow-[0_2px_16px_rgba(2,44,34,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(2,44,34,0.1)]"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50">
                    <Icon className="text-primary" size={22} strokeWidth={1.75} />
                  </div>
                  <h4 className="mb-2 font-serif text-base font-bold leading-snug text-primary">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-stone-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                {dict?.cta?.label || 'Brand Sourcing'}
              </span>
              <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                {dict?.cta?.title || 'Launch Your Brand Today'}
              </h2>
              <p className="text-emerald-50/80 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                {dict?.cta?.desc || 'Ready to create your custom Moroccan black soap products? Contact us to request sample orders, custom formulation information, and private label catalog rates.'}
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

export default PrivateLabelContent;
