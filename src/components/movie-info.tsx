//sever component
import { API_URL } from "@/app/(home)/page"
async function getMovie(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 10));
    const response = await fetch(`${API_URL}/${id}`);

    console.log("Response Status:", response.status); // HTTP 상태 코드 확인
    const text = await response.text();
    console.log("Response Body:", text); // 응답 내용 확인

    try {
        return JSON.parse(text);
    } catch (error) {
        console.error("JSON 파싱 오류:", error);
        return null; // 오류 발생 시 null 반환
    }
}


export default async function MovieInfo(id: string) {
    const movie = await getMovie(id);
    return (
        <div>
            <h6>{JSON.stringify(movie)}</h6>
        </div>
    )
}