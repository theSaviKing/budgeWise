"use client";

import { SignOutButton, useUser } from "@clerk/nextjs";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import {
    Avatar,
    Button,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Card,
    CardHeader,
    CardBody,
    Divider,
    User,
    PopoverProps,
} from "@nextui-org/react";
import { useState } from "react";

export default function UserButton({
    placement = "top-start",
}: {
    placement?: PopoverProps["placement"];
}) {
    const [isOpen, setOpen] = useState(false);
    const { user } = useUser();
    const topPlacement = placement.includes("top");
    if (!user) {
        return;
    } else {
        return (
            <Popover
                placement={placement}
                isOpen={isOpen}
                onOpenChange={setOpen}
            >
                <PopoverTrigger>
                    <Button
                        variant="light"
                        radius="sm"
                        className="flex items-center justify-between gap-2 bg-background-800 p-2 py-6"
                    >
                        <div className="flex items-center gap-1">
                            <Avatar src={user.imageUrl} size="sm" />
                            <p className="font-bold">{user.firstName}</p>
                        </div>
                        <ChevronUpIcon
                            className={`size-5 ${topPlacement ? (isOpen ? "rotate-180" : "rotate-0") : isOpen ? "rotate-0" : "rotate-180"} transition`}
                        />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                    <Card>
                        <CardHeader>
                            <User
                                name={user.fullName}
                                description={
                                    user.emailAddresses[0].emailAddress
                                }
                                avatarProps={{
                                    src: user.imageUrl,
                                }}
                            />
                        </CardHeader>
                        <Divider />
                        <CardBody className="p-0">
                            <Button radius="none" variant="light">
                                Manage account
                            </Button>
                            <Divider />
                            <SignOutButton>
                                <Button
                                    radius="none"
                                    variant="light"
                                    color="danger"
                                >
                                    Sign out
                                </Button>
                            </SignOutButton>
                        </CardBody>
                    </Card>
                </PopoverContent>
            </Popover>
        );
    }
}
