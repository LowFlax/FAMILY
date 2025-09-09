import React from 'react';
import { aboutPage } from '../data/mockData';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-primary mb-6 animate-fade-in">
              {aboutPage.introduction.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 animate-slide-up">
              {aboutPage.introduction.content}
            </p>
          </div>
        </div>
      </section>

      {/* Family Heritage Image */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={aboutPage.introduction.image}
                alt="Héritage familial"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Notre Héritage</h3>
                <p className="text-lg opacity-90">Transmis de génération en génération</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Values */}
      <section className="section-padding bg-neutral-lightGray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Nos Valeurs Familiales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui nous unissent et guident notre famille depuis des générations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Solidarité</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous nous soutenons mutuellement dans les bons comme dans les mauvais moments, 
                créant un lien indéfectible entre tous les membres de la famille.
              </p>
            </div>

            <div className="card text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Tradition</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous préservons et transmettons nos traditions familiales, 
                nos recettes, nos histoires et nos valeurs aux générations futures.
              </p>
            </div>

            <div className="card text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Amour</h3>
              <p className="text-gray-600 leading-relaxed">
                L'amour inconditionnel est au cœur de notre famille, 
                créant un environnement chaleureux et bienveillant pour tous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Notre Histoire en Dates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les moments marquants qui ont façonné notre famille
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="card">
                      <h3 className="text-xl font-bold text-primary mb-2">1950</h3>
                      <p className="text-gray-600">Naissance de Jean Dupont, fondateur de notre famille</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2 pl-8">
                    <div className="card">
                      <h3 className="text-xl font-bold text-primary mb-2">1975</h3>
                      <p className="text-gray-600">Naissance de Pierre, premier enfant de la deuxième génération</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="card">
                      <h3 className="text-xl font-bold text-primary mb-2">2010</h3>
                      <p className="text-gray-600">Mariage de Pierre et Claire, union de deux familles</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2 pl-8">
                    <div className="card">
                      <h3 className="text-xl font-bold text-primary mb-2">2024</h3>
                      <p className="text-gray-600">Création de ce site familial pour préserver notre héritage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">
            Explorez Notre Arbre Généalogique
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Découvrez tous les membres de notre famille et leurs relations dans notre arbre généalogique interactif
          </p>
          <a
            href="/family-tree"
            className="btn-secondary"
          >
            Voir l'Arbre Généalogique
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
