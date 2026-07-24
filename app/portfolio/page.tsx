"use client";

import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { LuxuryCard } from "@/components/ui/LuxuryCard";

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState("All Projects");

    const projects = [
        { title: "Villa Aurora", desc: "A modern monolithic kitchen featuring matte black PU and engineered quartz.", category: "Kitchens" },
        { title: "The Glass House", desc: "Expansive walk-in closet with tinted glass profiles and integrated LED lighting.", category: "Wardrobes" },
        { title: "Penthouse 94", desc: "Minimalist living room TV unit with hidden storage and acoustic paneling.", category: "Living Spaces" },
        { title: "Estate Alpha", desc: "A classical fusion kitchen using natural oak veneers and brass hardware.", category: "Kitchens" },
        { title: "Urban Loft", desc: "Smart storage solutions tailored for compact, high-end city living.", category: "Living Spaces" },
        { title: "Residence 02", desc: "Floor-to-ceiling sliding wardrobes with acrylic solid surfaces.", category: "Wardrobes" },
    ];

    const filters = ["All Projects", "Kitchens", "Wardrobes", "Living Spaces"];

    const filteredProjects = activeFilter === "All Projects" 
        ? projects 
        : projects.filter(p => p.category === activeFilter);

    return (
        <main className="pt-32 md:pt-48 pb-24 md:pb-40 bg-primary-black min-h-screen relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-red/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1400px] relative z-10">
                
                <FadeIn className="mb-16 md:mb-24">
                    <p className="font-sans text-primary-red text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-6 mt-4 md:mt-0">Our Work</p>
                    <h1 className="font-display font-bold text-4xl md:text-7xl lg:text-[7rem] text-white uppercase tracking-tighter leading-[0.9] mb-8 md:mb-10 text-balance">Featured Projects</h1>
                    <p className="text-gray-muted/80 font-light text-lg md:text-xl max-w-3xl text-balance leading-relaxed">
                        Explore our curated selection of recent bespoke interior projects. Each space is a unique reflection of our clients' lifestyles, executed with signature Kumfurt precision.
                    </p>
                </FadeIn>

                {/* Filters */}
                <FadeIn delay={0.2} className="flex flex-wrap gap-2 md:gap-4 mb-12 md:mb-16 border-b border-dark-gray pb-6 md:pb-8 relative z-10">
                    {filters.map((filter, i) => (
                        <button 
                            key={i} 
                            onClick={() => setActiveFilter(filter)}
                            className={`text-xs uppercase tracking-widest font-bold px-5 py-3 rounded-full transition-all duration-500 ease-[0.16,1,0.3,1] cursor-pointer ${
                                activeFilter === filter 
                                    ? 'bg-primary-red text-white border border-primary-red shadow-[0_0_20px_rgba(211,30,39,0.3)]' 
                                    : 'text-gray-muted hover:text-white border border-dark-gray/50 hover:border-white/20 bg-dark-gray/10'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </FadeIn>

                <StaggerContainer key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {filteredProjects.map((project, i) => (
                        <StaggerItem key={project.title}>
                            <LuxuryCard 
                                title={project.title}
                                description={project.desc}
                                imagePlaceholder={`${project.category} Photography`}
                                className="h-full"
                            />
                        </StaggerItem>
                    ))}
                </StaggerContainer>

            </div>
        </main>
    );
}
