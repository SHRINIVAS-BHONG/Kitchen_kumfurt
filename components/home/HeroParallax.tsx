"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Animations";
import Link from "next/link";

export const HeroParallax = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Parallax effects for Hero
    const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 pt-20 overflow-hidden">
            {/* Background Obsidian Noir Luxury Modular Kitchen Image */}
            <div className="absolute inset-0 z-0 bg-primary-black">
                {/* Mobile portrait-optimized Obsidian Noir Kitchen */}
                <img
                    src="/images/hero-kitchen-mobile.jpg"
                    alt="Obsidian Noir Luxury Modular Kitchen"
                    className="block md:hidden w-full h-full object-cover object-center"
                />
                {/* Desktop widescreen Obsidian Noir Kitchen */}
                <img
                    src="/images/hero-luxury-kitchen.jpg"
                    alt="Obsidian Noir Luxury Modular Kitchen"
                    className="hidden md:block w-full h-full object-cover object-center"
                />
                {/* Gradient Overlays for optimal contrast and crystal clear luxury aesthetics */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-primary-black z-10" />
                <div className="absolute inset-0 bg-black/25 z-10" />
            </div>

            <motion.div
                style={{ y: yHeroText, opacity: opacityHero }}
                className="relative z-20 w-full max-w-7xl text-center flex flex-col items-center px-4"
            >
                <FadeIn delay={0.2} direction="up">
                    <p className="font-sans text-gray-muted text-[9px] sm:text-xs uppercase tracking-[0.4em] font-medium mb-6 mt-4 sm:mt-0">
                        Est. 2019 &mdash; Nanded
                    </p>
                </FadeIn>

                <FadeIn delay={0.4} direction="up">
                    <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] xl:text-[9rem] tracking-tighter leading-[0.85] text-white uppercase mb-12 sm:mb-16 drop-shadow-2xl">
                        Inspiring<br />Kitchens
                    </h1>
                </FadeIn>

                <FadeIn delay={0.6} direction="up">
                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-center justify-center w-full">
                        <Link href="/contact" className="w-full max-w-[280px] sm:w-auto">
                            <Button variant="primary" className="w-full h-[52px] sm:h-[56px] justify-center text-xs sm:text-sm">
                                Schedule Consultation
                            </Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button variant="ghost" className="text-xs sm:text-sm">
                                View Portfolio
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </motion.div>
        </section>
    );
};
