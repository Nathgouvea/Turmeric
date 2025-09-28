"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Heart,
  Shield,
  Star,
  Users,
  Utensils,
  Leaf,
  Wine,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import BotanicalDecor from "./BotanicalDecor";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Utensils,
      title: t("about.feature1.title"),
      description: t("about.feature1.desc"),
      color: "bg-primary-gold",
    },
    {
      icon: Users,
      title: t("about.feature2.title"),
      description: t("about.feature2.desc"),
      color: "bg-primary-gold",
    },
    {
      icon: Shield,
      title: t("about.feature3.title"),
      description: t("about.feature3.desc"),
      color: "bg-primary-gold",
    },
    {
      icon: Heart,
      title: t("about.feature4.title"),
      description: t("about.feature4.desc"),
      color: "bg-primary-gold",
    },
    {
      icon: Wine,
      title: t("about.alcoholFree.title"),
      description: t("about.alcoholFree.desc"),
      color: "bg-primary-gold",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white via-green-50/20 to-accent relative overflow-hidden"
    >
      {/* Botanical Decorations */}
      <BotanicalDecor position="top-left" size="lg" className="opacity-8" />
      <BotanicalDecor
        position="bottom-right"
        size="md"
        className="opacity-10"
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
              {t("about.title")}
            </h2>
            <Leaf className="w-8 h-8 text-primary-gold ml-3 scale-x-[-1]" />
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
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
                      d="M10,90 Q30,70 50,80 Q70,90 90,70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-primary-gold"
                    />
                    <ellipse
                      cx="30"
                      cy="75"
                      rx="3"
                      ry="5"
                      transform="rotate(-20 30 75)"
                      className="text-primary-gold"
                      fill="currentColor"
                    />
                    <ellipse
                      cx="70"
                      cy="85"
                      rx="2"
                      ry="4"
                      transform="rotate(30 70 85)"
                      className="text-primary-gold"
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

                  {/* Decorative element */}
                  <div className="absolute bottom-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Leaf className="w-4 h-4 text-primary-gold" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">
            {t("about.why.title")}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 text-left">
              <CheckCircle className="w-6 h-6 text-primary-gold flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("about.why.recipe.title")}
                </h4>
                <p className="text-gray-600 text-sm">
                  {t("about.why.recipe.desc")}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 text-left">
              <CheckCircle className="w-6 h-6 text-primary-gold flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("about.why.ingredients.title")}
                </h4>
                <p className="text-gray-600 text-sm">
                  {t("about.why.ingredients.desc")}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 text-left">
              <CheckCircle className="w-6 h-6 text-primary-gold flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("about.why.ambiance.title")}
                </h4>
                <p className="text-gray-600 text-sm">
                  {t("about.why.ambiance.desc")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
