import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tmfcompta.be";

  const routes = ["", "/about", "/contact", "/general-accounting", "/legal"];
  const languages = ["fr", "ro"];

  const sitemap = languages.flatMap((lang) =>
    routes.map((route) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );

  return sitemap;
}
