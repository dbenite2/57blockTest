'use client'

import {useState, useEffect} from "react";
import {useAuth} from "@/contexts/AuthContext";
import {NextPage} from "next";
import {Movie} from "@/app/lib/movies";
import {addFavorite, isFavorite} from "@/utils/favorites/util";

import TypeaheadInput from "@/app/components/common/typeAheadInput";
import Card from "@/app/components/common/card";
import PageSelector from "@/app/components/common/pageSelector";
import Spinner from "@/app/components/ui/spinner";

const Home: NextPage = () => {
const [movies, setMovies] = useState<Movie[]>([]);
const [page, setPage] = useState(1);
const [favoritesStatus, setFavoritesStatus] = useState<{ [key: number]: boolean }>({});
const [totalPages, setTotalPages] = useState<number>(0);
const [loading, setLoading] = useState<boolean>(false);
const {user} = useAuth();
useEffect(() => {
    const fetchMovies = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/movies/api?page=${page}&limit=20`);
            const {data} = await res.json();
            setMovies([...data]);
            setTotalPages(Math.ceil(100 / 20));
            updateFavoriteStatus([...data])
        } catch (error) {

        } finally {
             setLoading(false);
        }
    };

    fetchMovies();
}, [page]);

const updateFavoriteStatus = (movies: Movie[]) => {
    const status = movies.reduce((acc, movie) => {
        acc[movie.id] = isFavorite(movie.id);
        return acc;
    }, {} as {[key: number]: boolean});
    setFavoritesStatus(status);
}
const handleAddFavorite = (movie: Movie) => {
    addFavorite(movie);
    setFavoritesStatus((prevStatus) => ({
        ...prevStatus,
        [movie.id]: !prevStatus[movie.id]
    }))
}

  return (
      <main className="flex flex-col p-4 bg-black text-white min-h-[860px]">
          <TypeaheadInput/>
          {loading ? <Spinner/> : <div className="overflow-auto mt-4 h-[700px]">
              {movies.map((movie) => (
                  <Card key={movie.id} movie={movie} path={`/movies/items/${movie.id}`}
                        favorite={favoritesStatus[movie.id]} toggle={handleAddFavorite}/>
              ))}
          </div>}
          <PageSelector page={page} totalPages={totalPages} onPageChange={setPage}/>
      </main>
  );
}

export default Home;