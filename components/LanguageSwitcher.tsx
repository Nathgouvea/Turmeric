"use client";

import { motion } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  const handleLanguageChange = (langCode: "en" | "pt" | "ar" | "fr") => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Current language: ${currentLanguage?.name}. Click to change language.`}
        className="flex items-center space-x-2 border-2 border-gray-200 hover:border-primary-gold hover:text-primary-gold transition-all duration-300 bg-white/90 backdrop-blur-sm min-w-[120px] justify-between"
      >
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4" />
          <span className="font-medium">
            {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full mt-2 right-0 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-50 min-w-[160px]"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() =>
                handleLanguageChange(lang.code as "en" | "pt" | "ar" | "fr")
              }
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3 ${
                language === lang.code
                  ? "bg-primary-gold/10 text-primary-gold"
                  : "text-gray-700"
              } ${lang.code === "ar" ? "text-right" : "text-left"}`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </motion.div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </motion.div>
  );
};

export default LanguageSwitcher;
