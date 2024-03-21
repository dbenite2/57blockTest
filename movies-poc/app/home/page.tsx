'use client'

import {useState, useEffect} from "react";
import {useAuth} from "@/contexts/AuthContext";
import {NextPage} from "next";
import {Movie} from "@/app/lib/movies";
import {getAllMovies} from "@/services/moviesServices";
import Link from 'next/link';

interface HomeProps {
    movies: Movie[];
    page: number;
    totalPages: number;
}


const Home: NextPage<HomeProps> = () => {
const [movies, setMovies] = useState<Movie[]>([]);
const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
const {user} = useAuth();
    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`/home/api?page=${page}&limit=20`);
            const {data} = await res.json();
            setMovies([...data]);
            setTotalPages(Math.ceil(100 / 20));
        };

        fetchMovies();
    }, [page]);

    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="overflow-auto h-96">
              {movies.map((movie) => (
                  <div key={movie.id} className="p-4 hover:bg-gray-100 flex justify-between">
                      <Link href={`/movies/${movie.id}`}>
                          {movie.movie}
                      </Link>
                      <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={(e) => e}
                      >
                          Favorite
                      </button>
                  </div>
              ))}
          </div>
          <div style={{marginTop: '20px'}}>
              <button onClick={handlePreviousPage} disabled={page <= 1}>
                  Previous
              </button>
              {Array.from({length: totalPages}, (_, i) => (
                  <button
                      key={i}
                      onClick={() => setPage(i + 1)}
                      style={{fontWeight: page === i + 1 ? 'bold' : 'normal'}}
                  >
                      {i + 1}
                  </button>
              ))}
              <button onClick={handleNextPage} disabled={page >= totalPages}>
                  Next
              </button>
          </div>
      </main>
  );
}


export default Home;