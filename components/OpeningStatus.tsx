"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const OpeningStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    const updateStatus = () => {
      // Get Portugal time (WET/WEST timezone)
      const portugalTime = new Intl.DateTimeFormat("pt-PT", {
        timeZone: "Europe/Lisbon",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());

      setCurrentTime(portugalTime);

      // Parse the hour from the time string
      const hour = parseInt(portugalTime.split(":")[0]);

      // Restaurant is open from 14:00 to 22:00, closed on Mondays
      const currentDay = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
      const isCurrentlyOpen = hour >= 14 && hour < 22 && currentDay !== 1;
      setIsOpen(isCurrentlyOpen);
    };

    // Update immediately
    updateStatus();

    // Update every minute
    const interval = setInterval(updateStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <Clock className="w-4 h-4 text-gray-600" />
      <span className="text-sm text-gray-600">{currentTime} (Portugal) -</span>
      <span
        className={`text-sm font-medium ${
          isOpen ? "text-green-600" : "text-red-600"
        }`}
      >
        {isOpen ? t("ui.openNow") : t("ui.closedNow")}
      </span>
      <div
        className={`w-2 h-2 rounded-full ${
          isOpen ? "bg-green-500" : "bg-red-500"
        } animate-pulse`}
      />
    </div>
  );
};

export default OpeningStatus;
