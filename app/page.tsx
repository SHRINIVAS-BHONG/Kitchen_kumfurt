"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PenTool, Gem, Wrench, ShieldCheck, ChevronRight } from "lucide-react";

export default function Home() {
    const fadeUpVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    return (
        <main className="w-full overflow-hidden bg-primary-black">

            {/* HERO SECTION */}
            <section className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20 pb-16">
                {/* Background Accent */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-red/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-dark-gray/50 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 w-full max-w-5xl text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mb-8 flex flex-col items-center"
                    >
                        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-none text-white uppercase">
                            Inspiring Kitchens
                        </h1>
                        <div className="flex items-center gap-3 mt-4">
                            <span className="text-gray-muted text-xl italic font-serif">by</span>
                            <span className="text-primary-red font-display font-bold text-2xl tracking-wide">Aashish</span>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="font-display text-gray-muted text-sm md:text-lg uppercase tracking-[0.2em] max-w-2xl mb-12"
                    >
                        Exclusive Kitchens & Wardrobes
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full sm:w-auto"
                    >
                        <Button variant="primary" className="w-full sm:w-auto group flex items-center justify-center gap-2 text-base px-8 py-4 shadow-lg shadow-primary-red/20 hover:shadow-primary-red/40 transition-all">
                            Book a Consultation
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="ghost" className="w-full sm:w-auto text-base px-8 py-4 border border-dark-gray hover:border-gray-muted transition-colors">
                            Explore Collection
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* WHY CHOOSE US SECTION */}
            <section className="bg-[#151515] py-24 lg:py-32 px-6 md:px-12 lg:px-24 border-t border-dark-gray/30 relative">
                
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariant}
                    className="text-center mb-20"
                >
                    <h2 className="font-display font-bold text-3xl lg:text-4xl text-white uppercase tracking-wider">The Kumfurt Standard</h2>
                    <div className="w-12 h-1 bg-primary-red mx-auto mt-6 rounded-full"></div>
                </motion.div>

                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
                >
                    {[
                        { title: "Custom Designs", icon: <PenTool className="w-8 h-8 text-white group-hover:text-primary-red transition-colors" />, desc: "Tailored perfectly to your space and lifestyle requirements with precision." },
                        { title: "Premium Materials", icon: <Gem className="w-8 h-8 text-white group-hover:text-primary-red transition-colors" />, desc: "Only the finest woods, laminates, and acrylics sourced globally." },
                        { title: "German Hardware", icon: <Wrench className="w-8 h-8 text-white group-hover:text-primary-red transition-colors" />, desc: "Engineered for lifetime durability and flawless movement." },
                        { title: "Assured Support", icon: <ShieldCheck className="w-8 h-8 text-white group-hover:text-primary-red transition-colors" />, desc: "Comprehensive after-sales service and extended warranties." }
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUpVariant}
                            className="group bg-card-gray p-10 border border-dark-gray hover:border-primary-red/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary-red/5"
                        >
                            <div className="w-16 h-16 rounded-full bg-dark-gray flex items-center justify-center mb-8 group-hover:bg-primary-red/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="font-display text-lg text-white mb-4 uppercase tracking-wide">{feature.title}</h3>
                            <p className="text-gray-muted text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </main>
    );
}