import Link from "next/link";

import {Movie} from "@/app/types/movies";
import FavoriteButton from "@/app/components/ui/favoriteButton";

interface card {
   movie: Movie;
   path: string;
   favorite: boolean;
   toggle: (movie: Movie) => void;
}

const Card = ({movie, path, favorite, toggle}: card) => {
    return (
        <div key={movie.id} className="p-2 hover:bg-gray-800 flex justify-between items-center rounded">
            <Link className="text-lg font-semibold hover:text-red-600" href={path}>
                {movie.movie}
            </Link>
            <FavoriteButton isFavorite={favorite} onToggle={() => toggle(movie)} />
        </div>
    );
};

export default Card;