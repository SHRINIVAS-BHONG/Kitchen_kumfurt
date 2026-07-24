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
            className={`group relative overflow-hidden bg-card-gray border border-dark-gray/40 hover:border-dark-gray transition-all duration-700 ease-[0.16,1,0.3,1] rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 ${className}`}
        >
            {/* Image Placeholder - Ready for actual Next.js Image component later */}
            <div className="relative w-full aspect-[4/3] bg-[#111111] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 to-transparent z-10" />
                
                {/* Fallback pattern / placeholder */}
                <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-[1500ms] ease-[0.16,1,0.3,1]">
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
                    <p className="text-gray-muted/80 text-sm leading-relaxed mb-6 font-light">{description}</p>
                )}
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
    );

    return <CardContent />;
};
