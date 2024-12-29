import { currentUser } from "@clerk/nextjs/server";
import { Image } from "@nextui-org/react";
import { Metadata } from "next";
import Settings from "./Settings";

export const metadata: Metadata = {
    title: "User Profile",
};

export default async function Profile() {
    const user = (await currentUser())!;

    return (
        <div className="flex flex-col items-center gap-16 p-4">
            <div className="flex items-center justify-center gap-8 px-8">
                <Image
                    src={user.imageUrl}
                    alt={user.fullName!}
                    width={1000}
                    height={1000}
                    className="size-20 rounded-full outline outline-2 outline-offset-8 outline-primary"
                    isBlurred
                />
                <h1 className="text-2xl font-bold">{user.fullName}</h1>
            </div>

            <Settings />
        </div>
    );
}
