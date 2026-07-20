import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: null, // per ora lavoriamo in locale, niente TinaCloud ancora
  token: null,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "corsi",
        label: "Sezione Corsi",
        path: "content",
        format: "json",
        match: {
          include: "corsi",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "titolo",
            label: "Titolo della sezione",
          },
          {
            type: "string",
            name: "intro",
            label: "Testo introduttivo",
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "elenco",
            label: "Elenco corsi",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.nome || "Nuovo corso" }),
            },
            fields: [
              {
                type: "string",
                name: "nome",
                label: "Nome del corso",
              },
            ],
          },
        ],
      },
      {
        name: "contatti",
        label: "Contatti",
        path: "content",
        format: "json",
        match: {
          include: "contatti",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "indirizzo",
            label: "Indirizzo",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "telefono",
            label: "Telefono",
          },
          {
            type: "string",
            name: "email",
            label: "Email",
          },
          {
            type: "string",
            name: "piva",
            label: "P.IVA",
          },
          {
            type: "string",
            name: "facebook",
            label: "Link Facebook",
          },
          {
            type: "string",
            name: "instagram",
            label: "Link Instagram",
          },
          {
            type: "string",
            name: "tiktok",
            label: "Link TikTok",
          },
          {
            type: "string",
            name: "whatsapp",
            label: "Link WhatsApp",
          },
        ],
      },
      {
        name: "docenti",
        label: "Docenti",
        path: "content",
        format: "json",
        match: {
          include: "docenti",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "elenco",
            label: "Elenco docenti",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.nome || "Nuovo docente" }),
            },
            fields: [
              { type: "string", name: "nome", label: "Nome e cognome" },
              { type: "string", name: "ruolo", label: "Strumento / ruolo" },
              { type: "string", name: "cv", label: "Link al CV (PDF), lascia vuoto se non c'è" },
            ],
          },
        ],
      },
      {
        name: "presidenza",
        label: "Presidenza",
        path: "content",
        format: "json",
        match: { include: "presidenza" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "nome", label: "Nome e cognome" },
          { type: "string", name: "ruolo", label: "Ruolo" },
          { type: "string", name: "bio", label: "Biografia", ui: { component: "textarea" } },
        ],
      },
      {
        name: "mission",
        label: "Mission",
        path: "content",
        format: "json",
        match: { include: "mission" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "citazione", label: "Citazione in evidenza", ui: { component: "textarea" } },
          { type: "string", name: "testo", label: "Testo", ui: { component: "textarea" } },
        ],
      },
      {
        name: "soci",
        label: "Soci / Tessera",
        path: "content",
        format: "json",
        match: { include: "soci" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "testo", label: "Testo introduttivo", ui: { component: "textarea" } },
          { type: "string", name: "tesseraTitolo", label: "Titolo tessera" },
          { type: "string", name: "tesseraPrezzo", label: "Prezzo (es. € 35)" },
          { type: "string", name: "tesseraTesto", label: "Testo tessera", ui: { component: "textarea" } },
        ],
      },
      {
        name: "documenti",
        label: "Documenti PDF",
        path: "content",
        format: "json",
        match: { include: "documenti" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "statuto", label: "Statuto (PDF)" },
          { type: "image", name: "regolamento", label: "Regolamento (PDF)" },
          { type: "image", name: "modulo", label: "Modulo di iscrizione (PDF)" },
        ],
      },
      {
        name: "chiSiamo",
        label: "Chi Siamo",
        path: "content",
        format: "json",
        match: { include: "chi-siamo" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "titolo", label: "Titolo" },
          {
            type: "object", name: "stats", label: "Statistiche", list: true,
            ui: { itemProps: (item) => ({ label: item?.etichetta || "Statistica" }) },
            fields: [
              { type: "string", name: "numero", label: "Numero" },
              { type: "string", name: "etichetta", label: "Etichetta" },
            ],
          },
          { type: "string", name: "testo", label: "Testo storico", ui: { component: "textarea" } },
        ],
      },
      {
        name: "eventi",
        label: "Eventi",
        path: "content",
        format: "json",
        match: { include: "eventi" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object", name: "elenco", label: "Elenco eventi", list: true,
            ui: { itemProps: (item) => ({ label: item?.titolo || "Nuovo evento" }) },
            fields: [
              { type: "string", name: "titolo", label: "Titolo evento" },
              { type: "string", name: "testo", label: "Descrizione", ui: { component: "textarea" } },
            ],
          },
        ],
      },
      {
        name: "premio",
        label: "Premio Frescobaldi",
        path: "content",
        format: "json",
        match: { include: "premio" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "testo", label: "Testo", ui: { component: "textarea" } },
          {
            type: "object", name: "alboOro", label: "Albo d'oro", list: true,
            ui: { itemProps: (item) => ({ label: item?.nome || "Nome" }) },
            fields: [{ type: "string", name: "nome", label: "Nome" }],
          },
        ],
      },
      {
        name: "testiVari",
        label: "Testi vari (Candidature, Trasparenza, Footer)",
        path: "content",
        format: "json",
        match: { include: "testi-vari" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "candidatureTitolo", label: "Titolo ricerca insegnanti" },
          { type: "string", name: "candidatureTesto", label: "Testo ricerca insegnanti", ui: { component: "textarea" } },
          { type: "string", name: "trasparenzaTesto", label: "Testo trasparenza", ui: { component: "textarea" } },
          { type: "string", name: "footerDescrizione", label: "Descrizione nel footer", ui: { component: "textarea" } },
        ],
      },
      {
        name: "galleria",
        label: "Galleria fotografica",
        path: "content",
        format: "json",
        match: { include: "galleria" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object", name: "immagini", label: "Foto della galleria", list: true,
            ui: { itemProps: (item) => ({ label: item?.alt || "Foto" }) },
            fields: [
              { type: "image", name: "url", label: "Immagine" },
              { type: "string", name: "alt", label: "Descrizione (per accessibilità)" },
            ],
          },
        ],
      },
      {
        name: "header",
        label: "Header e Hero (intestazione)",
        path: "content",
        format: "json",
        match: { include: "header" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "logoMain", label: "Nome nel logo (menu)" },
          { type: "string", name: "logoSub", label: "Sottotitolo nel logo (menu)" },
          { type: "string", name: "heroEyebrow", label: "Testo piccolo sopra il titolo" },
          { type: "string", name: "heroTitolo", label: "Titolo principale" },
          { type: "string", name: "heroSottotitolo", label: "Sottotitolo" },
          { type: "string", name: "heroDescrizione", label: "Descrizione", ui: { component: "textarea" } },
        ],
      },
      {
        name: "iniziative",
        label: "Iniziative",
        path: "content",
        format: "json",
        match: { include: "iniziative" },
        ui: {
          // Il documento (file) resta unico e fisso; dentro però l'elenco
          // "elenco" permette di aggiungere/togliere voci liberamente.
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: "object", name: "elenco", label: "Iniziative", list: true,
            ui: {
              itemProps: (item) => ({ label: item?.testo?.slice(0, 40) || "Nuova iniziativa" }),
              defaultItem: () => ({ testo: "Nuovo testo...", foto: "" }),
            },
            fields: [
              { type: "string", name: "testo", label: "Testo del paragrafo", ui: { component: "textarea" } },
              { type: "image", name: "foto", label: "Foto" },
            ],
          },
        ],
      },
    ],
  },
});
