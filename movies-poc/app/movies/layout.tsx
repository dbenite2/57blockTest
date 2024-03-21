import Link from 'next/link';
import React from "react";
export default function HomeLayout({
                                       children
                                   }: {children: React.ReactNode}) {
    return (
        <div className="max-h-screen bg-black text-white w-full flex flex-col items-center h-screen overflow-hidden">
            <nav className="flex items-center w-full p-4 bg-gray-900 text-white">
                <Link className="px-3 py-2 hover:bg-gray-700 rounded transition duration-300 ease-in-out" href="/movies/home">
                    Home
                </Link>
                <Link href="/movies/favorites" className="px-3 py-2 hover:bg-gray-700 rounded transition duration-300 ease-in-out">
                    Favorites
                </Link>
            </nav>
            <main className="p-4 w-full max-h-screen">{children}</main>
        </div>
    )
}