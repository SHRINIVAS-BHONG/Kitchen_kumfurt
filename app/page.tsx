import React from "react";
import { Button } from "@/components/ui/Button";
import { HeroParallax } from "@/components/home/HeroParallax";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { LuxuryCard } from "@/components/ui/LuxuryCard";
import { ChevronRight, ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="w-full bg-primary-black overflow-hidden">

            {/* 1. CINEMATIC HERO SECTION */}
            <HeroParallax />

            {/* 2. BRAND INTRODUCTION / LUXURY STATEMENT */}
            <section className="py-32 md:py-56 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-t border-white/5 relative">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-red/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 lg:gap-32 items-center relative z-10">
                    <FadeIn direction="right">
                        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-tight tracking-tighter mb-8 md:mb-12 text-balance">
                            Uncompromising <br />
                            <span className="text-primary-red">Craftsmanship.</span>
                        </h2>
                        <div className="w-24 h-px bg-white/20 mb-8 md:mb-12" />
                        <p className="text-gray-muted/80 font-light text-lg md:text-xl leading-relaxed mb-6 md:mb-8 text-balance">
                            Kichen Kumfurt represents the pinnacle of bespoke interior architecture. We don't just build modular setups; we engineer luxurious culinary spaces tailored precisely to your lifestyle.
                        </p>
                        <p className="text-gray-muted/80 font-light text-lg md:text-xl leading-relaxed mb-10 md:mb-14 text-balance">
                            By sourcing the finest materials globally and applying rigorous precision engineering, every creation is a testament to durability, elegance, and modern living.
                        </p>
                        <Link href="/about" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white hover:text-primary-red transition-colors border-b border-white hover:border-primary-red pb-1 h-11">
                            Discover Our Story <ChevronRight className="w-4 h-4" />
                        </Link>
                    </FadeIn>

                    <FadeIn direction="left" className="relative h-[500px] md:h-[700px] w-full bg-dark-gray border border-white/5 rounded-2xl overflow-hidden group">
                        <img 
                            src="/images/craftsmanship.jpg" 
                            alt="Uncompromising Craftsmanship - Premium Kitchen Details" 
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2000ms] ease-[0.16,1,0.3,1]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 via-transparent to-transparent pointer-events-none" />
                        {/* Decorative element */}
                        <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary-red/10 blur-3xl" />
                    </FadeIn>
                </div>
            </section>

            {/* 3. FEATURED COLLECTIONS (GRID) */}
            <section className="py-24 md:py-32 bg-dark-gray px-6 md:px-12 lg:px-24">
                <FadeIn className="max-w-7xl mx-auto mb-16 md:mb-20 text-center">
                    <span className="font-sans text-primary-red text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Collections</span>
                    <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-wider">Bespoke Living</h2>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <StaggerItem>
                        <LuxuryCard
                            title="Luxury Kitchens"
                            description="Precision-engineered culinary spaces combining German hardware with exquisite finishes."
                            imageUrl="/images/luxury-kitchen.jpg"
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
            <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24 border-t border-white/5 relative">
                <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-primary-red/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <FadeIn>
                        <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white uppercase tracking-tighter mb-20 md:mb-32 text-balance">The Journey to <br /><span className="text-primary-red">Perfection</span></h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {[
                            { step: "01", title: "Consultation", desc: "Understanding your lifestyle, space, and aesthetic preferences." },
                            { step: "02", title: "3D Architecture", desc: "Precise digital modeling and material selection." },
                            { step: "03", title: "Engineering", desc: "Manufacturing with millimeter precision in our facility." },
                            { step: "04", title: "Installation", desc: "Flawless execution by our master craftsmen." }
                        ].map((item, idx) => (
                            <FadeIn key={idx} delay={idx * 0.2} className="relative group cursor-pointer">
                                <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white/20 mb-6 md:mb-8 group-hover:text-primary-red group-hover:opacity-100 group-active:text-primary-red group-active:opacity-100 transition-all duration-700">{item.step}</div>
                                <h3 className="text-xl md:text-2xl text-white font-display uppercase tracking-wide mb-3 md:mb-4">{item.title}</h3>
                                <p className="text-gray-muted/80 font-light text-sm md:text-base leading-relaxed max-w-sm">{item.desc}</p>
                                {idx !== 3 && <div className="hidden lg:block absolute top-12 -right-6 w-12 h-px bg-white/10" />}
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA / FINAL STATEMENT */}
            <section className="relative py-12 md:py-20 flex items-center justify-center bg-primary-black overflow-hidden border-t border-white/5 px-6">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-primary-red/5 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-[url(https://www.transparenttextures.com/patterns/cubes.png)] opacity-[0.03]" />
                </div>

                <FadeIn className="relative z-10 text-center max-w-4xl">
                    <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white uppercase tracking-tighter mb-8 md:mb-10 text-balance">Ready to Elevate Your Space?</h2>
                    <p className="text-gray-muted/80 font-light text-lg md:text-2xl mb-12 md:mb-16 text-balance">Schedule a private consultation with our principal designer, Aashish Jajoo.</p>
                    <Link href="/contact" className="flex justify-center">
                        <Button variant="primary" className="bg-white !text-primary-black hover:bg-gray-muted border border-white h-[56px] text-sm">
                            Contact Us Today
                        </Button>
                    </Link>
                </FadeIn>
            </section>

        </main>
    );
}