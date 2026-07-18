"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { LuxuryCard } from "@/components/ui/LuxuryCard";
import { ChevronRight, ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    
    // Parallax effects for Hero
    const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <main className="w-full bg-primary-black overflow-hidden">

            {/* 1. CINEMATIC HERO SECTION */}
            <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 pt-20">
                {/* Background Video/Image Placeholder */}
                <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-primary-black z-10" />
                    {/* Placeholder for high-res architecture photo */}
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                </div>

                <motion.div 
                    style={{ y: yHeroText, opacity: opacityHero }}
                    className="relative z-20 w-full max-w-7xl text-center flex flex-col items-center px-4"
                >
                    <FadeIn delay={0.2} direction="up">
                        <p className="font-sans text-gray-muted text-[9px] sm:text-xs uppercase tracking-[0.4em] font-medium mb-6 mt-16 sm:mt-0">
                            Est. 2024 &mdash; Nanded
                        </p>
                    </FadeIn>
                    
                    <FadeIn delay={0.4} direction="up">
                        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] xl:text-[8.5rem] tracking-tighter leading-tight sm:leading-[0.9] text-white uppercase mb-6 sm:mb-8 drop-shadow-2xl">
                            Inspiring<br/>Kitchens
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.6} direction="up">
                        <div className="flex items-center justify-center gap-3 mb-16">
                            <span className="text-gray-muted/80 text-sm sm:text-xl lg:text-2xl italic font-serif">by</span>
                            <span className="text-white font-display font-bold text-sm sm:text-lg lg:text-2xl tracking-[0.2em] uppercase">Aashish</span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.8} direction="up">
                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-center justify-center w-full">
                            <Button variant="primary" className="w-full max-w-[280px] sm:w-auto h-[52px] sm:h-[56px] justify-center text-xs sm:text-sm">
                                Schedule Consultation
                            </Button>
                            <Button variant="ghost" className="text-xs sm:text-sm">
                                View Portfolio
                            </Button>
                        </div>
                    </FadeIn>
                </motion.div>


            </section>

            {/* 2. BRAND INTRODUCTION / LUXURY STATEMENT */}
            <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-dark-gray/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-32 items-center">
                    <FadeIn direction="right">
                        <h2 className="font-display font-bold text-3xl md:text-5xl text-white uppercase leading-tight tracking-wide mb-8">
                            Uncompromising <br/>
                            <span className="text-primary-red">Craftsmanship.</span>
                        </h2>
                        <div className="w-24 h-1 bg-dark-gray mb-8" />
                        <p className="text-gray-muted text-base md:text-lg leading-relaxed mb-6">
                            Kichen Kumfurt represents the pinnacle of bespoke interior architecture. We don't just build modular setups; we engineer luxurious culinary spaces tailored precisely to your lifestyle.
                        </p>
                        <p className="text-gray-muted text-base md:text-lg leading-relaxed mb-10">
                            By sourcing the finest materials globally and applying rigorous precision engineering, every creation is a testament to durability, elegance, and modern living.
                        </p>
                        <Link href="/about" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white hover:text-primary-red transition-colors border-b border-white hover:border-primary-red pb-1 h-11">
                            Discover Our Story <ChevronRight className="w-4 h-4" />
                        </Link>
                    </FadeIn>
                    
                    <FadeIn direction="left" className="relative h-[400px] md:h-[600px] w-full bg-dark-gray/30 border border-dark-gray">
                        {/* Placeholder for beautiful lifestyle kitchen image */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-muted/20 font-display uppercase tracking-widest text-sm text-center px-4">
                            Architecture Image Placeholder
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-red/10 blur-3xl" />
                    </FadeIn>
                </div>
            </section>

            {/* 3. FEATURED COLLECTIONS (GRID) */}
            <section className="py-24 md:py-32 bg-[#111111] px-6 md:px-12 lg:px-24">
                <FadeIn className="max-w-7xl mx-auto mb-16 md:mb-20 text-center">
                    <span className="font-sans text-primary-red text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Collections</span>
                    <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-wider">Bespoke Living</h2>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <StaggerItem>
                        <LuxuryCard 
                            title="Luxury Kitchens"
                            description="Precision-engineered culinary spaces combining German hardware with exquisite finishes."
                            imagePlaceholder="Kitchen Project"
                            href="/kitchens"
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <LuxuryCard 
                            title="Designer Wardrobes"
                            description="Tailored storage solutions featuring seamless gliding mechanisms and integrated lighting."
                            imagePlaceholder="Wardrobe Project"
                            href="/wardrobes"
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <LuxuryCard 
                            title="Walk-in Closets"
                            description="Expansive, organized luxury for your most prized collections and daily routines."
                            imagePlaceholder="Walk-in Closet"
                            href="/walk-in-closets"
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <LuxuryCard 
                            title="Custom TV Units"
                            description="Minimalist entertainment centers that hide cables and showcase design."
                            imagePlaceholder="TV Unit Project"
                            href="/tv-units"
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <LuxuryCard 
                            title="Storage Solutions"
                            description="Intelligent space optimization hidden behind flawless architectural panels."
                            imagePlaceholder="Storage Project"
                            href="/storage"
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <LuxuryCard 
                            title="Premium Materials"
                            description="Explore our library of Quartz, Acrylic, PU, and Natural Woods."
                            imagePlaceholder="Materials Showcase"
                            href="/materials"
                        />
                    </StaggerItem>
                </StaggerContainer>
            </section>

            {/* 4. THE CONSULTATION PROCESS (Minimal Timeline) */}
            <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-dark-gray/20">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="font-display font-bold text-3xl md:text-5xl text-white uppercase tracking-wider mb-16 md:mb-20">The Journey to <br/><span className="text-primary-red text-3xl md:text-6xl">Perfection</span></h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {[
                            { step: "01", title: "Consultation", desc: "Understanding your lifestyle, space, and aesthetic preferences." },
                            { step: "02", title: "3D Architecture", desc: "Precise digital modeling and material selection." },
                            { step: "03", title: "Engineering", desc: "Manufacturing with millimeter precision in our facility." },
                            { step: "04", title: "Installation", desc: "Flawless execution by our master craftsmen." }
                        ].map((item, idx) => (
                            <FadeIn key={idx} delay={idx * 0.2} className="relative group">
                                <div className="text-4xl md:text-5xl font-display font-bold text-dark-gray mb-4 md:mb-6 group-hover:text-primary-red transition-colors duration-500">{item.step}</div>
                                <h3 className="text-lg md:text-xl text-white font-display uppercase tracking-wide mb-3 md:mb-4">{item.title}</h3>
                                <p className="text-gray-muted text-sm leading-relaxed">{item.desc}</p>
                                {idx !== 3 && <div className="hidden lg:block absolute top-8 -right-6 w-12 h-px bg-dark-gray" />}
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA / FINAL STATEMENT */}
            <section className="relative py-32 md:py-48 flex items-center justify-center bg-black overflow-hidden border-t border-dark-gray px-6">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-primary-red/10 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                </div>
                
                <FadeIn className="relative z-10 text-center max-w-4xl">
                    <h2 className="font-display font-bold text-3xl md:text-6xl text-white uppercase tracking-tighter mb-8 md:mb-10">Ready to Elevate Your Space?</h2>
                    <p className="text-gray-muted text-base md:text-lg mb-10 md:mb-12">Schedule a private consultation with our principal designer, Aashish Jajoo.</p>
                    <Button variant="primary" className="mx-auto bg-white text-primary-black hover:bg-gray-muted border border-white h-12">
                        Contact Us Today
                    </Button>
                </FadeIn>
            </section>

        </main>
    );
}