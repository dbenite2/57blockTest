'use client';

import React, { useState, useEffect } from 'react';
import { getFavorites } from '@/utils/favorites/util';
import { Movie } from '@/app/lib/movies';
import Link from 'next/link';

const Favorites: React.FC = () => {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    useEffect(() => {
        setFavorites(getFavorites());
    }, []);


    return (
        <div className="overflow-auto bg-black text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>
            <div className="favorites-list overflow-auto h-[600px] space-y-4">
                {favorites.length > 0 ? (
                    favorites.map((movie) => (
                        <div key={movie.id}
                             className="favorite-item flex items-center justify-between p-4 bg-gray-800 rounded hover:bg-gray-700 transition duration-300 ease-in-out">
                            <Link className="text-lg font-semibold hover:text-red-600 transition duration-300 ease-in-out" href={`/movies/items/${movie.id}`}>
                                {movie.movie}
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No favorites added yet.</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;