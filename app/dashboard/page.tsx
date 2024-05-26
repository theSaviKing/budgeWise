import { Metadata } from "next";
import PaymentCards from "./PaymentCards";
import { auth } from "@clerk/nextjs/server";
import { ReactNode } from "react";
import Accounts from "./Accounts";

export const metadata: Metadata = {
    title: "Dashboard",
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
            <div className="rounded border border-slate-400 p-4">{content}</div>
        </section>
    );
}

export default function Dashboard() {
    const { userId, redirectToSignIn } = auth();
    if (!userId) {
        redirectToSignIn();
    }
    return (
        <>
            <DashSection title="Payment Cards" content={<PaymentCards />} />
            <DashSection title="Accounts" content={<Accounts />} />
        </>
    );
}
