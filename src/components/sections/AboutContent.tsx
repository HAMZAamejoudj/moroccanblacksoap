'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Shield,
  Globe,
  Award,
  Tag,
  PackageCheck,
  FlaskConical,
  Star,
  Heart,
  Truck,
  Layers,
  FileCheck,
  Sparkles,
  Leaf,
  Droplet,
  Users,
  ChevronRight,
  ArrowUpRight,
  Gem
} from 'lucide-react';

const sectionHeadingClass =
  'text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6 leading-tight';
const sectionLabelClass =
  'text-secondary font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block';
const bodyClass = 'text-stone-600 leading-relaxed text-base md:text-lg';
const listClass = 'grid grid-cols-1 md:grid-cols-2 gap-4';

const BulletList = ({ items }: { items: string[] }) => (
  <ul className={listClass}>
    {items.map((item) => (
      <li
        key={item}
        className="flex items-start gap-3 p-3 bg-white/60 rounded-xl border border-stone-100 hover:border-secondary/20 hover:bg-white transition-all duration-300 shadow-sm group"
      >
        <div className="p-1 bg-secondary/10 rounded-full shrink-0 group-hover:bg-secondary/20 transition-colors">
          <CheckCircle2
            size={16}
            className="text-secondary shrink-0"
            aria-hidden
          />
        </div>
        <span className="text-stone-700 leading-relaxed text-sm md:text-base font-medium">{item}</span>
      </li>
    ))}
  </ul>
);

interface AboutContentProps {
  dict: any;
  lang: string;
}

const AboutContent = ({ dict, lang }: AboutContentProps) => {
  // Safe fallbacks for lists and grids
  const supplyItems = dict?.supply?.items || [
    'Traditional Moroccan black soap',
    'Organic-style Beldi soap',
    'Olive-based black soap',
    'Black soap with argan oil',
    'Black soap with eucalyptus',
    'Black soap with rose or natural fragrance',
    'Hammam black soap for spas',
    'Private label Moroccan black soap',
    'Bulk black soap for cosmetic manufacturers',
    'Retail-ready jars and branded packaging'
  ];

  const marketItems = dict?.why?.listItems || [
    { title: 'Natural Skincare', desc: 'Free from harsh synthetics, parabens, and detergents.' },
    { title: 'Traditional Beauty Rituals', desc: 'Appeals to consumers seeking historical skincare secrets.' },
    { title: 'Hammam & Spa Treatments', desc: 'Essential for authentic wellness and massage centers.' },
    { title: 'Minimalist Body Care', desc: 'Simple, pure ingredient list for clean beauty.' },
    { title: 'Olive-Based Cosmetics', desc: 'Naturally rich in antioxidant vitamin E and fatty acids.' },
    { title: 'Sustainable Beauty Products', desc: 'Plant-based, biodegradable, and ecological.' },
    { title: 'Private Label Skincare', desc: 'High-margin, unique product that defines brand excellence.' },
    { title: 'Ethnic & Heritage Beauty', desc: 'Taps into rich Moroccan heritage and cultural aesthetics.' }
  ];

  const qaItems = dict?.quality?.qa?.items || [
    'Careful sourcing from trusted Moroccan producers',
    'Consistent batch-by-batch laboratory control',
    'Clean, food-grade airtight packaging options',
    'Proper temperature-controlled storage and handling',
    'Full product specification detail sheets for buyers',
    'On-demand custom documentation preparation support',
    'Pre-production private label packaging compatibility checks'
  ];

  const docItems = dict?.quality?.docs?.items || [
    { title: 'COA Support', desc: 'Certificate of Analysis' },
    { title: 'SDS Files', desc: 'Safety Data Sheet' },
    { title: 'Product Spec Sheets', desc: 'Detailed ingredient info' },
    { title: 'Batch Logs', desc: 'Traceability & shelf-life' },
    { title: 'Certificate of Origin', desc: 'Moroccan chamber certified' },
    { title: 'Export Customs Support', desc: 'Hassle-free shipping logs' },
    { title: 'Compliance Labeling', desc: 'Formatting advice for labels' },
    { title: 'Ingredient Sheets', desc: 'Full INCI raw disclosure' }
  ];

  const wholesaleIdealItems = dict?.partnership?.card1?.listItems || [
    'Traditional Hammams',
    'Spa & Wellness Chains',
    'Natural Cosmetic Shops',
    'Online Skincare Stores',
    'Skincare Distributors',
    'Hotel Amenities Groups',
    'Organic Retail Networks',
    'Cosmetic Import Houses'
  ];

  const privateLabelBrandingItems = dict?.partnership?.card2?.listItems || [
    'Your Logo on the Jar',
    'Custom Sticker/Label Art',
    'Multiple Jar Size Selection',
    'Custom Luxury Retail Boxes',
    'Bulk-to-Retail Repackaging',
    'Scent or Oil Customization',
    'Hammam Gift Set Kits',
    'Matching Spa Collections'
  ];

  const clientTypes = dict?.serve?.items || [
    'Beauty Brands',
    'Spa & Hammam Owners',
    'Cosmetic Wholesalers',
    'Organic Stores',
    'Online Retailers',
    'Private Label Brands',
    'Hotel Wellness Groups',
    'Importers & Distributors',
    'Skincare Entrepreneurs'
  ];

  const whyChooseUsItems = dict?.serve?.why?.items || [
    'Authentic Moroccan black soap sourced from local Cooperatives',
    'Flexible wholesale, bulk, and raw container packaging formats',
    'Dedicated Private Label branding, custom logs, and jar support',
    'Airtight packaging configurations customized for air/sea freight',
    'Export paperwork compliance check support (COA, SDS, Customs logs)',
    'Direct communication channels and fast bulk quotes response',
    'Professional support tailored for global retailers and spa chains'
  ];

  const coreValues = dict?.values?.items || [
    {
      title: 'Authenticity',
      text: 'We focus on genuine Moroccan black soap inspired by traditional hammam use.',
      icon: Gem,
    },
    {
      title: 'Quality',
      text: 'We work to maintain stable texture, appearance, packaging, and batch consistency.',
      icon: Award,
    },
    {
      title: 'Transparency',
      text: 'We provide clear product information and available documents for professional buyers.',
      icon: FileCheck,
    },
    {
      title: 'Flexibility',
      text: 'We support bulk orders, wholesale supply, retail packaging, and private label projects.',
      icon: PackageCheck,
    },
    {
      title: 'Global Supply',
      text: 'We help international clients source Moroccan black soap with export-ready support.',
      icon: Globe,
    },
  ];

  // Resolve icons for core values dynamically based on index (to keep JSX functional since icons aren't passed via JSON)
  const coreValueIcons = [Gem, Award, FileCheck, PackageCheck, Globe];

  const serveIcons = [
    <Gem key="gem" className="text-secondary" size={18} />,
    <Users key="users" className="text-secondary" size={18} />,
    <Layers key="layers" className="text-secondary" size={18} />,
    <Leaf key="leaf" className="text-secondary" size={18} />,
    <Globe key="globe" className="text-secondary" size={18} />,
    <Tag key="tag" className="text-secondary" size={18} />,
    <Award key="award" className="text-secondary" size={18} />,
    <Truck key="truck" className="text-secondary" size={18} />,
    <Heart key="heart" className="text-secondary" size={18} />,
  ];

  return (
    <article className="bg-white overflow-hidden">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mx-auto">
            {/* Left Column: Intro */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <span className={sectionLabelClass}>{dict?.hero?.label || 'Our Company'}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-[1.15] mb-8">
                {dict?.hero?.title || 'About Moroccan Black Soap'}
              </h1>
              <div className="space-y-6 text-stone-600">
                <p className="text-lg md:text-xl font-medium text-emerald-950/80 border-l-4 border-secondary pl-4 py-1">
                  {dict?.hero?.description || 'Welcome to Moroccan Black Soap, your trusted source for authentic Moroccan black soap, also known as Beldi soap, supplied directly from Morocco for beauty brands, spas, hammams, retailers, and private label businesses.'}
                </p>
                <p className={bodyClass}>
                  {dict?.hero?.p1 || "Our company was created to bring one of Morocco's most traditional skincare treasures to international markets with professional quality, reliable supply, and clear product documentation. Moroccan black soap has been used for generations in traditional hammam rituals, where it is valued for deep cleansing, gentle exfoliation, and leaving the skin feeling soft, smooth, and refreshed."}
                </p>
                <p className={bodyClass}>
                  {dict?.hero?.p2 || "Today, the global demand for natural skincare products continues to grow. Customers are looking for simple, traditional, plant-based products with a real story behind them. This is where Moroccan black soap stands out. It is not just a cosmetic product; it is part of Moroccan beauty culture, hammam heritage, and natural body care traditions."}
                </p>
                <p className="text-stone-700 font-semibold text-lg md:text-xl pt-2">
                  {dict?.hero?.mission || 'At moroccanblacksoap.com, our mission is to supply genuine Moroccan Beldi soap in a professional way: clean sourcing, consistent texture, bulk availability, private label options, and export-ready support.'}
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
              {/* Decorative shapes */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-secondary/20 pointer-events-none translate-x-3 translate-y-3" />
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-2" />
              
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10 hover:shadow-secondary/10 transition-shadow duration-500">
                <Image
                  src="/image/beldi-black-soap-paste.webp"
                  alt="Traditional Moroccan black Beldi soap in a natural presentation"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/80 to-transparent p-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles size={16} className="text-secondary" />
                    <span className="text-xs uppercase tracking-wider font-bold text-secondary">{dict?.hero?.badge || 'Premium Grade'}</span>
                  </div>
                  <p className="font-serif font-bold text-lg">{dict?.hero?.badgeTitle || 'Authentic Beldi Paste'}</p>
                  <p className="text-xs text-stone-200">{dict?.hero?.badgeDesc || 'Ethically crafted & direct from Morocco'}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Our Story / Heritage Section */}
      <section className="py-24 bg-white relative" aria-labelledby="our-story-heading">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mx-auto">
            {/* Left Side: Heritage Image */}
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
                  src="/image/beldi-soap-olive-oil.webp"
                  alt="Organic Beldi soap base rich in Moroccan olive oil"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-stone-100 flex items-center gap-2">
                  <Droplet className="text-emerald-800" size={16} />
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">{dict?.story?.badge || '100% Olive Oil Base'}</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Heritage Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className={sectionLabelClass}>{dict?.story?.label || 'Heritage & Culture'}</span>
              <h2 id="our-story-heading" className={sectionHeadingClass}>
                {dict?.story?.title || 'Our Story'}
              </h2>
              <div className="space-y-6">
                <p className={bodyClass}>
                  {dict?.story?.p1 || 'Moroccan black soap has always been linked to the hammam experience. In Morocco, the hammam is more than a place to wash. It is a ritual of purification, relaxation, and renewal. Beldi soap is traditionally applied to warm, damp skin before exfoliation with a kessa glove. This routine helps remove dead skin cells and gives the skin a cleaner, smoother appearance.'}
                </p>
                <p className={bodyClass}>
                  {dict?.story?.p2 || 'We started Moroccan Black Soap to make this traditional product easier for international buyers to access. Many businesses want to source Moroccan black soap, but they struggle with inconsistent quality, unclear suppliers, weak documentation, and uncertain packaging options.'}
                </p>
                <p className={bodyClass}>
                  {dict?.story?.p3 || 'Our role is to solve that problem. We connect authentic Moroccan production with the needs of modern skincare businesses. Whether you need bulk Moroccan black soap, private label Beldi soap, or wholesale supply for spas and hammams, we provide a simple and reliable sourcing solution.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Range & Value Section */}
      <section className="py-24 bg-white" aria-labelledby="what-we-supply-heading">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className={sectionLabelClass}>{dict?.supply?.label || 'Product Range'}</span>
            <h2 id="what-we-supply-heading" className={sectionHeadingClass}>
              {dict?.supply?.title || 'What We Supply'}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              {dict?.supply?.desc || 'We specialize in authentic Moroccan black soap wholesale for professional use and resale. Our product range can support different business models, from small beauty brands to large distributors.'}
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Bullet points list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 space-y-8"
            >
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-sm">
                <p className="text-primary font-bold text-lg md:text-xl mb-6 flex items-center gap-2">
                  <Leaf className="text-secondary" size={20} />
                  {dict?.supply?.intro || 'Our Supply Options Include:'}
                </p>
                <BulletList items={supplyItems} />
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200">
                <p className="text-stone-700 leading-relaxed text-sm md:text-base">
                  {dict?.supply?.outro || 'We can supply the soap in different formats depending on your business needs. Some clients prefer large bulk containers for spa use, while others need elegant retail jars with their own brand label. We support both.'}
                </p>
              </div>
            </motion.div>

            {/* Right: Gallery Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 space-y-6"
            >
              {/* Product Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="relative h-56 w-full">
                  <Image
                    src="/image/black-soap-argan-enriched.webp"
                    alt="Moroccan black soap infused with argan oil"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-secondary text-primary font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                    {dict?.supply?.card1?.badge || 'Popular'}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-bold text-primary text-lg mb-2">{dict?.supply?.card1?.title || 'Argan Oil Infused Beldi'}</h3>
                  <p className="text-stone-500 text-sm">
                    {dict?.supply?.card1?.desc || 'Enriched with pure cosmetic argan oil for deep hydration and skin nourishment.'}
                  </p>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="relative h-56 w-full">
                  <Image
                    src="/image/black-soap-eucalyptus.webp"
                    alt="Moroccan black soap with eucalyptus and pumice"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-emerald-950 text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                    {dict?.supply?.card2?.badge || 'Traditional'}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-bold text-primary text-lg mb-2">{dict?.supply?.card2?.title || 'Eucalyptus Exfoliating Blend'}</h3>
                  <p className="text-stone-500 text-sm">
                    {dict?.supply?.card2?.desc || 'Infused with eucalyptus globulus oil for a refreshing, purifying aromatherapy hammam ritual.'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Moroccan Black Soap / Value Section */}
      <section className="py-24 bg-white relative" aria-labelledby="why-moroccan-black-soap-heading">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text & Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className={sectionLabelClass}>{dict?.why?.label || 'Product Value'}</span>
              <h2 id="why-moroccan-black-soap-heading" className={sectionHeadingClass}>
                {dict?.why?.title || 'Why Moroccan Black Soap?'}
              </h2>
              <p className={bodyClass}>
                {dict?.why?.p1 || 'Moroccan black soap is popular because it is simple, effective, and deeply connected to traditional beauty rituals. It is usually soft, paste-like, dark brown to black in color, and made with olive-based ingredients.'}
              </p>
              <p className={bodyClass}>
                {dict?.why?.p2 || 'For skincare brands and spas, it offers a strong product story and practical benefits. It can be used as a body cleanser, pre-exfoliation treatment, hammam product, spa product, or natural body care item.'}
              </p>
              
              <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/image/beldi-black-soap-paste.webp"
                  alt="Authentic texture of Moroccan black Beldi soap"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Value Grid list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200/80 shadow-xl"
            >
              <p className="text-primary font-bold text-lg md:text-xl mb-6 pb-4 border-b border-stone-100 flex items-center gap-2">
                <Star className="text-secondary fill-secondary" size={20} />
                {dict?.why?.listTitle || 'Market Alignment:'}
              </p>
              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                {dict?.why?.listIntro || 'Businesses choose Moroccan black soap because it aligns perfectly with modern global market trends:'}
              </p>
              
              <ul className="space-y-4">
                {marketItems.map((item: any, idx: number) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-emerald-950/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-primary text-sm md:text-base">{item.title}</h4>
                      <p className="text-stone-500 text-xs md:text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <p className="text-stone-600 text-sm mt-8 border-t border-stone-100 pt-4 font-medium italic">
                {dict?.why?.outro || 'For customers, it feels authentic and different from ordinary soap. For brands, it creates a strong Moroccan identity and a premium natural skincare image.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Approach & Documentation Section */}
      <section className="py-24 bg-white relative overflow-hidden" aria-labelledby="quality-approach-heading">
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              {dict?.quality?.label || 'Standards & Compliance'}
            </span>
            <h2 id="quality-approach-heading" className={sectionHeadingClass}>
              {dict?.quality?.title || 'Our Quality & Export Approach'}
            </h2>
            <p className={`${bodyClass} text-base md:text-lg`}>
              {dict?.quality?.desc || 'Quality is the cornerstone of our operations. We focus on supplying Beldi soap with the right texture, natural appearance, clean scent, and stable consistency for professional global export.'}
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left Column: Quality Assurance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-50 rounded-xl">
                    <Shield className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl md:text-2xl text-primary">{dict?.quality?.qa?.title || 'Quality Assurance Protocols'}</h3>
                </div>
                <p className={`${bodyClass} text-sm md:text-base mb-6`}>
                  {dict?.quality?.qa?.desc || 'We guarantee professional skincare grade Beldi soap. Our strict control avoids issues like watery texture, unwanted chemical perfumes, bad packaging, or unlisted additives.'}
                </p>
                <ul className="space-y-3">
                  {qaItems.map((item: string) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                      <span className="text-stone-600 text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-stone-500 text-xs md:text-sm mt-8 pt-4 border-t border-stone-100 italic">
                {dict?.quality?.qa?.outro || 'For wholesale and export clients, we provide full product details and documents depending on order type and destination market.'}
              </p>
            </motion.div>

            {/* Right Column: Documentation Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-50 rounded-xl">
                    <FileCheck className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl md:text-2xl text-primary">{dict?.quality?.docs?.title || 'Documentation & Export Support'}</h3>
                </div>
                <p className={`${bodyClass} text-sm md:text-base mb-6`}>
                  {dict?.quality?.docs?.desc || 'International customs clearance requires professional documentation. We supply beauty brands, distributors, spas, and retailers with compliant international paperwork.'}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {docItems.map((doc: any, idx: number) => (
                    <div key={idx} className="p-4 bg-white rounded-xl border border-stone-100 hover:border-stone-200 transition-colors">
                      <p className="text-primary font-bold text-sm md:text-base leading-tight">{doc.title}</p>
                      <p className="text-stone-500 text-xs mt-1">{doc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-stone-500 text-xs md:text-sm mt-8 pt-4 border-t border-stone-100 italic">
                {dict?.quality?.docs?.outro || 'Our support makes our service suitable for premium cosmetics brands, distributors, and global hotel groups requiring strict compliance logs.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-24 bg-white" aria-labelledby="wholesale-heading">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className={sectionLabelClass}>{dict?.partnership?.label || 'B2B Partnerships'}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              {dict?.partnership?.title || 'Sourcing & Branding Options'}
            </h2>
            <p className="text-stone-600 text-lg">
              {dict?.partnership?.desc || 'We offer flexible pathways for corporate accounts, whether you want to distribute our premium bulk soap or develop your own custom-branded cosmetic line.'}
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto">
            {/* Card 1: Wholesale & Bulk */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xl flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="relative h-64 w-full">
                  <Image
                    src="/image/wholesale-black-soap-display.webp"
                    alt="Bulk Moroccan black soap packaging"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="bg-secondary text-primary font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                      {dict?.partnership?.card1?.badge || 'Bulk Supply'}
                    </span>
                    <h3 id="wholesale-heading" className="font-serif font-bold text-2xl mt-2">
                      {dict?.partnership?.card1?.title || 'Wholesale Moroccan Black Soap'}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-stone-600 leading-relaxed mb-6">
                    {dict?.partnership?.card1?.desc || 'We supply Moroccan black soap wholesale for businesses that need regular stock, larger quantities, or bulk pricing. Our wholesale service is designed to be flexible. You can order black soap in bulk containers, retail packaging, or private label packaging.'}
                  </p>
                  
                  <p className="font-bold text-primary text-sm uppercase tracking-wider mb-4">
                    {dict?.partnership?.card1?.listTitle || 'Ideal Wholesale Accounts:'}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {wholesaleIdealItems.map((item: string) => (
                      <li key={item} className="flex items-center gap-2 text-stone-600 text-sm font-medium">
                        <CheckCircle2 size={14} className="text-secondary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-8 pt-0">
                <Link
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-emerald-950 text-white font-bold rounded-xl hover:bg-secondary hover:text-primary transition-all duration-300"
                >
                  {dict?.partnership?.card1?.btn || 'Request Wholesale Brochure'} <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Private Label Custom */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xl flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="relative h-64 w-full">
                  <Image
                    src="/image/private-label-jars.webp"
                    alt="Private label cosmetics packaging design"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="bg-secondary text-primary font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                      {dict?.partnership?.card2?.badge || 'Branding'}
                    </span>
                    <h3 id="private-label-heading" className="font-serif font-bold text-2xl mt-2">
                      {dict?.partnership?.card2?.title || 'Private Label Beldi Soap'}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-stone-600 leading-relaxed mb-6">
                    {dict?.partnership?.card2?.desc || 'Launch your own Moroccan cosmetic brand with our private label Moroccan black soap service. We handle the product sourcing, packaging, and production support, while you focus on your brand, marketing, and customers.'}
                  </p>
                  
                  <p className="font-bold text-primary text-sm uppercase tracking-wider mb-4">
                    {dict?.partnership?.card2?.listTitle || 'Custom Branding Options:'}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {privateLabelBrandingItems.map((item: string) => (
                      <li key={item} className="flex items-center gap-2 text-stone-600 text-sm font-medium">
                        <CheckCircle2 size={14} className="text-secondary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-8 pt-0">
                <Link
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-emerald-950 text-white font-bold rounded-xl hover:bg-secondary hover:text-primary transition-all duration-300"
                >
                  {dict?.partnership?.card2?.btn || 'Consult Packaging Experts'} <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve & Why Choose Us Section */}
      <section className="py-24 bg-white" aria-labelledby="who-we-serve-heading">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Who We Serve */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              <span className={sectionLabelClass}>{dict?.serve?.label || 'Clients'}</span>
              <h2 id="who-we-serve-heading" className="text-3xl md:text-4xl font-serif font-bold text-primary leading-tight">
                {dict?.serve?.title || 'Who We Serve'}
              </h2>
              <p className={bodyClass}>
                {dict?.serve?.desc || 'Our clients come from different parts of the beauty and wellness industry. We work with businesses that want authentic Moroccan products and reliable supply.'}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {clientTypes.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-stone-200 hover:border-primary/20 transition-colors duration-300">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {serveIcons[idx] || serveIcons[0]}
                    </div>
                    <span className="text-stone-700 text-sm md:text-base font-bold">{item}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-stone-500 text-sm italic pt-2">
                {dict?.serve?.outro || 'Whether you are testing your first Moroccan black soap product or sourcing large quantities for distribution, we can support your needs.'}
              </p>
            </motion.div>

            {/* Right: Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6 bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm"
            >
              <span className={sectionLabelClass}>{dict?.serve?.why?.label || 'Partnership'}</span>
              <h2 id="why-choose-us-heading" className="text-3xl md:text-4xl font-serif font-bold text-primary leading-tight">
                {dict?.serve?.why?.title || 'Why Choose Moroccan Black Soap?'}
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                {dict?.serve?.why?.desc || 'Choosing the right supplier matters. Your customers expect a product that looks authentic, feels professional, and delivers a real Moroccan skincare experience.'}
              </p>

              <div className="space-y-4">
                {whyChooseUsItems.map((item: string, idx: number) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm md:text-base font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-stone-200 mt-6">
                <p className="text-stone-500 text-sm italic">
                  {dict?.serve?.why?.outro || 'We are not only supplying soap. We are helping brands bring a traditional Moroccan beauty ritual to customers around the world.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitment / Core Values Section */}
      <section className="py-24 bg-white" aria-labelledby="our-commitment-heading">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className={sectionLabelClass}>{dict?.values?.label || 'Values'}</span>
            <h2 id="our-commitment-heading" className={sectionHeadingClass}>
              {dict?.values?.title || 'Our Commitment'}
            </h2>
            <p className="text-stone-600 text-lg">
              {dict?.values?.desc || 'At Moroccan Black Soap, we believe that authentic Moroccan beauty products should be supplied with honesty, consistency, and respect for tradition.'}
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
            {coreValues.map((principle: any, index: number) => {
              const Icon = coreValueIcons[index] || coreValueIcons[0];
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex h-full flex-col rounded-xl bg-white p-6 shadow-[0_2px_16px_rgba(2,44,34,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(2,44,34,0.1)]"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50">
                    <Icon className="text-primary" size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-2.5 font-serif text-base font-bold leading-snug text-primary">
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-500">
                    {principle.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work With Us CTA Section */}
      <section id="contact" className="py-24 bg-white" aria-labelledby="work-with-us-heading">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-primary rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden shadow-2xl"
          >
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/moroccan-flower.png')] text-white" />
            {/* Ambient gradients */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/15 rounded-full blur-3xl pointer-events-none -translate-x-12 -translate-y-12" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-800/20 rounded-full blur-3xl pointer-events-none translate-x-20 translate-y-20" />
            
            <div className="relative z-10">
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
                {dict?.cta?.label || 'Get in Touch'}
              </span>
              <h2 id="work-with-us-heading" className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                {dict?.cta?.title || 'Work With Us'}
              </h2>
              <p className="text-emerald-50/80 text-base md:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
                {dict?.cta?.p1 || 'If you are looking for a trusted Moroccan black soap supplier, we are ready to help. Whether you need wholesale stock, bulk Beldi soap, or a private label skincare product, our team can guide you through product options, packaging, documentation, and shipping.'}
              </p>
              <p className="text-emerald-50/80 text-base md:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
                {dict?.cta?.p2 || 'Contact us today to request product details, samples, bulk pricing, or private label support.'}
              </p>
              <p className="text-white/90 font-medium mb-12 text-sm md:text-base max-w-3xl mx-auto border-t border-white/10 pt-6">
                {dict?.cta?.p3 || 'Moroccan Black Soap — authentic Beldi soap from Morocco, prepared for modern beauty brands, spas, hammams, and global skincare businesses.'}
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

export default AboutContent;
