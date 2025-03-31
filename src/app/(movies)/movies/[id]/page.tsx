import { Suspense } from "react"
import { API_URL } from "../../../(home)/page"
import MovieInfo from "@/components/movie-info"
import MovieVideos from "@/components/movie-videos"

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