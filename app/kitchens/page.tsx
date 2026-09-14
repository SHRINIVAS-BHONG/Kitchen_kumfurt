"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { Button } from "@/components/ui/Button";
import { ModularKitchenShowcase } from "@/components/home/ModularKitchenShowcase";
import { 
    Sparkles, 
    CheckCircle2, 
    ShieldCheck, 
    Cpu, 
    Layers, 
    Droplet, 
    Flame, 
    ArrowRight, 
    Phone, 
    MessageCircle,
    SlidersHorizontal,
    Ruler
} from "lucide-react";
import Link from "next/link";

const KITCHEN_PORTFOLIO = [
    {
        title: "The Obsidian Grand Island",
        location: "VIP Road, Nanded",
        type: "Island Layout • 220 sq.ft",
        finish: "Anti-Fingerprint Matte PU & Calacatta Quartz",
        hardware: "Blum Tip-On & Servo-Drive",
        image: "/images/hero-luxury-kitchen.jpg"
    },
    {
        title: "Royal Fluted Walnut & Brass",
        location: "Shivaji Nagar, Nanded",
        type: "L-Shaped Modular • 140 sq.ft",
        finish: "Natural Walnut Fluted Wood & Gold Inlay Quartz",
        hardware: "Hettich Sensys Soft-Close",
        image: "/images/kitchen-walnut-gold.jpg"
    },
    {
        title: "Japandi Cashmere & Reeded Glass",
        location: "Anand Nagar, Nanded",
        type: "Parallel Galley • 120 sq.ft",
        finish: "Cashmere Acrylic & Toughened Fluted Glass",
        hardware: "Hafele Matrix Double-Wall Drawers",
        image: "/images/kitchen-japandi-matte.jpg"
    },
    {
        title: "Minimalist Slate Grey & Wood",
        location: "Taroda Road, Nanded",
        type: "U-Shaped Kitchen • 160 sq.ft",
        finish: "Super Matte Grey Acrylic & European Oak",
        hardware: "Blum Aventos Bi-Fold Lift-Up",
        image: "/images/luxury-kitchen.jpg"
    }
];

const MATERIAL_COMPARISONS = [
    {
        name: "Super-Matte PU Lacquer",
        scratchResist: "⭐⭐⭐⭐⭐",
        waterResist: "⭐⭐⭐⭐⭐",
        durability: "15+ Years",
        vibe: "Ultra-luxurious velvety soft touch, zero reflection, anti-fingerprint.",
        tag: "Architect Favorite"
    },
    {
        name: "High-Gloss Acrylic",
        scratchResist: "⭐⭐⭐⭐",
        waterResist: "⭐⭐⭐⭐⭐",
        durability: "12+ Years",
        vibe: "Glass-like mirror reflection, UV resistant, easy clean.",
        tag: "Modern Vibrant"
    },
    {
        name: "Natural Wood Fluting / Veneer",
        scratchResist: "⭐⭐⭐⭐",
        waterResist: "⭐⭐⭐⭐",
        durability: "20+ Years",
        vibe: "Organic warmth, bespoke artisan carpentry, PU sealed.",
        tag: "Timeless Classic"
    },
    {
        name: "Engineered Calacatta Quartz",
        scratchResist: "⭐⭐⭐⭐⭐",
        waterResist: "⭐⭐⭐⭐⭐",
        durability: "Lifetime",
        vibe: "Non-porous, antibacterial, stain and scorch resistant.",
        tag: "Countertop Standard"
    }
];

export default function KitchensPage() {
    return (
        <main className="w-full bg-primary-black min-h-screen text-white pt-24 md:pt-32 overflow-hidden">
            
            {/* 1. HERO SECTION */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-12 md:py-20 text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-red/10 rounded-full blur-[150px] pointer-events-none" />

                <FadeIn>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-primary-red text-xs uppercase tracking-[0.25em] font-semibold mb-6">
                        <Sparkles className="w-3.5 h-3.5" /> Engineered In Nanded
                    </div>
                    
                    <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.95] mb-6 text-balance">
                        Luxury Modular <br />
                        <span className="text-primary-red">Kitchens</span>
                    </h1>

                    <p className="text-gray-300 font-light text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 text-balance">
                        Where culinary art meets German precision engineering. Custom-crafted modular kitchens designed for lifelong durability, seamless ergonomics, and breathtaking aesthetics.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button variant="primary" className="w-full h-13 px-8 text-xs sm:text-sm uppercase tracking-wider font-bold">
                                Book Free 3D Kitchen Design
                            </Button>
                        </Link>
                        <a 
                            href="https://wa.me/918888030786?text=Hi%20Kitchen%20Kumfurt%2C%20I%20want%20to%20consult%20for%20a%20modular%20kitchen."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                        >
                            <Button variant="secondary" className="w-full h-13 px-6 text-xs sm:text-sm uppercase tracking-wider bg-white/5 border-white/10 text-white flex items-center justify-center gap-2">
                                <MessageCircle className="w-4 h-4 text-emerald-400" />
                                WhatsApp Specialist
                            </Button>
                        </a>
                    </div>
                </FadeIn>
            </section>

            {/* 2. REUSABLE MODULAR KITCHEN SHOWCASE & ESTIMATOR */}
            <ModularKitchenShowcase />

            {/* 3. RECENT KITCHEN INSTALLATIONS GALLERY */}
            <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs uppercase tracking-[0.25em] text-primary-red font-bold">Our Portfolio</span>
                    <h2 className="font-display font-bold text-3xl sm:text-5xl uppercase tracking-tight text-white mt-2">
                        Recent Kitchen Projects
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base mt-3">
                        Real residences designed, manufactured, and installed across Nanded and Marathwada.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {KITCHEN_PORTFOLIO.map((proj, idx) => (
                        <div 
                            key={idx}
                            className="group relative rounded-3xl overflow-hidden bg-dark-gray border border-white/10 hover:border-primary-red/40 transition-all duration-500 shadow-2xl"
                        >
                            <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                                <img 
                                    src={proj.image} 
                                    alt={proj.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/30 to-transparent" />
                                
                                <div className="absolute top-4 right-4 bg-primary-black/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10 text-xs text-primary-red font-semibold">
                                    {proj.location}
                                </div>
                            </div>

                            <div className="p-6 sm:p-8 space-y-4">
                                <div className="text-xs uppercase tracking-wider text-gray-400 font-mono">
                                    {proj.type}
                                </div>
                                <h3 className="font-display font-bold text-2xl text-white uppercase group-hover:text-primary-red transition-colors">
                                    {proj.title}
                                </h3>

                                <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-gray-300">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400">Finish:</span>
                                        <span className="font-medium text-white">{proj.finish}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400">Hardware:</span>
                                        <span className="font-medium text-white">{proj.hardware}</span>
                                    </div>
                                </div>

                                <Link href="/contact" className="block pt-2">
                                    <Button variant="secondary" className="w-full h-11 text-xs uppercase tracking-wider bg-white/5 hover:bg-white/10 border-white/10 text-white justify-center">
                                        Request Similar Design
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. FINISH & SURFACE MATRIX */}
            <section className="py-20 md:py-32 bg-dark-gray/50 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs uppercase tracking-[0.25em] text-primary-red font-bold">Material Intelligence</span>
                        <h2 className="font-display font-bold text-3xl sm:text-5xl uppercase tracking-tight text-white mt-2">
                            Finishes &amp; Surfaces
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {MATERIAL_COMPARISONS.map((mat, idx) => (
                            <div 
                                key={idx}
                                className="p-6 rounded-2xl bg-primary-black/80 border border-white/10 flex flex-col justify-between hover:border-primary-red/30 transition-all shadow-xl"
                            >
                                <div>
                                    <span className="inline-block px-2.5 py-1 rounded-md bg-primary-red/10 text-primary-red text-[10px] font-bold uppercase tracking-wider mb-3">
                                        {mat.tag}
                                    </span>
                                    <h3 className="text-lg font-bold text-white uppercase font-display mb-3">
                                        {mat.name}
                                    </h3>
                                    <p className="text-gray-400 text-xs leading-relaxed mb-6">
                                        {mat.vibe}
                                    </p>
                                </div>

                                <div className="space-y-2 pt-4 border-t border-white/10 text-xs">
                                    <div className="flex justify-between text-gray-300">
                                        <span className="text-gray-500">Scratch Resist:</span>
                                        <span>{mat.scratchResist}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300">
                                        <span className="text-gray-500">Waterproof:</span>
                                        <span>{mat.waterResist}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300">
                                        <span className="text-gray-500">Lifespan:</span>
                                        <span className="text-primary-red font-bold">{mat.durability}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. WHY CHOOSE KITCHEN KUMFURT (Trust Pillars) */}
            <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-xs uppercase tracking-[0.25em] text-primary-red font-bold">The Kumfurt Standard</span>
                        <h2 className="font-display font-bold text-3xl sm:text-5xl uppercase tracking-tight text-white mt-2 mb-6">
                            Why Nanded Trusts Kitchen Kumfurt
                        </h2>
                        
                        <div className="space-y-5">
                            <div className="flex gap-4">
                                <div className="p-3 rounded-xl bg-primary-red/10 text-primary-red shrink-0 h-fit">
                                    <Droplet className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base uppercase">100% Boiling Water Proof (BWP) Core</h4>
                                    <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                                        We exclusively use high-density HDHMR / Marine Grade calibrated ply that never bends, swells, or rots even in heavy monsoon humidity.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-3 rounded-xl bg-primary-red/10 text-primary-red shrink-0 h-fit">
                                    <Cpu className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base uppercase">Authentic German Hardware</h4>
                                    <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                                        Authorized partner for Blum, Häfele, and Hettich. Certified for 200,000+ open-close cycles with whisper-quiet soft close.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-3 rounded-xl bg-primary-red/10 text-primary-red shrink-0 h-fit">
                                    <Ruler className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base uppercase">0.1mm Laser Precision CNC Manufacturing</h4>
                                    <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                                        Edge banding with PUR waterproof glue and computer-guided cutting ensures flawless factory alignment without manual chipping.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 sm:p-12 rounded-3xl bg-dark-gray border border-white/10 shadow-2xl relative">
                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase mb-3">
                            Ready for Your Dream Kitchen?
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-8">
                            Bring your floor plan to our Nanded studio or request a free site measurement visit by our senior designer.
                        </p>

                        <div className="space-y-4">
                            <Link href="/contact" className="block">
                                <Button variant="primary" className="w-full h-14 uppercase tracking-wider font-bold text-sm justify-center shadow-xl shadow-primary-red/30">
                                    Book Studio Consultation
                                </Button>
                            </Link>
                            
                            <a 
                                href="tel:+918888030786"
                                className="block"
                            >
                                <Button variant="secondary" className="w-full h-12 uppercase tracking-wider text-xs bg-white/5 border-white/10 text-white justify-center flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-primary-red" />
                                    Call Designer Directly: +91 8888030786
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
