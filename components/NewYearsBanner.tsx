"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Sparkles, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "../contexts/RouterContext";
import { useLanguage } from "../contexts/LanguageContext";

// Confetti Component for Popup
const PopupConfetti = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    delay: number;
    duration: number;
    color: string;
    size: number;
  }>>([]);

  useEffect(() => {
    const colors = ['#e0aa22', '#ffffff', '#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1'];
    const newParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 4 + Math.random() * 8,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[101] overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          initial={{
            top: -20,
            left: `${particle.x}%`,
            rotate: 0,
            opacity: 1
          }}
          animate={{
            top: '110%',
            rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
            opacity: [1, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: Math.random() * 2
          }}
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
          }}
        />
      ))}
    </div>
  );
};

const NewYearsBanner = () => {
  const { navigateTo } = useRouter();
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownInitialPopup, setHasShownInitialPopup] = useState(false);

  useEffect(() => {
    // Check if user has closed the banner recently (within 1 hour for testing, 24 hours in production)
    const bannerClosed = localStorage.getItem("nyeBannerClosed");
    if (bannerClosed) {
      const timeSinceClosed = Date.now() - parseInt(bannerClosed);
      if (timeSinceClosed < 1 * 60 * 60 * 1000) { // 1 hour
        setIsVisible(false);
      }
    }

    // Check if user has closed the popup recently (within 1 hour for testing, 24 hours in production)
    const popupClosed = localStorage.getItem("nyePopupClosed");
    if (popupClosed) {
      const timeSinceClosed = Date.now() - parseInt(popupClosed);
      if (timeSinceClosed < 1 * 60 * 60 * 1000) { // 1 hour
        return; // Don't show popup
      }
    }

    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
      setHasShownInitialPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Show popup when language changes (after initial load)
  useEffect(() => {
    if (hasShownInitialPopup) {
      setShowPopup(true);
      setIsVisible(true);
    }
  }, [language]);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem("nyePopupClosed", Date.now().toString());
  };

  const handleCloseBanner = () => {
    setIsVisible(false);
    localStorage.setItem("nyeBannerClosed", Date.now().toString());
    // Dispatch custom event for Navigation to listen to
    window.dispatchEvent(new CustomEvent("nyeBannerClosed"));
  };

  const handleNavigateToNYE = () => {
    navigateTo("newyears");
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Top Banner - Fixed at top */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
          >
            {/* Decorative sparkles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1 left-10 w-1 h-1 bg-primary-gold rounded-full animate-ping"></div>
              <div className="absolute top-2 right-20 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
              <div className="absolute bottom-1 left-1/3 w-1 h-1 bg-primary-gold rounded-full animate-ping delay-700"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-4 flex-1">
                <div className="hidden sm:flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary-gold animate-pulse" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="font-semibold text-sm sm:text-base">
                    {t("newyears.banner.title")}
                  </span>
                  <span className="text-primary-gold font-bold text-lg sm:text-xl">
                    49€
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm">
                    {t("newyears.banner.courses")}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  className="bg-primary-gold hover:bg-yellow-600 text-white text-xs sm:text-sm px-3 sm:px-4"
                  onClick={handleNavigateToNYE}
                >
                  <span className="hidden sm:inline">{t("newyears.banner.reserveNow")}</span>
                  <span className="sm:hidden">{t("newyears.banner.book")}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <button
                  onClick={handleCloseBanner}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  aria-label="Close banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confetti for Popup */}
      {showPopup && <PopupConfetti />}

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={handleClosePopup}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleClosePopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20"
                aria-label="Close popup"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header with decorations */}
              <div className="relative pt-10 pb-4 px-6 text-center">
                {/* Decorative elements */}
                <div className="absolute top-4 left-8 w-2 h-2 bg-primary-gold rounded-full animate-ping"></div>
                <div className="absolute top-8 right-12 w-2 h-2 bg-white rounded-full animate-ping delay-500"></div>
                <div className="absolute top-12 left-16 w-1.5 h-1.5 bg-primary-gold rounded-full animate-ping delay-300"></div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-primary-gold/20 border border-primary-gold/40 rounded-full px-4 py-1 mb-4"
                >
                  <Sparkles className="w-4 h-4 text-primary-gold" />
                  <span className="text-primary-gold text-sm font-semibold">
                    2026
                  </span>
                  <Sparkles className="w-4 h-4 text-primary-gold" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {t("newyears.hero.title")}
                </h2>
                <p className="font-great-vibes text-3xl text-primary-gold">
                  {t("newyears.banner.dinnerPackage")}
                </p>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                {/* Price */}
                <div className="text-center mb-6">
                  <div className="inline-block bg-primary-gold/10 border border-primary-gold/30 rounded-xl px-6 py-3">
                    <span className="text-5xl font-bold text-primary-gold">
                      49€
                    </span>
                    <span className="text-gray-400 ml-2">{t("newyears.banner.perPerson")}</span>
                  </div>
                  <p className="text-gray-400 mt-2 text-sm">
                    {t("newyears.banner.includes")}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                    <Calendar className="w-5 h-5 text-primary-gold mx-auto mb-1" />
                    <p className="text-white text-sm font-medium">
                      {t("newyears.banner.date")}
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                    <span className="text-2xl">🍽️</span>
                    <p className="text-white text-sm font-medium">{t("newyears.banner.fourCourses")}</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button
                    className="w-full bg-primary-gold hover:bg-yellow-600 text-white py-6 text-lg font-medium"
                    onClick={handleNavigateToNYE}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {t("newyears.banner.viewMenu")}
                  </Button>

                  <div className="flex gap-3">
                    <a
                      href="tel:+351222086926"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{t("newyears.banner.call")}</span>
                    </a>
                    <button
                      onClick={() => {
                        handleClosePopup();
                        navigateTo("newyears");
                        setTimeout(() => {
                          document.querySelector("#nye-reservation")?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{t("newyears.banner.reserve")}</span>
                    </button>
                  </div>
                </div>

                {/* Footer note */}
                <p className="text-center text-gray-500 text-xs mt-4">
                  {t("newyears.banner.limited")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NewYearsBanner;
