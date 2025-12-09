"use server";
import { unstable_cache } from "next/cache";
import { Client } from "@googlemaps/google-maps-services-js";

// Fonction interne qui récupère les avis (sans cache)
async function fetchGoogleReviews(lang: string) {
  // Validate lang parameter - only allow fr or ro
  const allowedLangs = ["fr", "ro"];
  const safeLang = allowedLangs.includes(lang) ? lang : "fr";

  const client = new Client({});
  try {
    const response = await client.placeDetails({
      params: {
        place_id: "ChIJrV2zw6zcw0cR3pZoo1RQ6j8",
        fields: ["reviews"],
        language: safeLang as any, // Cast nécessaire pour compatibilité TypeScript
        key: process.env.GOOGLE_API_KEY!,
      },
      timeout: 1000, // millisecondes
    });

    if (response.data.result && response.data.result.reviews) {
      return response.data.result.reviews;
    } else {
      console.error("Aucun avis trouvé");
      return [];
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des avis Google:", error);
    return [];
  }
}

// Fonction exportée avec cache de 48h (172800 secondes)
// Le cache est séparé par langue grâce aux tags dynamiques
export async function getReviews(lang: string) {
  const getCachedReviews = unstable_cache(
    async (language: string) => fetchGoogleReviews(language),
    [`google-reviews`], // Cache key prefix
    {
      revalidate: 172800, // 48 heures en secondes
      tags: [`google-reviews-${lang}`], // Tag unique par langue pour invalidation sélective
    }
  );

  return getCachedReviews(lang);
}
