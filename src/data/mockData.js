// DONNÉES MOCKS - SITE FAMILIAL
// Ordre de priorité de développement selon modules.txt

// MODULE 1 : IDENTITÉ VISUELLE & DESIGN SYSTEM (Priorité 1)
export const designSystem = {
  colors: {
    primary: "#2C3E50", // Bleu foncé principal
    primaryLight: "#34495E", // Variante claire
    primaryDark: "#1A252F", // Variante foncée
    secondary: "#E74C3C", // Rouge secondaire
    secondaryLight: "#EC7063", // Variante claire
    secondaryDark: "#C0392B", // Variante foncée
    neutral: {
      white: "#FFFFFF",
      lightGray: "#F8F9FA",
      gray: "#6C757D",
      darkGray: "#343A40",
      black: "#000000",
    },
  },
  typography: {
    primary: "Inter, sans-serif", // Police pour titres
    secondary: "Source Sans Pro, sans-serif", // Police pour corps de texte
  },
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    xxl: "3rem", // 48px
    xxxl: "4rem", // 64px
  },
  animations: {
    duration: {
      fast: "0.2s",
      normal: "0.3s",
      slow: "0.5s",
    },
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

// MODULE 2 : NAVIGATION & STRUCTURE (Priorité 2)
export const navigation = {
  mainMenu: [
    { id: 1, label: "Accueil", path: "/", icon: "home" },
    { id: 2, label: "À Propos", path: "/about", icon: "info" },
    { id: 3, label: "Arbre Généalogique", path: "/family-tree", icon: "tree" },
    { id: 4, label: "Informations Utiles", path: "/info", icon: "info-circle" },
    { id: 5, label: "Galerie", path: "/gallery", icon: "images" },
    { id: 6, label: "Actualités", path: "/news", icon: "newspaper" },
    { id: 7, label: "Contact", path: "/contact", icon: "envelope" },
  ],
  breadcrumbs: {
    home: { label: "Accueil", path: "/" },
    about: { label: "À Propos", path: "/about" },
    familyTree: { label: "Arbre Généalogique", path: "/family-tree" },
    info: { label: "Informations Utiles", path: "/info" },
    gallery: { label: "Galerie", path: "/gallery" },
    news: { label: "Actualités", path: "/news" },
    contact: { label: "Contact", path: "/contact" },
  },
};

// MODULE 3 : PAGE D'ACCUEIL (Priorité 3)
export const homePage = {
  hero: {
    title: "Bienvenue dans la Famille",
    subtitle: "Découvrez notre histoire, partagez nos souvenirs",
    backgroundImage: "/images/hero-family.jpg",
    ctaText: "Explorer l'arbre généalogique",
    ctaLink: "/family-tree",
  },
  featuredSections: [
    {
      id: 1,
      title: "Notre Histoire",
      description: "Une famille unie à travers les générations",
      image: "/images/family-history.jpg",
      link: "/about",
    },
    {
      id: 2,
      title: "Dernières Actualités",
      description: "Les dernières nouvelles de la famille",
      image: "/images/latest-news.jpg",
      link: "/news",
    },
    {
      id: 3,
      title: "Galerie Photos",
      description: "Nos plus beaux souvenirs en images",
      image: "/images/photo-gallery.jpg",
      link: "/gallery",
    },
  ],
};

// MODULE 4 : À PROPOS & ARBRE GÉNÉALOGIQUE (Priorité 4)
export const aboutPage = {
  introduction: {
    title: "Notre Histoire Familiale",
    content:
      "Depuis plusieurs générations, notre famille s'est construite autour de valeurs fortes et de traditions qui nous unissent. Cette page retrace notre parcours, nos origines et les moments qui ont façonné notre identité familiale.",
    image: "/images/family-heritage.jpg",
  },
};

export const familyTree = {
  members: [
    {
      id: 1,
      name: "Jean Dupont",
      birthDate: "1950-03-15",
      deathDate: null,
      role: "Père",
      generation: 1,
      parentId: null,
      spouseId: 2,
      childrenIds: [3, 4],
      photo: "/images/members/jean-dupont.jpg",
      bio: "Fondateur de la famille, entrepreneur dans le domaine de la construction.",
      contact: {
        email: "jean.dupont@email.com",
        phone: "+33 1 23 45 67 89",
        address: "123 Rue de la Paix, 75001 Paris",
      },
    },
    {
      id: 2,
      name: "Marie Dupont",
      birthDate: "1952-07-22",
      deathDate: null,
      role: "Mère",
      generation: 1,
      parentId: null,
      spouseId: 1,
      childrenIds: [3, 4],
      photo: "/images/members/marie-dupont.jpg",
      bio: "Infirmière à la retraite, passionnée de jardinage et de cuisine.",
      contact: {
        email: "marie.dupont@email.com",
        phone: "+33 1 23 45 67 90",
        address: "123 Rue de la Paix, 75001 Paris",
      },
    },
    {
      id: 3,
      name: "Pierre Dupont",
      birthDate: "1975-11-08",
      deathDate: null,
      role: "Fils",
      generation: 2,
      parentId: 1,
      spouseId: 5,
      childrenIds: [6, 7],
      photo: "/images/members/pierre-dupont.jpg",
      bio: "Ingénieur informatique, passionné de technologie et de sport.",
      contact: {
        email: "pierre.dupont@email.com",
        phone: "+33 1 23 45 67 91",
        address: "456 Avenue des Champs, 75008 Paris",
      },
    },
    {
      id: 4,
      name: "Sophie Dupont",
      birthDate: "1978-04-12",
      deathDate: null,
      role: "Fille",
      generation: 2,
      parentId: 1,
      spouseId: 8,
      childrenIds: [9],
      photo: "/images/members/sophie-dupont.jpg",
      bio: "Architecte, créative et amoureuse de l'art contemporain.",
      contact: {
        email: "sophie.dupont@email.com",
        phone: "+33 1 23 45 67 92",
        address: "789 Boulevard Saint-Germain, 75006 Paris",
      },
    },
    {
      id: 5,
      name: "Claire Martin",
      birthDate: "1976-09-30",
      deathDate: null,
      role: "Belle-fille",
      generation: 2,
      parentId: null,
      spouseId: 3,
      childrenIds: [6, 7],
      photo: "/images/members/claire-martin.jpg",
      bio: "Professeure de français, passionnée de littérature et de voyage.",
      contact: {
        email: "claire.martin@email.com",
        phone: "+33 1 23 45 67 93",
        address: "456 Avenue des Champs, 75008 Paris",
      },
    },
    {
      id: 6,
      name: "Lucas Dupont",
      birthDate: "2005-01-15",
      deathDate: null,
      role: "Petit-fils",
      generation: 3,
      parentId: 3,
      spouseId: null,
      childrenIds: [],
      photo: "/images/members/lucas-dupont.jpg",
      bio: "Étudiant en terminale, passionné de musique et de cinéma.",
      contact: {
        email: "lucas.dupont@email.com",
        phone: "+33 6 12 34 56 78",
        address: "456 Avenue des Champs, 75008 Paris",
      },
    },
    {
      id: 7,
      name: "Emma Dupont",
      birthDate: "2008-06-20",
      deathDate: null,
      role: "Petite-fille",
      generation: 3,
      parentId: 3,
      spouseId: null,
      childrenIds: [],
      photo: "/images/members/emma-dupont.jpg",
      bio: "Collégienne, passionnée de danse et de dessin.",
      contact: {
        email: "emma.dupont@email.com",
        phone: "+33 6 12 34 56 79",
        address: "456 Avenue des Champs, 75008 Paris",
      },
    },
    {
      id: 8,
      name: "Thomas Leroy",
      birthDate: "1975-12-03",
      deathDate: null,
      role: "Beau-fils",
      generation: 2,
      parentId: null,
      spouseId: 4,
      childrenIds: [9],
      photo: "/images/members/thomas-leroy.jpg",
      bio: "Chef cuisinier, créatif et amoureux de la gastronomie française.",
      contact: {
        email: "thomas.leroy@email.com",
        phone: "+33 1 23 45 67 94",
        address: "789 Boulevard Saint-Germain, 75006 Paris",
      },
    },
    {
      id: 9,
      name: "Léa Leroy",
      birthDate: "2010-03-10",
      deathDate: null,
      role: "Petite-fille",
      generation: 3,
      parentId: 4,
      spouseId: null,
      childrenIds: [],
      photo: "/images/members/lea-leroy.jpg",
      bio: "Écolière, curieuse et passionnée de sciences naturelles.",
      contact: {
        email: "lea.leroy@email.com",
        phone: "+33 6 12 34 56 80",
        address: "789 Boulevard Saint-Germain, 75006 Paris",
      },
    },
  ],
  searchPlaceholder: "Rechercher un membre de la famille...",
  exportOptions: [
    { id: "pdf", label: "Exporter en PDF", icon: "file-pdf" },
    { id: "image", label: "Exporter en Image", icon: "image" },
    { id: "print", label: "Imprimer", icon: "print" },
  ],
};

// MODULE 5 : INFORMATIONS UTILES (Priorité 5)
export const usefulInfo = {
  calendar: {
    events: [
      {
        id: 1,
        title: "Anniversaire de Jean",
        date: "2024-03-15",
        type: "birthday",
        memberId: 1,
        description: "Anniversaire de Jean Dupont - 74 ans",
        recurring: true,
      },
      {
        id: 2,
        title: "Réunion familiale",
        date: "2024-06-20",
        type: "family",
        memberId: null,
        description: "Réunion familiale annuelle au domaine familial",
        recurring: true,
      },
      {
        id: 3,
        title: "Anniversaire de Marie",
        date: "2024-07-22",
        type: "birthday",
        memberId: 2,
        description: "Anniversaire de Marie Dupont - 72 ans",
        recurring: true,
      },
      {
        id: 4,
        title: "Mariage de Lucas",
        date: "2024-09-15",
        type: "wedding",
        memberId: 6,
        description: "Mariage de Lucas avec sa fiancée",
        recurring: false,
      },
      {
        id: 5,
        title: "Anniversaire de Pierre",
        date: "2024-11-08",
        type: "birthday",
        memberId: 3,
        description: "Anniversaire de Pierre Dupont - 49 ans",
        recurring: true,
      },
    ],
  },
  contacts: [
    {
      id: 1,
      name: "Jean Dupont",
      role: "Père",
      phone: "+33 1 23 45 67 89",
      email: "jean.dupont@email.com",
      address: "123 Rue de la Paix, 75001 Paris",
      emergency: true,
    },
    {
      id: 2,
      name: "Marie Dupont",
      role: "Mère",
      phone: "+33 1 23 45 67 90",
      email: "marie.dupont@email.com",
      address: "123 Rue de la Paix, 75001 Paris",
      emergency: true,
    },
    {
      id: 3,
      name: "Pierre Dupont",
      role: "Fils",
      phone: "+33 1 23 45 67 91",
      email: "pierre.dupont@email.com",
      address: "456 Avenue des Champs, 75008 Paris",
      emergency: false,
    },
    {
      id: 4,
      name: "Sophie Dupont",
      role: "Fille",
      phone: "+33 1 23 45 67 92",
      email: "sophie.dupont@email.com",
      address: "789 Boulevard Saint-Germain, 75006 Paris",
      emergency: false,
    },
  ],
  documents: [
    {
      id: 1,
      title: "Acte de naissance - Jean Dupont",
      type: "birth_certificate",
      uploadDate: "2024-01-15",
      size: "2.3 MB",
      uploadedBy: "Marie Dupont",
      downloadUrl: "/documents/birth-jean-dupont.pdf",
      icon: "file-pdf",
    },
    {
      id: 2,
      title: "Arbre généalogique complet",
      type: "family_tree",
      uploadDate: "2024-01-20",
      size: "5.7 MB",
      uploadedBy: "Pierre Dupont",
      downloadUrl: "/documents/family-tree-complete.pdf",
      icon: "file-pdf",
    },
    {
      id: 3,
      title: "Photos de mariage - Pierre et Claire",
      type: "wedding_photos",
      uploadDate: "2024-02-01",
      size: "45.2 MB",
      uploadedBy: "Claire Martin",
      downloadUrl: "/documents/wedding-photos.zip",
      icon: "file-archive",
    },
    {
      id: 4,
      title: "Recettes familiales",
      type: "recipes",
      uploadDate: "2024-02-10",
      size: "1.8 MB",
      uploadedBy: "Marie Dupont",
      downloadUrl: "/documents/family-recipes.pdf",
      icon: "file-pdf",
    },
  ],
};

// MODULE 6 : GALERIE (Priorité 6)
export const gallery = {
  photos: [
    {
      id: 1,
      title: "Réunion familiale 2023",
      description: "Toute la famille réunie pour les fêtes de fin d'année",
      imageUrl: "/images/gallery/family-reunion-2023.jpg",
      thumbnailUrl: "/images/gallery/thumbs/family-reunion-2023.jpg",
      uploadDate: "2023-12-25",
      uploadedBy: "Pierre Dupont",
      tags: ["famille", "réunion", "2023"],
      category: "family",
    },
    {
      id: 2,
      title: "Anniversaire de Jean",
      description: "Célébration des 73 ans de Jean",
      imageUrl: "/images/gallery/jean-birthday-2023.jpg",
      thumbnailUrl: "/images/gallery/thumbs/jean-birthday-2023.jpg",
      uploadDate: "2023-03-15",
      uploadedBy: "Marie Dupont",
      tags: ["anniversaire", "jean", "2023"],
      category: "birthday",
    },
    {
      id: 3,
      title: "Vacances d'été",
      description: "Séjour en Bretagne avec les enfants",
      imageUrl: "/images/gallery/summer-vacation-2023.jpg",
      thumbnailUrl: "/images/gallery/thumbs/summer-vacation-2023.jpg",
      uploadDate: "2023-08-15",
      uploadedBy: "Sophie Dupont",
      tags: ["vacances", "été", "bretagne"],
      category: "vacation",
    },
    {
      id: 4,
      title: "Mariage de Pierre et Claire",
      description: "Le grand jour de Pierre et Claire",
      imageUrl: "/images/gallery/pierre-claire-wedding.jpg",
      thumbnailUrl: "/images/gallery/thumbs/pierre-claire-wedding.jpg",
      uploadDate: "2010-06-12",
      uploadedBy: "Jean Dupont",
      tags: ["mariage", "pierre", "claire"],
      category: "wedding",
    },
    {
      id: 5,
      title: "Naissance d'Emma",
      description: "Les premiers jours d'Emma",
      imageUrl: "/images/gallery/emma-birth.jpg",
      thumbnailUrl: "/images/gallery/thumbs/emma-birth.jpg",
      uploadDate: "2008-06-20",
      uploadedBy: "Claire Martin",
      tags: ["naissance", "emma", "bébé"],
      category: "birth",
    },
    {
      id: 6,
      title: "Noël en famille",
      description: "Célébration de Noël 2022",
      imageUrl: "/images/gallery/christmas-2022.jpg",
      thumbnailUrl: "/images/gallery/thumbs/christmas-2022.jpg",
      uploadDate: "2022-12-25",
      uploadedBy: "Marie Dupont",
      tags: ["noël", "famille", "2022"],
      category: "holiday",
    },
  ],
  categories: [
    { id: "all", label: "Toutes les photos", count: 6 },
    { id: "family", label: "Réunions familiales", count: 2 },
    { id: "birthday", label: "Anniversaires", count: 1 },
    { id: "vacation", label: "Vacances", count: 1 },
    { id: "wedding", label: "Mariages", count: 1 },
    { id: "birth", label: "Naissances", count: 1 },
    { id: "holiday", label: "Fêtes", count: 1 },
  ],
};

// MODULE 7 : NEWS/BLOG (Priorité 7)
export const news = {
  articles: [
    {
      id: 1,
      title: "Nouvelle naissance dans la famille !",
      excerpt:
        "Nous sommes ravis d'annoncer la naissance de notre nouveau petit cousin...",
      content:
        "Nous sommes ravis d'annoncer la naissance de notre nouveau petit cousin, né le 15 mars 2024. Maman et bébé se portent à merveille. Toute la famille est en liesse et nous attendons avec impatience de pouvoir le rencontrer...",
      author: "Marie Dupont",
      publishDate: "2024-03-16",
      imageUrl: "/images/news/new-baby-2024.jpg",
      category: "naissance",
      tags: ["naissance", "famille", "nouveau-né"],
      readTime: "3 min",
    },
    {
      id: 2,
      title: "Réunion familiale de printemps",
      excerpt:
        "Notre traditionnelle réunion de printemps s'est déroulée dans la joie et la bonne humeur...",
      content:
        "Notre traditionnelle réunion de printemps s'est déroulée dans la joie et la bonne humeur. Nous étions tous réunis au domaine familial pour partager un moment convivial. Au programme : barbecue, jeux pour les enfants, et bien sûr, beaucoup de discussions et de rires...",
      author: "Pierre Dupont",
      publishDate: "2024-04-20",
      imageUrl: "/images/news/spring-reunion-2024.jpg",
      category: "réunion",
      tags: ["réunion", "printemps", "famille"],
      readTime: "5 min",
    },
    {
      id: 3,
      title: "Mariage de Lucas prévu pour septembre",
      excerpt:
        "Lucas et sa fiancée ont officialisé leur union et nous invitent tous à célébrer...",
      content:
        "Lucas et sa fiancée ont officialisé leur union et nous invitent tous à célébrer ce grand jour le 15 septembre 2024. La cérémonie aura lieu dans le jardin familial, suivi d'une réception dans la grange rénovée. Nous sommes tous très heureux de cette nouvelle...",
      author: "Claire Martin",
      publishDate: "2024-05-10",
      imageUrl: "/images/news/lucas-wedding-announcement.jpg",
      category: "mariage",
      tags: ["mariage", "lucas", "célébration"],
      readTime: "4 min",
    },
    {
      id: 4,
      title: "Nouvelle recette de grand-mère",
      excerpt:
        "Marie partage avec nous sa fameuse recette de tarte aux pommes...",
      content:
        "Marie partage avec nous sa fameuse recette de tarte aux pommes, transmise de génération en génération. Cette recette a fait le bonheur de toute la famille pendant des décennies. Les ingrédients secrets et les techniques particulières sont maintenant documentés pour les générations futures...",
      author: "Marie Dupont",
      publishDate: "2024-05-25",
      imageUrl: "/images/news/grandma-apple-pie-recipe.jpg",
      category: "recette",
      tags: ["recette", "tradition", "cuisine"],
      readTime: "6 min",
    },
  ],
  categories: [
    { id: "all", label: "Toutes les actualités", count: 4 },
    { id: "naissance", label: "Naissances", count: 1 },
    { id: "réunion", label: "Réunions", count: 1 },
    { id: "mariage", label: "Mariages", count: 1 },
    { id: "recette", label: "Recettes", count: 1 },
  ],
};

// MODULE 8 : CONTACT (Priorité 8)
export const contact = {
  form: {
    fields: [
      {
        id: "name",
        label: "Nom complet",
        type: "text",
        required: true,
        placeholder: "Votre nom complet",
      },
      {
        id: "email",
        label: "Adresse email",
        type: "email",
        required: true,
        placeholder: "votre@email.com",
      },
      {
        id: "phone",
        label: "Téléphone",
        type: "tel",
        required: false,
        placeholder: "+33 1 23 45 67 89",
      },
      {
        id: "subject",
        label: "Sujet",
        type: "text",
        required: true,
        placeholder: "Objet de votre message",
      },
      {
        id: "message",
        label: "Message",
        type: "textarea",
        required: true,
        placeholder: "Votre message...",
        rows: 5,
      },
    ],
    submitText: "Envoyer le message",
    successMessage: "Votre message a été envoyé avec succès !",
    errorMessage: "Une erreur est survenue. Veuillez réessayer.",
  },
  contactInfo: {
    familyName: "Famille Dupont",
    address: {
      street: "123 Rue de la Paix",
      city: "75001 Paris",
      country: "France",
    },
    phone: "+33 1 23 45 67 89",
    email: "contact@famille-dupont.fr",
    website: "www.famille-dupont.fr",
    socialMedia: [
      {
        platform: "Facebook",
        url: "https://facebook.com/famille-dupont",
        icon: "facebook",
      },
      {
        platform: "Instagram",
        url: "https://instagram.com/famille_dupont",
        icon: "instagram",
      },
    ],
  },
  officeHours: {
    title: "Heures d'ouverture",
    schedule: [
      { day: "Lundi - Vendredi", hours: "9h00 - 18h00" },
      { day: "Samedi", hours: "10h00 - 16h00" },
      { day: "Dimanche", hours: "Fermé" },
    ],
  },
};

// MODULE 9 : COMPOSANTS RÉUTILISABLES (Priorité 9)
export const components = {
  buttons: {
    primary: {
      text: "Bouton principal",
      variant: "primary",
      size: "medium",
    },
    secondary: {
      text: "Bouton secondaire",
      variant: "secondary",
      size: "medium",
    },
    outline: {
      text: "Bouton contour",
      variant: "outline",
      size: "medium",
    },
  },
  cards: {
    member: {
      title: "Carte membre",
      subtitle: "Informations essentielles",
      image: "/images/cards/member-card.jpg",
      actions: ["Voir profil", "Contacter"],
    },
    event: {
      title: "Carte événement",
      subtitle: "Détails de l'événement",
      image: "/images/cards/event-card.jpg",
      actions: ["Voir détails", "Participer"],
    },
    article: {
      title: "Carte article",
      subtitle: "Extrait de l'article",
      image: "/images/cards/article-card.jpg",
      actions: ["Lire", "Partager"],
    },
  },
  modals: {
    addMember: {
      title: "Ajouter un nouveau membre",
      fields: [
        { id: "name", label: "Nom", type: "text", required: true },
        {
          id: "birthDate",
          label: "Date de naissance",
          type: "date",
          required: true,
        },
        {
          id: "role",
          label: "Rôle",
          type: "select",
          required: true,
          options: ["Père", "Mère", "Fils", "Fille", "Époux", "Épouse"],
        },
        { id: "photo", label: "Photo", type: "file", required: false },
        { id: "bio", label: "Biographie", type: "textarea", required: false },
      ],
      actions: ["Annuler", "Ajouter"],
    },
    editMember: {
      title: "Modifier les informations",
      fields: [
        { id: "name", label: "Nom", type: "text", required: true },
        {
          id: "birthDate",
          label: "Date de naissance",
          type: "date",
          required: true,
        },
        {
          id: "role",
          label: "Rôle",
          type: "select",
          required: true,
          options: ["Père", "Mère", "Fils", "Fille", "Époux", "Épouse"],
        },
        { id: "photo", label: "Photo", type: "file", required: false },
        { id: "bio", label: "Biographie", type: "textarea", required: false },
      ],
      actions: ["Annuler", "Sauvegarder"],
    },
    deleteMember: {
      title: "Confirmer la suppression",
      message:
        "Êtes-vous sûr de vouloir supprimer ce membre de l'arbre généalogique ?",
      actions: ["Annuler", "Supprimer"],
    },
  },
  responsive: {
    breakpoints: {
      mobile: "768px",
      tablet: "1024px",
      desktop: "1200px",
    },
    grid: {
      columns: {
        mobile: 1,
        tablet: 2,
        desktop: 3,
      },
    },
  },
  darkMode: {
    enabled: true,
    toggleText: "Mode sombre",
    toggleIcon: "moon",
    colors: {
      background: "#1a1a1a",
      surface: "#2d2d2d",
      text: "#ffffff",
      textSecondary: "#b3b3b3",
    },
  },
};

// DONNÉES GLOBALES
export const siteConfig = {
  title: "Famille Dupont",
  description:
    "Site familial - Arbre généalogique, galerie photos et actualités",
  logo: "/images/logo-famille-dupont.png",
  favicon: "/favicon.ico",
  language: "fr",
  timezone: "Europe/Paris",
  version: "1.0.0",
  lastUpdate: "2024-01-15",
};

// EXPORT PAR DÉFAUT
export default {
  designSystem,
  navigation,
  homePage,
  aboutPage,
  familyTree,
  usefulInfo,
  gallery,
  news,
  contact,
  components,
  siteConfig,
};
