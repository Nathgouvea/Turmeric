import { useState, useEffect } from "react";

const API_URL = "https://turmeric-rlzdgiboj-nathielles-projects.vercel.app/api/opening-hours";

export interface OpeningHoursData {
  isOpen: boolean;
  weekdayDescriptions: string[];
  periods: Array<{
    open: { day: number; hour: number; minute: number };
    close: { day: number; hour: number; minute: number };
  }>;
}

interface UseOpeningHoursReturn {
  isOpen: boolean | null;
  hoursData: OpeningHoursData | null;
  loading: boolean;
  error: boolean;
}

export const useOpeningHours = (): UseOpeningHoursReturn => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [hoursData, setHoursData] = useState<OpeningHoursData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchOpeningHours = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data: OpeningHoursData = await response.json();
          setHoursData(data);
          setIsOpen(data.isOpen);
          setError(false);
        } else {
          console.error("Failed to fetch opening hours:", response.status);
          setError(true);
        }
      } catch (err) {
        console.error("Failed to fetch opening hours:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchOpeningHours();

    // Refresh every 5 minutes
    const interval = setInterval(fetchOpeningHours, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return { isOpen, hoursData, loading, error };
};

// Helper function to parse weekday descriptions from Google API
export const parseWeekdayDescriptions = (
  descriptions: string[],
  dayLabels: { [key: string]: string }
): Array<{ day: string; hours: string; isOpen: boolean }> | null => {
  if (!descriptions || descriptions.length === 0) {
    return null;
  }

  // Google returns descriptions in order: Monday, Tuesday, ..., Sunday
  const dayOrder = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  return descriptions.map((desc, index) => {
    const dayName = dayOrder[index];
    const translatedDay = dayLabels[dayName] || desc.split(":")[0];

    // Extract hours part (after the day name and colon)
    const hoursPart = desc.includes(":") ? desc.split(":").slice(1).join(":").trim() : desc;
    const isClosed = hoursPart.toLowerCase().includes("closed") || hoursPart.toLowerCase().includes("fechado");

    return {
      day: translatedDay,
      hours: isClosed ? "Closed" : hoursPart,
      isOpen: !isClosed,
    };
  });
};
