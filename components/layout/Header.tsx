"use client";

import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-primary-black/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
                {/* Logo */}
                <Logo />
                
                {/* Contact & CTA */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-2 text-gray-muted hover:text-white transition-colors cursor-pointer">
                        <Phone className="w-4 h-4 text-primary-red" />
                        <span className="text-sm font-medium tracking-wide">+91 7020171895</span>
                    </div>
                    <Button variant="primary" className="shadow-lg shadow-primary-red/20">
                        Book Consultation
                    </Button>
                </div>
            </div>
        </motion.header>
    );
};
