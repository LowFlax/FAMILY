import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Newspaper, Camera } from 'lucide-react';
import { homePage } from '../data/mockData';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-family.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            {homePage.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
            {homePage.hero.subtitle}
          </p>
          <Link
            to={homePage.hero.ctaLink}
            className="inline-flex items-center space-x-2 bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 animate-scale-in"
          >
            <span>{homePage.hero.ctaText}</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="section-padding bg-neutral-lightGray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Découvrez Notre Famille
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explorez notre histoire, nos souvenirs et nos traditions à travers ces sections principales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homePage.featuredSections.map((section, index) => (
              <div
                key={section.id}
                className="group card hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {section.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {section.description}
                </p>
                
                <Link
                  to={section.link}
                  className="inline-flex items-center space-x-2 text-secondary hover:text-secondary-dark font-medium transition-colors duration-300"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">9</h3>
              <p className="text-gray-600">Membres de la famille</p>
            </div>
            
            <div className="p-8">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">150+</h3>
              <p className="text-gray-600">Photos de famille</p>
            </div>
            
            <div className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Newspaper className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">25+</h3>
              <p className="text-gray-600">Années d'histoire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">
            Rejoignez Notre Histoire
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Découvrez l'arbre généalogique complet de notre famille et explorez nos plus beaux souvenirs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/family-tree"
              className="btn-secondary"
            >
              Voir l'Arbre Généalogique
            </Link>
            <Link
              to="/gallery"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Explorer la Galerie
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
