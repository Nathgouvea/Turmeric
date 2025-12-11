"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Phone,
  Mail,
  CheckCircle,
  Search,
  ChevronDown,
  Utensils,
  Sparkles,
  Star,
  MapPin,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useLanguage } from "../contexts/LanguageContext";
import { useRouter } from "../contexts/RouterContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Confetti Component
const Confetti = () => {
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
    const newParticles = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 6 + Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[90] overflow-hidden">
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

const NewYearsPage = () => {
  const { t } = useLanguage();
  const { navigateTo } = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+351");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearchTerm, setCountrySearchTerm] = useState("");
  const [showConfetti, setShowConfetti] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Stop confetti after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const menuItems = {
    appetizers: {
      title: t("newyears.menu.appetizers"),
      items: [
        {
          name: t("newyears.menu.papadum"),
          description: t("newyears.menu.papadumDesc"),
        },
      ],
    },
    starters: {
      title: t("newyears.menu.starters"),
      items: [
        {
          name: t("newyears.menu.kebab"),
          description: t("newyears.menu.kebabDesc"),
        },
      ],
    },
    mainCourse: {
      title: t("newyears.menu.mainCourse"),
      items: [
        {
          name: t("newyears.menu.curry"),
          description: t("newyears.menu.curryDesc"),
        },
        {
          name: t("newyears.menu.naan"),
          description: "",
        },
      ],
    },
    sweets: {
      title: t("newyears.menu.sweets"),
      items: [
        {
          name: t("newyears.menu.kheer"),
          description: t("newyears.menu.kheerDesc"),
        },
        {
          name: t("newyears.menu.halwa"),
          description: t("newyears.menu.halwaDesc"),
        },
        {
          name: t("newyears.menu.rasmalai"),
          description: t("newyears.menu.rasmalaiDesc"),
        },
      ],
    },
    drinks: {
      title: t("newyears.menu.drinks"),
      items: [
        {
          name: t("newyears.menu.lassi"),
          description: "",
        },
      ],
    },
  };

  const countryCodes = [
    { code: "+351", country: "PT", flag: "🇵🇹", name: "Portugal" },
    { code: "+1", country: "US", flag: "🇺🇸", name: "United States" },
    { code: "+44", country: "GB", flag: "🇬🇧", name: "United Kingdom" },
    { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
    { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany" },
    { code: "+34", country: "ES", flag: "🇪🇸", name: "Spain" },
    { code: "+39", country: "IT", flag: "🇮🇹", name: "Italy" },
    { code: "+31", country: "NL", flag: "🇳🇱", name: "Netherlands" },
    { code: "+32", country: "BE", flag: "🇧🇪", name: "Belgium" },
    { code: "+41", country: "CH", flag: "🇨🇭", name: "Switzerland" },
    { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil" },
    { code: "+91", country: "IN", flag: "🇮🇳", name: "India" },
    { code: "+92", country: "PK", flag: "🇵🇰", name: "Pakistan" },
    { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
    { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan" },
  ];

  const filteredCountries = countryCodes.filter(
    (country) =>
      country.name.toLowerCase().includes(countrySearchTerm.toLowerCase()) ||
      country.code.includes(countrySearchTerm) ||
      country.country.toLowerCase().includes(countrySearchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
        setCountrySearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const phoneNumber = formData.get("phone") as string;
    const fullPhoneNumber = `${selectedCountryCode} ${phoneNumber}`;
    formData.set("phone", fullPhoneNumber);
    formData.set("event", "New Year's Eve 2026 Dinner");

    try {
      const response = await fetch("https://formspree.io/f/xanrpbjw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          form.reset();
        }, 5000);
      } else {
        alert(
          "There was an error submitting your reservation. Please try again or contact us directly."
        );
      }
    } catch (error) {
      alert(
        "There was a network error. Please check your connection and try again."
      );
    }
  };

  const scrollToReservation = () => {
    document
      .querySelector("#nye-reservation")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Food images matching the New Year's menu
  const foodImages = [
    {
      src: "/garlicnan-chicken-Kadhai.jpg",
      alt: "Chicken Kadhai with Garlic Naan"
    },
    {
      src: "/Rasmalai-Kheer-dessert.jpeg",
      alt: "Rasmalai & Kheer Dessert"
    },
    {
      src: "/mango-lassi.jpeg",
      alt: "Mango Lassi"
    },
    {
      src: "/the-ambient.jpg",
      alt: "Restaurant Ambiance"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Confetti Effect */}
      {showConfetti && <Confetti />}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/family.dining-experience.jpeg"
            alt="Family Dining at Turmeric Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-gray-900"></div>
          {/* Decorative elements - hidden on mobile to prevent horizontal scroll */}
          <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 bg-primary-gold/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="hidden sm:block absolute top-40 right-20 w-40 h-40 bg-primary-gold/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="hidden sm:block absolute bottom-40 left-1/4 w-24 h-24 bg-primary-gold/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          {/* Sparkle effects - hidden on mobile to prevent horizontal scroll */}
          <div className="hidden sm:block absolute top-1/4 left-1/3 w-2 h-2 bg-primary-gold rounded-full animate-ping"></div>
          <div className="hidden sm:block absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-ping delay-300"></div>
          <div className="hidden sm:block absolute bottom-1/3 left-1/5 w-2 h-2 bg-primary-gold rounded-full animate-ping delay-700"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Year Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-gold/20 border border-primary-gold/40 rounded-full px-6 py-2 mb-8"
            >
              <Sparkles className="w-5 h-5 text-primary-gold" />
              <span className="text-primary-gold font-semibold tracking-wider">
                2026
              </span>
              <Sparkles className="w-5 h-5 text-primary-gold" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("newyears.hero.title")}
            </motion.h1>

            {/* Restaurant Name */}
            <motion.h2
              className="font-great-vibes text-5xl md:text-6xl lg:text-7xl text-primary-gold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {t("newyears.hero.restaurant")}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t("newyears.hero.subtitle")}
            </motion.p>

            {/* Price Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="inline-block bg-gradient-to-r from-primary-gold/20 via-primary-gold/30 to-primary-gold/20 border border-primary-gold/50 rounded-2xl px-10 py-6 mb-10"
            >
              <div className="text-6xl md:text-7xl font-bold text-primary-gold mb-2">
                {t("newyears.hero.price")}
              </div>
              <div className="text-white text-lg">{t("newyears.hero.perPerson")}</div>
              <div className="text-gray-400 text-sm mt-2">
                {t("newyears.hero.includes")}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button
                size="lg"
                className="bg-primary-gold hover:bg-yellow-600 text-white border-2 border-primary-gold px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={scrollToReservation}
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t("newyears.btn.reserve")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-gold/50 text-primary-gold hover:bg-primary-gold/10 px-10 py-6 text-lg transition-all duration-300 bg-transparent"
                onClick={() => navigateTo("home")}
              >
                {t("newyears.btn.backToSite")}
              </Button>
            </motion.div>

            {/* Contact Quick Info */}
            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <a
                href="tel:+351222086926"
                className="flex items-center gap-2 hover:text-primary-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+351 222 086 926</span>
              </a>
              <a
                href="mailto:turmeric.porto@gmail.com"
                className="flex items-center gap-2 hover:text-primary-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>turmeric.porto@gmail.com</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary-gold cursor-pointer"
            onClick={scrollToReservation}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-primary-gold" />
              <span className="text-primary-gold uppercase tracking-widest text-sm font-semibold">
                {t("newyears.menu.badge")}
              </span>
              <Star className="w-6 h-6 text-primary-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("newyears.menu.title")}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("newyears.menu.subtitle")}
            </p>
          </motion.div>

          <div className="grid gap-8">
            {Object.entries(menuItems).map(([key, section], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary-gold/20 to-transparent border-b border-gray-700/50">
                    <CardTitle className="text-2xl text-primary-gold tracking-wider">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="group">
                          <h4 className="text-lg font-semibold text-white group-hover:text-primary-gold transition-colors">
                            {item.name}
                          </h4>
                          {item.description && (
                            <p className="text-gray-400 mt-1 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Price Reminder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-4 bg-primary-gold/10 border border-primary-gold/30 rounded-2xl px-8 py-4">
              <Utensils className="w-6 h-6 text-primary-gold" />
              <span className="text-white text-lg">
                {t("newyears.menu.completePackage")}{" "}
                <span className="text-primary-gold font-bold text-2xl">
                  {t("newyears.hero.price")}
                </span>{" "}
                {t("newyears.hero.perPerson")}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Food Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("newyears.gallery.title")}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t("newyears.gallery.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {foodImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl aspect-square"
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-primary-gold/0 group-hover:border-primary-gold/50 rounded-xl transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section
        id="nye-reservation"
        className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("newyears.reservation.title")}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("newyears.reservation.subtitle")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-primary-gold to-yellow-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                    <Calendar className="w-6 h-6" />
                    {t("newyears.reservation.cardTitle")}
                  </CardTitle>
                  <p className="opacity-90 text-sm mt-2">
                    {t("newyears.reservation.cardSubtitle")}
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-200">
                            {t("newyears.form.fullName")}
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder={t("newyears.form.namePlaceholder")}
                            required
                            className="dark-form-input border-gray-600 focus:border-primary-gold focus:ring-primary-gold"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-200">
                            {t("newyears.form.email")}
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder={t("newyears.form.emailPlaceholder")}
                            required
                            className="dark-form-input border-gray-600 focus:border-primary-gold focus:ring-primary-gold"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-200">
                          {t("newyears.form.phone")}
                        </Label>
                        <div className="flex">
                          <div
                            className="relative flex-shrink-0"
                            ref={dropdownRef}
                          >
                            <button
                              type="button"
                              onClick={() =>
                                setIsCountryDropdownOpen(!isCountryDropdownOpen)
                              }
                              className="px-2 border border-gray-600 rounded-l-md bg-gray-700/50 text-left text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary-gold focus:border-primary-gold flex items-center space-x-1 min-w-[90px] h-9"
                            >
                              <span>
                                {
                                  countryCodes.find(
                                    (c) => c.code === selectedCountryCode
                                  )?.flag
                                }
                              </span>
                              <span>
                                {
                                  countryCodes.find(
                                    (c) => c.code === selectedCountryCode
                                  )?.code
                                }
                              </span>
                              <ChevronDown className="h-4 w-4 text-gray-400 ml-auto" />
                            </button>

                            {isCountryDropdownOpen && (
                              <div className="absolute z-50 mt-1 w-64 bg-gray-800 border border-gray-600 rounded-md shadow-lg max-h-60 overflow-auto">
                                <div className="p-2 border-b border-gray-700">
                                  <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                      type="text"
                                      placeholder={t("newyears.form.searchCountry")}
                                      value={countrySearchTerm}
                                      onChange={(e) =>
                                        setCountrySearchTerm(e.target.value)
                                      }
                                      className="dark-form-input pl-10 border-gray-600"
                                    />
                                  </div>
                                </div>
                                <div className="py-1">
                                  {filteredCountries.map((country) => (
                                    <button
                                      key={`${country.code}-${country.country}`}
                                      type="button"
                                      onClick={() => {
                                        setSelectedCountryCode(country.code);
                                        setIsCountryDropdownOpen(false);
                                        setCountrySearchTerm("");
                                      }}
                                      className="w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none flex items-center space-x-3"
                                    >
                                      <span className="text-lg">
                                        {country.flag}
                                      </span>
                                      <span className="font-medium">
                                        {country.code}
                                      </span>
                                      <span className="text-gray-400">
                                        {country.name}
                                      </span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder={t("newyears.form.phonePlaceholder")}
                            required
                            className="dark-form-input border-gray-600 focus:border-primary-gold focus:ring-primary-gold rounded-l-none border-l-0 flex-1"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guests" className="text-gray-200">
                          {t("newyears.form.guests")}
                        </Label>
                        <select
                          name="guests"
                          required
                          className="dark-form-input w-full px-3 border border-gray-600 rounded-md focus:border-primary-gold focus:ring-primary-gold h-9"
                        >
                          <option value="">{t("newyears.form.selectGuests")}</option>
                          {Array.from({ length: 20 }, (_, i) => i + 1).map(
                            (num) => (
                              <option key={num} value={num.toString()}>
                                {num} {num === 1 ? t("newyears.form.guest") : t("newyears.form.guestsPlural")}
                              </option>
                            )
                          )}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-200">
                          {t("newyears.form.specialRequests")}
                        </Label>
                        <textarea
                          id="message"
                          name="message"
                          placeholder={t("newyears.form.specialRequestsPlaceholder")}
                          rows={3}
                          className="dark-form-input w-full px-3 py-2 border border-gray-600 rounded-md focus:border-primary-gold focus:ring-primary-gold resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-primary-gold hover:bg-yellow-600 text-white py-6 text-lg font-medium"
                        size="lg"
                      >
                        {t("newyears.form.submit")}
                      </Button>

                      <p className="text-sm text-gray-400 text-center">
                        {t("newyears.form.confirmationNote")}
                      </p>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        {t("newyears.success.title")}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {t("newyears.success.message")}
                      </p>
                      <div className="bg-primary-gold/20 border border-primary-gold/30 rounded-lg p-4 mb-6">
                        <p className="text-primary-gold font-medium">
                          {t("newyears.success.confirmation")}
                        </p>
                      </div>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-primary-gold hover:bg-yellow-600 text-white"
                      >
                        {t("newyears.success.another")}
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Contact Card */}
              <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
                <CardHeader className="bg-gray-700/50 border-b border-gray-600">
                  <CardTitle className="text-xl text-white">
                    {t("newyears.contact.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <a
                      href="tel:+351222086926"
                      className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-primary-gold/10 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary-gold/20 rounded-full flex items-center justify-center group-hover:bg-primary-gold/30 transition-colors">
                        <Phone className="w-6 h-6 text-primary-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{t("newyears.contact.callUs")}</p>
                        <p className="text-lg text-white font-medium">
                          +351 222 086 926
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:turmeric.porto@gmail.com"
                      className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-primary-gold/10 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary-gold/20 rounded-full flex items-center justify-center group-hover:bg-primary-gold/30 transition-colors">
                        <Mail className="w-6 h-6 text-primary-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{t("newyears.contact.emailUs")}</p>
                        <p className="text-lg text-white font-medium">
                          turmeric.porto@gmail.com
                        </p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg">
                      <div className="w-12 h-12 bg-primary-gold/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{t("newyears.contact.visitUs")}</p>
                        <p className="text-white font-medium">
                          R. Formosa 429, 4000-253 Porto
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Event Details Card */}
              <Card className="bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 border-primary-gold/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {t("newyears.eventDetails.title")}
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary-gold" />
                      <span>{t("newyears.eventDetails.date")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Utensils className="w-5 h-5 text-primary-gold" />
                      <span>{t("newyears.eventDetails.courses")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 text-primary-gold text-center">
                        🥤
                      </span>
                      <span>{t("newyears.eventDetails.drink")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 text-center text-primary-gold font-bold">
                        €
                      </span>
                      <span>
                        <strong className="text-primary-gold">49€</strong> {t("newyears.hero.perPerson")}
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                    <p className="text-sm text-gray-400">
                      <strong className="text-primary-gold">{t("newyears.eventDetails.note")}:</strong>{" "}
                      {t("newyears.eventDetails.alcoholFree")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">
            {t("newyears.footer.copyright")}
          </p>
          <button
            onClick={() => navigateTo("home")}
            className="mt-4 text-primary-gold hover:underline"
          >
            {t("newyears.footer.backToMain")}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default NewYearsPage;
