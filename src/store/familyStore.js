import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { familyTree } from '../data/mockData';

// Store principal pour la gestion de la famille
export const useFamilyStore = create(
  persist(
    (set, get) => ({
      // État initial
      members: familyTree.members,
      searchQuery: '',
      selectedMember: null,
      isModalOpen: false,
      modalType: null, // 'add', 'edit', 'delete'
      darkMode: false,

      // Actions pour les membres
      addMember: (memberData) => {
        const newMember = {
          id: Date.now(), // ID temporaire
          ...memberData,
          childrenIds: memberData.childrenIds || [],
        };
        
        set((state) => ({
          members: [...state.members, newMember],
        }));
      },

      updateMember: (id, memberData) => {
        set((state) => ({
          members: state.members.map((member) =>
            member.id === id ? { ...member, ...memberData } : member
          ),
        }));
      },

      deleteMember: (id) => {
        set((state) => ({
          members: state.members.filter((member) => member.id !== id),
        }));
      },

      // Actions pour la recherche
      setSearchQuery: (query) => {
        set({ searchQuery: query });
      },

      getFilteredMembers: () => {
        const { members, searchQuery } = get();
        if (!searchQuery) return members;
        
        return members.filter((member) =>
          member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (member.bio && member.bio.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      },

      // Actions pour les modales
      openModal: (type, member = null) => {
        set({
          isModalOpen: true,
          modalType: type,
          selectedMember: member,
        });
      },

      closeModal: () => {
        set({
          isModalOpen: false,
          modalType: null,
          selectedMember: null,
        });
      },

      // Actions pour le mode sombre
      toggleDarkMode: () => {
        set((state) => ({ darkMode: !state.darkMode }));
      },

      // Actions pour l'arbre généalogique
      getMembersByGeneration: (generation) => {
        const { members } = get();
        return members.filter((member) => member.generation === generation);
      },

      getMemberById: (id) => {
        const { members } = get();
        return members.find((member) => member.id === id);
      },

      getChildren: (parentId) => {
        const { members } = get();
        return members.filter((member) => member.parentId === parentId);
      },

      getSpouse: (memberId) => {
        const { members } = get();
        const member = members.find((m) => m.id === memberId);
        if (!member || !member.spouseId) return null;
        return members.find((m) => m.id === member.spouseId);
      },

      // Actions pour l'export
      exportToPDF: () => {
        // Logique d'export PDF (à implémenter avec jsPDF)
        console.log('Export to PDF');
      },

      exportToImage: () => {
        // Logique d'export image (à implémenter)
        console.log('Export to Image');
      },

      printTree: () => {
        // Logique d'impression
        window.print();
      },
    }),
    {
      name: 'family-store',
      partialize: (state) => ({
        members: state.members,
        darkMode: state.darkMode,
      }),
    }
  )
);

// Store pour les événements et calendrier
export const useEventsStore = create(
  persist(
    (set, get) => ({
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

      addEvent: (eventData) => {
        const newEvent = {
          id: Date.now(),
          ...eventData,
        };
        
        set((state) => ({
          events: [...state.events, newEvent],
        }));
      },

      updateEvent: (id, eventData) => {
        set((state) => ({
          events: state.events.map((event) =>
            event.id === id ? { ...event, ...eventData } : event
          ),
        }));
      },

      deleteEvent: (id) => {
        set((state) => ({
          events: state.events.filter((event) => event.id !== id),
        }));
      },

      getEventsByMonth: (year, month) => {
        const { events } = get();
        return events.filter((event) => {
          const eventDate = new Date(event.date);
          return eventDate.getFullYear() === year && eventDate.getMonth() === month;
        });
      },

      getUpcomingEvents: (days = 30) => {
        const { events } = get();
        const today = new Date();
        const futureDate = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);
        
        return events.filter((event) => {
          const eventDate = new Date(event.date);
          return eventDate >= today && eventDate <= futureDate;
        }).sort((a, b) => new Date(a.date) - new Date(b.date));
      },
    }),
    {
      name: 'events-store',
    }
  )
);

// Store pour la galerie
export const useGalleryStore = create(
  persist(
    (set, get) => ({
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

      selectedCategory: 'all',
      lightboxOpen: false,
      currentPhotoIndex: 0,

      addPhoto: (photoData) => {
        const newPhoto = {
          id: Date.now(),
          uploadDate: new Date().toISOString().split('T')[0],
          ...photoData,
        };
        
        set((state) => ({
          photos: [...state.photos, newPhoto],
        }));
      },

      deletePhoto: (id) => {
        set((state) => ({
          photos: state.photos.filter((photo) => photo.id !== id),
        }));
      },

      setSelectedCategory: (category) => {
        set({ selectedCategory: category });
      },

      getFilteredPhotos: () => {
        const { photos, selectedCategory } = get();
        if (selectedCategory === 'all') return photos;
        return photos.filter((photo) => photo.category === selectedCategory);
      },

      openLightbox: (index) => {
        set({
          lightboxOpen: true,
          currentPhotoIndex: index,
        });
      },

      closeLightbox: () => {
        set({
          lightboxOpen: false,
          currentPhotoIndex: 0,
        });
      },

      nextPhoto: () => {
        const { photos, currentPhotoIndex } = get();
        const nextIndex = (currentPhotoIndex + 1) % photos.length;
        set({ currentPhotoIndex: nextIndex });
      },

      previousPhoto: () => {
        const { photos, currentPhotoIndex } = get();
        const prevIndex = currentPhotoIndex === 0 ? photos.length - 1 : currentPhotoIndex - 1;
        set({ currentPhotoIndex: prevIndex });
      },
    }),
    {
      name: 'gallery-store',
    }
  )
);

// Store pour les actualités
export const useNewsStore = create(
  persist(
    (set, get) => ({
      articles: [
        {
          id: 1,
          title: "Nouvelle naissance dans la famille !",
          excerpt: "Nous sommes ravis d'annoncer la naissance de notre nouveau petit cousin...",
          content: "Nous sommes ravis d'annoncer la naissance de notre nouveau petit cousin, né le 15 mars 2024. Maman et bébé se portent à merveille. Toute la famille est en liesse et nous attendons avec impatience de pouvoir le rencontrer...",
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
          excerpt: "Notre traditionnelle réunion de printemps s'est déroulée dans la joie et la bonne humeur...",
          content: "Notre traditionnelle réunion de printemps s'est déroulée dans la joie et la bonne humeur. Nous étions tous réunis au domaine familial pour partager un moment convivial. Au programme : barbecue, jeux pour les enfants, et bien sûr, beaucoup de discussions et de rires...",
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
          excerpt: "Lucas et sa fiancée ont officialisé leur union et nous invitent tous à célébrer...",
          content: "Lucas et sa fiancée ont officialisé leur union et nous invitons tous à célébrer ce grand jour le 15 septembre 2024. La cérémonie aura lieu dans le jardin familial, suivi d'une réception dans la grange rénovée. Nous sommes tous très heureux de cette nouvelle...",
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
          excerpt: "Marie partage avec nous sa fameuse recette de tarte aux pommes...",
          content: "Marie partage avec nous sa fameuse recette de tarte aux pommes, transmise de génération en génération. Cette recette a fait le bonheur de toute la famille pendant des décennies. Les ingrédients secrets et les techniques particulières sont maintenant documentés pour les générations futures...",
          author: "Marie Dupont",
          publishDate: "2024-05-25",
          imageUrl: "/images/news/grandma-apple-pie-recipe.jpg",
          category: "recette",
          tags: ["recette", "tradition", "cuisine"],
          readTime: "6 min",
        },
      ],

      selectedCategory: 'all',

      addArticle: (articleData) => {
        const newArticle = {
          id: Date.now(),
          publishDate: new Date().toISOString().split('T')[0],
          ...articleData,
        };
        
        set((state) => ({
          articles: [...state.articles, newArticle],
        }));
      },

      updateArticle: (id, articleData) => {
        set((state) => ({
          articles: state.articles.map((article) =>
            article.id === id ? { ...article, ...articleData } : article
          ),
        }));
      },

      deleteArticle: (id) => {
        set((state) => ({
          articles: state.articles.filter((article) => article.id !== id),
        }));
      },

      setSelectedCategory: (category) => {
        set({ selectedCategory: category });
      },

      getFilteredArticles: () => {
        const { articles, selectedCategory } = get();
        if (selectedCategory === 'all') return articles;
        return articles.filter((article) => article.category === selectedCategory);
      },

      getArticleById: (id) => {
        const { articles } = get();
        return articles.find((article) => article.id === parseInt(id));
      },
    }),
    {
      name: 'news-store',
    }
  )
);

// Store pour les contacts
export const useContactStore = create(
  persist(
    (set, get) => ({
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

      messages: [],

      addContact: (contactData) => {
        const newContact = {
          id: Date.now(),
          ...contactData,
        };
        
        set((state) => ({
          contacts: [...state.contacts, newContact],
        }));
      },

      updateContact: (id, contactData) => {
        set((state) => ({
          contacts: state.contacts.map((contact) =>
            contact.id === id ? { ...contact, ...contactData } : contact
          ),
        }));
      },

      deleteContact: (id) => {
        set((state) => ({
          contacts: state.contacts.filter((contact) => contact.id !== id),
        }));
      },

      addMessage: (messageData) => {
        const newMessage = {
          id: Date.now(),
          timestamp: new Date().toISOString(),
          ...messageData,
        };
        
        set((state) => ({
          messages: [...state.messages, newMessage],
        }));
      },

      getEmergencyContacts: () => {
        const { contacts } = get();
        return contacts.filter((contact) => contact.emergency);
      },
    }),
    {
      name: 'contact-store',
    }
  )
);
