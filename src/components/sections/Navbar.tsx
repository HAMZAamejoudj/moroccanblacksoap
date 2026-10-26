'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import LanguageSwitcher from '@/components/sections/LanguageSwitcher';
import { getLocalizedHref } from '@/lib/utils';


interface NavbarProps {
  dict: any;
  lang: string;
}

const Navbar = ({ dict, lang }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const light = (pathname === '/en' || pathname === '/en/') && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: dict?.nav?.home || 'Home', href: getLocalizedHref('/', lang) },
    { name: dict?.nav?.about || 'About', href: getLocalizedHref('/about', lang) },
    { name: dict?.nav?.benefits || 'Benefits', href: getLocalizedHref('/benefits', lang) },
    { name: dict?.nav?.bulkOrder || 'Bulk Order', href: getLocalizedHref('/bulk-order', lang) },
    { name: dict?.nav?.privateLabel || 'Private Label', href: getLocalizedHref('/private-label', lang) },
    { name: dict?.nav?.blog || 'Blog', href: getLocalizedHref('/moroccan-black-soap-wholesale', lang) },
    { name: dict?.nav?.faq || 'FAQ', href: getLocalizedHref('/faq', lang) },
    { name: dict?.nav?.contact || 'Contact', href: getLocalizedHref('/contact', lang) },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-full">
        <div className="flex-1 flex justify-start">
          <Link href={getLocalizedHref('/', lang)} className="group">
            <div className="relative h-16 w-auto aspect-[572/474] md:h-24 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/image/moroccan_black_soap_logo_vector.svg"
                alt="Moroccan Black Soap Wholesale Logo"
                fill
                className={`object-contain ltr:object-left rtl:object-right ${light ? 'brightness-0 invert' : ''}`}
                priority
              />
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-5 2xl:gap-6 flex-[2]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[15px] xl:text-base 2xl:text-[17px] font-semibold uppercase tracking-[0.1em] transition-colors hover:underline decoration-secondary decoration-2 underline-offset-[12px] whitespace-nowrap ${
                light ? 'text-white/90 hover:text-white' : 'text-primary/80 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex-1 flex justify-end items-center gap-4">
          <div className="hidden lg:block">
            <LanguageSwitcher light={light} />
          </div>

          <Link
            href="https://wa.me/212638168637"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:-translate-y-0.5 whitespace-nowrap ${
              light
                ? 'bg-white text-primary hover:bg-secondary'
                : 'bg-primary text-white hover:bg-secondary hover:text-primary'
            }`}
          >
            <WhatsAppIcon size={18} />
            {dict?.nav?.whatsappQuote ||
              (lang === 'ar' ? 'طلب واتساب' : lang === 'fr' ? 'Devis WhatsApp' : 'WhatsApp quote')}
          </Link>

          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher light={light} />
            <button
              className={`p-2 transition-transform active:scale-90 ${light ? 'text-white' : 'text-primary'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 top-[inherit] bg-white/95 backdrop-blur-lg border-b border-stone-100 transition-all duration-300 lg:hidden overflow-hidden ${
          isOpen ? 'max-h-screen py-8 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold uppercase tracking-[0.1em] text-primary hover:text-secondary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/212638168637"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-flex w-full items-center justify-center gap-2.5 bg-primary text-white px-6 py-4 rounded-xl text-lg font-semibold hover:bg-secondary hover:text-primary transition-all shadow-lg"
          >
            <WhatsAppIcon size={20} />
            {dict?.nav?.whatsappQuote ||
              (lang === 'ar' ? 'طلب واتساب' : lang === 'fr' ? 'Devis WhatsApp' : 'WhatsApp quote')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
