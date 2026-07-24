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
        <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 pt-20">
            {/* Background Video/Image Placeholder */}
            <div className="absolute inset-0 z-0 bg-primary-black">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-primary-black z-10" />
                {/* Placeholder for high-res architecture photo */}
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            </div>

            <motion.div
                style={{ y: yHeroText, opacity: opacityHero }}
                className="relative z-20 w-full max-w-7xl text-center flex flex-col items-center px-4"
            >
                <FadeIn delay={0.2} direction="up">
                    <p className="font-sans text-gray-muted text-[9px] sm:text-xs uppercase tracking-[0.4em] font-medium mb-6 mt-4 sm:mt-0">
                        Est. 2024 &mdash; Nanded
                    </p>
                </FadeIn>

                <FadeIn delay={0.4} direction="up">
                    <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] xl:text-[9rem] tracking-tighter leading-[0.85] text-white uppercase mb-6 sm:mb-8 drop-shadow-2xl">
                        Inspiring<br />Kitchens
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
