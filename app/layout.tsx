import ThemeSwitch from "../components/ThemeSwitcher";
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { LetterLogo } from "@/components/branding";
import localFont from "next/font/local";

export const metadata: Metadata = {
    title: {
        template: "%s :: budgeWise",
        absolute: "budgeWise: your new favorite budgeting app",
    },
    description:
        "Track your finances, save more money, and budget way easier with budgeWise",
};

const libre_franklin = Libre_Franklin({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-libre-franklin",
});
// const paysage = localFont({
//     src: [
//         {
//             path: "../assets/fonts/Paysage-Regular.otf",
//             weight: "400",
//             style: "normal",
//         },
//         {
//             path: "../assets/fonts/Paysage-Medium.otf",
//             weight: "500",
//             style: "normal",
//         },
//         {
//             path: "../assets/fonts/Paysage-Bold.otf",
//             weight: "600",
//             style: "normal",
//         },
//         {
//             path: "../assets/fonts/Paysage-Black.otf",
//             weight: "800",
//             style: "normal",
//         },
//     ],
//     display: "swap",
//     variable: "--font-paysage",
// });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${libre_franklin.variable} font-sans`}>
                <Providers className="min-h-[100dvh] w-screen">
                    {children}
                </Providers>
            </body>
        </html>
    );
}
