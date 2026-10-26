'use client';

import { Package, Box, Truck } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const orderTiers = [
  {
    range: '5–20 kg',
    label: 'Small Orders',
    description: 'Ideal for startups or product testing',
    icon: <Package className="w-7 h-7" aria-hidden="true" />,
  },
  {
    range: '20–50 kg',
    label: 'Medium Orders',
    description: 'Suitable for private label or retail stock',
    icon: <Box className="w-7 h-7" aria-hidden="true" />,
  },
  {
    range: '50–500 kg',
    label: 'Large Orders',
    description: 'Industrial-scale supply or global distribution',
    icon: <Truck className="w-7 h-7" aria-hidden="true" />,
  },
];

const packagingOptions = [
  'Food-safe HDPE bags or jerricans for formulators',
  '1–5 kg retail-ready packages for boutiques or stores',
  '25–50 kg industrial cartons for wholesale buyers',
  'Custom branding options for private label',
];

interface BulkSupplyProps {
  dict: any;
  lang: string;
}

const BulkSupply = ({ dict, lang }: BulkSupplyProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const localizedTiers = [
    {
      range: dict?.bulk?.items?.small?.range || '5–20 kg',
      label: dict?.bulk?.items?.small?.label || 'Small Orders',
      description: dict?.bulk?.items?.small?.description || 'Ideal for startups or product testing',
      icon: <Package className="w-7 h-7" aria-hidden="true" />,
    },
    {
      range: dict?.bulk?.items?.medium?.range || '20–50 kg',
      label: dict?.bulk?.items?.medium?.label || 'Medium Orders',
      description: dict?.bulk?.items?.medium?.description || 'Suitable for private label or retail stock',
      icon: <Box className="w-7 h-7" aria-hidden="true" />,
    },
    {
      range: dict?.bulk?.items?.large?.range || '50–500 kg',
      label: dict?.bulk?.items?.large?.label || 'Large Orders',
      description: dict?.bulk?.items?.large?.description || 'Industrial-scale supply or global distribution',
      icon: <Truck className="w-7 h-7" aria-hidden="true" />,
    },
  ];

  const currentPackagingOptions = dict?.bulk?.packagingOptions || packagingOptions;

  return (
    <section
      id="bulk-supply"
      className="py-24 bg-white relative overflow-hidden"
      aria-labelledby="bulk-supply-title"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="text-left max-w-xl order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              {dict?.bulk?.sectionLabel || 'Flexible Quantities'}
            </motion.span>
            <h2
              id="bulk-supply-title"
              className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight"
            >
              {dict?.bulk?.title || 'Bulk Supply Options'}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              {dict?.bulk?.description ||
                'We provide flexible quantities to accommodate different business needs — from small test batches to industrial-scale global distribution.'}
            </p>

            <div className="space-y-3">
              <p className="text-secondary font-bold uppercase tracking-widest text-xs">
                {dict?.bulk?.packagingOptionsTitle || 'Packaging Options'}
              </p>
              <ul className="space-y-3">
                {currentPackagingOptions.map((option: string) => (
                  <li
                    key={option}
                    className="flex items-start gap-3 text-stone-600 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-8 border-neutral order-1 lg:order-2"
          >
            <Image
              src="/image/black-soap-argan-enriched.webp"
              alt="Bulk Moroccan black soap in 25 kg buckets and cartons ready for export"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {localizedTiers.map((tier, index) => (
            <motion.div
              key={tier.label}
              variants={itemVariants}
              className="bg-neutral/40 border border-stone-100 rounded-2xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center ${
                  index === 2
                    ? 'bg-secondary text-primary'
                    : 'bg-primary text-secondary'
                } shadow-md`}
              >
                {tier.icon}
              </div>
              <p className="text-secondary font-bold text-2xl font-serif mb-1">
                {tier.range}
              </p>
              <h3 className="text-primary font-serif font-bold text-xl mb-3">
                {tier.label}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {tier.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Link
            href="https://wa.me/212638168637"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-neutral px-10 py-5 rounded-full text-lg font-bold hover:bg-emerald-900 transition-all duration-300 shadow-lg"
          >
            <Package size={22} />
            {dict?.bulk?.ctaButton || 'Request Bulk Quote'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BulkSupply;
