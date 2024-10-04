import type { Metadata } from "next";
import React from "react";
import {NextUIProvider} from "@nextui-org/react";

import "./globals.css";

import { Montserrat } from "next/font/google";
import Providers from "@/app/providers";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ['latin'],
  display: 'swap',

  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Flux.io",
  description: "A modern, advanced download manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="w-screen h-screen bg-background text-white font-montserrat font-normal">
        <Providers>
            { children }
        </Providers>
      </body>
    </html>
  );
}
