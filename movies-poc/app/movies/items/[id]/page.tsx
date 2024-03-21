'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import {Movie} from "@/app/lib/movies";
import React, {useEffect, useState} from 'react';

const MovieDetailPage = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const [movieData, setMovieData] = useState<Movie>();
    useEffect(() => {
        const getMovieData = async () => {
            const res = await fetch(`/movies/items/api?id=${params.id}`);
            const {data} = await res.json();
            setMovieData(data);
        }
        getMovieData();
    },[params.id]);

    if (!movieData) {
        return <p>Movie not found</p>;
    }

    return (
        <div>
            <h1>{movieData.movie}</h1>
            <p>Year: {movieData.rating}</p>
        </div>
    );
};

export default MovieDetailPage;