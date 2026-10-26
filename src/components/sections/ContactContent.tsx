'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  HelpCircle,
  Clock,
  Globe,
  ArrowRight
} from 'lucide-react';
import { ORGANIZATION } from '@/lib/site';

const sectionLabelClass =
  'text-secondary font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block';

interface ContactContentProps {
  dict: any;
  lang: string;
}

const ContactContent = ({ dict, lang }: ContactContentProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    orderType: 'wholesale',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        orderType: 'wholesale',
        message: ''
      });
    }, 1200);
  };

  // Localized values & safe fallbacks
  const promises = dict?.info?.promises || [
    'Worldwide air & sea freight shipping',
    'Fast order processing (4–8 days lead time)',
    'SDS, MSDS, & COA documents provided'
  ];

  const promiseIcons = [Globe, Clock, HelpCircle];

  const services = dict?.form?.services || [
    'Wholesale & Bulk Supplies (25kg+ drums)',
    'Private Label Branding (Jars with logo)',
    'Free Sample Order Request',
    'Bespoke Custom Formulation',
    'General B2B Sourcing Inquiry'
  ];

  const serviceValues = [
    'wholesale',
    'private-label',
    'samples',
    'custom-formula',
    'other'
  ];

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
            <span className={sectionLabelClass}>{dict?.hero?.label || 'B2B Inquiry'}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight mb-6">
              {dict?.hero?.title || 'Contact Our Sourcing Team'}
            </h1>
            <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {dict?.hero?.description || 'Partner with the leading Moroccan black soap supplier. Request bulk catalog rates, custom formulation options, private label pricing, or samples.'}
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Form & Details Section */}
      <section className="pb-24 bg-white" aria-labelledby="contact-form-heading">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Contact Info Info Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                  {dict?.info?.title || 'Get in Touch Directly'}
                </h2>
                <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                  {dict?.info?.desc || 'Whether you are a global distributor, spa owner, or online skincare brand, our B2B export representatives are available to assist you.'}
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                {/* Phone & WhatsApp */}
                <div className="flex gap-4 items-start p-5 bg-stone-50 rounded-2xl border border-stone-200/60 shadow-sm hover:border-secondary/25 transition-colors">
                  <div className="p-3 bg-secondary/15 rounded-xl text-primary shrink-0">
                    <Phone size={20} className="text-emerald-800" />
                  </div>
                  <div>
                    <span className="text-stone-400 text-xs font-bold uppercase tracking-wider block mb-1">
                      {dict?.info?.phoneLabel || 'WhatsApp & Call'}
                    </span>
                    <Link
                      href={`https://wa.me/${ORGANIZATION.phone.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold text-lg hover:text-secondary transition-colors"
                    >
                      {ORGANIZATION.phone}
                    </Link>
                    <p className="text-stone-500 text-xs mt-1">
                      {dict?.info?.phoneDesc || 'Available for quick B2B quotes (Mon-Fri, 9am - 6pm GMT)'}
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex gap-4 items-start p-5 bg-stone-50 rounded-2xl border border-stone-200/60 shadow-sm hover:border-secondary/25 transition-colors">
                  <div className="p-3 bg-secondary/15 rounded-xl text-primary shrink-0">
                    <Mail size={20} className="text-emerald-800" />
                  </div>
                  <div>
                    <span className="text-stone-400 text-xs font-bold uppercase tracking-wider block mb-1">
                      {dict?.info?.emailLabel || 'Email Inquiries'}
                    </span>
                    <Link
                      href={`mailto:${ORGANIZATION.email}`}
                      className="text-primary font-bold text-lg hover:text-secondary transition-colors"
                    >
                      {ORGANIZATION.email}
                    </Link>
                    <p className="text-stone-500 text-xs mt-1">
                      {dict?.info?.emailDesc || 'We respond to all professional emails within 24 hours.'}
                    </p>
                  </div>
                </div>

                {/* Factory Office Address */}
                <div className="flex gap-4 items-start p-5 bg-stone-50 rounded-2xl border border-stone-200/60 shadow-sm hover:border-secondary/25 transition-colors">
                  <div className="p-3 bg-secondary/15 rounded-xl text-primary shrink-0">
                    <MapPin size={20} className="text-emerald-800" />
                  </div>
                  <div>
                    <span className="text-stone-400 text-xs font-bold uppercase tracking-wider block mb-1">
                      {dict?.info?.addressLabel || 'Production Facility'}
                    </span>
                    <p className="text-primary font-bold text-base">
                      {ORGANIZATION.address.streetAddress}
                    </p>
                    <p className="text-stone-500 text-xs mt-1">
                      {ORGANIZATION.address.addressLocality}, {ORGANIZATION.address.addressCountry}
                    </p>
                  </div>
                </div>
              </div>

              {/* B2B Export Promises */}
              <div className="p-6 bg-emerald-950 rounded-3xl text-white space-y-4 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="font-serif font-bold text-lg text-secondary">
                  {dict?.info?.promiseTitle || 'Export Standards'}
                </h3>
                
                <div className="space-y-3 text-xs md:text-sm text-stone-200">
                  {promises.map((promise: string, idx: number) => {
                    const Icon = promiseIcons[idx] || Globe;
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon size={14} className="text-secondary shrink-0" />
                        <span>{promise}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-stone-50 border border-stone-200/80 rounded-3xl p-8 md:p-10 shadow-lg">
                <h3 id="contact-form-heading" className="text-2xl font-serif font-bold text-primary mb-6">
                  {dict?.form?.title || 'Send a Partnership Inquiry'}
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-50 border border-emerald-200 text-emerald-950 p-6 rounded-2xl text-center space-y-4"
                  >
                    <CheckCircle className="text-secondary mx-auto" size={48} />
                    <h4 className="font-serif font-bold text-xl">
                      {dict?.form?.successTitle || 'Thank You for Reaching Out!'}
                    </h4>
                    <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                      {dict?.form?.successDesc || 'Your inquiry has been successfully sent to our wholesale export desk. One of our account managers will contact you via email or WhatsApp within the next 24 hours.'}
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-secondary pt-2"
                    >
                      {dict?.form?.successBtn || 'Send another message'} <ArrowRight size={14} />
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-stone-500">
                          {dict?.form?.nameLabel || 'Full Name *'}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary bg-white text-stone-800 text-sm"
                          placeholder={dict?.form?.namePlaceholder || 'e.g. John Doe'}
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-stone-500">
                          {dict?.form?.emailLabel || 'Business Email *'}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary bg-white text-stone-800 text-sm"
                          placeholder={dict?.form?.emailPlaceholder || 'e.g. john@yourbrand.com'}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone / WhatsApp input */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-stone-500">
                          {dict?.form?.phoneLabel || 'Phone / WhatsApp *'}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary bg-white text-stone-800 text-sm"
                          placeholder={dict?.form?.phonePlaceholder || 'Include country code (e.g. +1 234...)'}
                        />
                      </div>

                      {/* Company / Brand Name */}
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-stone-500">
                          {dict?.form?.companyLabel || 'Company Name / Website'}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary bg-white text-stone-800 text-sm"
                          placeholder={dict?.form?.companyPlaceholder || 'e.g. Luxury Spa Ltd.'}
                        />
                      </div>
                    </div>

                    {/* Inquiry Type / Order Type */}
                    <div className="space-y-2">
                      <label htmlFor="orderType" className="text-xs font-bold uppercase tracking-wider text-stone-500">
                        {dict?.form?.serviceLabel || 'Interested Service *'}
                      </label>
                      <select
                        id="orderType"
                        name="orderType"
                        value={formData.orderType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary bg-white text-stone-800 text-sm"
                      >
                        {services.map((serviceName: string, idx: number) => {
                          const val = serviceValues[idx] || 'wholesale';
                          return (
                            <option key={val} value={val}>
                              {serviceName}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    {/* Message textarea */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-stone-500">
                        {dict?.form?.messageLabel || 'Inquiry Details / Order Size *'}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary bg-white text-stone-800 text-sm resize-none"
                        placeholder={dict?.form?.messagePlaceholder || 'Please detail your approximate quantities, destination country, package requirements, and fragrance preferences.'}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl text-base font-bold hover:bg-emerald-950 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span>{dict?.form?.submittingBtn || 'Processing Sourcing Request...'}</span>
                      ) : (
                        <>
                          {dict?.form?.submitBtn || 'Submit Partnership Request'} <Send size={16} className="text-secondary" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ContactContent;
