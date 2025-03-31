//sever component
import { API_URL } from "@/app/(home)/page"
async function getVideos(id: string) {
    //console.log(`fetching movies: ${Date.now()}`)
    await new Promise((resolve) => setTimeout(resolve, 10))
    const response = await fetch(`${API_URL}/${id}/videos`)
    if (!response.ok) {
        throw new Error(`API 요청 실패: ${response.status} ${response.statusText}`);
    }

    return response.json()
}
export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>
}

