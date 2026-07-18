"use client";

import React from 'react';
import { MapPin, Phone, Mail, Globe, Heart, ArrowUp, Instagram, Facebook, Twitter } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-primary-black border-t border-dark-gray pt-16 md:pt-24 pb-8 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-red/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-20 relative z-10">
                    
                    {/* Brand Info & Newsletter (Spans 5 cols on lg) */}
                    <div className="space-y-8 lg:col-span-5 pr-0 lg:pr-12">
                        <Logo className="scale-110 origin-left" />
                        <p className="text-gray-muted text-sm leading-relaxed max-w-sm">
                            Exclusive modular kitchens and wardrobes. Uncompromising luxury and precision engineering. A legacy of craftsmanship by Aashish Jajoo.
                        </p>
                        
                        <div className="pt-4">
                            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-widest mb-4">Subscribe to our Newsletter</h4>
                            <div className="flex items-center">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="bg-dark-gray/30 border border-dark-gray text-white px-4 py-3 w-full max-w-xs focus:outline-none focus:border-primary-red transition-colors text-sm"
                                />
                                <Button variant="primary" className="py-3 px-6 shrink-0 h-[46px]">
                                    Join
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Link Columns Group (Spans 4 cols on lg, 2 cols on mobile) */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8 md:gap-12">
                        {/* Quick Links */}
                        <div>
                            <h4 className="font-display font-bold text-sm text-white uppercase tracking-widest mb-4 border-l-2 border-primary-red pl-3">Company</h4>
                            <ul className="space-y-2">
                                {['About', 'Our Story', 'Craftsmanship', 'Why Choose Us'].map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-gray-muted text-sm hover:text-primary-red transition-colors block py-1">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Links */}
                        <div>
                            <h4 className="font-display font-bold text-sm text-white uppercase tracking-widest mb-4 border-l-2 border-primary-red pl-3">Services</h4>
                            <ul className="space-y-2">
                                {['Luxury Kitchens', 'Wardrobes', 'Walk-in Closets', 'TV Units', 'Materials', 'Portfolio'].map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-gray-muted text-sm hover:text-primary-red transition-colors block py-1">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Details (Spans 3 cols) */}
                    <div className="lg:col-span-3">
                        <h4 className="font-display font-bold text-sm text-white uppercase tracking-widest mb-4 border-l-2 border-primary-red pl-3">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-muted hover:text-white transition-colors">
                                <MapPin className="w-4 h-4 text-primary-red shrink-0 mt-1" />
                                <span className="text-sm leading-relaxed">
                                    2nd Floor, Sanman Prestige,<br />
                                    Railway Station Road,<br />
                                    Nanded - 431601
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-muted hover:text-white transition-colors">
                                <Phone className="w-4 h-4 text-primary-red shrink-0" />
                                <span className="text-sm font-medium">+91 7020171895</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-muted hover:text-white transition-colors">
                                <Mail className="w-4 h-4 text-primary-red shrink-0" />
                                <span className="text-sm">kichenkumfurt@gmail.com</span>
                            </li>
                        </ul>
                        
                        {/* Social Icons */}
                        <div className="flex items-center gap-4 pt-2">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-dark-gray flex items-center justify-center text-gray-muted hover:bg-primary-red hover:text-white hover:border-primary-red transition-all duration-300">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-dark-gray/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                    <p className="text-gray-muted/60 text-xs text-center md:text-left tracking-wide">
                        &copy; {new Date().getFullYear()} Kichen Kumfurt. All rights reserved.
                    </p>
                    
                    {/* Back to top */}
                    <motion.button 
                        onClick={scrollToTop}
                        whileHover={{ y: -5 }}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-primary-red transition-colors"
                    >
                        Back to Top <ArrowUp className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};
