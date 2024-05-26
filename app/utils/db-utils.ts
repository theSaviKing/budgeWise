import prisma from "@/db";
import { auth } from "@clerk/nextjs/server";

const { userId } = auth();

export async function getPaymentCards() {
    return await prisma.paymentCard.findMany({
        where: {
            userId: userId!,
        },
    });
}

export async function getAccounts() {
    return await prisma.account.findMany({
        where: {
            userId: userId!,
        },
    });
}
