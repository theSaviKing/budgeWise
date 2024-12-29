"use client";

import { useUser } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs/server";
import { Button, Input } from "@nextui-org/react";
import { ReactNode, useEffect, useState } from "react";
import { produce } from "immer";

function Row({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div className="grid grid-cols-4 justify-start p-4">
            <p className="uppercase tracking-widest text-background-400">
                {title}
            </p>
            <div className="col-span-3">{children}</div>
        </div>
    );
}

export default function Settings() {
    const { user } = useUser();

    const [name, setName] = useState({
        firstName: "",
        lastName: "",
    });

    return (
        <div className="grid w-5/6 grid-cols-1 divide-y-1 divide-background-700 rounded-lg bg-background-900">
            <Row title="Profile Name">
                <div className="flex items-center gap-3">
                    <Input
                        label="First name"
                        value={name.firstName}
                        onValueChange={(v) =>
                            setName({ firstName: v, lastName: name.lastName })
                        }
                        color="primary"
                        variant="bordered"
                    />
                    <Input
                        label="Last name"
                        value={name.lastName}
                        onValueChange={(v) =>
                            setName({ firstName: name.firstName, lastName: v })
                        }
                        color="primary"
                        variant="bordered"
                    />
                    <Button color="primary" variant="bordered">
                        Update
                    </Button>
                </div>
            </Row>
        </div>
    );
}
