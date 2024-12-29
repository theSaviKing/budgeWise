import Image from "next/image";
import PhoneMockup from "@/assets/img/phone mockup.png";
import { Button } from "@nextui-org/button";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { LetterLogo } from "@/components/branding";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Link } from "@nextui-org/react";
import UserButton from "@/components/UserButton";

export const metadata: Metadata = {
    title: "A lightweight, functional budgeting app",
};

export default async function Home() {
    return (
        <>
            <nav className="flex items-center p-6">
                <div className="w-1/2">
                    <LetterLogo />
                </div>
                <div className="flex w-1/2 items-center justify-end gap-4">
                    <SignedIn>
                        <UserButton placement="bottom-end" />
                        <Link
                            color="primary"
                            underline="hover"
                            href="/dashboard"
                        >
                            Dashboard
                        </Link>
                    </SignedIn>
                    <SignedOut>
                        <SignUpButton>
                            <Button color="primary">Sign Up</Button>
                        </SignUpButton>
                        <SignInButton mode="modal">
                            <Link underline="hover" className="cursor-pointer">
                                Sign In
                            </Link>
                        </SignInButton>
                    </SignedOut>
                </div>
            </nav>
            <main className="size-full">
                <section className="grid h-[66dvh] grid-cols-3 gap-4 py-8">
                    <div className="col-span-2 flex flex-col justify-center gap-4 px-8">
                        <p className="text-4xl font-bold">
                            Take control of your finances with{" "}
                            <span className="text-emerald-400 dark:text-emerald-300">
                                budgeWise
                            </span>
                            .
                        </p>
                        <p className="text-xl">
                            Effortlessly manage your income, expenses, and
                            savings with our intuitive budgeting app. Stay on
                            top of your financial goals and make smarter
                            decisions.
                        </p>
                        <Button>Get started</Button>
                    </div>
                    <Image
                        src={PhoneMockup}
                        alt="A phone mockup of the budgeWise logo"
                        placeholder="blur"
                        className="m-auto w-40"
                        priority
                    />
                </section>
                <section></section>
                <section></section>
            </main>
        </>
    );
}
