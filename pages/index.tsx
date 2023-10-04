import Head from "next/head"
import Header from "@/components/Home/Header"
import Hero from "@/components/Home/Hero"
import Catalogue from "@/components/Home/Catalogue"
import Testimonials from "@/components/Home/Testimonials"
import Prices from "@/components/Home/Prices"
import DownloadApp from "@/components/Home/DownloadApp"
import Footer from "@/components/Home/Footer"
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      <script src="https://www.youtube.com/iframe_api" async />
    </Head>
    <Header />
    <Hero />
    <Catalogue />
    <DownloadApp />
    <Testimonials />
    <Prices />
    <Footer />
    <FloatingMenu />
  </div>
)

export default Home