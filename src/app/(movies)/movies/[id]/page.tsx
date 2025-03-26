import { API_URL } from "../../../(home)/page"
async function getMovie(id: String) {
    const response = await fetch(`${API_URL}/${id}`)
    return response.json()
}
export default async function MovieDetail(
    { params: { id } }:
        { params: { id: string } }) {

    const movie = await getMovie(id);

    return (
        <div>
            <h1>{movie.title}</h1>
        </div>
    )
}