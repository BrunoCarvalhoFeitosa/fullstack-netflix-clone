import Head from "next/head"
import Header from "@/components/Home/Header"
import Hero from "@/components/Home/Hero"
import Catalogue from "@/components/Home/Catalogue"
import Prices from "@/components/Home/Prices"
import FloatingMenu from "@/components/Home/FloatingMenu"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Home = () => (
  <div className="home">
    <Head>
      <title>Netflix | Assista filmes, séries e documentários em alta qualidade</title>
      <meta name="author" content="Bruno Carvalho Feitosa" />
      <meta name="description" content="Netflix, a maor plataforma de streaming de filmes e séries" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="icon" href="/images/fav.png" sizes="any" />
      <script src="https://www.youtube.com/iframe_api" async />
    </Head>
    <Header />
    <Hero />
    <Catalogue />
    <Prices />
    <FloatingMenu />
  </div>
)

export default Home