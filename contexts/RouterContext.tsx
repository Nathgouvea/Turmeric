'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Page = 'home' | 'reservations'

interface RouterContextType {
  currentPage: Page
  navigateTo: (page: Page) => void
}

const RouterContext = createContext<RouterContextType | undefined>(undefined)

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const navigateTo = (page: Page) => {
    setCurrentPage(page)
  }

  return (
    <RouterContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </RouterContext.Provider>
  )
}

export const useRouter = () => {
  const context = useContext(RouterContext)
  if (context === undefined) {
    throw new Error('useRouter must be used within a RouterProvider')
  }
  return context
}