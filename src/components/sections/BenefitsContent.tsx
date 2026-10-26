'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Droplet,
  Shield,
  Heart,
  TrendingUp,
  Award,
  Layers,
  Leaf,
  Globe,
  ChevronRight,
  ArrowUpRight,
  HandMetal,
  Scissors,
  PackageCheck,
  Users,
  Wind,
  Brush,
} from 'lucide-react';

const sectionHeadingClass =
  'text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6 leading-tight';
const sectionLabelClass =
  'text-secondary font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block';
const bodyClass = 'text-stone-600 leading-relaxed text-base md:text-lg';

interface BenefitsContentProps {
  dict: any;
  lang: string;
}

const BenefitsContent = ({ dict, lang }: BenefitsContentProps) => {
  // Safe fallbacks for arrays
  const exfoliationListItems = dict?.exfoliation?.listItems || [
    'Improved skin texture',
    'Reduced rough patches',
    'Smoother body and face skin',
    'Preparation for moisturizers or oils for better absorption'
  ];

  const detoxItems = dict?.exfoliation?.detox?.items || [
    'Removing impurities and dirt from pores',
    'Reducing excess oils and blackheads',
    'Preparing the skin for deep hammam treatments'
  ];

  const hydrationCol1Items = dict?.hydration?.col1?.items || [
    'Reduced dryness and flakiness',
    'Softening of elbows, knees and rough spots',
    'Enhanced elasticity and smoothness',
    'Suitable for all skin types, including sensitive'
  ];

  const hydrationCol2Items = dict?.hydration?.col2?.items || [
    'Rich vitamin E content fights aging effects',
    'Reduces the appearance of fine lines',
    'Improves skin brightness and radiance',
    'Rejuvenates dull or tired-looking skin'
  ];

  const hairItems = dict?.specialized?.hair?.items || [
    'Cleanses the scalp naturally without chemicals',
    'Removes impurities and excess sebum',
    'Promotes softer, shinier hair when followed by Argan or Prickly Pear oils'
  ];

  const nailItems = dict?.specialized?.nail?.items || [
    'Nourishes cuticles and strengthens brittle nails',
    'Softens rough cuticles for gentle manicure prep',
    'Ideal for professional spa manicure & pedicure treatments'
  ];

  const skinTypeItems = dict?.skinTypes?.items || [
    { type: 'Oily Skin', text: 'Removes excess sebum, purifies skin pores, and reduces blackheads without over-drying.' },
    { type: 'Dry Skin', text: 'Feeds the skin natural essential fatty acids from olives, keeping hydration locked in.' },
    { type: 'Sensitive Skin', text: 'Pure formulation free from parabens, synthetic detergents, fragrances, and foaming agents.' },
    { type: 'Mature Skin', text: 'Antioxidants and Vitamin E help support skin structure, firmness, and natural glow.' }
  ];

  const privateLabelItems = dict?.privateLabel?.card1?.items || [
    { title: 'Easy Branding', desc: 'Apply your custom artwork, logos, and premium boxes.' },
    { title: 'Bulk Supply', desc: 'Sourced in huge quantity for spas, hotels, and distributors.' },
    { title: 'Custom Formulations', desc: 'Option to infuse with Argan oil, Eucalyptus, Nila or Rose.' },
    { title: 'Export-Ready Logistics', desc: 'Supplied with COA, SDS, MSDS, and export customs clearance.' }
  ];

  const sustainabilityItems = dict?.privateLabel?.card2?.items || [
    { title: 'Fair Trade Support', desc: 'Ensures fair trade margins and wages for local rural women.' },
    { title: 'Preserving Heritage', desc: 'Keeps age-old natural cooking & preparation methods alive.' },
    { title: 'Environmentally Conscious', desc: 'Sustainable olive harvesting that respects the local climate.' },
    { title: 'Direct Community Benefits', desc: 'A portion of revenues goes back into supporting rural families.' }
  ];

  const incorporateSteps = dict?.incorporate?.steps || [
    {
      title: 'For Home Use',
      text: 'Apply on wet skin in a circular motion with a glove (Kessa), leave for a few minutes, rinse thoroughly with warm water, and follow with a moisturizer or pure body oil (like Argan oil).'
    },
    {
      title: 'For Spas & Hammams',
      text: 'Use as part of traditional hammam treatments, body wraps, and custom steam room exfoliation rituals. Prepares the skin surface for wraps and deeply relaxing massage oil absorption.'
    },
    {
      title: 'For Cosmetic Brands',
      text: 'Formulate custom Beldi soap bars or paste jars. Include them in signature spa kits, luxury body gift sets, private label lines, or organic exfoliation cosmetic lines.'
    }
  ];

  const summaryItems = dict?.summary?.items || [
    { title: 'Natural Exfoliation', desc: 'Removes dead skin cells, unclogs pores.', icon: Brush },
    { title: 'Deep Hydration', desc: 'Olive oil content nourishes and softens skin.', icon: Droplet },
    { title: 'Detoxifying', desc: 'Cleanses impurities, dirt, and excess oils.', icon: Wind },
    { title: 'Anti-Aging', desc: 'Antioxidants improve elasticity and reduce fine lines.', icon: TrendingUp },
    { title: 'Hair & Scalp Care', desc: 'Cleanses and prepares hair for oils or treatments.', icon: HandMetal },
    { title: 'Nail & Cuticle Care', desc: 'Strengthens nails and softens cuticles.', icon: Scissors },
    { title: 'All Skin Types', desc: 'Gentle, chemical-free, suitable for sensitive skin.', icon: Heart },
    { title: 'Private Label & Wholesale Ready', desc: 'Flexible bulk supply, ethical sourcing, branding.', icon: PackageCheck },
    { title: 'Sustainable & Ethical', desc: 'Supports local Moroccan women cooperatives.', icon: Users }
  ];

  // Resolve icons dynamically based on index for the summary section
  const summaryIcons = [Brush, Droplet, Wind, TrendingUp, HandMetal, Scissors, Heart, PackageCheck, Users];

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
              <span className={sectionLabelClass}>{dict?.hero?.label || 'Skincare Science'}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-[1.15] mb-8">
                {dict?.hero?.title || 'The Benefits of Moroccan Black Soap'}
              </h1>
              <div className="space-y-6 text-stone-600">
                <p className="text-lg md:text-xl font-medium text-emerald-950/80 border-l-4 border-secondary pl-4 py-1">
                  {dict?.hero?.description || 'Moroccan black soap, known as Beldi soap, is one of Morocco’s most treasured natural skincare products. Made primarily from olive oil and crushed olives, Beldi soap has been used in traditional hammam rituals for centuries to cleanse, exfoliate, and rejuvenate the skin.'}
                </p>
                <p className={bodyClass}>
                  {dict?.hero?.intro || 'At Moroccan Black Soap, we supply authentic, organic Beldi soap for wholesale, private label, and spa use. This page explains the many benefits of Moroccan black soap, why it remains a favorite for skincare enthusiasts, and how it can elevate spa treatments, retail products, and cosmetic formulations.'}
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
                  src="/image/home-hammam-treatment.webp"
                  alt="Moroccan black soap applied during a traditional hammam treatment"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/80 to-transparent p-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Leaf size={16} className="text-secondary" />
                    <span className="text-xs uppercase tracking-wider font-bold text-secondary">{dict?.hero?.badge || '100% Pure Organic'}</span>
                  </div>
                  <p className="font-serif font-bold text-lg">{dict?.hero?.badgeTitle || 'Rich Olive & Olive Paste'}</p>
                  <p className="text-xs text-stone-200">{dict?.hero?.badgeDesc || "Morocco's ancient beauty secret"}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Exfoliation & Detox Section */}
      <section className="py-24 bg-stone-50 relative" aria-labelledby="exfoliation-heading">
        <div className="absolute top-0 left-0 w-32 h-full bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
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
                  src="/image/home-soap-hands.webp"
                  alt="Close-up of authentic Moroccan Beldi black soap paste on the skin"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-stone-100">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">{dict?.exfoliation?.badge || 'Cellular Renewal'}</span>
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
                <span className={sectionLabelClass}>{dict?.exfoliation?.label || 'Purifying Exfoliation'}</span>
                <h2 id="exfoliation-heading" className={sectionHeadingClass}>
                  {dict?.exfoliation?.title || 'Natural Exfoliation & Detox'}
                </h2>
                <p className={bodyClass}>
                  {dict?.exfoliation?.desc || 'One of the most notable benefits of Moroccan black soap is its gentle exfoliating effect. Applied on damp skin with a kessa glove in hammam rituals, it helps remove dead skin cells, unclogs pores, and leaves the skin feeling smoother and softer.'}
                </p>
              </div>

              {/* Exfoliation benefits */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                <p className="font-bold text-primary text-base">{dict?.exfoliation?.listTitle || 'Regular use of Beldi soap promotes:'}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exfoliationListItems.map((item: string) => (
                    <li key={item} className="flex items-center gap-2 text-stone-700 text-sm font-medium">
                      <CheckCircle2 size={16} className="text-secondary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detox benefits */}
              <div className="bg-emerald-950 text-white p-6 rounded-2xl border border-emerald-900 shadow-md">
                <h3 className="font-serif font-bold text-lg text-secondary mb-3 flex items-center gap-2">
                  <Shield size={18} className="text-secondary" />
                  {dict?.exfoliation?.detox?.title || 'Detoxifying Properties'}
                </h3>
                <p className="text-emerald-100/80 text-sm leading-relaxed mb-4">
                  {dict?.exfoliation?.detox?.desc || 'Moroccan black soap contains natural saponins and minerals from olives that help detoxify the skin, pulling out embedded impurities.'}
                </p>
                <ul className="grid grid-cols-1 gap-2 text-sm text-emerald-50">
                  {detoxItems.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hydration & Anti-Aging Section */}
      <section className="py-24 bg-white relative" aria-labelledby="hydration-heading">
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
                <span className={sectionLabelClass}>{dict?.hydration?.label || 'Nourishing Hydration'}</span>
                <h2 id="hydration-heading" className={sectionHeadingClass}>
                  {dict?.hydration?.title || 'Deep Hydration & Anti-Aging'}
                </h2>
                <p className={bodyClass}>
                  {dict?.hydration?.desc || 'Unlike regular soaps that can dry the skin, Moroccan black soap is rich in unsaponified olive oil, which provides deep hydration. The oil content nourishes the skin while cleansing, leaving it soft, supple, and glowing.'}
                </p>
              </div>

              {/* Hydration Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200/60">
                  <h4 className="font-serif font-bold text-primary text-base mb-2 flex items-center gap-2">
                    <Droplet size={18} className="text-secondary" />
                    {dict?.hydration?.col1?.title || 'Hydration Benefits'}
                  </h4>
                  <ul className="space-y-2 text-stone-600 text-sm">
                    {hydrationCol1Items.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200/60">
                  <h4 className="font-serif font-bold text-primary text-base mb-2 flex items-center gap-2">
                    <TrendingUp size={18} className="text-secondary" />
                    {dict?.hydration?.col2?.title || 'Anti-Aging & Renewal'}
                  </h4>
                  <ul className="space-y-2 text-stone-600 text-sm">
                    {hydrationCol2Items.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-950/5 p-6 rounded-2xl border border-emerald-950/10">
                <p className="text-stone-700 text-sm md:text-base italic font-medium">
                  {dict?.hydration?.outro || 'Using Moroccan black soap before moisturizers or oils amplifies the absorption of active ingredients, significantly enhancing their anti-aging effects.'}
                </p>
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
                  src="/image/home-kessa-glove.webp"
                  alt="Nourishing Moroccan cosmetic oil for anti-aging beauty treatments"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-md border border-stone-100 flex items-center gap-3">
                  <div className="p-2 bg-secondary/15 rounded-lg">
                    <Heart size={18} className="text-emerald-800" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">{dict?.hydration?.badge || 'Antioxidant Rich'}</p>
                    <p className="text-stone-500 text-xs mt-0.5">{dict?.hydration?.badgeDesc || 'Naturally high in Vit E & Oleic Acids'}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hair, Scalp, Nail & Cuticle Care Section */}
      <section className="py-24 bg-stone-50 relative" aria-labelledby="hair-nail-heading">
        <div className="absolute top-0 right-0 w-32 h-full bg-[radial-gradient(#022c22_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />
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
                  src="/image/home-hammam-arm.webp"
                  alt="Moroccan argan oil treatment for hair and scalp health"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
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
              className="order-1 lg:order-2 space-y-8"
            >
              <div>
                <span className={sectionLabelClass}>{dict?.specialized?.label || 'Specialized Treatment'}</span>
                <h2 id="hair-nail-heading" className={sectionHeadingClass}>
                  {dict?.specialized?.title || 'Hair, Scalp, Nail & Cuticle Care'}
                </h2>
                <p className={bodyClass}>
                  {dict?.specialized?.desc || 'While primarily used for the body, Moroccan black soap can also support hair and scalp health. The natural oils nourish cuticles and strengthen brittle nails.'}
                </p>
              </div>

              {/* Hair benefits */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl shrink-0">
                  <Leaf className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-primary text-lg mb-2">{dict?.specialized?.hair?.title || 'Hair & Scalp Health'}</h3>
                  <ul className="space-y-2 text-stone-600 text-sm">
                    {hairItems.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-secondary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Nail benefits */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl shrink-0">
                  <HandMetal className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-primary text-lg mb-2">{dict?.specialized?.nail?.title || 'Nail & Cuticle Care'}</h3>
                  <ul className="space-y-2 text-stone-600 text-sm">
                    {nailItems.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-secondary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Suitable for All Skin Types Section */}
      <section className="py-24 bg-white" aria-labelledby="skin-types-heading">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16"
          >
            <span className={sectionLabelClass}>{dict?.skinTypes?.label || 'Universal Efficacy'}</span>
            <h2 id="skin-types-heading" className={sectionHeadingClass}>
              {dict?.skinTypes?.title || 'Suitable for All Skin Types'}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              {dict?.skinTypes?.desc || 'Moroccan black soap is gentle yet highly effective, adapting to different skin conditions without disrupting the natural lipid barrier.'}
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {skinTypeItems.map((item: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-stone-50 p-6 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-sm mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-serif font-bold text-primary text-lg mb-2">{item.type}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-stone-500 text-sm italic mt-12 font-medium">
            {dict?.skinTypes?.outro || 'Its versatility makes it a preferred raw ingredient for wholesale cosmetic brands, luxury spa chains, and private label skincare businesses worldwide.'}
          </p>
        </div>
      </section>

      {/* Private Label & Sustainability (Combined) */}
      <section className="py-24 bg-stone-50" aria-labelledby="private-label-heading">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className={sectionLabelClass}>{dict?.privateLabel?.label || 'B2B Wholesale Opportunities'}</span>
            <h2 id="private-label-heading" className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              {dict?.privateLabel?.title || 'Private Label & Ethical Sourcing'}
            </h2>
            <p className="text-stone-600 text-lg">
              {dict?.privateLabel?.desc || 'Partner with a supplier that values raw product efficacy and supports the Moroccan communities that harvest it.'}
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mx-auto">
            {/* Card 1: Private Label */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xl flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="relative h-64 w-full">
                  <Image
                    src="/image/private-label-jars.webp"
                    alt="Private label cosmetic bottles and soap boxes"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="bg-secondary text-primary font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                      {dict?.privateLabel?.card1?.badge || 'Branding'}
                    </span>
                    <h3 className="font-serif font-bold text-2xl mt-2">
                      {dict?.privateLabel?.card1?.title || 'Private Label Branding Benefits'}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-stone-600 leading-relaxed mb-6">
                    {dict?.privateLabel?.card1?.desc || 'Moroccan Beldi soap is an excellent candidate for custom private label brands looking to add a heritage spa product to their catalog.'}
                  </p>
                  
                  <ul className="space-y-3">
                    {privateLabelItems.map((item: any, idx: number) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-primary text-sm block">{item.title}</span>
                          <span className="text-stone-500 text-xs md:text-sm">{item.desc}</span>
                        </div>
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
                  {dict?.privateLabel?.card1?.btn || 'Consult Packaging Options'} <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Sustainability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xl flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="relative h-64 w-full">
                  <Image
                    src="/image/export-pallet-bulk-soap.webp"
                    alt="Ethical harvesting and cooperative production in Morocco"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="bg-secondary text-primary font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                      {dict?.privateLabel?.card2?.badge || 'Ethical'}
                    </span>
                    <h3 className="font-serif font-bold text-2xl mt-2">
                      {dict?.privateLabel?.card2?.title || 'Sustainability & Cooperatives'}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-stone-600 leading-relaxed mb-6">
                    {dict?.privateLabel?.card2?.desc || 'Authentic Moroccan black soap supports ethical sourcing. We work closely with local women cooperatives to preserve heritage while ensuring fair livelihoods.'}
                  </p>
                  
                  <ul className="space-y-3">
                    {sustainabilityItems.map((item: any, idx: number) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-primary text-sm block">{item.title}</span>
                          <span className="text-stone-500 text-xs md:text-sm">{item.desc}</span>
                        </div>
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
                  {dict?.privateLabel?.card2?.btn || 'Learn About Our Cooperatives'} <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Incorporate Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden" aria-labelledby="incorporate-heading">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/moroccan-flower.png')]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              {dict?.incorporate?.label || 'Application Guide'}
            </span>
            <h2 id="incorporate-heading" className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              {dict?.incorporate?.title || 'How to Incorporate Moroccan Black Soap'}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {incorporateSteps.map((step: any, idx: number) => (
              <div key={idx} className="bg-emerald-900/40 p-8 rounded-3xl border border-white/10 hover:bg-emerald-900/60 transition-colors">
                <span className="text-secondary font-bold text-3xl font-serif block mb-4">0{idx + 1}</span>
                <h3 className="font-serif font-bold text-xl text-white mb-3">{step.title}</h3>
                <p className="text-emerald-100/70 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary of Benefits Section */}
      <section className="py-24 bg-white" aria-labelledby="summary-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={sectionLabelClass}>{dict?.summary?.label || 'Quick Overview'}</span>
            <h2 id="summary-heading" className={sectionHeadingClass}>
              {dict?.summary?.title || 'Summary of Benefits'}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {summaryItems.map((item: any, idx: number) => {
              const Icon = summaryIcons[idx] || Brush;
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
                {dict?.cta?.label || 'B2B Bulk Sourcing'}
              </span>
              <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                {dict?.cta?.title || 'Get Moroccan Black Soap for Your Brand or Spa'}
              </h2>
              <p className="text-emerald-50/80 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                {dict?.cta?.desc || 'Whether you are a spa, cosmetic brand, or retailer, Moroccan black soap offers a natural, heritage-rich product to enhance your offerings. Contact us to request wholesale pricing, private label options, or sample orders, and bring the authentic Moroccan Beldi soap experience to your customers.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="https://wa.me/212638168637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-secondary text-primary px-8 py-4 rounded-full text-base md:text-lg font-bold hover:bg-amber-400 transition-all duration-300 shadow-lg w-full sm:w-auto"
                >
                  {dict?.common?.cta?.whatsapp || 'Contact Us on WhatsApp'} <ArrowUpRight size={18} />
                </Link>
                <Link
                  href="mailto:inquiry@moroccanorganica.com"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white px-8 py-4 rounded-full text-base md:text-lg font-bold hover:border-secondary hover:text-secondary transition-all duration-300 w-full sm:w-auto"
                >
                  {dict?.common?.cta?.email || 'Send an Email Inquiry'} <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
};

export default BenefitsContent;
