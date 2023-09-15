import type { AppProps } from 'next/app'
import type { Metadata } from "next"
import { HeaderProvider } from '@/contexts/HeaderContext'
import { EpisodePlayerProvider } from '@/contexts/EpisodePlayerContext'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: "Netflix",
  authors: {
    name: "Bruno Carvalho Feitosa",
    url: "https://github.com/BrunoCarvalhoFeitosa",
  },
  description: "Netflix: filmes, seriados e documentários.",
  icons: {
    icon: "/fav.png",
  }
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <HeaderProvider>
      <EpisodePlayerProvider>
        <Component {...pageProps} />
      </EpisodePlayerProvider>
    </HeaderProvider>
  )
}

export default App