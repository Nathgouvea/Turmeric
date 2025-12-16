"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface OpeningHoursData {
  isOpen: boolean;
  weekdayDescriptions: string[];
  periods: Array<{
    open: { day: number; hour: number; minute: number };
    close: { day: number; hour: number; minute: number };
  }>;
}

const OpeningStatus = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [currentTime, setCurrentTime] = useState("");
  const [hoursData, setHoursData] = useState<OpeningHoursData | null>(null);
  const { t } = useLanguage();

  // Fetch opening hours from Google Places API via our serverless function
  useEffect(() => {
    const fetchOpeningHours = async () => {
      try {
        const response = await fetch("/api/opening-hours");
        if (response.ok) {
          const data: OpeningHoursData = await response.json();
          setHoursData(data);
          setIsOpen(data.isOpen);
        } else {
          // Fallback to local calculation if API fails
          fallbackToLocalCalculation();
        }
      } catch (error) {
        console.error("Failed to fetch opening hours:", error);
        // Fallback to local calculation if API fails
        fallbackToLocalCalculation();
      }
    };

    const fallbackToLocalCalculation = () => {
      const portugalTime = new Date().toLocaleString("en-US", {
        timeZone: "Europe/Lisbon",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const hour = parseInt(portugalTime.split(":")[0]);
      const currentDay = new Date().getDay();
      // Fallback hours: 12:00-15:00 and 19:00-22:00, closed Mondays
      const isLunchTime = hour >= 12 && hour < 15;
      const isDinnerTime = hour >= 19 && hour < 22;
      setIsOpen((isLunchTime || isDinnerTime) && currentDay !== 1);
    };

    fetchOpeningHours();

    // Refresh every 5 minutes
    const interval = setInterval(fetchOpeningHours, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Update current time display
  useEffect(() => {
    const updateTime = () => {
      const portugalTime = new Intl.DateTimeFormat("pt-PT", {
        timeZone: "Europe/Lisbon",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
      setCurrentTime(portugalTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Show loading state while fetching
  if (isOpen === null) {
    return (
      <div className="flex items-center space-x-2">
        <Clock className="w-4 h-4 text-gray-600" />
        <span className="text-sm text-gray-600">{currentTime} (Portugal)</span>
        <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
      </div>
    );
  }

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
