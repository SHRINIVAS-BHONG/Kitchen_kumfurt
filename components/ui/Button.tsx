import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

interface BaseButtonProps {
    variant?: "primary" | "ghost" | "secondary" | "outline";
    children: React.ReactNode;
    showArrow?: boolean;
    className?: string;
}

export type ButtonProps = BaseButtonProps & (
    | ({ href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps>)
    | ({ href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps>)
);

export function Button({ variant = "primary", children, showArrow = true, ...props }: ButtonProps) {
    if (variant === "ghost") {
        const ghostClasses = `group inline-flex items-center justify-center gap-2 text-white border-b border-white pb-1 hover:text-primary-red hover:border-primary-red transition-all duration-300 font-sans tracking-widest text-sm uppercase min-h-[44px] ${props.className || ''}`;

        if ('href' in props && props.href) {
            const { href, ...anchorProps } = props;
            return (
                <Link href={href} {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)} className={ghostClasses}>
                    {children}
                </Link>
            );
        }

        return (
            <button
                {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
                className={ghostClasses}
            >
                {children}
            </button>
        );
    }

    if (variant === "secondary" || variant === "outline") {
        const secondaryClasses = `group inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 uppercase tracking-widest font-medium text-sm transition-all duration-500 ease-[0.16,1,0.3,1] rounded-md shadow-lg hover:border-white/30 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden min-h-[44px] ${props.className || ''}`;

        if ('href' in props && props.href) {
            const { href, ...anchorProps } = props;
            return (
                <Link href={href} {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)} className={secondaryClasses}>
                    <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-white/5 pointer-events-none" />
                    <span className="relative z-10 flex items-center gap-3">
                        {children}
                    </span>
                </Link>
            );
        }

        return (
            <button
                {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
                className={secondaryClasses}
            >
                <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-white/5 pointer-events-none" />
                <span className="relative z-10 flex items-center gap-3">
                    {children}
                </span>
            </button>
        );
    }

    const primaryClasses = `group inline-flex items-center justify-center gap-3 bg-primary-red hover:bg-red-hover text-white px-8 py-4 uppercase tracking-widest font-medium text-sm transition-all duration-500 ease-[0.16,1,0.3,1] rounded-md shadow-lg hover:shadow-primary-red/20 shadow-black/50 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden min-h-[44px] ${props.className || ''}`;

    if ('href' in props && props.href) {
        const { href, ...anchorProps } = props;
        return (
            <Link href={href} {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)} className={primaryClasses}>
                <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-white/10 pointer-events-none" />
                <span className="relative z-10 flex items-center gap-3">
                    {children}
                    {showArrow && (
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                    )}
                </span>
            </Link>
        );
    }

    return (
        <button
            {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
            className={primaryClasses}
        >
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