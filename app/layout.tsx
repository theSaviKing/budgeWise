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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={libre_franklin.className}>
                <Providers className="min-h-[100dvh] w-screen">
                    {children}
                </Providers>
            </body>
        </html>
    );
}
