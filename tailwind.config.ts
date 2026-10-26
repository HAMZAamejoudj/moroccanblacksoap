import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#022c22", // emerald-950
                    dark: "#064e3b",
                },
                secondary: {
                    DEFAULT: "#f59e0b", // amber-500
                    light: "#fbbf24",
                },
                neutral: {
                    DEFAULT: "#f5f5f4", // stone-100
                },
            },
            fontFamily: {
                serif: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
