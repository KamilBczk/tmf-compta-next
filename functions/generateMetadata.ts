import { metadata } from "@/functions/metadata";

export function generateMetadata(page: string, lang: string) {
  const defaultMetadata = {
    title: "TMF Compta",
    description: "",
  };

  return {
    ...defaultMetadata,
    ...metadata[page]?.[lang],
    alternates: {
      languages: {
        fr: `/${lang === "fr" ? "" : "fr"}`,
        ro: "/ro",
      },
    },
  };
}
