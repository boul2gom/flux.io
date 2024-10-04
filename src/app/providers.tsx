"use client";

import React from "react";
import {useRouter} from "next/navigation";
import {NextUIProvider} from "@nextui-org/react";

export default function Providers({ children }: Readonly<{ children: React.ReactNode; }>) {
    const next_router = useRouter();

    return (
        <NextUIProvider navigate={next_router.push}>
            { children }
        </NextUIProvider>
    )
}