"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Mail, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useLanguage } from "../contexts/LanguageContext";
import OpeningStatus from "./OpeningStatus";

const Reservations = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const operatingHours = [
    {
      day: t("reservations.hours.days.thursday"),
      hours: t("reservations.hours.time"),
      isOpen: true,
    },
    {
      day: t("reservations.hours.days.friday"),
      hours: t("reservations.hours.time"),
      isOpen: true,
    },
    {
      day: t("reservations.hours.days.saturday"),
      hours: t("reservations.hours.time"),
      isOpen: true,
    },
    {
      day: t("reservations.hours.days.sunday"),
      hours: t("reservations.hours.time"),
      isOpen: true,
    },
    {
      day: t("reservations.hours.days.monday"),
      hours: t("reservations.hours.time"),
      isOpen: true,
    },
    {
      day: t("reservations.hours.days.tuesday"),
      hours: t("reservations.hours.time"),
      isOpen: true,
    },
    {
      day: t("reservations.hours.days.wednesday"),
      hours: t("reservations.hours.time"),
      isOpen: true,
    },
  ];

  const timeSlots = [
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    // Don't prevent default - let the form submit to Formspree
    // Show success state immediately
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        message: "",
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="reservations" className="py-20 bg-white">
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
            {t("reservations.title")}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t("reservations.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="shadow-xl border-0 h-full">
              <CardHeader className="bg-primary-gold text-white rounded-t-lg">
                <CardTitle className="text-2xl font-semibold">
                  {t("reservations.form.title")}
                </CardTitle>
                <p className="opacity-90 p-[0px] pt-[0px] pr-[0px] pb-[10px] pl-[0px]">
                  {t("reservations.form.subtitle")}
                </p>
              </CardHeader>
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <form
                    action="https://formspree.io/f/xwpqajpp"
                    method="POST"
                    onSubmit={() => setIsSubmitted(true)}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          {t("reservations.form.name")}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder={t("reservations.form.placeholder.name")}
                          required
                          className="border-gray-300 focus:border-primary-gold focus:ring-primary-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          {t("reservations.form.phone")}
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder={t("reservations.form.placeholder.phone")}
                          required
                          className="border-gray-300 focus:border-primary-gold focus:ring-primary-gold"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        {t("reservations.form.email")}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t("reservations.form.placeholder.email")}
                        required
                        className="border-gray-300 focus:border-primary-gold focus:ring-primary-gold"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">
                          {t("reservations.form.date")}
                        </Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          required
                          className="border-gray-300 focus:border-primary-gold focus:ring-primary-gold"
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">
                          {t("reservations.form.time")}
                        </Label>
                        <select
                          name="time"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary-gold focus:ring-primary-gold"
                        >
                          <option value="">
                            {t("reservations.form.placeholder.time")}
                          </option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guests">
                          {t("reservations.form.guests")}
                        </Label>
                        <select
                          name="guests"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary-gold focus:ring-primary-gold"
                        >
                          <option value="">
                            {t("reservations.form.placeholder.guests")}
                          </option>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map(
                            (num) => (
                              <option key={num} value={num.toString()}>
                                {num}{" "}
                                {num === 1
                                  ? t("reservations.form.guest.singular")
                                  : t("reservations.form.guest.plural")}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {t("reservations.form.requests")}
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder={t(
                          "reservations.form.placeholder.requests"
                        )}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary-gold focus:ring-primary-gold resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary-gold hover:bg-yellow-600 text-white py-3 text-lg font-medium"
                      size="lg"
                      aria-label={`${t(
                        "reservations.form.submit"
                      )} reservation form`}
                    >
                      {t("reservations.form.submit")}
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      {t("reservations.form.confirmation")}
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
                      className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Reservation Submitted Successfully!
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <p className="text-lg">
                        Thank you for your reservation request. We have received your booking details.
                      </p>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="font-semibold text-yellow-800 mb-2">
                          ⏰ Confirmation Timeline
                        </p>
                        <p className="text-yellow-700">
                          We will confirm your reservation within <strong>24 hours</strong> via email or phone call. 
                          Please keep your phone available for our confirmation call.
                        </p>
                      </div>
                      <p className="text-sm text-gray-500">
                        If you don't hear from us within 24 hours, please contact us directly.
                      </p>
                    </div>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 bg-primary-gold hover:bg-yellow-600 text-white"
                    >
                      Make Another Reservation
                    </Button>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Restaurant Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-full"
          >
            {/* Operating Hours */}
            <Card className="shadow-xl border-0 h-full">
              <CardHeader className="bg-gray-900 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2 pt-[0px] pr-[0px] pb-[10px] pl-[0px]">
                  <Clock className="w-6 h-6" />
                  <span>{t("reservations.hours.title")}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {operatingHours.map((schedule, index) => (
                    <motion.div
                      key={schedule.day}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-gray-800">
                        {schedule.day}
                      </span>
                      <span
                        className={`font-semibold ${
                          schedule.isOpen ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {schedule.hours}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary-gold/10 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> {t("reservations.hours.note")}
                  </p>
                </div>
                <div className="mt-4">
                  <OpeningStatus />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
