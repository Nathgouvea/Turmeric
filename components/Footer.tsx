"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Heart, Star } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="font-great-vibes text-3xl text-primary-gold mb-2">
                Turmeric
              </h3>
              <p className="text-sm text-gray-400 -mt-1">
                حلال Pakistani & Indian Restaurant
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary-gold text-primary-gold"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400">
                {t("footer.rating")}
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">
              {t("footer.quicklinks")}
            </h4>
            <ul className="space-y-3">
              {[
                { name: t("nav.home"), href: "#home" },
                { name: t("nav.menu"), href: "#menu" },
                { name: t("nav.reservations"), href: "#reservations" },
                { name: t("nav.contact"), href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-gold transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">
              {t("footer.contactinfo")}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    R. Formosa 429
                    <br />
                    4000-253 Porto
                    <br />
                    Portugal
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-gold flex-shrink-0" />
                <p className="text-gray-300 text-sm">+351 22 208 6926</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-gold flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  turmeric.porto@gmail.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Opening Hours Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-primary-gold rounded-xl"
        >
          <div className="text-center">
            <h4 className="text-xl font-semibold text-white mb-2">
              {t("footer.dailyhours")}
            </h4>
            <p className="text-white text-lg">{t("footer.everyday")}</p>
            <p className="text-white/90 text-sm mt-2">
              {t("footer.recommendation")}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-sm text-gray-400"
            >
              <span>© 2025 Turmeric Restaurant. {t("ui.madeWith")}</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2,
                }}
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>{t("ui.by")}</span>
              <a
                href="https://pickypixels.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-gold hover:text-yellow-400 transition-colors"
              >
                Picky Pixels Studio
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm text-gray-400"
            >
              <a href="#" className="hover:text-primary-gold transition-colors">
                {t("footer.privacy")}
              </a>
              <a href="#" className="hover:text-primary-gold transition-colors">
                {t("footer.terms")}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
