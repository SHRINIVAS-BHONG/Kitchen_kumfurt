"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";

export default function GalleryPage() {
    // Array of heights to create a masonry-like staggered grid look
    const heights = ["h-[400px]", "h-[600px]", "h-[500px]", "h-[700px]", "h-[450px]", "h-[550px]"];

    return (
        <main className="pt-24 md:pt-32 pb-24 md:pb-32 bg-primary-black min-h-screen">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1600px]">
                
                <FadeIn className="mb-16 md:mb-20 text-center">
                    <h1 className="font-display font-bold text-3xl md:text-6xl text-white uppercase tracking-wider mb-4 md:mb-6 mt-4 md:mt-0">Inspiration Gallery</h1>
                    <p className="text-gray-muted text-base md:text-lg max-w-2xl mx-auto">
                        A visual diary of textures, alignments, and architectural details. 
                    </p>
                </FadeIn>

                <StaggerContainer className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <StaggerItem key={i} className="break-inside-avoid">
                            <div className={`relative w-full ${heights[i % heights.length]} bg-[#111] border border-dark-gray overflow-hidden group cursor-pointer`}>
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-1000 ease-[0.21,0.47,0.32,0.98]">
                                    <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(#444 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-gray-muted/40 font-display uppercase tracking-widest text-[10px] md:text-xs font-bold">Image {i + 1}</span>
                                </div>

                                <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    <p className="text-white font-sans text-[10px] md:text-xs uppercase tracking-widest font-bold">Detail View</p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </main>
    );
}
