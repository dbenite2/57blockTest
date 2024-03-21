
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
