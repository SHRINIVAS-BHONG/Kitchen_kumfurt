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
                'primary-black': '#151515',
                'dark-gray': '#2A2A2A',
                'card-gray': '#1F1F1F',
                'primary-red': '#D31E27',
                'red-hover': '#B81A22',
                'gray-muted': '#B0B0B0',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                display: ['var(--font-space-grotesk)', 'sans-serif'],
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