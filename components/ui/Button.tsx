import { ArrowRight } from "lucide-react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "ghost" | "secondary" | "outline";
    children: React.ReactNode;
    showArrow?: boolean;
}

export function Button({ variant = "primary", children, showArrow = true, ...props }: ButtonProps) {
    if (variant === "ghost") {
        return (
            <button
                {...props}
                className={`group flex items-center gap-2 text-white border-b border-white pb-1 hover:text-primary-red hover:border-primary-red transition-all duration-300 font-sans tracking-widest text-sm uppercase ${props.className || ''}`}
            >
                {children}
            </button>
        );
    }

    if (variant === "secondary" || variant === "outline") {
        return (
            <button
                {...props}
                className={`group flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 uppercase tracking-widest font-medium text-sm transition-all duration-500 ease-[0.16,1,0.3,1] rounded-md shadow-lg hover:border-white/30 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden ${props.className || ''}`}
            >
                <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-white/5 pointer-events-none" />
                <span className="relative z-10 flex items-center gap-3">
                    {children}
                </span>
            </button>
        );
    }

    return (
        <button
            {...props}
            className={`group flex items-center gap-3 bg-primary-red hover:bg-red-hover text-white px-8 py-4 uppercase tracking-widest font-medium text-sm transition-all duration-500 ease-[0.16,1,0.3,1] rounded-md shadow-lg hover:shadow-primary-red/20 shadow-black/50 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden ${props.className || ''}`}
        >
            {/* Soft inner glow */}
            <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-white/10 pointer-events-none" />
            <span className="relative z-10 flex items-center gap-3">
                {children}
                {showArrow && (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                )}
            </span>
        </button>
    );
}