"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2736&q=80"
          alt="Turmeric Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Restaurant Name */}
          <motion.h1
            className="font-great-vibes text-6xl md:text-8xl lg:text-9xl text-primary-gold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Turmeric
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t("hero.title")}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              size="lg"
              className="bg-primary-gold hover:bg-yellow-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("#menu")}
              aria-label={`${t("hero.cta.menu")} - View our menu`}
            >
              {t("hero.cta.menu")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-primary-gold hover:bg-primary-gold hover:text-white px-8 py-4 text-lg shadow-xl transition-all duration-300 transform hover:scale-105 bg-white"
              onClick={() => scrollToSection("#reservations")}
              aria-label={`${t("hero.cta.reserve")} - Make a reservation`}
            >
              {t("hero.cta.reserve")}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements - hidden on mobile to prevent horizontal scroll */}
      <div className="hidden sm:block absolute top-1/4 left-10 w-16 h-16 border border-primary-gold/20 rounded-full animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-1/3 right-10 w-12 h-12 border border-primary-gold/20 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
