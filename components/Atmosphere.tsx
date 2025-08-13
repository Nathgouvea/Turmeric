"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles, Users, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import BotanicalDecor from "./BotanicalDecor";
import { useLanguage } from "../contexts/LanguageContext";

const Atmosphere = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Leaf,
      title: t("atmosphere.feature1.title"),
      description: t("atmosphere.feature1.desc"),
      color: "bg-primary-gold",
    },
    {
      icon: Heart,
      title: t("atmosphere.feature2.title"),
      description: t("atmosphere.feature2.desc"),
      color: "bg-primary-gold",
    },
    {
      icon: Sparkles,
      title: t("atmosphere.feature3.title"),
      description: t("atmosphere.feature3.desc"),
      color: "bg-primary-gold",
    },
    {
      icon: Users,
      title: t("atmosphere.feature4.title"),
      description: t("atmosphere.feature4.desc"),
      color: "bg-primary-gold",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50/30 via-white to-green-50/20 relative overflow-hidden">
      {/* Botanical Decorations */}
      <BotanicalDecor position="top-left" size="lg" className="opacity-8" />
      <BotanicalDecor position="bottom-right" size="lg" className="opacity-8" />

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
            <Leaf className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="font-great-vibes text-5xl md:text-6xl text-primary-gold">
              {t("atmosphere.title")}
            </h2>
            <Leaf className="w-8 h-8 text-green-600 ml-3 scale-x-[-1]" />
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t("atmosphere.subtitle")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm relative overflow-hidden">
                {/* Subtle botanical background */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path
                      d="M0,50 Q25,30 50,50 Q75,70 100,50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-green-600"
                    />
                    <circle
                      cx="20"
                      cy="45"
                      r="2"
                      className="text-green-600"
                      fill="currentColor"
                    />
                    <circle
                      cx="80"
                      cy="55"
                      r="1.5"
                      className="text-green-600"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <CardContent className="p-8 text-center relative">
                  <motion.div
                    className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Small decorative element */}
                  <div className="absolute bottom-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Leaf className="w-4 h-4 text-green-600" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto border-0 shadow-xl bg-gradient-to-r from-green-50 via-white to-primary-gold/10 relative overflow-hidden">
            {/* Decorative botanical elements */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <path
                  d="M0,100 Q50,50 100,100 Q150,150 200,100 Q250,50 300,100 Q350,150 400,100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-green-600"
                />
                {/* Leaves along the path */}
                <ellipse
                  cx="50"
                  cy="75"
                  rx="8"
                  ry="12"
                  transform="rotate(-30 50 75)"
                  className="text-green-600"
                  fill="currentColor"
                />
                <ellipse
                  cx="150"
                  cy="125"
                  rx="6"
                  ry="10"
                  transform="rotate(20 150 125)"
                  className="text-green-600"
                  fill="currentColor"
                />
                <ellipse
                  cx="250"
                  cy="75"
                  rx="7"
                  ry="11"
                  transform="rotate(-10 250 75)"
                  className="text-green-600"
                  fill="currentColor"
                />
                <ellipse
                  cx="350"
                  cy="125"
                  rx="8"
                  ry="12"
                  transform="rotate(40 350 125)"
                  className="text-green-600"
                  fill="currentColor"
                />
              </svg>
            </div>

            <CardContent className="p-12 relative">
              <div className="flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary-gold mr-3" />
                <h3 className="text-3xl font-semibold text-gray-800">
                  {t("atmosphere.highlight.title")}
                </h3>
                <Award className="w-8 h-8 text-primary-gold ml-3" />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {t("atmosphere.highlight.desc")}
              </p>

              <div className="flex items-center justify-center mt-8 space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-primary-gold">
                    2+
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("atmosphere.stats.years")}
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-primary-gold">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("atmosphere.stats.customers")}
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-primary-gold">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("atmosphere.stats.halal")}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Atmosphere;
