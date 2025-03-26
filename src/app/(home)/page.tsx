import Link from "next/link";

//fetch 함수
//server components -> data 직접 서버에서 비동기적으로 가져오기에 useState, useEffect필요x
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"
async function getMovies() {
  //await new Promise((resolve) => setTimeout(resolve, 1000))//getmovies 함수가 여기에서 1초동안 멈추고(로딩) 진행
  const response = await fetch(API_URL)
  const json = await response.json()
  return json
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map(movie => <li key={movie.id}><Link href={
        `/movies/${movie.id}`}>{movie.title}
      </Link></li>)}
    </div>
  )
}
