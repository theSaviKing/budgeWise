import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import colors from "tailwindcss/colors";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./assets/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        nextui({
            themes: {
                dark: {
                    colors: {
                        background: colors.slate[950],
                        primary: {
                            ...colors.emerald,
                            DEFAULT: colors.emerald[300],
                        },
                    },
                },
                light: {
                    colors: {
                        background: colors.slate[200],
                        primary: {
                            ...colors.emerald,
                            DEFAULT: colors.emerald[400],
                        },
                    },
                },
            },
        }),
    ],
    darkMode: "class",
};
export default config;
