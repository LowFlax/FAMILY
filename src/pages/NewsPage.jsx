import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Newspaper, 
  Filter, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Share2,
  Heart
} from 'lucide-react';
import { useNewsStore } from '../store/familyStore';
import { news } from '../data/mockData';

const NewsPage = () => {
  const {
    articles,
    selectedCategory,
    setSelectedCategory,
    getFilteredArticles,
  } = useNewsStore();

  const [filteredArticles, setFilteredArticles] = useState(articles);

  React.useEffect(() => {
    const filtered = getFilteredArticles();
    setFilteredArticles(filtered);
  }, [selectedCategory, articles, getFilteredArticles]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-neutral-lightGray">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-8">
          <h1 className="text-4xl font-bold text-primary mb-4 flex items-center space-x-2">
            <Newspaper className="h-10 w-10" />
            <span>Actualités Familiales</span>
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez les dernières nouvelles et événements de notre famille
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Filtres par catégorie */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-gray-700">Filtrer par catégorie :</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {news.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-secondary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Liste des articles */}
        <div className="space-y-8">
          {filteredArticles.map((article) => (
            <article key={article.id} className="card hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Image */}
                <div className="lg:col-span-1">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-48 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="lg:col-span-2">
                  <div className="h-full flex flex-col">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-primary mb-3 hover:text-secondary transition-colors">
                        {article.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>

                      {/* Métadonnées */}
                      <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(article.publishDate)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <Link
                        to={`/news/${article.id}`}
                        className="inline-flex items-center space-x-2 text-secondary hover:text-secondary-dark font-medium transition-colors"
                      >
                        <span>Lire l'article complet</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      
                      <div className="flex items-center space-x-3">
                        <button
                          className="flex items-center space-x-1 text-gray-500 hover:text-secondary transition-colors"
                          title="J'aime"
                        >
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">12</span>
                        </button>
                        <button
                          className="flex items-center space-x-1 text-gray-500 hover:text-secondary transition-colors"
                          title="Partager"
                        >
                          <Share2 className="h-4 w-4" />
                          <span className="text-sm">Partager</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <Newspaper className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucun article trouvé
            </h3>
            <p className="text-gray-500">
              Essayez de changer de catégorie ou revenez plus tard pour de nouveaux articles
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredArticles.length > 0 && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Précédent
              </button>
              <span className="px-4 py-2 bg-primary text-white rounded-lg">1</span>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Suivant
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
