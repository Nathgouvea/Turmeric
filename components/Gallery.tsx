"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useLanguage();

  const galleryItems = [
    {
      src: "/the-ambient.jpg",
      title: t("gallery.items.elegantAmbiance.title"),
      description: t("gallery.items.elegantAmbiance.description"),
      category: t("gallery.categories.interior"),
    },
    {
      src: "/family.dining-experience.jpeg",
      title: t("gallery.items.familyDining.title"),
      description: t("gallery.items.familyDining.description"),
      category: t("gallery.categories.experience"),
    },
    {
      src: "/Chicken-Lollypop.jpeg",
      title: t("gallery.items.chickenLollypop.title"),
      description: t("gallery.items.chickenLollypop.description"),
      category: t("gallery.categories.appetizers"),
    },
    {
      src: "/chicken-saomsa.jpeg",
      title: t("gallery.items.chickenSamosa.title"),
      description: t("gallery.items.chickenSamosa.description"),
      category: t("gallery.categories.appetizers"),
    },
    {
      src: "/garlicnan-chicken-Kadhai.jpg",
      title: t("gallery.items.chickenKadhai.title"),
      description: t("gallery.items.chickenKadhai.description"),
      category: t("gallery.categories.mainDishes"),
    },
    {
      src: "/grill-Tandoori-Fish.jpg",
      title: t("gallery.items.tandooriFish.title"),
      description: t("gallery.items.tandooriFish.description"),
      category: t("gallery.categories.grills"),
    },
    {
      src: "/Onion-Bhaji.jpg",
      title: t("gallery.items.onionBhaji.title"),
      description: t("gallery.items.onionBhaji.description"),
      category: t("gallery.categories.appetizers"),
    },
    {
      src: "/mango-lassi.jpeg",
      title: t("gallery.items.mangoLassi.title"),
      description: t("gallery.items.mangoLassi.description"),
      category: t("gallery.categories.beverages"),
    },
    {
      src: "/Rasmalai-Kheer-dessert.jpeg",
      title: t("gallery.items.rasmalaiKheer.title"),
      description: t("gallery.items.rasmalaiKheer.description"),
      category: t("gallery.categories.desserts"),
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-accent to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-great-vibes text-5xl md:text-6xl text-primary-gold mb-4">
            {t("gallery.title")}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t("gallery.subtitle")}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="font-semibold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800 group-hover:text-primary-gold transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs bg-primary-gold text-white px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for expanded image view */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Gallery item"
                  className="w-full h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-primary-gold rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            {t("gallery.cta.title")}
          </h3>
          <p className="text-lg mb-6 opacity-90">
            {t("gallery.cta.description")}
          </p>
          <motion.button
            className="bg-white text-primary-gold px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.querySelector("#reservations")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {t("gallery.cta.button")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
