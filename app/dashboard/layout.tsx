import ThemeSwitcher from "@/components/ThemeSwitcher";
import { LetterLogo } from "@/components/branding";
import {
    SignedIn,
    UserButton,
    SignedOut,
    SignUpButton,
    SignInButton,
    ClerkLoading,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { ReactNode } from "react";

export default async function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    const user = await currentUser();
    return (
        <div className="flex min-h-[100dvh] w-screen">
            <div
                id="sidebar"
                className="flex min-h-[100dvh] shrink-0 grow-0 flex-col justify-center border-r border-r-slate-500 px-6 py-6"
            >
                <LetterLogo />
                <div className="flex size-full flex-col justify-center">
                    <Link color="foreground">Dashboard</Link>
                </div>
            </div>
            <div className="flex min-h-[100dvh] w-full flex-col">
                <nav className="flex w-full items-center p-6">
                    <div className="flex w-1/2 items-center justify-start gap-4"></div>
                    <div className="flex w-1/2 items-center justify-end gap-4">
                        <SignedIn>
                            <UserButton showName />
                        </SignedIn>
                        <SignedOut>
                            <SignUpButton>
                                <Button color="primary" size="sm">
                                    Sign Up
                                </Button>
                            </SignUpButton>
                            <SignInButton mode="modal">
                                <Link
                                    underline="hover"
                                    className="cursor-pointer"
                                    size="sm"
                                >
                                    Sign In
                                </Link>
                            </SignInButton>
                        </SignedOut>
                        <ThemeSwitcher />
                    </div>
                </nav>
                <main>{children}</main>
            </div>
        </div>
    );
}
