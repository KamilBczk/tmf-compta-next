interface MetadataConfig {
  [key: string]: {
    [key: string]: {
      title: string;
      description: string;
    };
  };
}

export const metadata: MetadataConfig = {
  home: {
    fr: {
      title: "TMF Compta | Cabinet comptable à Zaventem",
      description:
        "Cabinet d'expertise comptable et fiscale situé à Zaventem. Services de comptabilité, fiscalité et conseil pour entreprises et indépendants.",
    },
    ro: {
      title: "TMF Compta | Cabinet contabil în Zaventem",
      description:
        "Cabinet de expertiză contabilă și fiscală situat în Zaventem. Servicii de contabilitate, fiscalitate și consultanță pentru companii și independenți.",
    },
  },
  about: {
    fr: {
      title: "À propos | TMF Compta",
      description:
        "Découvrez notre cabinet comptable, notre histoire et notre équipe d'experts dévoués à votre réussite financière.",
    },
    ro: {
      title: "Despre noi | TMF Compta",
      description:
        "Descoperiți cabinetul nostru contabil, istoria noastră și echipa noastră de experți dedicați succesului dumneavoastră financiar.",
    },
  },
  contact: {
    fr: {
      title: "Contact | TMF Compta",
      description:
        "Contactez notre cabinet comptable à Zaventem. Notre équipe est à votre disposition pour répondre à vos questions.",
    },
    ro: {
      title: "Contact | TMF Compta",
      description:
        "Contactați cabinetul nostru contabil din Zaventem! Echipa noastră este gata să vă ajute și să răspundă la toate întrebările dumneavoastră.",
    },
  },
  "general-accounting": {
    fr: {
      title: "Comptabilité Générale | TMF Compta",
      description:
        "Services de comptabilité générale pour entreprises et indépendants. Expertise comptable et fiscale à Zaventem.",
    },
    ro: {
      title: "Contabilitate Generală | TMF Compta",
      description:
        "Servicii de contabilitate generală pentru companii și independenți. Expertiză contabilă și fiscală în Zaventem.",
    },
  },
  legal: {
    fr: {
      title: "Mentions Légales | TMF Compta",
      description:
        "Mentions légales et conditions générales d'utilisation du cabinet comptable TMF Compta à Zaventem.",
    },
    ro: {
      title: "Mențiuni Legale | TMF Compta",
      description:
        "Mențiuni legale și condiții generale de utilizare ale cabinetului contabil TMF Compta din Zaventem.",
    },
  },
};
