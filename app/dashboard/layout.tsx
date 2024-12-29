import ThemeSwitcher from "@/components/ThemeSwitcher";
import UserButton from "@/components/UserButton";
import { LetterLogo } from "@/components/branding";
import { auth } from "@clerk/nextjs/server";
import { Link } from "@nextui-org/react";
import { ReactNode } from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default async function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    const { userId, redirectToSignIn } = auth();
    if (!userId) {
        redirectToSignIn();
    }
    return (
        <div className="flex min-h-[100dvh] w-screen">
            <div
                id="sidebar"
                className="flex min-h-[100dvh] shrink-0 grow-0 flex-col justify-center border-r border-r-background-500 p-4"
            >
                <div className="flex flex-col items-center gap-2">
                    <LetterLogo />
                </div>
                <div className="flex size-full flex-col justify-center gap-2">
                    <Link color="foreground" href="/dashboard">
                        Dashboard
                    </Link>
                    <Link color="foreground" href="/dashboard/profile">
                        Profile
                    </Link>
                </div>
                <UserButton />
            </div>
            <div className="flex min-h-[100dvh] w-full flex-col">
                <nav className="flex w-full items-center p-6">
                    <div className="flex w-1/2 items-center justify-start gap-4">
                        <Breadcrumbs>
                            <BreadcrumbItem>Home</BreadcrumbItem>
                            <BreadcrumbItem>Music</BreadcrumbItem>
                            <BreadcrumbItem>Artist</BreadcrumbItem>
                            <BreadcrumbItem>Album</BreadcrumbItem>
                            <BreadcrumbItem>Song</BreadcrumbItem>
                        </Breadcrumbs>
                    </div>
                    <div className="flex w-1/2 items-center justify-end gap-8">
                        <ThemeSwitcher />
                    </div>
                </nav>
                <main>{children}</main>
            </div>
        </div>
    );
}
