export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get('id');
    const res = await fetch(`https://dummyapi.online/api/movies/${id}`);

    const data = await res.json();
    return Response.json({data});
}