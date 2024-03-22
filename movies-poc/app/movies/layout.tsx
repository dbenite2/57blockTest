import React from "react";
import Header from "@/app/components/common/header";

export default function HomeLayout({
    children
   }: {children: React.ReactNode}) {
    return (
        <div className="max-h-screen bg-black text-white w-full flex flex-col items-center h-screen overflow-hidden">
            <Header />
            <main className="p-4 w-full max-h-screen">{children}</main>
        </div>
    )
}