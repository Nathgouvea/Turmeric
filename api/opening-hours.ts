import type { VercelRequest, VercelResponse } from "@vercel/node";

// Cache the response for 15 minutes (900 seconds)
const CACHE_MAX_AGE = 900;

interface GooglePlaceResponse {
  regularOpeningHours?: {
    openNow: boolean;
    weekdayDescriptions: string[];
    periods: Array<{
      open: { day: number; hour: number; minute: number };
      close: { day: number; hour: number; minute: number };
    }>;
  };
  currentOpeningHours?: {
    openNow: boolean;
    weekdayDescriptions: string[];
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return res.status(500).json({ error: "Missing API configuration" });
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=regularOpeningHours,currentOpeningHours`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google Places API error:", errorText);
      return res.status(response.status).json({ error: "Failed to fetch from Google Places API" });
    }

    const data: GooglePlaceResponse = await response.json();

    // Extract the relevant information
    const result = {
      isOpen: data.currentOpeningHours?.openNow ?? data.regularOpeningHours?.openNow ?? false,
      weekdayDescriptions:
        data.currentOpeningHours?.weekdayDescriptions ??
        data.regularOpeningHours?.weekdayDescriptions ??
        [],
      periods: data.regularOpeningHours?.periods ?? [],
    };

    // Set cache headers
    res.setHeader("Cache-Control", `s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate`);
    res.setHeader("Access-Control-Allow-Origin", "*");

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching opening hours:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
