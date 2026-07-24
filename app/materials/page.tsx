"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";

export default function MaterialsPage() {
    const materials = [
        {
            category: "Surfaces & Finishes",
            items: [
                { title: "High-Gloss PU", desc: "Polyurethane finishes offering an ultra-premium, mirror-like gloss that resists scratches and moisture." },
                { title: "Premium Laminates", desc: "Textured and matte European laminates that provide immense durability and a warm, tactile feel." },
                { title: "Acrylic Solid", desc: "Seamless, non-porous surfaces that deliver deep, rich colors and incredible hygiene standards." },
                { title: "Natural Wood Veneers", desc: "Ethically sourced woods that bring organic luxury and unique grain patterns to your architectural space." },
                { title: "Toughened Glass", desc: "Profile doors and backsplashes utilizing back-painted or tinted glass for a sleek, modern aesthetic." }
            ]
        },
        {
            category: "Countertops",
            items: [
                { title: "Engineered Quartz", desc: "Extremely durable, non-porous surfaces resisting stains and heat, available in marble-like veining." },
                { title: "Solid Surface (Corian)", desc: "Seamless integrations that allow for invisible joints and integrated sinks." },
                { title: "Granite", desc: "Classic natural stone offering unparalleled hardness and unique earthy tones." }
            ]
        },
        {
            category: "Hardware & Mechanisms",
            items: [
                { title: "Hettich (Germany)", desc: "Precision drawer systems and soft-close hinges engineered for millions of flawless cycles." },
                { title: "Blum (Austria)", desc: "Advanced lift systems for overhead cabinets and seamless push-to-open mechanisms." },
                { title: "Hafele", desc: "Premium organizational accessories, from corner carousels to integrated LED lighting solutions." }
            ]
        }
    ];

    return (
        <main className="pt-32 md:pt-48 pb-24 md:pb-40 bg-primary-black min-h-screen relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-red/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
            
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1400px] relative z-10">
                
                {/* Header */}
                <FadeIn className="mb-20 md:mb-32">
                    <p className="font-sans text-primary-red text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-6 mt-4 md:mt-0">The Elements</p>
                    <h1 className="font-display font-bold text-4xl md:text-7xl lg:text-[7rem] text-white uppercase tracking-tighter leading-[0.9] mb-8 md:mb-10 text-balance">Premium Materials</h1>
                    <p className="text-gray-muted/80 font-light text-lg md:text-xl max-w-3xl leading-relaxed text-balance">
                        A luxury interior is only as good as the materials used to construct it. We source the finest finishes, strongest substrates, and most advanced hardware in the world.
                    </p>
                </FadeIn>

                {/* Catalog Sections */}
                <div className="space-y-20 md:space-y-32">
                    {materials.map((section, idx) => (
                        <div key={idx}>
                            <FadeIn>
                                <h2 className="font-display text-xl md:text-3xl text-white uppercase tracking-wider mb-8 md:mb-12 pb-4 border-b border-dark-gray/50">
                                    {section.category}
                                </h2>
                            </FadeIn>

                            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.items.map((item, i) => (
                                    <StaggerItem key={i}>
                                        <div className="group bg-[#0a0a0a] rounded-2xl border border-white/5 p-8 md:p-10 h-full hover:border-primary-red/30 hover:bg-[#111] hover:-translate-y-1 transition-all duration-700 ease-[0.16,1,0.3,1] shadow-xl hover:shadow-2xl">
                                            {/* Placeholder for material texture image */}
                                            <div className="w-full h-40 md:h-48 bg-dark-gray/20 rounded-xl mb-8 overflow-hidden relative">
                                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10" />
                                                <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-[1500ms] ease-[0.16,1,0.3,1]" style={{ backgroundImage: "radial-gradient(#555 1px, transparent 1px)", backgroundSize: "10px 10px" }} />
                                            </div>
                                            
                                            <h3 className="text-xl md:text-2xl text-white font-display uppercase tracking-wide mb-4">{item.title}</h3>
                                            <p className="text-gray-muted/80 font-light text-sm md:text-base leading-relaxed">{item.desc}</p>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
