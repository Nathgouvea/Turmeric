import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { RouterProvider, useRouter } from "./contexts/RouterContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NewYearsPage from "./pages/NewYearsPage";
import NewYearsBanner from "./components/NewYearsBanner";
import { useEffect } from "react";

const AppContent = () => {
  const { currentPage } = useRouter();
  const { direction } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = direction === "rtl" ? "ar" : "en";
  }, [direction]);

  // New Year's page has its own layout without main Navigation/Footer
  if (currentPage === "newyears") {
    return <NewYearsPage />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* New Year's Banner */}
      <NewYearsBanner />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>{currentPage === "home" && <HomePage />}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </LanguageProvider>
  );
}
