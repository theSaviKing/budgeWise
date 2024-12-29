import { Metadata } from "next";
import PaymentCards from "./PaymentCards";
import { auth } from "@clerk/nextjs/server";
import { ReactNode, Suspense } from "react";
import Accounts from "./Accounts";
import { Spinner } from "@nextui-org/react";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "See all your money at a glance",
};

function DashSection({
    title,
    content,
}: {
    title: string;
    content: ReactNode;
}) {
    return (
        <section className="flex flex-col gap-4 px-4 py-6">
            <h2 className="text-3xl font-bold">{title}</h2>
            <div className="rounded border border-background-400 p-4">
                <Suspense fallback={<Spinner label={`Loading ${title}`} />}>
                    {content}
                </Suspense>
            </div>
        </section>
    );
}

export default function Dashboard() {
    return (
        <>
            <DashSection title="Payment Cards" content={<PaymentCards />} />
            <DashSection title="Accounts" content={<Accounts />} />
        </>
    );
}
