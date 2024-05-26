export async function onRequestPost(context) {
    const ps = context.env.CHESSELO_DB.prepare('SELECT * from matches');
    const data = await ps.all();

    return Response.json(data);
}