import { LanguageProvider } from "./contexts/LanguageContext";
import { RouterProvider, useRouter } from "./contexts/RouterContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

const AppContent = () => {
  const { currentPage } = useRouter();

  return (
    <div className="min-h-screen bg-white">
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
