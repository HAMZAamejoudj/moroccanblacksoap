'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WhatsAppPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Show popup after 3 seconds
        const timer = setTimeout(() => {
            if (!isDismissed) setIsOpen(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, [isDismissed]);

    const handleClose = () => {
        setIsOpen(false);
        setIsDismissed(true);
    };

    return (
        <>
            {/* Floating button if closed but not totally hidden forever, 
                or we can just leave it as a one-time popup. Let's make it a one-time popup for now,
                but add a small floating whatsapp button when closed optionally? 
                The user just asked for "a popup like this example". */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.2 } }}
                        className="fixed bottom-6 right-6 z-[100] w-[90vw] max-w-[360px] rounded-3xl bg-[#090b14] shadow-2xl overflow-hidden border border-white/10"
                    >
                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 z-10 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white/80 hover:text-white transition-colors"
                        >
                            <X size={18} />
                        </button>

                        {/* Image Header */}
                        <div className="relative h-48 w-full">
                            <Image
                                src="/image/beldi-soap-hero-popup.webp"
                                alt="Authentic Moroccan Black Soap"
                                fill
                                className="object-cover"
                            />
                            {/* Gradient overly for smooth transition to dark body if needed */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] to-transparent top-1/2" />

                            {/* Badge */}
                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                <span className="text-white text-xs font-semibold tracking-wide">Moroccan Organica</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 pt-2 text-center">
                            <h3 className="text-xl font-serif font-bold text-white mb-3">
                                Premium Moroccan Black Soap
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed mb-6 font-sans">
                                Discover our organic, slow-crafted black soap. Tap below to explore MoroccanOrganica.com and request tailored supply options.
                            </p>

                            <Link
                                href="https://wa.me/212638168637"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-[#5b7bf6] hover:bg-[#4a6be5] text-white font-medium py-3.5 px-4 rounded-xl transition-colors shadow-lg shadow-blue-900/20"
                            >
                                Chat on WhatsApp
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default WhatsAppPopup;
