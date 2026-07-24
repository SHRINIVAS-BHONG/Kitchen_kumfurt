import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./global.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ['300', '400', '500']
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair-display",
    weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
    title: "Luxury Modular Kitchens & Wardrobes | Kichen Kumfurt",
    description: "Experience uncompromising luxury with Kichen Kumfurt. Custom modular kitchens, wardrobes, and interior solutions designed by Aashish Jajoo.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Kichen Kumfurt",
    "telephone": ["+917020171895", "+918788953940"],
    "email": "kichenkumfurt@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd Floor, Sanman Prestige, Railway Station Road",
        "addressLocality": "Nanded",
        "addressRegion": "Maharashtra",
        "postalCode": "431601",
        "addressCountry": "IN"
    },
    "founder": {
        "@type": "Person",
        "name": "Aashish Jajoo"
    },
    "priceRange": "$$$"
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.variable} ${playfair.variable} bg-primary-black text-white font-sans antialiased min-h-screen flex flex-col`}>
                {/* Premium Global Noise Texture */}
                <div className="fixed inset-0 z-[100] bg-noise pointer-events-none mix-blend-overlay" />
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}