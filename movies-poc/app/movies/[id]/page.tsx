'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import {Movie, getMovieById} from "@/app/lib/movies";
import React from 'react';

const MovieDetailPage = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const movie: Movie | undefined = getMovieById(Number(params.id));

    if (!movie) {
        return <p>Movie not found</p>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>Year: {movie.year}</p>
            {/* Add more movie details here */}
            <button onClick={() => router.back()}>Go Back</button>
        </div>
    );
};

export default MovieDetailPage;