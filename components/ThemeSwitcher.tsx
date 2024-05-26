"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import {
    ComputerDesktopIcon,
    MoonIcon,
    SunIcon,
} from "@heroicons/react/24/outline";

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    console.log(theme);

    return (
        <Select
            onChange={(e) => setTheme(e.target.value || theme!)}
            className="w-28"
            size="sm"
            variant="flat"
            selectedKeys={[theme!]}
            startContent={
                {
                    system: <ComputerDesktopIcon className="size-5" />,
                    dark: <MoonIcon className="size-5" />,
                    light: <SunIcon className="size-5" />,
                }[theme!]
            }
        >
            <SelectItem key="system" value="system">
                System
            </SelectItem>
            <SelectItem key="dark" value="dark">
                Dark
            </SelectItem>
            <SelectItem key="light" value="light">
                Light
            </SelectItem>
        </Select>
    );
}
