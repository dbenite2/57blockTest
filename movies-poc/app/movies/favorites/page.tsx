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
        <div className="favorites-container">
            <h2>Your Favorites</h2>
            <div className="favorites-list">
                {favorites.length > 0 ? (
                    favorites.map((movie) => (
                        <div key={movie.id} className="favorite-item">
                            <Link href={`/movies/${movie.id}`}>
                                {movie.movie}
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No favorites added yet.</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;