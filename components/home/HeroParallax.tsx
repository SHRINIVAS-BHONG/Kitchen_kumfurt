"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Animations";
import { getImageProps } from "next/image";

export const HeroParallax = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Parallax effects for Hero
    const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // High performance art-directed hero image with Next.js image optimization
    const common = { 
        alt: "Obsidian Noir Luxury Modular Kitchen", 
        priority: true,
        quality: 85,
    };

    const {
        props: { srcSet: mobileSrcSet }
    } = getImageProps({
        ...common,
        width: 750,
        height: 1334,
        src: "/images/hero-kitchen-mobile.jpg",
    });

    const {
        props: { srcSet: desktopSrcSet, ...restDesktop }
    } = getImageProps({
        ...common,
        width: 1920,
        height: 1080,
        src: "/images/hero-luxury-kitchen.jpg",
    });

    return (
        <section 
            ref={heroRef} 
            className="relative h-[100dvh] min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 overflow-hidden"
        >
            {/* Background Obsidian Noir Luxury Modular Kitchen Image */}
            <div className="absolute inset-0 z-0 bg-primary-black">
                <picture className="absolute inset-0 w-full h-full">
                    <source media="(max-width: 767px)" srcSet={mobileSrcSet} />
                    <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
                    <img
                        {...restDesktop}
                        alt="Obsidian Noir Luxury Modular Kitchen"
                        className="w-full h-full object-cover object-center"
                        fetchPriority="high"
                    />
                </picture>

                {/* Gradient Overlays for optimal contrast and crystal clear luxury aesthetics */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-primary-black z-10" />
                <div className="absolute inset-0 bg-black/25 z-10" />
            </div>

            <motion.div
                style={{ y: yHeroText, opacity: opacityHero }}
                className="relative z-20 w-full max-w-7xl text-center flex flex-col items-center px-4"
            >
                <FadeIn delay={0.1} direction="up">
                    <p className="font-sans text-gray-muted text-xs uppercase tracking-[0.35em] font-medium mb-4 sm:mb-6 mt-2 sm:mt-0">
                        Est. 2019 &mdash; Nanded
                    </p>
                </FadeIn>

                <FadeIn delay={0.2} direction="up">
                    <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] xl:text-[9rem] tracking-tighter leading-[0.9] text-white uppercase mb-8 sm:mb-12 md:mb-16 drop-shadow-2xl">
                        Inspiring<br />Kitchens
                    </h1>
                </FadeIn>

                <FadeIn delay={0.3} direction="up">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center justify-center w-full max-w-md sm:max-w-none">
                        <Button 
                            href="/contact" 
                            variant="primary" 
                            className="w-full max-w-[280px] sm:w-auto h-[52px] sm:h-[56px] justify-center text-xs sm:text-sm font-semibold tracking-wider"
                        >
                            Schedule Consultation
                        </Button>
                        <Button 
                            href="/portfolio" 
                            variant="ghost" 
                            className="text-xs sm:text-sm py-2.5 px-4"
                        >
                            View Portfolio
                        </Button>
                    </div>
                </FadeIn>
            </motion.div>
        </section>
    );
};
