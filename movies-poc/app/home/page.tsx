'use client'

import {useState} from "react";
import {useAuth} from "@/contexts/AuthContext";
import {NextPage} from "next";
import {Movie, getInitialMovies, getMoreMovies} from "@/app/lib/movies";


const Home: NextPage = () => {
  const {user} = useAuth();
  const [movies, setMovies] = useState<Movie[]>(getInitialMovies);
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const handleFavorite = (id: number) => {
    const getMovie = movies.filter(movie => movie.id === id)[0];
    setFavorites((prevFavorites => [...prevFavorites, getMovie]))
  }
  const handleLoadMore = () => {
    const moreMovies = getMoreMovies();
    setMovies((prevMovies => [...prevMovies, ...moreMovies]));
  };

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="overflow-auto h-96">
          {movies.map((movie) => (
              <div key={movie.id} className="p-4 hover:bg-gray-100 flex justify-between">
                {movie.title}
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleFavorite(movie.id)}
                >
                  Favorite
                </button>
              </div>
          ))}
        </div>
        <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-4"
            onClick={handleLoadMore}
        >
          Load More
        </button>
      </main>
  );
}

export default Home;