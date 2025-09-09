import React from "react";
import { Link } from "react-router-dom";
import {
  TreePine,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Heart,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À Propos" },
    { path: "/family-tree", label: "Arbre Généalogique" },
    { path: "/gallery", label: "Galerie" },
    { path: "/news", label: "Actualités" },
    { path: "/contact", label: "Contact" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Adresse",
      value: "123 Rue de la Paix, 75001 Paris, France",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+33 1 23 45 67 89",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@famille-dupont.fr",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      url: "https://facebook.com/famille-dupont",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/famille_dupont",
    },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo et Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <TreePine className="h-8 w-8" />
                <span className="font-bold text-xl">Famille Dupont</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Un site familial dédié à la préservation de notre héritage, au
                partage de nos souvenirs et à la connexion entre les
                générations.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Liens Rapides */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Liens Rapides</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Informations de Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <li key={info.label} className="flex items-start space-x-3">
                      <Icon className="h-5 w-5 mt-0.5 text-secondary flex-shrink-0" />
                      <div>
                        <span className="text-gray-300 text-sm block">
                          {info.value}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Heures d'Ouverture */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Heures d'Ouverture</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>10h00 - 16h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Famille Dupont. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>Fait avec</span>
              <Heart className="h-4 w-4 text-secondary fill-current" />
              <span>pour la famille</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
