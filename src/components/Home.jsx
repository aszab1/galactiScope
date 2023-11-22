import { useLoaderData } from "react-router-dom"

export default function Home() {
  const picOfDay = useLoaderData()
  const { copyright, date, explanation, url } = picOfDay


  return (
    <main style={{backgroundImage: `url(${url})`}}>

    </main>

  )
}