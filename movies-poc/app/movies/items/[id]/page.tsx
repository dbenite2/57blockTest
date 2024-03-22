'use client'

import { useRouter } from 'next/navigation';
import {Movie} from "@/app/types/movies";
import React, {useEffect, useState} from 'react';
import Spinner from "@/app/components/ui/spinner";

const MovieDetailPage = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const [movieData, setMovieData] = useState<Movie>();
    const [loading, setLoading] = useState<Boolean>(false);

    useEffect(() => {
        const getMovieData = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/movies/items/api?id=${params.id}`);
                const {data} = await res.json();
                setMovieData(data);
            } catch (error) {

            } finally {
                setLoading(false);
            }
        };
        getMovieData();
    },[params.id]);

    return (
        <div className="min-h-screen flex flex-col items-center pt-12">
            {loading ? <Spinner/> : (
                <>
                    <h1 className="text-4xl font-bold">{movieData?.movie}</h1>
                    <div className="mt-8">
                        <p className="text-lg"><span className="font-bold">More info:</span> {movieData?.imdb_url}</p>
                        <p className="text-lg"><span className="font-bold">Movie Rating:</span> {movieData?.rating}</p>
                    </div>
                </>
            )
            }

            <div className="mt-8">
                <button onClick={() => router.back()}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default MovieDetailPage;