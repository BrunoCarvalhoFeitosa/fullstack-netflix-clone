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
      <title>Netflix | Assista filmes, séries e documentários</title>
      <meta name="author" content="Bruno Carvalho Feitosa" />
      <meta name="description" content="Netflix, a maor plataforma de streaming de filmes e séries" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      <link rel="icon" href="/images/fav.png" sizes="any" />
      <script src="https://www.youtube.com/iframe_api"></script>
    </Head>
    <Header />
    <Hero />
    <Catalogue />
    <Prices />
    <FloatingMenu />
  </div>
)

export default Home