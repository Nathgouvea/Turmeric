"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Page = "home" | "newyears";

interface RouterContextType {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

// Map hash to pages (for GitHub Pages compatibility)
const getPageFromHash = (hash: string): Page => {
  if (hash === "#/newyears" || hash === "#newyears") {
    return "newyears";
  }
  return "home";
};

// Map pages to hash
const getHashFromPage = (page: Page): string => {
  if (page === "newyears") {
    return "#/newyears";
  }
  return "#/";
};

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  // Initialize page from hash on mount
  useEffect(() => {
    const initialPage = getPageFromHash(window.location.hash);
    setCurrentPage(initialPage);

    // Handle browser back/forward buttons and hash changes
    const handleHashChange = () => {
      const page = getPageFromHash(window.location.hash);
      setCurrentPage(page);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    const hash = getHashFromPage(page);
    window.location.hash = hash;
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (context === undefined) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
};
