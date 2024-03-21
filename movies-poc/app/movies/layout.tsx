import Link from 'next/link';
import React from "react";
export default function HomeLayout({
                                       children
                                   }: {children: React.ReactNode}) {
    return (
        <>
            <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
                <Link className="px-3 py-2 hover:bg-gray-700 rounded" href="/movies/home">
                    Home
                </Link>
                <Link href="/movies/favorites" className="px-3 py-2 hover:bg-gray-700 rounded">
                    Favorites
                </Link>
            </nav>
            <main>{children}</main>
        </>
    )
}