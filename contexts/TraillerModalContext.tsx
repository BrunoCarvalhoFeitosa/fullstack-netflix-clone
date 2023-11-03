import React, { createContext, useState, useContext, ReactNode } from "react"

type TraillerModalContextType = {
    traillerModalIsOpen: boolean
    openTraillerModal: () => void
    closeTraillerModal: () => void
    traillerData: any
    setTraillerData: (data: any) => void
}

const TraillerModalContext = createContext<TraillerModalContextType | undefined>(undefined)

type TraillerModalContextProviderProps = {
  children: ReactNode
}

export const TraillerModalProvider: React.FC<TraillerModalContextProviderProps> = ({ children }) => {
  const [traillerModalIsOpen, setTraillerModalIsOpen] = useState<boolean>(false)
  const [traillerData, setTraillerData] = useState([])

  const openTraillerModal = () => {
    setTraillerModalIsOpen(true)
  }

  const closeTraillerModal = () => {
    setTraillerModalIsOpen(false)
  }

  return (
    <TraillerModalContext.Provider
      value={{
        traillerModalIsOpen,
        traillerData,
        setTraillerData,
        openTraillerModal,
        closeTraillerModal,
      }}
    >
      {children}
    </TraillerModalContext.Provider>
  )
}

export const useTraillerModal = (): TraillerModalContextType => {
  const context = useContext(TraillerModalContext)

  if (!context) {
    throw new Error('useTraillerModal must be used')
  }

  return context
}