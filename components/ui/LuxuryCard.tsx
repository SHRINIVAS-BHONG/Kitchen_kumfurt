"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface LuxuryCardProps {
    title: string;
    description?: string;
    imagePlaceholder?: string;
    href?: string;
    className?: string;
}

export const LuxuryCard = ({ title, description, imagePlaceholder, href, className = "" }: LuxuryCardProps) => {
    const CardContent = () => (
        <motion.div
            whileHover="hover"
            className={`group relative overflow-hidden bg-card-gray border border-dark-gray hover:border-primary-red/30 transition-colors duration-500 cursor-pointer ${className}`}
        >
            {/* Image Placeholder - Ready for actual Next.js Image component later */}
            <div className="relative w-full aspect-[4/3] bg-[#111111] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 to-transparent z-10" />
                
                {/* Fallback pattern / placeholder */}
                <div className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-1000 ease-[0.21,0.47,0.32,0.98]">
                    <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                </div>
                
                {imagePlaceholder && (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-muted/30 font-display uppercase tracking-widest text-xs z-20">
                        {imagePlaceholder}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-8 relative z-20 -mt-12">
                <h3 className="font-display text-2xl text-white mb-3 tracking-wide">{title}</h3>
                {description && (
                    <p className="text-gray-muted text-sm leading-relaxed mb-6">{description}</p>
                )}
                
                {href && (
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-muted group-hover:text-primary-red transition-colors duration-300">
                        <span>Explore</span>
                        <motion.div
                            variants={{ hover: { x: 5 } }}
                            transition={{ duration: 0.3 }}
                        >
                            <ArrowRight className="w-4 h-4" />
                        </motion.div>
                    </div>
                )}
            </div>

            {/* Hover Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-red/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
    );

    if (href) {
        return <a href={href} className="block"><CardContent /></a>;
    }

    return <CardContent />;
};
