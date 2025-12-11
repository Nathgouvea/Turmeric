"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { useRouter } from "../contexts/RouterContext";
import LanguageSwitcher from "./LanguageSwitcher";

// Check if NYE banner is visible (not closed by user in last 24 hours)
const isBannerVisible = () => {
  if (typeof window === "undefined") return true;
  const lastClosed = localStorage.getItem("nyeBannerClosed");
  if (lastClosed) {
    const timeSinceClosed = Date.now() - parseInt(lastClosed);
    if (timeSinceClosed < 24 * 60 * 60 * 1000) {
      return false;
    }
  }
  return true;
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const { t } = useLanguage();
  const { currentPage, navigateTo } = useRouter();

  useEffect(() => {
    // Check banner visibility on mount
    setBannerVisible(isBannerVisible());

    // Listen for banner close events
    const handleBannerClose = () => setBannerVisible(false);
    window.addEventListener("nyeBannerClosed", handleBannerClose);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("nyeBannerClosed", handleBannerClose);
    };
  }, []);

  const navItems = [
    { name: t("nav.home"), action: () => navigateTo("home") },
    {
      name: t("nav.gallery"),
      action: () => {
        navigateTo("home");
        setTimeout(() => scrollToSection("#gallery"), 100);
      },
    },
    {
      name: t("nav.menu"),
      action: () => {
        navigateTo("home");
        setTimeout(() => scrollToSection("#menu"), 100);
      },
    },
    {
      name: t("nav.about"),
      action: () => {
        navigateTo("home");
        setTimeout(() => scrollToSection("#about"), 100);
      },
    },
    {
      name: t("nav.reservations"),
      action: () => {
        navigateTo("home");
        setTimeout(() => scrollToSection("#reservations"), 100);
      },
    },
    {
      name: t("nav.contact"),
      action: () => {
        navigateTo("home");
        setTimeout(() => scrollToSection("#contact"), 100);
      },
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (item: (typeof navItems)[0]) => {
    item.action();
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        bannerVisible ? "top-[72px] sm:top-[44px]" : "top-0"
      } ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => navigateTo("home")}
          >
            <h1 className="font-great-vibes text-3xl md:text-4xl text-primary-gold">
              Turmeric
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleNavClick(item)}
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary-gold"
                    : "text-white hover:text-primary-gold"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Right side - Language Switcher + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X
                  className={`w-6 h-6 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-lg mt-2"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary-gold hover:bg-gray-50 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
