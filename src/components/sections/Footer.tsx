'use client';

import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getLocalizedHref } from '@/lib/utils';

const footerHeadingClass =
  'text-lg font-serif font-bold text-primary uppercase tracking-[0.2em]';

interface FooterProps {
  dict: any;
  lang: string;
}

const Footer = ({ dict, lang }: FooterProps) => {
  return (
    <footer className="bg-white text-primary pt-16 lg:pt-20 pb-12 border-t border-stone-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16 lg:mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="min-h-[5.5rem] flex items-center">
              <Link href={getLocalizedHref('/', lang)} className="group inline-block">
                <div className="relative h-28 w-auto aspect-[572/474] md:h-32 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/image/moroccan_black_soap_logo_vector.svg"
                    alt="Moroccan Black Soap Wholesale Logo"
                    fill
                    className="object-contain ltr:object-left rtl:object-right"
                  />
                </div>
              </Link>
            </div>
            <p className="text-stone-600 leading-relaxed text-sm max-w-xs">
              {dict?.footer?.about?.description ||
                'Your trusted wholesale partner for authentic, organic Moroccan black Beldi soap. Ethically sourced, certified, and export-ready for brands, spas, and retailers worldwide.'}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/moroccanorganica/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-stone-100 rounded-full text-stone-600 hover:text-white hover:bg-[#1877F2] transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/moroccanorganic/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-stone-100 rounded-full text-stone-600 hover:text-white hover:bg-[#E1306C] transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@moroccanbeauty_shop"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-stone-100 rounded-full text-stone-600 hover:text-white hover:bg-black transition-all duration-300 shadow-sm"
                aria-label="TikTok"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.56-5.17 2.47-6.84 1.11-.98 2.52-1.55 3.98-1.74.14-.02.29-.02.43-.02v4.06c-1.04.06-2.09.36-2.83 1.05-.92.84-1.38 2.11-1.24 3.37.13 1.25.8 2.43 1.84 3.13 1.24.81 2.95.89 4.25.26 1.48-.68 2.4-2.18 2.47-3.8.1-2.91.06-5.83.08-8.74.02-3.18.01-6.36.01-9.54z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Payments */}
          <div className="flex flex-col gap-6">
            <div className="min-h-[3.5rem] flex items-center">
              <p className={footerHeadingClass}>
                {lang === 'ar' ? 'طرق الدفع' : lang === 'fr' ? 'Paiements' : 'Payments'}
              </p>
            </div>
            <div className="relative h-40 md:h-44 w-full max-w-sm group">
              <Image
                src="/image/footer-payment-methods.webp"
                alt="Accepted Payment Methods"
                fill
                className="object-contain ltr:object-left rtl:object-right group-hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>

          {/* Shipping */}
          <div className="flex flex-col gap-6">
            <div className="min-h-[3.5rem] flex items-center">
              <p className={footerHeadingClass}>
                {lang === 'ar' ? 'الشحن والتصدير' : lang === 'fr' ? 'Expédition' : 'Shipping'}
              </p>
            </div>
            <div className="relative h-40 md:h-44 w-full max-w-sm group">
              <Image
                src="/image/footer-shipping-partners.webp"
                alt="Our Shipping Partners"
                fill
                className="object-contain ltr:object-left rtl:object-right group-hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <div className="min-h-[3.5rem] flex items-center">
              <p className={footerHeadingClass}>
                {dict?.footer?.contact?.title || 'Contact Us'}
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Phone
                  size={18}
                  className="text-secondary shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                />
                <a
                  href="tel:+212638168637"
                  className="text-stone-700 hover:text-secondary transition-colors tracking-wide text-sm font-medium"
                >
                  0638168637
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail
                  size={18}
                  className="text-secondary shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                />
                <a
                  href="mailto:inquiry@moroccanorganica.com"
                  className="text-stone-700 hover:text-secondary transition-colors break-all text-sm font-medium"
                >
                  inquiry@moroccanorganica.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin
                  size={18}
                  className="text-secondary shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                />
                <span className="text-stone-600 leading-relaxed text-sm">
                  {dict?.footer?.contact?.address ||
                    'Lot 377 N°3/6 sidi ghanem Zone industriel, Marrakesh'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-stone-100 text-center text-xs text-stone-400">
          <p>{dict?.footer?.rights || '© 2026 Moroccan Black Soap Wholesale. All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
