'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ShieldAlert,
  HelpCircle,
  Truck,
  ArrowUpRight,
  ChevronRight,
  Package,
  Layers,
  Award,
  Brush,
  ClipboardList,
  FlaskConical,
  Globe,
  Leaf,
} from 'lucide-react';

const sectionHeadingClass =
  'text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6 leading-tight';
const sectionLabelClass =
  'text-secondary font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block';
const bodyClass = 'text-stone-600 leading-relaxed text-base md:text-lg';

interface BulkOrderContentProps {
  dict: any;
  lang: string;
}

const BulkOrderContent = ({ dict, lang }: BulkOrderContentProps) => {
  // Safe fallbacks for arrays
  const whyChooseItems = dict?.why?.items || [
    {
      title: 'Exfoliation',
      text: 'Gently removes dead skin cells and deep-cleanses without stripping moisture.',
      icon: Brush
    },
    {
      title: 'Hydration',
      text: 'High olive oil concentration moisturizes and softens skin deeply.',
      icon: CheckCircle2
    },
    {
      title: 'Detoxification',
      text: 'Cleanses clogged pores, drawing out environmental toxins and impurities.',
      icon: Award
    },
    {
      title: 'Anti-Aging',
      text: 'Rich in vitamin E, supporting skin elasticity and natural radiance.',
      icon: Layers
    },
    {
      title: 'Spa Treatments',
      text: 'Perfect for hammams, wellness centers, and traditional body massage rituals.',
      icon: ClipboardList
    }
  ];

  const whyChooseIcons = [Brush, CheckCircle2, Award, Layers, ClipboardList];

  const orderTiers = dict?.capabilities?.tiers || [
    { range: '10–50 kg', tier: 'Small Orders', desc: 'Ideal for startups, test markets, or boutique salons.' },
    { range: '50–500 kg', tier: 'Medium Orders', desc: 'Suitable for private label cosmetic brands and retail setups.' },
    { range: '500–5000 kg', tier: 'Large Orders', desc: 'Industrial-scale supply for large distribution and cosmetic manufacturing.' }
  ];

  const pkgOptions = dict?.capabilities?.pkgItems || [
    'Retail-ready jars and tubs (250g–1kg)',
    'HDPE bags or jerricans for spas',
    '25–50 kg cartons for wholesale buyers',
    'Custom packaging for private label'
  ];

  const certItems = dict?.certifications?.items || [
    {
      title: 'Certificate of Analysis (COA)',
      desc: 'Validates raw material composition, purity, pH, and microbiological safety benchmarks.',
      icon: FlaskConical,
    },
    {
      title: 'Safety Data Sheet (SDS)',
      desc: 'Compliant with international standards for safe handling, transport, and storage.',
      icon: ShieldAlert,
    },
    {
      title: 'Certificate of Origin (COO)',
      desc: 'Moroccan Chamber of Commerce verified origin documentation for customs clearance.',
      icon: Globe,
    },
    {
      title: 'Organic Certification',
      desc: 'ECOCERT and USDA Organic raw material traceability certifications.',
      icon: Leaf,
    },
  ];

  const certIcons = [FlaskConical, ShieldAlert, Globe, Leaf];

  const pricingRows = dict?.pricing?.rows || [
    { qty: '10–49 kg', price: '$6 – $8', pkg: 'Retail jars, HDPE bags' },
    { qty: '50–199 kg', price: '$5 – $6', pkg: 'Retail boxes, industrial cartons' },
    { qty: '200–999 kg', price: '$4 – $5', pkg: 'Bulk cartons, 25–50 kg' },
    { qty: '1000+ kg', price: 'Custom Quote', pkg: 'Custom bulk packaging' }
  ];

  const privateLabelItems = dict?.privateLabel?.items || [
    'Apply logo and labels',
    'Flexible retail & spa packaging',
    'Essential or Argan oil additives',
    'Low MOQs (50–100 units)'
  ];

  const orderingSteps = dict?.orderingSteps?.steps || [
    { step: '01', title: 'Select Setup', desc: 'Choose your desired quantity, fragrance additives, and packaging type.' },
    { step: '02', title: 'Get Quote', desc: 'Contact our B2B team with specifications to receive custom pricing.' },
    { step: '03', title: 'Confirm', desc: 'Approve pricing and final shipping parameters.' },
    { step: '04', title: 'Production', desc: 'We prepare your batch and complete rigorous quality checks.' },
    { step: '05', title: 'Delivery', desc: 'Your order ships globally with full export documentation.' }
  ];

  const authenticityItems = dict?.authenticity?.items || [
    { title: 'Texture & Color', desc: 'Soft, jelly-like paste. Colors naturally range from dark brown, olive-green to black.' },
    { title: 'Pure Ingredients', desc: 'Saponified olive oil, crushed black olives, and mineral water. No synthetic foaming agents.' },
    { title: 'Price Awareness', desc: 'Extremely low prices usually point to diluted soap bases containing high chemical filler concentrations.' },
    { title: 'Airtight Packaging', desc: 'Requires dark, airtight containers to preserve active natural antioxidants.' },
    { title: 'Ethical Cooperatives', desc: 'Direct Moroccan sourcing supports the cooperative women harvesting the olive orchards.' }
  ];

  return (
    <article className="bg-white overflow-hidden">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-stone-50 via-white to-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-950/5 skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mx-auto">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <span className={sectionLabelClass}>{dict?.hero?.label || 'B2B Wholesale'}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-[1.15] mb-8">
                {dict?.hero?.title || 'Bulk Orders – Wholesale Moroccan Black Soap'}
              </h1>
              
              <div className="space-y-6 text-stone-600">
                <p className="text-lg md:text-xl font-medium text-emerald-950/80 border-l-4 border-secondary pl-4 py-1">
                  {dict?.hero?.description || 'Moroccan black soap, also known as Beldi soap, is a traditional Moroccan skincare product, treasured for its gentle exfoliating, hydrating, and detoxifying properties.'}
                </p>
                <p className={bodyClass}>
                  {dict?.hero?.p1 || 'At Moroccan Black Soap, we supply authentic, 100% natural Beldi soap in bulk to cosmetic brands, spas, wellness centers, retailers, and private label businesses worldwide. Whether you need small orders for retail testing or large bulk quantities for spa or cosmetic distribution, our wholesale options provide consistent quality, traceable sourcing, and professional support.'}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#contact"
                  className="bg-primary hover:bg-emerald-950 text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-300 shadow-md flex items-center gap-2"
                >
                  {dict?.hero?.btn1 || 'Request Bulk Quote'} <ArrowUpRight size={18} className="text-secondary" />
                </a>
                <a
                  href="#pricing-guide"
                  className="bg-stone-100 hover:bg-stone-200 text-primary px-8 py-4 rounded-full text-base font-bold transition-all duration-300 border border-stone-200"
                >
                  {dict?.hero?.btn2 || 'View Pricing Guide'}
                </a>
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
                  src="/image/bulk-soap-barrel-200l.webp"
                  alt="Bulk Moroccan Black Soap Wholesale Drums"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/95 to-transparent p-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Package size={16} className="text-secondary" />
                    <span className="text-xs uppercase tracking-wider font-bold text-secondary">{dict?.hero?.badge || 'Export Ready Packaging'}</span>
                  </div>
                  <p className="font-serif font-bold text-lg">{dict?.hero?.badgeTitle || '200 Liter Industrial Barrels'}</p>
                  <p className="text-xs text-stone-200">{dict?.hero?.badgeDesc || 'Sourced ethically from local Moroccan cooperatives'}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Why Choose Moroccan Black Soap Section */}
      <section className="py-24 bg-stone-50" aria-labelledby="why-choose-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={sectionLabelClass}>{dict?.why?.label || 'Product Value'}</span>
            <h2 id="why-choose-heading" className={sectionHeadingClass}>
              {dict?.why?.title || 'Why Choose Moroccan Black Soap'}
            </h2>
            <p className="text-stone-600">
              {dict?.why?.desc || 'Beldi soap is naturally rich in olive oil, crushed olives, and natural minerals, making it highly effective and a favorite ingredient for global beauty brands.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseItems.map((item: any, idx: number) => {
              const Icon = whyChooseIcons[idx] || Brush;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-3 bg-secondary/15 rounded-xl text-primary w-fit mb-4">
                    <Icon size={20} className="text-emerald-800" />
                  </div>
                  <h3 className="font-serif font-bold text-primary text-lg mb-2">{item.title}</h3>
                  <p className="text-stone-500 text-xs md:text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bulk Supply Options */}
      <section className="py-24 bg-white" aria-labelledby="supply-heading">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 rounded-3xl border-2 border-emerald-950/10 pointer-events-none -translate-x-3 -translate-y-3" />
              <div className="absolute inset-0 bg-secondary/5 rounded-3xl rotate-2" />
              
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10">
                <Image
                  src="/image/export-pallet-bulk-soap.webp"
                  alt="Secure Pallet Shipping for Bulk Orders"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-stone-100 flex items-center gap-2">
                  <Truck className="text-secondary" size={16} />
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">{dict?.capabilities?.label || 'Global Sea/Air Freight'}</span>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className={sectionLabelClass}>{dict?.capabilities?.label || 'Our Capabilities'}</span>
                <h2 id="supply-heading" className={sectionHeadingClass}>
                  {dict?.capabilities?.title || 'Bulk Supply Options'}
                </h2>
                <p className={bodyClass}>
                  {dict?.capabilities?.desc || 'We offer flexible bulk supply setups to accommodate cosmetic startups, expanding brands, and industrial distributors alike.'}
                </p>
              </div>

              {/* Order tiers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {orderTiers.map((item: any, idx: number) => (
                  <div key={idx} className="p-5 bg-stone-50 rounded-xl border border-stone-200/60">
                    <span className="text-secondary font-bold text-lg block mb-1">{item.range}</span>
                    <h4 className="font-bold text-primary text-sm mb-2">{item.tier}</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Packaging and Lead Time details */}
              <div className="border-t border-stone-100 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif font-bold text-primary text-lg mb-3">{dict?.capabilities?.pkgTitle || 'Packaging Options'}</h4>
                  <ul className="space-y-2 text-stone-600 text-sm">
                    {pkgOptions.map((option: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary text-lg mb-3">{dict?.capabilities?.leadTitle || 'Sourcing & Lead Time'}</h4>
                  <p className="text-stone-600 text-sm leading-relaxed mb-2">
                    {dict?.capabilities?.leadText || 'Orders are processed efficiently. Lead time is typically 7–21 days depending on order size and packaging choice.'}
                  </p>
                  <p className="text-stone-500 text-xs">
                    {dict?.capabilities?.leadSubText || 'All formulations are freshly prepared at our Marrakesh plant to guarantee maximum shelf-life.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Documentation Section */}
      <section className="py-24 bg-stone-50" aria-labelledby="certifications-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={sectionLabelClass}>{dict?.certifications?.label || 'Global Compliance'}</span>
            <h2 id="certifications-heading" className={sectionHeadingClass}>
              {dict?.certifications?.title || 'Certifications & Documentation'}
            </h2>
            <p className="text-stone-600">
              {dict?.certifications?.desc || 'All bulk orders come with full technical documentation to ensure smooth international shipping and regulatory compliance.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {certItems.map((item: any, idx: number) => {
              const Icon = certIcons[idx] || FlaskConical;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200/60 shadow-sm space-y-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50">
                    <Icon size={22} strokeWidth={1.75} className="text-primary" />
                  </div>
                  <h4 className="font-bold text-primary text-base">{item.title}</h4>
                  <p className="text-stone-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wholesale Pricing Guide Section */}
      <section id="pricing-guide" className="py-24 bg-white" aria-labelledby="pricing-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={sectionLabelClass}>{dict?.pricing?.label || 'B2B Pricing Matrix'}</span>
            <h2 id="pricing-heading" className={sectionHeadingClass}>
              {dict?.pricing?.title || 'Wholesale Pricing Guide'}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </div>

          <div className="bg-stone-50 border border-stone-200/80 rounded-3xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white font-semibold">
                    <th className="px-6 py-4 text-sm uppercase tracking-wider font-bold">{dict?.pricing?.th1 || 'Quantity'}</th>
                    <th className="px-6 py-4 text-sm uppercase tracking-wider font-bold">{dict?.pricing?.th2 || 'Price per kg (USD)'}</th>
                    <th className="px-6 py-4 text-sm uppercase tracking-wider font-bold">{dict?.pricing?.th3 || 'Packaging'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700 text-sm">
                  {pricingRows.map((row: any, idx: number) => {
                    const isLast = idx === pricingRows.length - 1;
                    return (
                      <tr key={idx} className={`${isLast ? 'bg-secondary/5 hover:bg-secondary/10' : 'hover:bg-stone-100/50'} transition-colors`}>
                        <td className={`px-6 py-5 font-bold ${isLast ? 'text-primary' : ''}`}>{row.qty}</td>
                        <td className="px-6 py-5 text-emerald-800 font-bold">{row.price}</td>
                        <td className={`px-6 py-5 ${isLast ? 'font-semibold' : ''}`}>{row.pkg}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="bg-stone-100 px-6 py-4 text-stone-500 text-xs text-center border-t border-stone-200">
              {dict?.pricing?.disclaimer || '* Prices are indicative. Contact us for precise wholesale quotes, including shipping rates and taxes.'}
            </div>
          </div>
        </div>
      </section>

      {/* Private Label Promotion */}
      <section className="py-24 bg-stone-50" aria-labelledby="private-label-heading">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className={sectionLabelClass}>{dict?.privateLabel?.label || 'Turn-key Solutions'}</span>
              <h2 id="private-label-heading" className={sectionHeadingClass}>
                {dict?.privateLabel?.title || 'Private Label Opportunities'}
              </h2>
              <p className={bodyClass}>
                {dict?.privateLabel?.desc || 'Our bulk Beldi soap can also be customized for private label businesses looking to establish a brand without investement f factory machinery.'}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-stone-700 text-sm font-semibold pt-2">
                {privateLabelItems.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-secondary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href={`/${lang}/private-label`}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary"
                >
                  {dict?.privateLabel?.btn || 'Explore Private Label Options'} <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/image/private-label-jars.webp"
                  alt="Custom branded Moroccan black soap jars"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Place a Bulk Order */}
      <section className="py-24 bg-white" aria-labelledby="how-to-order-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={sectionLabelClass}>{dict?.orderingSteps?.label || 'Ordering Steps'}</span>
            <h2 id="how-to-order-heading" className={sectionHeadingClass}>
              {dict?.orderingSteps?.title || 'How to Place a Bulk Order'}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {orderingSteps.map((item: any, idx: number) => (
              <div key={idx} className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 flex flex-col justify-between">
                <div>
                  <span className="text-secondary font-bold font-serif text-3xl mb-4 block">{item.step}</span>
                  <h4 className="font-serif font-bold text-primary text-base mb-2">{item.title}</h4>
                </div>
                <p className="text-stone-500 text-xs leading-relaxed mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Authenticity Check */}
      <section className="py-24 bg-stone-50" aria-labelledby="auth-heading">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image on left */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden border-8 border-white bg-white shadow-xl">
                <Image
                  src="/image/about-open-jar.webp"
                  alt="Open jar of authentic Moroccan Beldi black soap paste"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Right: details */}
            <div className="lg:col-span-7 space-y-6">
              <span className={sectionLabelClass}>{dict?.authenticity?.label || 'Quality Guide'}</span>
              <h2 id="auth-heading" className="text-2xl md:text-3xl font-serif font-bold text-primary">
                {dict?.authenticity?.title || 'How to Identify Authentic Moroccan Black Soap'}
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                {dict?.authenticity?.desc || 'When sourcing bulk Beldi soap, look for these natural characteristics to avoid artificial formulations:'}
              </p>

              <div className="space-y-4">
                {authenticityItems.map((item: any, idx: number) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <ShieldAlert size={18} className="text-secondary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-primary text-sm block">{item.title}</strong>
                      <span className="text-stone-500 text-xs md:text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                {dict?.cta?.label || 'Start Sourcing'}
              </span>
              <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                {dict?.cta?.title || 'Get Started with Bulk Orders'}
              </h2>
              <p className="text-emerald-50/80 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                {dict?.cta?.desc || 'Ready to source authentic Moroccan Beldi soap in bulk? Contact us today to request samples, bulk pricing, or private label configurations.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="https://wa.me/212638168637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-secondary text-primary px-8 py-4 rounded-full text-base md:text-lg font-bold hover:bg-amber-400 transition-all duration-300 shadow-lg w-full sm:w-auto"
                >
                  {dict?.cta?.btn1 || 'Contact on WhatsApp'} <ArrowUpRight size={18} />
                </Link>
                <Link
                  href={`/${lang}/contact`}
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white px-8 py-4 rounded-full text-base md:text-lg font-bold hover:border-secondary hover:text-secondary transition-all duration-300 w-full sm:w-auto"
                >
                  {dict?.cta?.btn2 || 'Submit Inquiry Form'} <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
};

export default BulkOrderContent;
