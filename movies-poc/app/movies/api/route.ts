import {Movie} from "@/app/lib/movies";

export async function GET(request:Request) {
    const {searchParams} = new URL(request.url);
    const searchTerm = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '20', 10);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const res = await fetch('https://dummyapi.online/api/movies');
    const raw = await res.json();
    if (searchTerm) {
        const data = raw.filter((movie: Movie) => movie.movie.toLowerCase().includes(searchTerm.toLowerCase()));
        return Response.json({data});
    }

    const data = raw.slice(startIndex, endIndex);

    return Response.json({data});
}
