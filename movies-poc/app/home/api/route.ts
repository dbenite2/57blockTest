
export async function GET(request:Request) {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = parseInt(url.searchParams.get('limit') || '20', 10);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const res = await fetch('https://dummyapi.online/api/movies');
    const raw = await res.json();

    const data = raw.slice(startIndex, endIndex);

    return Response.json({data});
}

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         // Fetch all movies from the external API
//         const response = await fetch('https://dummyapi.online/api/movies');
//         const allMovies = await response.json();
//
//         // Extract page and limit from query parameters
//         const page = parseInt(req.query.page as string) || 1;
//         const limit = parseInt(req.query.limit as string) || 20; // Default limit
//         const startIndex = (page - 1) * limit;
//         const endIndex = startIndex + limit;
//
//         // Paginate movies
//         const paginatedMovies = allMovies.slice(startIndex, endIndex);
//
//         // Send paginated movies to client
//         res.status(200).json({ data: paginatedMovies, page, limit, total: allMovies.length });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error fetching movies' });
//     }
// }

// export const getAllMovies = async (): Promise<Movie[]> => {
//     const response = await fetch('https://dummyapi.online/api/movies');
//     if (!response.ok) {
//         throw new Error('Failed to fetch movies');
//     }
//     const data = await response.json();
//     return data;
// }
//
// export const getMovieData = async (id: number): Promise<Movie> => {
//     const response = await fetch(`https://dummyapi.online/api/movies/${id}`)
//     if (!response.ok) {
//         throw new Error('Failed to fetch movies');
//     }
//     const data = await response.json();
//     return data;
// }