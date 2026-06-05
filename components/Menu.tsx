"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import BotanicalDecor from "./BotanicalDecor";
import { useLanguage } from "../contexts/LanguageContext";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starters");
  const { t, language } = useLanguage();

  const menuCategories = [
    { id: "starters", name: t("menu.categories.starters"), icon: "🥗" },
    { id: "grills", name: t("menu.categories.grills"), icon: "🔥" },
    {
      id: "curry-chicken",
      name: t("menu.categories.curryChicken"),
      icon: "🍗",
    },
    { id: "curry-lamb", name: t("menu.categories.curryLamb"), icon: "🐑" },
    { id: "curry-fish", name: t("menu.categories.curryFish"), icon: "🐟" },
    { id: "curry-veg", name: t("menu.categories.curryVeg"), icon: "🥬" },
    { id: "bread", name: t("menu.categories.bread"), icon: "🥖" },
    { id: "rice", name: t("menu.categories.rice"), icon: "🍚" },
    { id: "drinks", name: t("menu.categories.drinks"), icon: "🥤" },
  ];

  const menuItems = {
    starters: [
      {
        name: t("menu.items.soupOfTheDay.title"),
        price: "€4",
        description: t("menu.items.soupOfTheDay.description"),
      },
      {
        name: t("menu.items.turmericChickenLollypop.title"),
        price: "€6.5",
        description: t("menu.items.turmericChickenLollypop.description"),
        popular: true,
      },
      {
        name: t("menu.items.chickenSamosa.title"),
        price: "€3.5",
        description: t("menu.items.chickenSamosa.description"),
      },
      {
        name: t("menu.items.vegetableSamosa.title"),
        price: "€3",
        description: t("menu.items.vegetableSamosa.description"),
      },
      {
        name: t("menu.items.onionBhaji.title"),
        price: "€5",
        description: t("menu.items.onionBhaji.description"),
      },
    ],
    grills: [
      {
        name: t("menu.items.chickenTikka.title"),
        price: "€13.5",
        description: t("menu.items.chickenTikka.description"),
        popular: true,
      },
      {
        name: t("menu.items.grilledFish.title"),
        price: "€15",
        description: t("menu.items.grilledFish.description"),
      },
      {
        name: t("menu.items.chickenHariyaliTikka.title"),
        price: "€13.5",
        description: t("menu.items.chickenHariyaliTikka.description"),
      },
      {
        name: t("menu.items.tandooriChicken.title"),
        price: "€15",
        description: t("menu.items.tandooriChicken.description"),
      },
      {
        name: t("menu.items.paneerTikka.title"),
        price: "€13",
        description: t("menu.items.paneerTikka.description"),
      },
    ],
    "curry-chicken": [
      {
        name: t("menu.items.butterChicken.title"),
        price: "€14.5",
        description: t("menu.items.butterChicken.description"),
        popular: true,
      },
      {
        name: t("menu.items.chickenTikkaMasala.title"),
        price: "€14.5",
        description: t("menu.items.chickenTikkaMasala.description"),
      },
      {
        name: t("menu.items.chickenKadhai.title"),
        price: "€14.5",
        description: t("menu.items.chickenKadhai.description"),
      },
      {
        name: t("menu.items.chickenCurry.title"),
        price: "€14.5",
        description: t("menu.items.chickenCurry.description"),
      },
      {
        name: t("menu.items.chickenKorma.title"),
        price: "€14.5",
        description: t("menu.items.chickenKorma.description"),
      },
      {
        name: t("menu.items.chickenVindaloo.title"),
        price: "€14.5",
        description: t("menu.items.chickenVindaloo.description"),
      },
      {
        name: t("menu.items.mangoChicken.title"),
        price: "€14.5",
        description: t("menu.items.mangoChicken.description"),
      },
      {
        name: t("menu.items.chickenMadras.title"),
        price: "€14.5",
        description: t("menu.items.chickenMadras.description"),
      },
      {
        name: t("menu.items.chickenPalak.title"),
        price: "€15",
        description: t("menu.items.chickenPalak.description"),
      },
    ],
    "curry-lamb": [
      {
        name: t("menu.items.lambKadhai.title"),
        price: "€16",
        description: t("menu.items.lambKadhai.description"),
      },
      {
        name: t("menu.items.lambCurry.title"),
        price: "€16",
        description: t("menu.items.lambCurry.description"),
      },
      {
        name: t("menu.items.lambKorma.title"),
        price: "€16",
        description: t("menu.items.lambKorma.description"),
      },
    ],
    "curry-fish": [
      {
        name: t("menu.items.doradaFishCurry.title"),
        price: "€16",
        description: t("menu.items.doradaFishCurry.description"),
      },
      {
        name: t("menu.items.prawnMasala.title"),
        price: "€16",
        description: t("menu.items.prawnMasala.description"),
      },
      {
        name: t("menu.items.prawnMalaiCurry.title"),
        price: "€16",
        description: t("menu.items.prawnMalaiCurry.description"),
      },
    ],
    "curry-veg": [
      {
        name: t("menu.items.kadhaiPaneer.title"),
        price: "€14",
        description: t("menu.items.kadhaiPaneer.description"),
      },
      {
        name: t("menu.items.paneerButterMasala.title"),
        price: "€14",
        description: t("menu.items.paneerButterMasala.description"),
      },
      {
        name: t("menu.items.palakPaneer.title"),
        price: "€14",
        description: t("menu.items.palakPaneer.description"),
      },
      {
        name: t("menu.items.matarPaneer.title"),
        price: "€14",
        description: t("menu.items.matarPaneer.description"),
      },
      {
        name: t("menu.items.bindhiMasala.title"),
        price: "€13",
        description: t("menu.items.bindhiMasala.description"),
      },
      {
        name: t("menu.items.alooGobi.title"),
        price: "€13",
        description: t("menu.items.alooGobi.description"),
      },
      {
        name: t("menu.items.alooPalak.title"),
        price: "€13",
        description: t("menu.items.alooPalak.description"),
      },
      {
        name: t("menu.items.vegKorma.title"),
        price: "€13",
        description: t("menu.items.vegKorma.description"),
      },
      {
        name: t("menu.items.daalMakhni.title"),
        price: "€12.5",
        description: t("menu.items.daalMakhni.description"),
      },
      {
        name: t("menu.items.daalTadka.title"),
        price: "€12.5",
        description: t("menu.items.daalTadka.description"),
      },
      {
        name: t("menu.items.chanaMasala.title"),
        price: "€12.5",
        description: t("menu.items.chanaMasala.description"),
      },
    ],
    bread: [
      {
        name: t("menu.items.plainNaan.title"),
        price: "€2.5",
        description: t("menu.items.plainNaan.description"),
      },
      {
        name: t("menu.items.butterNaan.title"),
        price: "€2.5",
        description: t("menu.items.butterNaan.description"),
      },
      {
        name: t("menu.items.garlicNaan.title"),
        price: "€3.5",
        description: t("menu.items.garlicNaan.description"),
      },
      {
        name: t("menu.items.cheeseNaan.title"),
        price: "€4",
        description: t("menu.items.cheeseNaan.description"),
      },
      {
        name: t("menu.items.garlicCheeseNaan.title"),
        price: "€4.5",
        description: t("menu.items.garlicCheeseNaan.description"),
      },
      {
        name: t("menu.items.paneerKulcha.title"),
        price: "€4.5",
        description: t("menu.items.paneerKulcha.description"),
      },
      {
        name: t("menu.items.alooKulcha.title"),
        price: "€4.5",
        description: t("menu.items.alooKulcha.description"),
      },
      {
        name: t("menu.items.peshwariNaan.title"),
        price: "€5",
        description: t("menu.items.peshwariNaan.description"),
      },
      {
        name: t("menu.items.tandooriRoti.title"),
        price: "€3",
        description: t("menu.items.tandooriRoti.description"),
      },
    ],
    rice: [
      {
        name: t("menu.items.steamRice.title"),
        price: "€4",
        description: t("menu.items.steamRice.description"),
      },
      {
        name: t("menu.items.chickenBiryani.title"),
        price: "€14.5",
        description: t("menu.items.chickenBiryani.description"),
        popular: true,
      },
      {
        name: t("menu.items.lambBiryani.title"),
        price: "€16",
        description: t("menu.items.lambBiryani.description"),
      },
      {
        name: t("menu.items.prawnBiryani.title"),
        price: "€16",
        description: t("menu.items.prawnBiryani.description"),
      },
      {
        name: t("menu.items.vegetableBiryani.title"),
        price: "€13",
        description: t("menu.items.vegetableBiryani.description"),
      },
      {
        name: t("menu.items.biryaniRice.title"),
        price: "€7",
        description: t("menu.items.biryaniRice.description"),
      },
      {
        name: t("menu.items.zeeraRice.title"),
        price: "€7",
        description: t("menu.items.zeeraRice.description"),
      },
    ],
    drinks: [
      {
        name: t("menu.items.mangoLassi.title"),
        price: "€3.5",
        description: t("menu.items.mangoLassi.description"),
      },
      {
        name: t("menu.items.sweetLassi.title"),
        price: "€3.5",
        description: t("menu.items.sweetLassi.description"),
      },
      {
        name: t("menu.items.namkeenLassi.title"),
        price: "€3.5",
        description: t("menu.items.namkeenLassi.description"),
      },
      {
        name: t("menu.items.freshOrangeJuice.title"),
        price: "€4",
        description: t("menu.items.freshOrangeJuice.description"),
      },
      {
        name: t("menu.items.freshLemonMint.title"),
        price: "€3.5",
        description: t("menu.items.freshLemonMint.description"),
      },
      {
        name: t("menu.items.chaai.title"),
        price: "€3",
        description: t("menu.items.chaai.description"),
      },
      {
        name: t("menu.items.cocaCola.title"),
        price: "€2.5",
        description: t("menu.items.cocaCola.description"),
      },
      {
        name: t("menu.items.cocaColaZero.title"),
        price: "€2.5",
        description: t("menu.items.cocaColaZero.description"),
      },
      {
        name: t("menu.items.fanta.title"),
        price: "€2.5",
        description: t("menu.items.fanta.description"),
      },
      {
        name: t("menu.items.sevenUp.title"),
        price: "€2.5",
        description: t("menu.items.sevenUp.description"),
      },
      {
        name: t("menu.items.guarana.title"),
        price: "€2.5",
        description: t("menu.items.guarana.description"),
      },
      {
        name: t("menu.items.liptonIceTeaMango.title"),
        price: "€2.5",
        description: t("menu.items.liptonIceTeaMango.description"),
      },
      {
        name: t("menu.items.liptonIceTeaPeach.title"),
        price: "€2.5",
        description: t("menu.items.liptonIceTeaPeach.description"),
      },
      {
        name: t("menu.items.liptonIceTeaLemon.title"),
        price: "€2.5",
        description: t("menu.items.liptonIceTeaLemon.description"),
      },
      {
        name: t("menu.items.pedrasLimao.title"),
        price: "€2",
        description: t("menu.items.pedrasLimao.description"),
      },
      {
        name: t("menu.items.pedrasSalgadas250.title"),
        price: "€2",
        description: t("menu.items.pedrasSalgadas250.description"),
      },
      {
        name: t("menu.items.pedrasSalgadas500.title"),
        price: "€5",
        description: t("menu.items.pedrasSalgadas500.description"),
      },
      {
        name: t("menu.items.water500.title"),
        price: "€2",
        description: t("menu.items.water500.description"),
      },
      {
        name: t("menu.items.water1500.title"),
        price: "€2.5",
        description: t("menu.items.water1500.description"),
      },
      {
        name: t("menu.items.cafe.title"),
        price: "€1",
        description: t("menu.items.cafe.description"),
      },
      {
        name: t("menu.items.caffeLatte.title"),
        price: "€2.5",
        description: t("menu.items.caffeLatte.description"),
      },
      {
        name: t("menu.items.americano.title"),
        price: "€1.5",
        description: t("menu.items.americano.description"),
      },
      {
        name: t("menu.items.infusedTea.title"),
        price: "€2",
        description: t("menu.items.infusedTea.description"),
      },
    ],
  };

  return (
    <section
      id="menu"
      className="py-20 bg-gradient-to-b from-white via-green-50/30 to-white relative overflow-hidden"
    >
      {/* Botanical Decorations */}
      <BotanicalDecor position="top-left" size="lg" className="opacity-10" />
      <BotanicalDecor position="top-right" size="md" className="opacity-15" />
      <BotanicalDecor position="bottom-left" size="md" className="opacity-10" />
      <BotanicalDecor
        position="bottom-right"
        size="lg"
        className="opacity-15"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Leaf className="w-8 h-8 text-primary-gold mr-3" />
            <h2 className="font-great-vibes text-5xl md:text-6xl text-primary-gold">
              {t("menu.title")}
            </h2>
            <Leaf className="w-8 h-8 text-primary-gold ml-3 scale-x-[-1]" />
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t("menu.subtitle")}
          </p>
          <div className="flex items-center justify-center mt-4 space-x-2">
            <Badge
              variant="outline"
              className="border-green-600 text-green-700"
            >
              <Leaf className="w-3 h-3 mr-1" />
              {t("menu.halal")}
            </Badge>
            <Badge
              variant="outline"
              className="border-primary-gold text-primary-gold"
            >
              <Star className="w-3 h-3 mr-1" />
              {t("menu.fresh")}
            </Badge>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary-gold hover:bg-yellow-600 text-white shadow-lg scale-105"
                  : "border-2 border-gray-400 hover:border-primary-gold hover:text-primary-gold bg-white text-gray-700 shadow-sm"
              }`}
              onClick={() => setActiveCategory(category.id)}
              aria-label={`Filter menu by ${category.name} category`}
              aria-pressed={activeCategory === category.id}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {menuItems[activeCategory as keyof typeof menuItems]?.map(
            (item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm relative overflow-hidden">
                  {/* Subtle botanical background */}
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <path
                        d="M10,90 Q20,80 30,85 Q40,90 50,80 Q60,70 70,75"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-primary-gold"
                      />
                    </svg>
                  </div>

                  <CardContent className="p-6 relative">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-gray-800 group-hover:text-primary-gold transition-colors">
                            {item.name}
                          </h3>
                          {item.popular && (
                            <Badge className="bg-primary-gold text-white text-xs">
                              <Star className="w-3 h-3 mr-1" />
                              {t("menu.popular")}
                            </Badge>
                          )}
                        </div>
                        {item.namePortuguese && language === "pt" && (
                          <p className="text-sm text-gray-500 italic mb-2">
                            {item.namePortuguese}
                          </p>
                        )}
                      </div>
                      <span className="text-xl font-semibold text-primary-gold ml-4">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Decorative leaf accent */}
                    <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity">
                      <Leaf className="w-4 h-4 text-primary-gold" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-50 to-primary-gold/10 rounded-xl p-8 border border-green-100">
            <div className="flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-primary-gold mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800">
                {t("menu.cta.title")}
              </h3>
              <Leaf className="w-6 h-6 text-primary-gold ml-2 scale-x-[-1]" />
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t("menu.cta.desc")}
            </p>
            <Button
              size="lg"
              className="bg-primary-gold hover:bg-yellow-600 text-white px-8 py-3 shadow-lg"
              onClick={() => {
                document.querySelector("#reservations")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              aria-label={`${t("menu.cta.button")} - Make a reservation`}
            >
              {t("menu.cta.button")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
