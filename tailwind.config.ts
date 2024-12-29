import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

const grayColor = colors.slate;

export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./assets/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "var(--font-libre-franklin)",
                    ...defaultTheme.fontFamily.sans,
                ],
                display: [
                    "var(--font-paysage)",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
    },
    plugins: [
        nextui({
            themes: {
                dark: {
                    colors: {
                        background: {
                            ...grayColor,
                            DEFAULT: grayColor[950],
                        },
                        primary: {
                            ...colors.emerald,
                            DEFAULT: colors.emerald[300],
                            foreground: grayColor[950],
                        },
                        secondary: {
                            50: "#ffe6ef",
                            100: "#f7bbd0",
                            200: "#ee91b3",
                            300: "#e66699",
                            400: "#dd3b70",
                            500: "#c4234d",
                            600: "#991932",
                            700: "#6e101d",
                            800: "#44070d",
                            900: "#1c0001",
                            DEFAULT: "#E76E9E",
                            foreground: grayColor[950],
                        },
                        danger: "#FF5D30",
                        warning: "#F4D20E",
                        success: "#8AC621",
                    },
                },
                light: {
                    colors: {
                        background: {
                            ...grayColor,
                            DEFAULT: grayColor[100],
                        },
                        primary: {
                            ...colors.emerald,
                            DEFAULT: colors.emerald[400],
                        },
                        secondary: {
                            50: "#ffe6ef",
                            100: "#f7bbd0",
                            200: "#ee91b3",
                            300: "#e66699",
                            400: "#dd3b70",
                            500: "#c4234d",
                            600: "#991932",
                            700: "#6e101d",
                            800: "#44070d",
                            900: "#1c0001",
                            DEFAULT: "#E76E9E",
                            foreground: grayColor[950],
                        },
                    },
                },
            },
        }),
    ],
    darkMode: "class",
} satisfies Config;
