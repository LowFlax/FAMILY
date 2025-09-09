import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, TreePine, ChevronRight, Home } from "lucide-react";
import { useFamilyStore } from "../../store/familyStore";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useFamilyStore();

  const menuItems = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À Propos" },
    { path: "/family-tree", label: "Arbre Généalogique" },
    { path: "/info", label: "Informations Utiles" },
    { path: "/gallery", label: "Galerie" },
    { path: "/news", label: "Actualités" },
    { path: "/contact", label: "Contact" },
  ];

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || (location.pathname !== "/" && breadcrumbs.length > 0)
            ? `bg-white/90 backdrop-blur-xl shadow-2xl ${
                location.pathname !== "/" && breadcrumbs.length > 0
                  ? ""
                  : "border-b border-gray-200/50 dark:border-gray-700/50"
              } dark:bg-gray-900/90`
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 text-2xl font-light tracking-wide text-gray-900 dark:text-white hover:text-primary transition-all duration-300"
            >
              <TreePine className="h-7 w-7 text-primary" />
              <span>Famille Dupont</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-12">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative text-sm font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-gray-600 dark:text-gray-300 hover:text-primary"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Dark Mode Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-6">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Breadcrumb intégré */}
          {location.pathname !== "/" && breadcrumbs.length > 0 && (
            <div
              className={`py-2 border-t ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
              aria-label="Fil d'Ariane"
            >
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
                  <li
                    key={breadcrumb.path}
                    className="flex items-center space-x-2"
                  >
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
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
            onClick={closeMenu}
          />
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-500 ease-out">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-8 border-b border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center space-x-3">
                  <TreePine className="h-6 w-6 text-primary" />
                  <span className="text-xl font-light tracking-wide text-gray-900 dark:text-white">
                    Famille Dupont
                  </span>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 px-8 py-8">
                <nav className="space-y-1">
                  {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;

                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={closeMenu}
                        className={`block px-4 py-4 text-lg font-light tracking-wide transition-all duration-300 ${
                          isActive
                            ? "text-primary border-l-4 border-primary bg-primary/5"
                            : "text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-8 border-t border-gray-200/50 dark:border-gray-700/50">
                <div className="text-center text-sm text-gray-500 dark:text-gray-400 font-light">
                  © 2024 Famille Dupont
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
