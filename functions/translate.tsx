import translations from "./translations.json";

export function translate(guid: string, language: string): string {
  if (!guid || !language) {
    console.error("Le GUID et la langue sont requis pour la traduction.");
    return guid;
  }

  try {
    const translation = (
      translations as Record<string, Record<string, string>>
    )[guid]?.[language];

    if (translation) {
      return translation;
    } else {
      console.warn(
        `Aucune traduction trouvée pour le GUID "${guid}" en ${language}.`
      );
      return guid;
    }
  } catch (error) {
    console.error(
      `Erreur lors du chargement des traductions pour ${language}:`,
      error
    );
    return guid;
  }
}
