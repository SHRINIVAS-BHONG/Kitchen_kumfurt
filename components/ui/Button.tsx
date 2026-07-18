import { ArrowRight } from "lucide-react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "ghost";
    children: React.ReactNode;
}

export function Button({ variant = "primary", children, ...props }: ButtonProps) {
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

    return (
        <button
            {...props}
            className={`group flex items-center gap-3 bg-primary-red hover:bg-red-hover text-white px-8 py-4 uppercase tracking-widest font-medium text-sm transition-all duration-300 rounded-none ${props.className || ''}`}
        >
            {children}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
    );
}