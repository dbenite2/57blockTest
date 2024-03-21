import {Movie} from "@/app/lib/movies";

const FAVORITES_KEY = 'favoriteMovies'

export const getFavorites = (): Movie[] => {
    const favoritesJson = localStorage.getItem(FAVORITES_KEY);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
};

// Add a movie to favorites
export const addFavorite = (movie: Movie): void => {
    const favorites = getFavorites();
    if (!favorites.some(fav => fav.id === movie.id)) {
        favorites.push(movie);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
};

// Remove a movie from favorites
export const removeFavorite = (movieId: number): void => {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter(fav => fav.id !== movieId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
};

// Check if a movie is in favorites
export const isFavorite = (movieId: number): boolean => {
    const favorites = getFavorites();
    return favorites.some(fav => fav.id === movieId);
};