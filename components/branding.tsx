import { Link } from "@nextui-org/react";
import Image from "next/image";
import icon from "@/app/icon.png";

export function LetterLogo() {
    return (
        <Link href="/" className="flex items-center gap-2 text-foreground">
            <Image
                src={icon}
                alt="budgeWise logo on an emerald-colored background"
                className="size-7 rounded-sm"
            />
            <p className="text-2xl font-black">budgeWise</p>
        </Link>
    );
}
