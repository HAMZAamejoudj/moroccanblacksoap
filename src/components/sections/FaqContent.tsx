'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  HelpCircle,
  ShoppingBag,
  Leaf,
  Truck,
  Bookmark,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: any;
  items: FAQItem[];
}

const sectionHeadingClass =
  'text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6 leading-tight';
const sectionLabelClass =
  'text-secondary font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block';

interface FaqContentProps {
  dict: any;
  lang: string;
}

const FaqContent = ({ dict, lang }: FaqContentProps) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIdx: number, itemIdx: number) => {
    const key = `${categoryIdx}-${itemIdx}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const categoryIcons = [Leaf, ShoppingBag, Bookmark, Truck];

  // Map localized categories or fallback to English defaults
  const categories: FAQCategory[] = (dict?.categories || [
    {
      title: 'Product & Usage',
      items: [
        {
          question: 'What is Moroccan Black Soap (Beldi soap)?',
          answer: 'Moroccan black soap, known locally as Beldi soap, is a 100% natural, soft, paste-like soap traditionally made from pure saponified olive oil and crushed black olives. Rich in vitamin E, it is renowned for its skin-softening, deep-cleansing, and exfoliating properties.'
        },
        {
          question: 'How do you use Moroccan black soap in a traditional hammam ritual?',
          answer: 'Apply a thin layer of the soap onto warm, damp skin in a hot bath or steam room. Leave it on for 5 to 10 minutes to soften the skin. Rinse thoroughly with warm water until no soap remains, then scrub the skin firmly in long strokes using a Moroccan Kessa exfoliating glove to roll away dead skin cells and impurities.'
        },
        {
          question: 'Is Moroccan black soap suitable for all skin types, including sensitive skin?',
          answer: 'Yes. Authentic Beldi soap is free from synthetic chemicals, artificial fragrances, parabens, and foaming agents, making it extremely gentle. It is suitable for oily, dry, normal, mature, and sensitive skin types.'
        },
        {
          question: 'Can Beldi soap be used on the face and hair?',
          answer: 'Yes, but with care. For the face, it deeply cleanses pores and balances sebum, but should be rinsed off quickly and followed with a natural moisturizer like Argan oil. For the hair and scalp, it acts as a natural clarifying shampoo that removes buildup, though it should always be followed with a nourishing conditioner or hair oil.'
        }
      ]
    },
    {
      title: 'Wholesale & Bulk',
      items: [
        {
          question: 'What is your minimum order quantity (MOQ) for wholesale orders?',
          answer: 'Our standard wholesale minimum order quantity starts at 50 units for pre-packaged retail-ready jars, and 25 kg for raw bulk paste. We offer flexible options for growing brands, boutique spas, and startups to scale gradually.'
        },
        {
          question: 'Do you offer custom formulations or scented versions in bulk?',
          answer: 'Yes. We can customize the soap formulation by infusing natural essential oils and botanical herbs. Popular options include Eucalyptus, Rose, Lavender, Nila powder, and Argan oil blends.'
        },
        {
          question: 'Are your raw materials ethically and sustainably sourced?',
          answer: 'Absolutely. We source our olive oil and olive ingredients directly from local agricultural cooperatives in Morocco. This ensures authentic production methods, fair wages, and sustainable community growth.'
        }
      ]
    },
    {
      title: 'Private Label Branding',
      items: [
        {
          question: 'How does your Private Label program work?',
          answer: 'Our private label program is a complete turn-key solution. You select the formulation (e.g., Eucalyptus Beldi) and packaging (e.g., glass jar or plastic tub), send us your logo and design guidelines, and we handle the manufacturing, filling, labeling, and export-compliant shipping under your brand name.'
        },
        {
          question: 'What packaging sizes and choices do you offer?',
          answer: 'We offer a wide range of cosmetic jars ranging from 100g, 200g, 250g, 500g, to 1kg sizes. Tubs and custom luxury retail paperboxes are also available to align with your brand aesthetic.'
        },
        {
          question: 'What is the lead time for private label production?',
          answer: 'Standard private label orders take between 4 to 8 business days for production once sample labels and artwork are approved. Bespoke custom formulas or custom packaging sourcing may take 1 to 2 weeks.'
        }
      ]
    },
    {
      title: 'Shipping & Compliance',
      items: [
        {
          question: 'Do you ship internationally and what are the delivery methods?',
          answer: 'Yes, we ship worldwide. For small and medium orders, we partner with reliable express carriers (DHL, FedEx). For large wholesale shipments, we configure palletized air freight or sea container shipping directly from Morocco.'
        },
        {
          question: 'Do you provide certificate documentation for customs clearance?',
          answer: 'Yes. Every export shipment is accompanied by a Certificate of Analysis (COA), Safety Data Sheets (SDS), Material Safety Data Sheets (MSDS), and organic certificates where applicable. We ensure all logistics meet your country’s cosmetic import regulations.'
        },
        {
          question: 'How do you package bulk black soap to prevent leakage during transit?',
          answer: 'For raw bulk orders, we use heavy-duty, food-grade HDPE drums or stainless steel containers sealed with airtight lids to guarantee zero leaks. Retail-ready private label jars are secured in bubble wrap and double-walled shipping boxes.'
        }
      ]
    }
  ]).map((cat: any, idx: number) => ({
    title: cat.title,
    icon: categoryIcons[idx] || HelpCircle,
    items: cat.items || []
  }));

  return (
    <article className="bg-white overflow-hidden">
      {/* Hero Header */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-stone-50 via-white to-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-950/5 skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={sectionLabelClass}>{dict?.hero?.label || 'Help Center'}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight mb-6">
              {dict?.hero?.title || 'Frequently Asked Questions'}
            </h1>
            <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {dict?.hero?.description || 'Find detailed information about Moroccan black Beldi soap qualities, private label branding, wholesale setups, shipping details, and usage protocols.'}
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main FAQ Content Area */}
      <section className="pb-24 bg-white" aria-label="Frequently Asked Questions list">
        <div className="container mx-auto px-6 space-y-16">
          {categories.map((category, categoryIdx) => {
            const Icon = category.icon;
            return (
              <div key={categoryIdx} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 pt-6 pb-2 border-b border-stone-100">
                  <div className="p-2 bg-secondary/15 rounded-xl">
                    <Icon size={20} className="text-emerald-800" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-primary">{category.title}</h2>
                </div>

                {/* Category Accordions */}
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => {
                    const isOpen = !!openItems[`${categoryIdx}-${itemIdx}`];
                    return (
                      <div
                        key={itemIdx}
                        className="bg-stone-50 rounded-2xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <button
                          onClick={() => toggleItem(categoryIdx, itemIdx)}
                          className="flex justify-between items-center w-full px-6 py-5 text-left font-serif font-bold text-primary text-lg gap-4"
                        >
                          <span className="flex gap-3 items-center">
                            <HelpCircle className="text-secondary shrink-0" size={20} />
                            {item.question}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="shrink-0 text-stone-500 p-1 bg-white rounded-full border border-stone-100"
                          >
                            <ChevronDown size={18} />
                          </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-6 pb-6 pt-2 text-stone-600 leading-relaxed text-sm md:text-base border-t border-stone-100 bg-white/50 pl-14">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-stone-50" aria-labelledby="cta-heading">
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
                {dict?.cta?.label || 'Still Have Questions?'}
              </span>
              <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                {dict?.cta?.title || 'Get Direct Support from Our Team'}
              </h2>
              <p className="text-emerald-50/80 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                {dict?.cta?.desc || 'If you have custom requirements, organic certification questions, or want to negotiate custom pricing structures for containers, reach out to us directly.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="https://wa.me/212638168637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-secondary text-primary px-8 py-4 rounded-full text-base md:text-lg font-bold hover:bg-amber-400 transition-all duration-300 shadow-lg w-full sm:w-auto"
                >
                  {dict?.cta?.btn1 || 'Message Us on WhatsApp'} <ArrowUpRight size={18} />
                </Link>
                <Link
                  href="mailto:inquiry@moroccanorganica.com"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white px-8 py-4 rounded-full text-base md:text-lg font-bold hover:border-secondary hover:text-secondary transition-all duration-300 w-full sm:w-auto"
                >
                  {dict?.cta?.btn2 || 'Email Our Wholesale Team'} <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
};

export default FaqContent;
