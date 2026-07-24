import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-black': '#0A0E17',
                'dark-gray': '#121826',
                'card-gray': '#182030',
                'primary-red': '#FF3344',
                'red-hover': '#E6192E',
                'gray-muted': '#94A3B8',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                display: ['var(--font-playfair-display)', 'serif'],
            },
            letterSpacing: {
                tighter: '-0.02em',
                widest: '0.1em',
            },
        },
    },
    plugins: [],
};
export default config;