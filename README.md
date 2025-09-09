# Site Familial - Famille Dupont

Un site web moderne et élégant pour partager l'histoire, les souvenirs et les actualités d'une famille. Développé avec React, Vite, Tailwind CSS et Zustand.

## 🎨 Design

Le site suit les principes de design de Squarespace avec :

- **Design minimaliste** avec une palette de couleurs limitée (bleu foncé #2C3E50 et rouge #E74C3C)
- **Typographies élégantes** : Inter pour les titres, Source Sans Pro pour le corps
- **Espacement généreux** pour une interface aérée et non encombrée
- **Micro-animations** subtiles pour fluidifier l'expérience utilisateur
- **Responsive design** adaptatif sur tous les appareils

## 🚀 Fonctionnalités

### 📱 Pages Principales

- **Accueil** : Hero section avec call-to-action et sections mises en valeur
- **À Propos** : Histoire familiale, valeurs et timeline
- **Arbre Généalogique** : Visualisation interactive avec fonctionnalités CRUD
- **Informations Utiles** : Calendrier des événements et contacts d'urgence
- **Galerie** : Photos familiales avec lightbox et filtres par catégorie
- **Actualités** : Blog familial avec articles et filtres
- **Contact** : Formulaire de contact et informations

### 🔧 Fonctionnalités Techniques

- **Gestion d'état** avec Zustand pour les données familiales
- **Navigation responsive** avec menu hamburger sur mobile
- **Mode sombre** avec toggle persistant
- **Recherche en temps réel** dans l'arbre généalogique
- **Export PDF/Image** de l'arbre généalogique
- **Formulaires validés** avec feedback utilisateur
- **Animations fluides** avec CSS et transitions

## 🛠️ Technologies

- **React 18** - Framework JavaScript
- **Vite** - Build tool et serveur de développement
- **Tailwind CSS** - Framework CSS utilitaire
- **Zustand** - Gestion d'état légère
- **React Router** - Navigation côté client
- **Lucide React** - Icônes modernes
- **@tailwindcss/forms** - Styles de formulaires

## 📦 Installation

1. **Cloner le projet**

```bash
git clone [url-du-repo]
cd vite-project
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
```

4. **Ouvrir dans le navigateur**

```
http://localhost:5173
```

## 🏗️ Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   └── layout/         # Layout, Navbar, Footer, Breadcrumb
│       ├── Layout.jsx
│       ├── Navbar.jsx
│       ├── Footer.jsx
│       └── Breadcrumb.jsx
├── data/               # Données mock et configuration
│   └── mockData.js     # Données de la famille
├── pages/              # Pages principales
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── FamilyTreePage.jsx
│   ├── InfoPage.jsx
│   ├── GalleryPage.jsx
│   ├── NewsPage.jsx
│   └── ContactPage.jsx
├── store/              # Gestion d'état Zustand
│   └── familyStore.js  # Stores pour toutes les données
├── App.jsx             # Composant principal avec routes
├── main.jsx            # Point d'entrée
└── index.css           # Styles globaux et Tailwind
```

## 🎯 Modules Développés

### Module 1 : Identité Visuelle & Design System ✅

- Palette de couleurs cohérente
- Typographies hiérarchisées
- Système d'espacement
- Micro-animations

### Module 2 : Navigation & Structure ✅

- Navigation principale responsive
- Fil d'Ariane
- Layout avec Header/Footer

### Module 3 : Page d'Accueil ✅

- Hero section avec parallax
- Sections mises en valeur
- Statistiques familiales
- Call-to-action

### Module 4 : À Propos & Arbre Généalogique ✅

- Histoire familiale
- Timeline interactive
- Arbre généalogique avec CRUD
- Recherche et export

### Module 5 : Informations Utiles ✅

- Calendrier des événements
- Contacts d'urgence
- Liste des contacts

### Module 6 : Galerie ✅

- Grille de photos responsive
- Lightbox avec navigation
- Filtres par catégorie
- Actions de téléchargement/partage

### Module 7 : Actualités ✅

- Liste des articles
- Filtres par catégorie
- Métadonnées et tags
- Pagination

### Module 8 : Contact ✅

- Formulaire de contact
- Informations de contact
- Réseaux sociaux
- Heures d'ouverture

### Module 9 : Composants Réutilisables ✅

- Boutons, cartes, modales
- Design responsive
- Mode sombre

## 🎨 Palette de Couleurs

```css
/* Couleurs principales */
--primary: #2C3E50        /* Bleu foncé */
--primary-light: #34495E  /* Variante claire */
--primary-dark: #1A252F   /* Variante foncée */

--secondary: #E74C3C      /* Rouge */
--secondary-light: #EC7063 /* Variante claire */
--secondary-dark: #C0392B  /* Variante foncée */

/* Couleurs neutres */
--white: #FFFFFF
--light-gray: #F8F9FA
--gray: #6C757D
--dark-gray: #343A40
--black: #000000
```

## 📱 Responsive Design

- **Mobile** : < 768px (1 colonne)
- **Tablet** : 768px - 1024px (2 colonnes)
- **Desktop** : > 1024px (3 colonnes)

## 🔧 Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Aperçu du build
npm run lint     # Vérification ESLint
```

## 🚀 Déploiement

Le projet est prêt pour le déploiement sur :

- **Vercel** (recommandé)
- **Netlify**
- **GitHub Pages**
- **Surge.sh**

```bash
npm run build
# Déployer le dossier dist/
```

## 📝 Personnalisation

### Modifier les données familiales

Éditez le fichier `src/data/mockData.js` pour :

- Ajouter/modifier les membres de la famille
- Changer les événements du calendrier
- Mettre à jour les photos de la galerie
- Modifier les articles d'actualités

### Changer les couleurs

Modifiez `tailwind.config.js` pour personnaliser la palette de couleurs.

### Ajouter de nouvelles pages

1. Créez le composant dans `src/pages/`
2. Ajoutez la route dans `src/App.jsx`
3. Mettez à jour la navigation dans `src/ui/layout/Navbar.jsx`

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

Développé avec ❤️ pour préserver et partager l'héritage familial.

---

**Famille Dupont** - Site familial moderne et élégant
"# FAMILY" 
