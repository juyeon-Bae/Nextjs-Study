import { Suspense } from "react"
import { API_URL } from "../../../(home)/page"
import MovieInfo from "@/components/movie-info"
import MovieVideos from "@/components/movie-videos"
async function getMovie(id: String) {
    await new Promise((resolve) => setTimeout(resolve, 10))
    const response = await fetch(`${API_URL}/${id}`)
    return response.json()
}

async function getVideos(id: string) {
    console.log(`fetching movies: ${Date.now()}`)
    await new Promise((resolve) => setTimeout(resolve, 10))
    const response = await fetch(`${API_URL}/${id}/videos`)
    return response.json()
}

export default async function MovieDetail(
    { params: { id } }:
        { params: { id: string } }) {

    return (
        <div>
            <h3>Movie detail page</h3>
            {/* suspense : component가 await되는 동안 표시할 메세지를 render할 수 있게 해줌, 로딩상태 분리 */}
            <Suspense fallback={<h1>loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>

            <Suspense fallback={<h1>loading movie video</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}