'use client';

import { motion } from 'framer-motion';
import {
  FileCheck,
  Shield,
  Globe,
  Award,
  Tag,
  PackageCheck,
  FlaskConical,
  CheckCircle2,
  Star,
  Heart,
  Truck,
  Layers,
  type LucideIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const sourcingPoints = [
  {
    title: 'Olive oil base',
    description: 'Rich in vitamin E and antioxidants',
  },
  {
    title: 'Crushed olives',
    description: 'Provide natural exfoliation and nutrients',
  },
  {
    title: 'Optional infusions',
    description: 'Aloe vera or essential oils for hydration and fragrance',
  },
  {
    title: 'Handcrafted by cooperatives',
    description: 'Ensures fair trade, quality, and traceability',
  },
];

const pricingRows = [
  {
    quantity: '10–49 kg',
    price: '$6–8',
    packaging: 'HDPE bag, retail-ready',
  },
  {
    quantity: '50–199 kg',
    price: '$5–6',
    packaging: 'Retail boxes or industrial cartons',
  },
  {
    quantity: '200–999 kg',
    price: '$4–5',
    packaging: '25–50 kg bulk cartons',
  },
  {
    quantity: '1000+ kg',
    price: 'Custom Quote',
    packaging: 'Flexible bulk packaging',
  },
];

const certifications = [
  {
    icon: <FileCheck className="w-6 h-6 text-secondary" />,
    title: 'Certificate of Analysis (COA)',
    description: 'Purity, pH, and composition',
  },
  {
    icon: <Shield className="w-6 h-6 text-secondary" />,
    title: 'Safety Data Sheet (SDS)',
    description: 'Compliant with GHS/OSHA standards',
  },
  {
    icon: <Globe className="w-6 h-6 text-secondary" />,
    title: 'Certificate of Origin (COO)',
    description: 'Moroccan Chamber of Commerce verified',
  },
  {
    icon: <Award className="w-6 h-6 text-secondary" />,
    title: 'Organic Certificates',
    description: 'ECOCERT or equivalent for global markets',
  },
];

const privateLabelFeatures = [
  'Apply your logo and branding to each bar',
  'Custom packaging for retail or spa use',
  'Flexible MOQ from 50–100 units',
  'Optional custom formulations: Argan oil, essential oils, herbal blends',
  'Export-ready with full documentation',
];

const authenticTips = [
  {
    title: 'Texture & Color',
    description: 'Dark brown to black, soft and paste-like',
  },
  {
    title: 'Scent',
    description: 'Subtle, natural olive oil aroma',
  },
  {
    title: 'Ingredients',
    description:
      'Pure olive oil, crushed olives, natural mineral additives — no synthetics',
  },
  {
    title: 'Packaging',
    description: 'Dark, airtight containers or boxes to preserve quality',
  },
  {
    title: 'Price Awareness',
    description: 'Extremely low prices may indicate diluted or artificial soap',
  },
];

const whyWholesale: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Authentic, handcrafted, and nutrient-rich',
  },
  {
    icon: Heart,
    title: 'Ethically Sourced',
    description: "Supports women's cooperatives and sustainable practices",
  },
  {
    icon: Layers,
    title: 'Flexible Orders',
    description: 'From small batches to industrial-scale bulk',
  },
  {
    icon: Truck,
    title: 'Global Shipping',
    description: 'Export-ready with full documentation',
  },
  {
    icon: Tag,
    title: 'Private Label Options',
    description: 'Build your own brand with authentic Moroccan soap',
  },
];

interface ContentDetailsProps {
  dict: any;
  lang: string;
}

const ContentDetails = ({ dict, lang }: ContentDetailsProps) => {
  const currentSourcingPoints = dict?.details?.sourcing?.items || sourcingPoints;
  const currentPricingRows = dict?.details?.pricing?.rows || pricingRows;

  const localizedCertifications = [
    {
      icon: <FileCheck className="w-6 h-6 text-secondary" />,
      title: dict?.details?.certifications?.items?.[0]?.title || 'Certificate of Analysis (COA)',
      description: dict?.details?.certifications?.items?.[0]?.description || 'Purity, pH, and composition',
    },
    {
      icon: <Shield className="w-6 h-6 text-secondary" />,
      title: dict?.details?.certifications?.items?.[1]?.title || 'Safety Data Sheet (SDS)',
      description: dict?.details?.certifications?.items?.[1]?.description || 'Compliant with GHS/OSHA standards',
    },
    {
      icon: <Globe className="w-6 h-6 text-secondary" />,
      title: dict?.details?.certifications?.items?.[2]?.title || 'Certificate of Origin (COO)',
      description: dict?.details?.certifications?.items?.[2]?.description || 'Moroccan Chamber of Commerce verified',
    },
    {
      icon: <Award className="w-6 h-6 text-secondary" />,
      title: dict?.details?.certifications?.items?.[3]?.title || 'Organic Certificates',
      description: dict?.details?.certifications?.items?.[3]?.description || 'ECOCERT or equivalent for global markets',
    },
  ];

  const currentPrivateLabelFeatures = dict?.details?.privateLabel?.features || privateLabelFeatures;
  const localizedTips = dict?.details?.buyerGuide?.tips || authenticTips;

  const localizedWhyWholesale = [
    {
      icon: Star,
      title: dict?.details?.whyWholesale?.items?.[0]?.title || 'Premium Quality',
      description: dict?.details?.whyWholesale?.items?.[0]?.description || 'Authentic, handcrafted, and nutrient-rich',
    },
    {
      icon: Heart,
      title: dict?.details?.whyWholesale?.items?.[1]?.title || 'Ethically Sourced',
      description: dict?.details?.whyWholesale?.items?.[1]?.description || "Supports women's cooperatives and sustainable practices",
    },
    {
      icon: Layers,
      title: dict?.details?.whyWholesale?.items?.[2]?.title || 'Flexible Orders',
      description: dict?.details?.whyWholesale?.items?.[2]?.description || 'From small batches to industrial-scale bulk',
    },
    {
      icon: Truck,
      title: dict?.details?.whyWholesale?.items?.[3]?.title || 'Global Shipping',
      description: dict?.details?.whyWholesale?.items?.[3]?.description || 'Export-ready with full documentation',
    },
    {
      icon: Tag,
      title: dict?.details?.whyWholesale?.items?.[4]?.title || 'Private Label Options',
      description: dict?.details?.whyWholesale?.items?.[4]?.description || 'Build your own brand with authentic Moroccan soap',
    },
  ];

  return (
    <>
      {/* Authentic Sourcing */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                {dict?.details?.sourcing?.sectionLabel || 'Direct from Morocco'}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                {dict?.details?.sourcing?.title || 'Authentic Moroccan Sourcing'}
              </h2>
              <p className="text-stone-600 leading-relaxed mb-8">
                {dict?.details?.sourcing?.description ||
                  'Our Beldi soap is made using traditional Moroccan methods. By sourcing directly from local cooperatives, we guarantee authentic, high-quality Moroccan black soap that preserves heritage and natural efficacy.'}
              </p>
              <div className="space-y-4">
                {currentSourcingPoints.map((point: any) => (
                  <div
                    key={point.title}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-stone-100 shadow-sm"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-secondary shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="font-bold text-primary text-sm">
                        {point.title}
                      </p>
                      <p className="text-stone-600 text-sm">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white group"
            >
              <Image
                src="/image/beldi-soap-olive-oil.webp"
                alt="Traditional Moroccan black soap production by cooperatives"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              {dict?.details?.pricing?.sectionLabel || 'Competitive Rates'}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              {dict?.details?.pricing?.title || 'Wholesale Moroccan Black Soap'}
            </h2>
            <p className="text-stone-600 leading-relaxed">
              {dict?.details?.pricing?.description ||
                'We offer competitive pricing and bulk discounts for businesses. Prices are indicative — contact us for precise quotes, including shipping, FOB/CIF/DDP options.'}
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-stone-200 shadow-xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-5 font-serif font-bold text-sm uppercase tracking-wider">
                      {dict?.details?.pricing?.headers?.quantity || 'Quantity'}
                    </th>
                    <th className="px-6 py-5 font-serif font-bold text-sm uppercase tracking-wider">
                      {dict?.details?.pricing?.headers?.price || 'Price per kg (USD)'}
                    </th>
                    <th className="px-6 py-5 font-serif font-bold text-sm uppercase tracking-wider">
                      {dict?.details?.pricing?.headers?.packaging || 'Packaging'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentPricingRows.map((row: any, index: number) => (
                    <tr
                      key={row.quantity}
                      className={`border-t border-stone-100 ${
                        index % 2 === 0 ? 'bg-neutral/30' : 'bg-white'
                      } hover:bg-secondary/5 transition-colors`}
                    >
                      <td className="px-6 py-5 font-bold text-primary">
                        {row.quantity}
                      </td>
                      <td className="px-6 py-5 text-secondary font-bold text-lg">
                        {row.price}
                      </td>
                      <td className="px-6 py-5 text-stone-600 text-sm">
                        {row.packaging}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                {dict?.details?.certifications?.sectionLabel || 'Compliance & Trust'}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                {dict?.details?.certifications?.title || 'Certifications & Documentation'}
              </h2>
              <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
                {dict?.details?.certifications?.description ||
                  'All wholesale orders include full documentation for international shipping, ensuring your products meet international standards and comply with regulations.'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {localizedCertifications.map((cert: any, index: number) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral/40 p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-4 inline-flex p-3 bg-secondary/10 rounded-xl">
                    {cert.icon}
                  </div>
                  <h3 className="font-serif font-bold text-primary text-sm mb-2 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-stone-600 text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Private Label */}
      <section id="private-label" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-neutral group order-2 lg:order-1"
            >
              <Image
                src="/image/private-label-jars-alt.webp"
                alt="Private label Moroccan black soap and organic skincare products"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                {dict?.details?.privateLabel?.sectionLabel || 'Your Brand, Our Heritage'}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                {dict?.details?.privateLabel?.title || 'Private Label Moroccan Black Soap'}
              </h2>
              <p className="text-stone-600 leading-relaxed mb-8">
                {dict?.details?.privateLabel?.description ||
                  'Our Beldi soap is ideal for private label brands. Our clients include spas, cosmetic brands, online retailers, and boutique stores looking to offer authentic Moroccan black soap under their brand identity.'}
              </p>
              <ul className="space-y-4">
                {currentPrivateLabelFeatures.map((feature: string, index: number) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="p-1 bg-secondary/10 rounded-full shrink-0 mt-0.5">
                      {index === 0 ? (
                        <Tag size={16} className="text-secondary" />
                      ) : index === 1 ? (
                        <PackageCheck size={16} className="text-secondary" />
                      ) : index === 2 ? (
                        <Layers size={16} className="text-secondary" />
                      ) : index === 3 ? (
                        <FlaskConical size={16} className="text-secondary" />
                      ) : (
                        <Globe size={16} className="text-secondary" />
                      )}
                    </div>
                    <span className="text-stone-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Identify Authentic */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              {dict?.details?.buyerGuide?.sectionLabel || "Buyer's Guide"}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              {dict?.details?.buyerGuide?.title || 'How to Identify Authentic Moroccan Black Soap'}
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
              {dict?.details?.buyerGuide?.description ||
                'When sourcing Beldi soap, keep these tips in mind to ensure you receive genuine, high-quality product.'}
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-8" />
          </motion.div>

          <div>
            <div className="hidden lg:grid lg:grid-cols-5 gap-0">
              {localizedTips.map((tip: any, index: number) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`px-5 text-center ${
                    index < localizedTips.length - 1 ? 'border-r border-stone-200' : ''
                  }`}
                >
                  <span className="inline-flex w-9 h-9 rounded-full bg-primary text-secondary items-center justify-center font-bold text-sm mb-4">
                    {index + 1}
                  </span>
                  <p className="font-serif font-bold text-primary text-base mb-2 leading-snug">
                    {tip.title}
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <ul className="lg:hidden divide-y divide-stone-200">
              {localizedTips.map((tip: any, index: number) => (
                <motion.li
                  key={tip.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex gap-4 py-5 first:pt-0 last:pb-0"
                >
                  <span className="inline-flex w-9 h-9 shrink-0 rounded-full bg-primary text-secondary items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-serif font-bold text-primary mb-1">
                      {tip.title}
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Wholesale Summary */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              {dict?.details?.whyWholesale?.title || 'Why Wholesale Moroccan Black Soap'}
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
              {dict?.details?.whyWholesale?.description ||
                'By choosing our Beldi soap, businesses can provide luxury, natural skincare products that customers trust.'}
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-8" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
            {localizedWhyWholesale.map((item: any, index: number) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="relative w-full bg-white rounded-3xl pt-14 pb-9 px-5 shadow-sm border-2 border-stone-200 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-2 group-hover:border-primary/25 h-full min-h-[200px]">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-emerald-800 flex items-center justify-center shadow-lg ring-4 ring-white group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-7 h-7 text-secondary" strokeWidth={1.75} />
                      </div>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-primary mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-stone-500 leading-relaxed text-sm flex-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-primary rounded-[2rem] p-12 md:p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/moroccan-flower.png')] text-white" />
            <div className="relative z-10">
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                {dict?.details?.cta?.sectionLabel || 'Partner With Us'}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                {dict?.details?.cta?.title || 'Get Started Today'}
              </h2>
              <p className="text-emerald-50/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                {dict?.details?.cta?.description ||
                  'Whether you are launching a spa line, private label brand, or expanding your retail catalog — we are ready to supply authentic Moroccan black soap at wholesale scale with full export documentation.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://wa.me/212638168637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-secondary text-primary px-10 py-5 rounded-full text-lg font-bold hover:bg-amber-400 transition-all duration-300 shadow-lg"
                >
                  {dict?.details?.cta?.whatsapp || 'Contact Us on WhatsApp'}
                </Link>
                <Link
                  href="mailto:inquiry@moroccanorganica.com"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white px-10 py-5 rounded-full text-lg font-bold hover:border-secondary hover:text-secondary transition-all duration-300"
                >
                  {dict?.details?.cta?.email || 'Send an Email Inquiry'}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContentDetails;
