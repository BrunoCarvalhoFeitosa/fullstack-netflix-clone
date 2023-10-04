import type { AppProps } from 'next/app'
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { HeaderProvider } from '@/contexts/HeaderContext'
import { EpisodePlayerProvider } from '@/contexts/EpisodePlayerContext'
import { TraillerModalProvider } from '@/contexts/TraillerModalContext'
import '@/styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "Netflix",
  authors: {
    name: "Bruno Carvalho Feitosa",
    url: "https://github.com/BrunoCarvalhoFeitosa",
  },
  description: "Netflix: filmes, seriados e documentários.",
  icons: {
    icon: "/fav.png",
  },
  themeColor: "#FF0000",

}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <HeaderProvider>
      <EpisodePlayerProvider>
        <TraillerModalProvider>
          <main className={montserrat.className}>
            <Component {...pageProps} />
          </main>
        </TraillerModalProvider>
      </EpisodePlayerProvider>
    </HeaderProvider>
  )
}

export default App