import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useFamilyStore } from "../../store/familyStore";

const Breadcrumb = () => {
  const location = useLocation();
  const { darkMode } = useFamilyStore();

  // Configuration des breadcrumbs
  const breadcrumbConfig = {
    "/": [],
    "/about": [
      { label: "Accueil", path: "/" },
      { label: "À Propos", path: "/about" },
    ],
    "/family-tree": [
      { label: "Accueil", path: "/" },
      { label: "Arbre Généalogique", path: "/family-tree" },
    ],
    "/info": [
      { label: "Accueil", path: "/" },
      { label: "Informations Utiles", path: "/info" },
    ],
    "/gallery": [
      { label: "Accueil", path: "/" },
      { label: "Galerie", path: "/gallery" },
    ],
    "/news": [
      { label: "Accueil", path: "/" },
      { label: "Actualités", path: "/news" },
    ],
    "/contact": [
      { label: "Accueil", path: "/" },
      { label: "Contact", path: "/contact" },
    ],
  };

  const breadcrumbs = breadcrumbConfig[location.pathname] || [];

  // Ne pas afficher le breadcrumb sur la page d'accueil
  if (location.pathname === "/" || breadcrumbs.length === 0) {
    return null;
  }

  return (
    <div
      className={`py-3 border-b ${
        darkMode
          ? "bg-gray-900/95 border-gray-700"
          : "bg-white/95 border-gray-200"
      } backdrop-blur-sm`}
      aria-label="Fil d'Ariane"
    >
      <div className="container-custom">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className={`flex items-center space-x-1 hover:text-secondary transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Accueil</span>
            </Link>
          </li>

          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.path} className="flex items-center space-x-2">
              <ChevronRight
                className={`h-4 w-4 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              />
              {index === breadcrumbs.length - 1 ? (
                <span
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-primary"
                  }`}
                  aria-current="page"
                >
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  to={breadcrumb.path}
                  className={`hover:text-secondary transition-colors duration-300 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Breadcrumb;
