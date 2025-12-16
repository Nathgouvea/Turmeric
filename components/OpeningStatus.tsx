"use client";

import { useState, useEffect } from "react";
import { Clock, ExternalLink } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const API_URL = "https://turmeric-rlzdgiboj-nathielles-projects.vercel.app/api/opening-hours";

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
  const [error, setError] = useState(false);
  const { t } = useLanguage();

  // Fetch opening hours from Google Places API via Vercel serverless function
  useEffect(() => {
    const fetchOpeningHours = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data: OpeningHoursData = await response.json();
          setIsOpen(data.isOpen);
          setError(false);
        } else {
          console.error("Failed to fetch opening hours:", response.status);
          setError(true);
        }
      } catch (err) {
        console.error("Failed to fetch opening hours:", err);
        setError(true);
      }
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

  // Show error state - link to Google for hours
  if (error) {
    return (
      <div className="flex items-center space-x-2">
        <Clock className="w-4 h-4 text-gray-600" />
        <span className="text-sm text-gray-600">{currentTime} (Portugal) -</span>
        <a
          href="https://maps.google.com/?q=Turmeric+Restaurant+Porto"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary-gold hover:underline flex items-center gap-1"
        >
          {t("ui.checkHoursOnGoogle") || "Check hours on Google"}
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    );
  }

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
