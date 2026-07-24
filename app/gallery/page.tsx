"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";

export default function GalleryPage() {
    // Array of heights to create a masonry-like staggered grid look
    const heights = ["h-[400px]", "h-[600px]", "h-[500px]", "h-[700px]", "h-[450px]", "h-[550px]"];

    return (
        <main className="pt-32 md:pt-48 pb-24 md:pb-40 bg-primary-black min-h-screen relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary-red/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1600px] relative z-10">
                
                <FadeIn className="mb-20 md:mb-32 text-center">
                    <h1 className="font-display font-bold text-4xl md:text-7xl lg:text-[7rem] text-white uppercase tracking-tighter leading-[0.9] mb-6 md:mb-8 mt-4 md:mt-0 text-balance">Inspiration Gallery</h1>
                    <p className="text-gray-muted/80 font-light text-lg md:text-xl max-w-2xl mx-auto text-balance">
                        A visual diary of textures, alignments, and architectural details. 
                    </p>
                </FadeIn>

                <StaggerContainer className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <StaggerItem key={i} className="break-inside-avoid">
                            <div className={`relative w-full ${heights[i % heights.length]} bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700 ease-[0.16,1,0.3,1]`}>
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-[2000ms] ease-[0.16,1,0.3,1]">
                                    <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(#444 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-gray-muted/40 font-display uppercase tracking-widest text-[10px] md:text-xs font-bold">Image {i + 1}</span>
                                </div>

                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </main>
    );
}
