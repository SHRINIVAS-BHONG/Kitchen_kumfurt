"use client";

import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Materials", href: "/materials" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [menuOpen]);

    return (
        <>
            <motion.header 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[0.16,1,0.3,1] ${
                    scrolled ? 'bg-primary-black/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl py-2' : 'bg-transparent py-3'
                }`}
            >
                <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50">
                        <Logo />
                    </Link>
                    
                    {/* Desktop Center Nav */}
                    <div className={`hidden xl:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 transition-opacity duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        {NAV_LINKS.slice(1, 5).map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link key={link.label} href={link.href} className="relative group">
                                    <span className={`text-xs font-sans tracking-[0.2em] uppercase transition-colors duration-500 whitespace-nowrap ${isActive ? 'text-white' : 'text-gray-muted hover:text-white'}`}>
                                        {link.label}
                                    </span>
                                    {/* Active Indicator Dot */}
                                    <span className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-red transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-75'}`} />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Contact & CTA & Hamburger */}
                    <div className="flex items-center gap-6 relative z-50">
                        <div className={`hidden md:flex items-center gap-2 text-gray-muted hover:text-white transition-colors cursor-pointer ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                            <Phone className="w-4 h-4 text-primary-red" />
                            <span className="text-sm font-medium tracking-wide">+91 7020171895</span>
                        </div>
                        <Link href="/contact" className={`hidden sm:flex transition-opacity duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} onClick={() => setMenuOpen(false)}>
                            <Button variant="primary" className="shadow-lg shadow-primary-red/20 py-3 px-6">
                                Consultation
                            </Button>
                        </Link>
                        <button 
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2 text-white hover:text-primary-red transition-colors"
                        >
                            {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-primary-black/95 backdrop-blur-2xl flex flex-col md:items-center md:justify-center overflow-y-auto pt-24 pb-12"
                    >
                        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between h-full min-h-max">
                            
                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-3 md:gap-8 w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                                {NAV_LINKS.map((link, i) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <motion.div
                                            key={link.label}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + (i * 0.05), duration: 0.5 }}
                                        >
                                            <Link 
                                                href={link.href} 
                                                onClick={() => setMenuOpen(false)}
                                                className={`font-display font-medium text-3xl md:text-5xl transition-all duration-500 uppercase tracking-widest block py-2 ${isActive ? 'text-white translate-x-4' : 'text-gray-muted hover:text-white hover:translate-x-2'}`}
                                            >
                                                <div className="flex items-center gap-6">
                                                    <span className={`w-2 h-2 rounded-full bg-primary-red transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
                                                    {link.label}
                                                </div>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            {/* Menu Contact Info (Hidden on Mobile for brevity, shown on MD) */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="hidden md:flex flex-col gap-8 w-1/3 bg-dark-gray/30 p-12 border-l border-dark-gray/50"
                            >
                                <div>
                                    <h4 className="text-primary-red font-sans text-sm font-bold tracking-widest uppercase mb-4">Contact Us</h4>
                                    <p className="text-white text-lg mb-2">+91 7020171895</p>
                                    <p className="text-gray-muted text-sm">kichenkumfurt@gmail.com</p>
                                </div>
                                <div>
                                    <h4 className="text-primary-red font-sans text-sm font-bold tracking-widest uppercase mb-4">Visit Studio</h4>
                                    <p className="text-gray-muted text-sm leading-relaxed">
                                        2nd Floor, Sanman Prestige,<br />
                                        Railway Station Road,<br />
                                        Nanded - 431601
                                    </p>
                                </div>
                                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                                    <Button variant="primary" className="w-fit mt-4">
                                        Book a Visit
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
