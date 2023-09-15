import Head from "next/head"
import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import useCurrentUser from "@/hooks/useCurrentUser"
import useFilmsList from "@/hooks/useFilmsList"
import useSeriesList from "@/hooks/useSeriesList"
import Header from "@/components/Application/Header"
import HeaderOptions from "@/components/Application/HeaderOptions"
import Billboard from "@/components/Application/Billboard"
import FilmsList from "@/components/Application/Films/FilmsList"
import SeriesList from "@/components/Application/Series/SeriesList"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

const Application = () => {
  const { data } = useCurrentUser()
  const { data: films = [] } = useFilmsList()
  const { data: series = [] } = useSeriesList()

  return (
    <div className="application">
      <Head>
        <title>Netflix | Assista filmes, séries e documentários</title>
        <meta name="author" content="Bruno Carvalho Feitosa" />
        <meta name="description" content="Netflix, assista trailers, filmes e séries" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/images/fav.png" sizes="any" />
      </Head>
      <main>
        <Header data={data} />
        <HeaderOptions />
        <Billboard />
        <SeriesList title="Seriados" series={series} />
        <FilmsList title="Filmes" films={films} />
      </main>
    </div>
  )
}

export default Application