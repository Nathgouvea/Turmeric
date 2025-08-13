"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Star, ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import OpeningStatus from "./OpeningStatus";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
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
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Essential Info Card */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  {t("ui.restaurantInformation")}
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {t("contact.visit")}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        R. Formosa 429
                        <br />
                        4000-253 Porto, Portugal
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="mt-2 text-primary-gold hover:text-yellow-600 font-medium text-sm"
                        onClick={() =>
                          window.open(
                            "https://maps.google.com/?q=R.+Formosa+429,+4000-253+Porto,+Portugal",
                            "_blank"
                          )
                        }
                      >
                        {t("ui.getDirections")} →
                      </motion.button>
                    </div>
                  </div>

                  {/* Phone & Hours */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          {t("contact.call")}
                        </h4>
                        <p className="text-gray-600">+351 22 208 6926</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          {t("contact.hours")}
                        </h4>
                        <p className="text-gray-600 mb-2">
                          {t("contact.daily")}
                        </p>
                        <OpeningStatus />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews Links */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {t("ui.reviewsAndRatings")}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.a
                    href="https://www.google.com/search?q=turmeric+restaurant+porto+reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">
                        {t("reviews.googleTitle")}
                      </p>
                      <p className="text-sm text-gray-600">
                        {t("ui.customerExperiences")}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                  </motion.a>

                  <motion.a
                    href="https://www.tripadvisor.com/Restaurant_Review-g189180-d26847222-Reviews-Turmeric_Restaurant-Porto_Porto_District_Northern_Portugal.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">
                        {t("reviews.tripadvisorTitle")}
                      </p>
                      <p className="text-sm text-gray-600">
                        {t("ui.travelerReviews")}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-0 overflow-hidden h-full">
              <div className="h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.1158234782515!2d-8.610999!3d41.148722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464e1a17fc1c1%3A0x9e7e8b5a8c5a8c5a!2sR.%20Formosa%20429%2C%204000-253%20Porto%2C%20Portugal!5e0!3m2!1sen!2sus!4v1635789123456!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Turmeric Restaurant Location"
                ></iframe>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
