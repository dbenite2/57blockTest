import Link from 'next/link';
export default function Header() {
    return (<header className="w-full">
        <nav>
            <ul className="flex items-center w-full p-4 bg-gray-900 text-white">
                <li>
                    <Link className="px-3 py-2 hover:bg-gray-700 rounded transition duration-300 ease-in-out"
                          href="/movies/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/movies/favorites"
                          className="px-3 py-2 hover:bg-gray-700 rounded transition duration-300 ease-in-out">
                        Favorites
                    </Link>
                </li>
            </ul>
        </nav>
    </header>);
}