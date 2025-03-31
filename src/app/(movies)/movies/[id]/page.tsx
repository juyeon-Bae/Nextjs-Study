import { Suspense } from "react"
import { API_URL } from "../../../(home)/page"
import MovieInfo from "@/components/movie-info"
import MovieVideos from "@/components/movie-videos"

export default async function MovieDetail({ params }: { params: { id: string } }) {
    //비동기적으로 params.id 가져오기
    const { id } = await params;
    return (
        <div>
            <h2>Movie detail page</h2>
            {/* suspense : component가 await되는 동안 표시할 메세지를 render할 수 있게 해줌, 로딩상태 분리 */}
            <h3>Movie Info Here!</h3>
            <Suspense fallback={<h1>loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>

            <h3>Movie Video Here!</h3>
            <Suspense fallback={<h1>loading movie video</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}