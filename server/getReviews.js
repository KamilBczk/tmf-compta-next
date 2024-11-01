"use server";
export async function getReviews(lang) {
  const { Client } = require("@googlemaps/google-maps-services-js");

  const client = new Client({});
  try {
    const response = await client.placeDetails({
      params: {
        place_id: "ChIJrV2zw6zcw0cR3pZoo1RQ6j8",
        fields: ["reviews"],
        language: lang,
        key: process.env.GOOGLE_API_KEY,
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
