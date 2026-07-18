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
        <main className="pt-24 md:pt-32 pb-24 md:pb-32 bg-primary-black min-h-screen">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
                
                <FadeIn className="mb-12 md:mb-16">
                    <p className="font-sans text-primary-red text-xs uppercase tracking-[0.3em] font-bold mb-4 mt-4 md:mt-0">Our Work</p>
                    <h1 className="font-display font-bold text-3xl md:text-6xl text-white uppercase tracking-wider mb-6 md:mb-8">Featured Projects</h1>
                    <p className="text-gray-muted text-base md:text-lg max-w-2xl">
                        Explore our curated selection of recent bespoke interior projects. Each space is a unique reflection of our clients' lifestyles, executed with signature Kumfurt precision.
                    </p>
                </FadeIn>

                {/* Filters */}
                <FadeIn delay={0.2} className="flex flex-wrap gap-2 md:gap-4 mb-12 md:mb-16 border-b border-dark-gray pb-6 md:pb-8 relative z-10">
                    {filters.map((filter, i) => (
                        <button 
                            key={i} 
                            onClick={() => setActiveFilter(filter)}
                            className={`text-[10px] md:text-xs uppercase tracking-widest font-bold px-3 md:px-4 py-2 rounded-full transition-colors cursor-pointer ${
                                activeFilter === filter 
                                    ? 'bg-primary-red text-white border border-primary-red' 
                                    : 'text-gray-muted hover:text-white border border-dark-gray hover:border-gray-muted'
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
