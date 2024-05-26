"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { HTMLAttributes, PropsWithChildren } from "react";
import { dark } from "@clerk/themes";
import icon from "./icon.png";

type ProviderProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Providers({ children, ...props }: ProviderProps) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: [dark],
                variables: {
                    colorPrimary: "#6ee7b7",
                    colorShimmer: "#6ee7b780",
                },
                layout: {
                    logoImageUrl: "/icon.png",
                },
            }}
        >
            <NextUIProvider {...props}>
                <ThemeProvider attribute="class">{children}</ThemeProvider>
            </NextUIProvider>
        </ClerkProvider>
    );
}
