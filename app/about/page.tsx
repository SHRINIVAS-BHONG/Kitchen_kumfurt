"use client";

import { FadeIn } from "@/components/ui/Animations";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="pt-24 md:pt-32 pb-16 md:pb-24 bg-primary-black min-h-screen">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
                
                {/* Hero */}
                <FadeIn className="mb-20 md:mb-32">
                    <p className="font-sans text-primary-red text-xs uppercase tracking-[0.3em] font-bold mb-4 md:mb-6 mt-4 md:mt-0">Our Story</p>
                    <h1 className="font-display font-bold text-3xl md:text-6xl lg:text-7xl text-white uppercase leading-tight tracking-tight max-w-4xl">
                        A Legacy of <br/><span className="text-dark-gray">Precision &amp; Design.</span>
                    </h1>
                </FadeIn>

                {/* Founder Vision */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center mb-20 md:mb-32">
                    <FadeIn direction="right" className="relative h-[400px] md:h-[700px] bg-[#0a0a0a] border border-dark-gray flex items-center justify-center">
                        <div className="text-gray-muted/20 font-display uppercase tracking-widest text-sm">Portrait Placeholder</div>
                        <div className="absolute -bottom-10 -right-10 w-48 md:w-64 h-48 md:h-64 bg-primary-red/5 blur-[80px]" />
                    </FadeIn>
                    
                    <FadeIn direction="left" className="space-y-6 md:space-y-8">
                        <h2 className="font-display font-bold text-2xl md:text-4xl text-white uppercase tracking-wider">The Founder's Vision</h2>
                        <div className="w-16 h-1 bg-primary-red" />
                        <p className="text-gray-muted text-base md:text-lg leading-relaxed">
                            Founded by Aashish Jajoo, Kichen Kumfurt was born from a singular obsession: to merge flawless architectural aesthetics with everyday functionality.
                        </p>
                        <p className="text-gray-muted text-base md:text-lg leading-relaxed">
                            We believe that a kitchen is not merely a utility space, but the very soul of a home. It demands the same level of architectural rigor and material quality as a luxury estate. 
                        </p>
                        <div className="bg-dark-gray/30 p-6 md:p-8 border-l border-primary-red mt-6 md:mt-8">
                            <p className="text-white text-lg md:text-xl italic font-serif leading-relaxed">"True luxury is found in the details that others overlook. It is the silent, flawless glide of a drawer and the perfect alignment of every edge."</p>
                            <p className="text-primary-red font-display uppercase tracking-widest text-[10px] md:text-xs mt-4 md:mt-6 font-bold">— Aashish Jajoo</p>
                        </div>
                    </FadeIn>
                </div>

                {/* Philosophy Grid */}
                <FadeIn className="border-t border-dark-gray/50 pt-20 md:pt-32">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Uncompromising Quality", desc: "Sourcing only elite materials, from high-gloss acrylics to sustainable natural woods, ensuring decades of beauty." },
                            { title: "Precision Engineering", desc: "Utilizing advanced European machinery to achieve millimeter-perfect cuts and seamless edge banding." },
                            { title: "Bespoke Aesthetics", desc: "Every project is a unique canvas, tailored to the exact dimensions and architectural soul of your space." }
                        ].map((item, i) => (
                            <div key={i} className="group">
                                <span className="text-primary-red font-display text-3xl md:text-4xl font-bold mb-4 md:mb-6 block">0{i+1}</span>
                                <h3 className="text-lg md:text-xl text-white font-display uppercase tracking-wide mb-3 md:mb-4">{item.title}</h3>
                                <p className="text-gray-muted text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* CTA */}
                <FadeIn className="mt-24 md:mt-40 text-center">
                    <h2 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wider mb-6 md:mb-8">Begin Your Project</h2>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-primary-red hover:text-white transition-colors border-b border-primary-red hover:border-white pb-1 h-11">
                        Book a Consultation <ArrowRight className="w-4 h-4" />
                    </Link>
                </FadeIn>
            </div>
        </main>
    );
}
