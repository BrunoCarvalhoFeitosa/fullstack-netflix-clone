import React, { createContext, useState, useContext, ReactNode } from "react"

type HeaderContextType = {
    headerOptionsOpen: boolean;
    openHeaderOptions: () => void;
    closeHeaderOptions: () => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

type HeaderContextProviderProps = {
  children: ReactNode;
}

export const HeaderProvider: React.FC<HeaderContextProviderProps> = ({ children }) => {
  const [headerOptionsOpen, setHeaderOptionsOpen] = useState<boolean>(false)

  const openHeaderOptions = () => {
    setHeaderOptionsOpen(true)
  }

  const closeHeaderOptions = () => {
    setHeaderOptionsOpen(false)
  }

  return (
    <HeaderContext.Provider
      value={{
        headerOptionsOpen,
        openHeaderOptions,
        closeHeaderOptions,
      }}
    >
      {children}
    </HeaderContext.Provider>
  )
}

export const useHeader = (): HeaderContextType => {
  const context = useContext(HeaderContext)

  if (!context) {
    throw new Error('useHeader must be used within HeaderProvider')
  }

  return context
}