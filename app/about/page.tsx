"use client";

import { FadeIn } from "@/components/ui/Animations";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="pt-32 md:pt-48 pb-24 md:pb-40 bg-primary-black min-h-screen relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-red/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1400px] relative z-10">
                
                {/* Hero */}
                <FadeIn className="mb-24 md:mb-40">
                    <p className="font-sans text-primary-red text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-6 md:mb-8">Our Story</p>
                    <h1 className="font-display font-bold text-4xl md:text-7xl lg:text-[7rem] text-white uppercase leading-[0.9] tracking-tighter max-w-5xl text-balance">
                        A Legacy of <br/><span className="text-white/30">Precision &amp; Design.</span>
                    </h1>
                </FadeIn>

                {/* Founder Vision */}
                <div className="max-w-4xl mx-auto mb-24 md:mb-48">
                    <FadeIn className="space-y-8 md:space-y-10">
                        <div className="space-y-4">
                            <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter">The Founder's Vision</h2>
                            <div className="w-16 h-px bg-primary-red" />
                        </div>
                        <p className="text-gray-muted/80 font-light text-lg md:text-2xl leading-relaxed text-balance">
                            Founded by Aashish Jajoo, Kichen Kumfurt was born from a singular obsession: to merge flawless architectural aesthetics with everyday functionality.
                        </p>
                        <p className="text-gray-muted/80 font-light text-lg md:text-2xl leading-relaxed text-balance">
                            We believe that a kitchen is not merely a utility space, but the very soul of a home. It demands the same level of architectural rigor and material quality as a luxury estate. 
                        </p>
                        <div className="bg-dark-gray/30 rounded-2xl p-8 md:p-12 border border-white/5 relative overflow-hidden mt-10 md:mt-14 shadow-2xl">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-red" />
                            <p className="text-white text-xl md:text-3xl italic font-serif leading-relaxed text-balance">"True luxury is found in the details that others overlook. It is the silent, flawless glide of a drawer and the perfect alignment of every edge."</p>
                            <p className="text-primary-red font-display uppercase tracking-widest text-xs md:text-sm mt-6 md:mt-8 font-bold">— Aashish Jajoo</p>
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
