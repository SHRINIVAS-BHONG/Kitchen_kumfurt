"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const DussehraAdModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if already dismissed in this session
        try {
            const hasSeen = sessionStorage.getItem("kitchen_kumfurt_dussehra_seen");
            const urlParams = new URLSearchParams(window.location.search);
            const forceShow = urlParams.get("dussehra") === "true";

            if (!hasSeen || forceShow) {
                // Short natural delay so the page loads first, then ad appears gracefully
                const timer = setTimeout(() => {
                    setIsOpen(true);
                }, 400);
                return () => clearTimeout(timer);
            }
        } catch {
            setIsOpen(true);
        }
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
        try {
            sessionStorage.setItem("kitchen_kumfurt_dussehra_seen", "true");
        } catch {
            // ignore storage restrictions
        }
    }, []);

    // Dismiss on Escape key
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, handleClose]);

    // Lock body scroll while modal is active
    useEffect(() => {
        if (isOpen) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Festive Dussehra Greetings"
                >
                    {/* Dark Blurred Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Centered Ad Creative Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 10 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative z-10 flex flex-col items-center max-w-full my-auto"
                    >
                        {/* Outside Top Action Bar: Keeps Close Button cleanly ABOVE the image so logos are never covered */}
                        <div className="w-full flex items-center justify-end mb-2 px-1">
                            <button
                                onClick={handleClose}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 active:bg-white/35 text-white text-xs font-medium tracking-wider uppercase backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200 cursor-pointer touch-manipulation group"
                                aria-label="Close ad"
                            >
                                <span className="text-[11px] font-semibold text-gray-200 group-hover:text-white">CLOSE</span>
                                <X className="w-3.5 h-3.5 text-gray-200 group-hover:text-white transition-transform group-hover:scale-110" />
                            </button>
                        </div>

                        {/* Ad Poster Card (Pure Image Ad - No buttons inside) */}
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.25)] border border-amber-500/30 bg-[#FFFDF8]">
                            <img
                                src="/images/dusserha_kitchen_kumfurt.jpeg"
                                alt="विजयादशमी की हार्दिक शुभकामनाएँ - Kitchen Kumfurt & Aashish Ply"
                                className="block w-auto h-auto max-h-[72dvh] sm:max-h-[76vh] max-w-[88vw] sm:max-w-md md:max-w-lg object-contain select-none"
                                loading="eager"
                                decoding="async"
                            />
                        </div>

                        {/* Subtle tap-out hint */}
                        <p className="mt-2.5 text-white/50 text-[11px] font-light tracking-wide text-center select-none">
                            Tap outside to close
                        </p>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
