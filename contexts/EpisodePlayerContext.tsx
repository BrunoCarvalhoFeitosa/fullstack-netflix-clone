import React, { createContext, useState, useContext, ReactNode } from "react"

type EpisodePlayerContextType = {
  episodePlayerLightboxOpen: boolean;
  openEpisodePlayerOptions: () => void;
  closeEpisodePlayerOptions: () => void;
  trailerLink: string;
  setTrailerLink: (link: string) => void;
}

const EpisodePlayerContext = createContext<EpisodePlayerContextType | undefined>(undefined)

type EpisodePlayerContextProviderProps = {
  children: ReactNode;
}

export const EpisodePlayerProvider: React.FC<EpisodePlayerContextProviderProps> = ({ children }) => {
  const [episodePlayerLightboxOpen, setEpisodePlayerOptionsOpen] = useState<boolean>(false)
  const [trailerLink, setTrailerLink] = useState<string>("")

  const openEpisodePlayerOptions = () => {
    setEpisodePlayerOptionsOpen(true)
  }

  const closeEpisodePlayerOptions = () => {
    setEpisodePlayerOptionsOpen(false)
  }

  return (
    <EpisodePlayerContext.Provider
      value={{
        episodePlayerLightboxOpen,
        openEpisodePlayerOptions,
        closeEpisodePlayerOptions,
        trailerLink,
        setTrailerLink,
      }}
    >
      {children}
    </EpisodePlayerContext.Provider>
  )
}

export const useEpisodePlayer = (): EpisodePlayerContextType => {
  const context = useContext(EpisodePlayerContext)

  if (!context) {
    throw new Error('useEpisodePlayer must be used within EpisodePlayerProvider')
  }

  return context
}