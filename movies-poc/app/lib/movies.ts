export interface Movie {
    id: number;
    movie: string;
    rating: number;
    image: string;
    imdb_url: string;
}



// const initialMovies: Movie[] = [
//     { id: 1, title: "The Shawshank Redemption", year: 1994 },
//     { id: 2, title: "The Godfather", year: 1972 },
//     { id: 3, title: "The Dark Knight", year: 2008 },
//     { id: 4, title: "The Godfather Part II", year: 1974 },
//     { id: 5, title: "12 Angry Men", year: 1957 },
// ]
//
// const moreMovies: Movie[] = [
//     { id: 6, title: "Schindler's List", year: 1993 },
//     { id: 7, title: "Pulp Fiction", year: 1994 },
//     { id: 8, title: "The Lord of the Rings: The Return of the King", year: 2003 },
//     { id: 9, title: "The Good, the Bad and the Ugly", year: 1966 },
//     { id: 10, title: "Fight Club", year: 1999 },
// ]
//
// export const getInitialMovies = () => initialMovies;
// export const getMoreMovies = () => moreMovies;
//
// export const getMovieById = (id:number): Movie | undefined => {
//     return [...initialMovies, ...moreMovies].find(movie => movie.id === id);
// }