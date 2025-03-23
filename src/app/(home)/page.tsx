//fetch 함수
//server components -> data 직접 서버에서 비동기적으로 가져오기에 useState, useEffect필요x
async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000))//getmovies 함수가 여기에서 5초동안 멈추고(로딩) 진행
  const response = await fetch(`${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`)
  const json = await response.json()
  return json
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div> {JSON.stringify(movies)}</div>
  )
}