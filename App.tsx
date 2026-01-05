import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";

const AppContent = () => {
  const { direction } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = direction === "rtl" ? "ar" : "en";
  }, [direction]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <HomePage />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
