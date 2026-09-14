"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Maximize2, 
    Sparkles, 
    Check, 
    Layers, 
    Compass, 
    Wrench, 
    ShieldAlert, 
    ArrowRight, 
    Calculator,
    MessageCircle,
    Info,
    CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface LayoutOption {
    id: string;
    title: string;
    tagline: string;
    image: string;
    idealFor: string;
    dimensions: string;
    efficiencyRating: string;
    features: string[];
    description: string;
}

const LAYOUTS: LayoutOption[] = [
    {
        id: "island",
        title: "Island Kitchen",
        tagline: "The Ultimate Statement for Open-Plan Living",
        image: "/images/hero-luxury-kitchen.jpg",
        idealFor: "Villas, Penthouses & Large Living Spaces (>150 sq.ft)",
        dimensions: "Min. 12ft x 14ft",
        efficiencyRating: "9.8 / 10",
        features: [
            "Seamless Calacatta waterfall quartz island",
            "Integrated breakfast bar & wine cooler",
            "Dedicated preparation & social hub",
            "Dual-sided soft close storage drawers"
        ],
        description: "The island layout serves as the dramatic focal point of contemporary architecture, effortlessly blending culinary performance with social entertaining."
    },
    {
        id: "lshape",
        title: "L-Shaped Modular",
        tagline: "Ergonomic Golden Triangle Space Optimization",
        image: "/images/kitchen-walnut-gold.jpg",
        idealFor: "Modern 2BHK / 3BHK Apartments & Open Corners (80 - 150 sq.ft)",
        dimensions: "Min. 8ft x 10ft",
        efficiencyRating: "9.5 / 10",
        features: [
            "Optimal Golden Triangle (Sink, Hob, Refrigerator)",
            "Hafele LeMans blind corner pull-out carousels",
            "Zero wasted corner space with heavy-duty trays",
            "Continuous uninterrupted prep countertop"
        ],
        description: "An incredibly versatile layout that maximizes floor area, eliminates dead corners with German revolving trays, and offers rapid cooking ergonomics."
    },
    {
        id: "parallel",
        title: "Parallel / Galley",
        tagline: "The Professional Chef's Golden Standard",
        image: "/images/kitchen-japandi-matte.jpg",
        idealFor: "Longer rectangular rooms & serious home chefs (70 - 130 sq.ft)",
        dimensions: "Min. 7ft x 10ft",
        efficiencyRating: "9.9 / 10",
        features: [
            "Strict separation between wet zone and dry cooking zone",
            "Maximum storage capacity per square foot",
            "Shortest movement steps between prep, cook, and wash",
            "Floor-to-ceiling tall pantry larder units"
        ],
        description: "Preferred by master chefs for its sheer workflow speed. Dual opposing countertops allow effortless zoning between washing, chopping, and cooking."
    },
    {
        id: "ushape",
        title: "U-Shaped Luxury",
        tagline: "Surround Yourself in Culinary Efficiency",
        image: "/images/luxury-kitchen.jpg",
        idealFor: "Dedicated enclosed kitchen rooms & family homes (100 - 180 sq.ft)",
        dimensions: "Min. 9ft x 11ft",
        efficiencyRating: "9.7 / 10",
        features: [
            "3 continuous working counters with massive storage",
            "Dual Magic Corner storage systems on both bends",
            "Dedicated appliance towers for built-in ovens & microwaves",
            "Overhead Blum Aventos bi-fold lift-up cabinets"
        ],
        description: "Provides the highest volume of cabinet storage and counter space. Every utensil, spice, and appliance is within an arm's reach."
    }
];

// Ergonomic zones
const ZONES = [
    {
        title: "01. Cooking & Induction",
        desc: "Seamless flush-mount induction/gas hobs with heat-resistant quartz backsplashes and auto-sensor chimneys.",
        icon: "🔥"
    },
    {
        title: "02. Prep & Wet Zone",
        desc: "Deep acoustic undermount sinks, pull-out brass sprayers, and hidden under-sink waste segregation bins.",
        icon: "💧"
    },
    {
        title: "03. Smart Pantry Storage",
        desc: "Hafele 12-tray larder pullouts and motorized touch-to-open Blum Aventos wall cabinets.",
        icon: "🥫"
    },
    {
        title: "04. Heavy Base Drawers",
        desc: "65kg load-rated tandem soft-close runners with custom anti-slip cutlery and thali organizers.",
        icon: "🍽️"
    }
];

export const ModularKitchenShowcase = () => {
    const [selectedLayout, setSelectedLayout] = useState<LayoutOption>(LAYOUTS[0]);
    
    // Cost Calculator State
    const [calcShape, setCalcShape] = useState<string>("lshape");
    const [calcSize, setCalcSize] = useState<string>("medium");
    const [calcFinish, setCalcFinish] = useState<string>("acrylic");

    // Price Estimator Logic
    const calculateEstimate = () => {
        let base = 160000;
        if (calcShape === "straight") base = 120000;
        if (calcShape === "lshape") base = 180000;
        if (calcShape === "parallel") base = 210000;
        if (calcShape === "ushape") base = 260000;
        if (calcShape === "island") base = 320000;

        let sizeMultiplier = 1;
        if (calcSize === "small") sizeMultiplier = 0.85;
        if (calcSize === "medium") sizeMultiplier = 1.15;
        if (calcSize === "large") sizeMultiplier = 1.55;

        let finishMultiplier = 1;
        if (calcFinish === "acrylic") finishMultiplier = 1.0;
        if (calcFinish === "matte-pu") finishMultiplier = 1.25;
        if (calcFinish === "fluted-wood") finishMultiplier = 1.45;
        if (calcFinish === "ceramic-glass") finishMultiplier = 1.65;

        const low = Math.round((base * sizeMultiplier * finishMultiplier) / 5000) * 5000;
        const high = Math.round(low * 1.25 / 5000) * 5000;

        return {
            min: low.toLocaleString("en-IN"),
            max: high.toLocaleString("en-IN")
        };
    };

    const estimate = calculateEstimate();

    const getWhatsAppUrl = () => {
        const shapeName = calcShape.toUpperCase();
        const sizeName = calcSize.toUpperCase();
        const finishName = calcFinish.replace("-", " ").toUpperCase();
        const text = encodeURIComponent(
            `Hi Kitchen Kumfurt! I am interested in a Modular Kitchen quote:\n- Layout: ${shapeName}\n- Size: ${sizeName}\n- Finish: ${finishName}\n- Estimated Range: ₹${estimate.min} - ₹${estimate.max}\nPlease share details & book a free 3D design visit.`
        );
        return `https://wa.me/918888030786?text=${text}`;
    };

    return (
        <section className="py-20 md:py-32 bg-primary-black px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden border-t border-white/5">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-primary-red/10 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-10 -left-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                    <span className="font-sans text-primary-red text-xs uppercase tracking-[0.3em] font-bold mb-3 inline-flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5" /> Engineered Excellence
                    </span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl text-white uppercase tracking-tight leading-tight mb-4 md:mb-6">
                        Bespoke Modular <br />
                        <span className="text-primary-red">Kitchen Studio</span>
                    </h2>
                    <p className="text-gray-300 font-light text-sm sm:text-base md:text-lg leading-relaxed text-balance">
                        Explore precision-tailored modular kitchen architectures engineered with 100% boiling-water-proof HDHMR marine ply, German hardware, and custom finishes.
                    </p>
                </div>

                {/* 1. INTERACTIVE LAYOUT SELECTOR TABS (Optimized for Mobile Touch) */}
                <div className="mb-14">
                    <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-0 scrollbar-none sm:justify-center">
                        {LAYOUTS.map((layout) => {
                            const isSelected = selectedLayout.id === layout.id;
                            return (
                                <button
                                    key={layout.id}
                                    onClick={() => setSelectedLayout(layout)}
                                    className={`px-4 sm:px-6 py-3 rounded-xl font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-2.5 ${
                                        isSelected
                                            ? "bg-primary-red text-white shadow-xl shadow-primary-red/30 scale-[1.03]"
                                            : "bg-dark-gray/80 text-gray-400 hover:text-white hover:bg-dark-gray border border-white/5"
                                    }`}
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-transparent'}`} />
                                    {layout.title}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 2. DYNAMIC LAYOUT PREVIEW CARD (Mobile First Grid) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-dark-gray/50 border border-white/10 rounded-3xl p-5 sm:p-8 md:p-10 backdrop-blur-xl shadow-2xl mb-20">
                    
                    {/* Visual Preview Side (Col 1-7) */}
                    <div className="lg:col-span-7 relative h-[280px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden group border border-white/5">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={selectedLayout.id}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                src={selectedLayout.image}
                                alt={selectedLayout.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                            />
                        </AnimatePresence>
                        
                        {/* Gradient Shadow Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 via-transparent to-transparent pointer-events-none" />

                        {/* Floating Mobile Badge */}
                        <div className="absolute top-4 left-4 bg-primary-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-[11px] font-mono text-white flex items-center gap-2">
                            <Compass className="w-3.5 h-3.5 text-primary-red" />
                            <span>Efficiency: {selectedLayout.efficiencyRating}</span>
                        </div>

                        {/* Bottom Tagline on Image */}
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <div className="text-xs uppercase tracking-widest text-primary-red font-bold">Featured Layout</div>
                            <div className="text-lg sm:text-xl font-display font-semibold truncate">{selectedLayout.title}</div>
                        </div>
                    </div>

                    {/* Specifications & Features Side (Col 8-12) */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                        <div>
                            <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-primary-red text-[11px] font-bold uppercase tracking-wider mb-3">
                                {selectedLayout.idealFor}
                            </div>
                            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
                                {selectedLayout.title}
                            </h3>
                            <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                                {selectedLayout.description}
                            </p>

                            {/* Key Highlights Checklist */}
                            <div className="space-y-3 pt-2 border-t border-white/10 mb-6">
                                <span className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold block">
                                    Architectural Highlights
                                </span>
                                {selectedLayout.features.map((feat, idx) => (
                                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                                        <CheckCircle2 className="w-4 h-4 text-primary-red shrink-0 mt-0.5" />
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                            <Link href="/contact" className="w-full sm:w-auto flex-1">
                                <Button variant="primary" className="w-full justify-center h-12 text-xs uppercase tracking-wider font-semibold">
                                    Get Custom Layout Plan
                                </Button>
                            </Link>
                            <a 
                                href={`https://wa.me/918888030786?text=${encodeURIComponent(`Hi Kitchen Kumfurt, I would like to explore the ${selectedLayout.title} layout design.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <Button variant="secondary" className="w-full justify-center h-12 text-xs uppercase tracking-wider bg-white/5 border-white/10 text-white flex items-center gap-2">
                                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                                    WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 3. FOUR ERGONOMIC WORK ZONES (Mobile Grid) */}
                <div className="mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <span className="text-xs uppercase tracking-[0.2em] text-primary-red font-bold">Science of Space</span>
                        <h3 className="font-display font-bold text-2xl sm:text-4xl text-white uppercase mt-2">
                            4-Zone Smart Ergonomics
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {ZONES.map((zone, idx) => (
                            <div 
                                key={idx} 
                                className="p-6 rounded-2xl bg-dark-gray/60 border border-white/5 hover:border-primary-red/30 transition-all duration-300 group hover:-translate-y-1"
                            >
                                <div className="text-3xl mb-4 p-3 w-fit rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                                    {zone.icon}
                                </div>
                                <h4 className="text-white font-display uppercase font-bold text-base sm:text-lg mb-2">
                                    {zone.title}
                                </h4>
                                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                                    {zone.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. INTERACTIVE INSTANT KITCHEN COST ESTIMATOR (High Mobile Utility) */}
                <div className="bg-gradient-to-br from-card-gray via-dark-gray to-primary-black border border-white/15 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
                    
                    {/* Decorative Red Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-red via-red-500 to-transparent" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        
                        {/* Configuration Controls (Col 1-7) */}
                        <div className="lg:col-span-7 space-y-6">
                            <div>
                                <div className="inline-flex items-center gap-2 text-primary-red text-xs uppercase tracking-widest font-bold mb-2">
                                    <Calculator className="w-4 h-4" /> Transparent Pricing
                                </div>
                                <h3 className="font-display font-bold text-2xl sm:text-4xl text-white uppercase tracking-tight">
                                    Instant Kitchen <br className="hidden sm:block" />
                                    <span className="text-primary-red">Cost Estimator</span>
                                </h3>
                                <p className="text-gray-300 text-xs sm:text-sm mt-2">
                                    Configure your room layout, area, and exterior finish to get a real-time budget range.
                                </p>
                            </div>

                            {/* Step 1: Layout Selection */}
                            <div className="space-y-2">
                                <label className="text-[11px] sm:text-xs uppercase tracking-wider text-gray-400 font-semibold block">
                                    1. Choose Room Layout
                                </label>
                                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                    {[
                                        { id: "straight", label: "Straight" },
                                        { id: "lshape", label: "L-Shape" },
                                        { id: "parallel", label: "Parallel" },
                                        { id: "ushape", label: "U-Shape" },
                                        { id: "island", label: "Island" }
                                    ].map((opt) => (
                                        <button
                                            key={opt.id}
                                            onClick={() => setCalcShape(opt.id)}
                                            className={`py-2.5 px-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                                                calcShape === opt.id
                                                    ? "bg-primary-red text-white shadow-lg shadow-primary-red/30"
                                                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
                                            }`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Step 2: Size Selection */}
                            <div className="space-y-2">
                                <label className="text-[11px] sm:text-xs uppercase tracking-wider text-gray-400 font-semibold block">
                                    2. Approximate Room Size
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { id: "small", label: "Compact", sub: "<80 sq.ft" },
                                        { id: "medium", label: "Standard", sub: "80-140 sq.ft" },
                                        { id: "large", label: "Spacious", sub: ">140 sq.ft" }
                                    ].map((opt) => (
                                        <button
                                            key={opt.id}
                                            onClick={() => setCalcSize(opt.id)}
                                            className={`py-2.5 px-3 rounded-xl text-left transition-all ${
                                                calcSize === opt.id
                                                    ? "bg-primary-red text-white shadow-lg shadow-primary-red/30"
                                                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
                                            }`}
                                        >
                                            <div className="text-xs font-bold uppercase">{opt.label}</div>
                                            <div className={`text-[10px] ${calcSize === opt.id ? 'text-white/80' : 'text-gray-400'}`}>{opt.sub}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Step 3: Finish Selection */}
                            <div className="space-y-2">
                                <label className="text-[11px] sm:text-xs uppercase tracking-wider text-gray-400 font-semibold block">
                                    3. Shutter &amp; Surface Finish
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                    {[
                                        { id: "acrylic", label: "High Gloss Acrylic" },
                                        { id: "matte-pu", label: "Super-Matte PU" },
                                        { id: "fluted-wood", label: "Fluted Veneer" },
                                        { id: "ceramic-glass", label: "Ceramic / Glass" }
                                    ].map((opt) => (
                                        <button
                                            key={opt.id}
                                            onClick={() => setCalcFinish(opt.id)}
                                            className={`py-2.5 px-3 rounded-xl text-center text-xs font-semibold transition-all ${
                                                calcFinish === opt.id
                                                    ? "bg-primary-red text-white shadow-lg shadow-primary-red/30"
                                                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
                                            }`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Calculated Results Box (Col 8-12) */}
                        <div className="lg:col-span-5 bg-primary-black/90 p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6 text-center">
                            <div>
                                <span className="text-xs font-mono uppercase tracking-widest text-gray-400 block mb-2">
                                    Estimated Investment Range
                                </span>
                                <div className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
                                    ₹{estimate.min} <span className="text-xl text-gray-400 font-sans font-normal">&mdash;</span> ₹{estimate.max}
                                </div>
                                <div className="text-[11px] text-gray-400 mt-2 flex items-center justify-center gap-1">
                                    <Info className="w-3 h-3 text-primary-red shrink-0" />
                                    <span>Includes HDHMR carcass, shutters, German hardware &amp; installation.</span>
                                </div>
                            </div>

                            {/* Inclusions Pill Bar */}
                            <div className="grid grid-cols-2 gap-2 text-left bg-white/[0.03] p-3 rounded-xl border border-white/5 text-[11px] text-gray-300">
                                <div className="flex items-center gap-1.5">
                                    <Check className="w-3 h-3 text-primary-red" /> 10-Yr BWP Warranty
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Check className="w-3 h-3 text-primary-red" /> Soft-Close Runners
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Check className="w-3 h-3 text-primary-red" /> 3D CAD Design Free
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Check className="w-3 h-3 text-primary-red" /> Free Site Measurement
                                </div>
                            </div>

                            {/* Direct WhatsApp Callout */}
                            <div className="space-y-3">
                                <a 
                                    href={getWhatsAppUrl()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full"
                                >
                                    <Button 
                                        variant="primary" 
                                        className="w-full h-13 py-3.5 bg-emerald-600 hover:bg-emerald-500 border-none text-white text-xs sm:text-sm uppercase tracking-wider font-bold shadow-xl shadow-emerald-950/50 justify-center gap-2"
                                    >
                                        <MessageCircle className="w-4 h-4 fill-white" />
                                        WhatsApp Detailed Quote
                                    </Button>
                                </a>

                                <Link href="/contact" className="block w-full">
                                    <Button 
                                        variant="secondary" 
                                        className="w-full h-11 text-xs uppercase tracking-wider bg-transparent hover:bg-white/5 border-white/20 text-gray-300 justify-center"
                                    >
                                        Book Free In-Person Studio Visit
                                    </Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
