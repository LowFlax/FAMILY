import React, { useState } from "react";
import {
  Image,
  Filter,
  Download,
  Share2,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
} from "lucide-react";
import { useGalleryStore } from "../store/familyStore";
import { gallery } from "../data/mockData";

const GalleryPage = () => {
  const {
    photos,
    selectedCategory,
    setSelectedCategory,
    getFilteredPhotos,
    openLightbox,
    closeLightbox,
    lightboxOpen,
    currentPhotoIndex,
    nextPhoto,
    previousPhoto,
  } = useGalleryStore();

  const [filteredPhotos, setFilteredPhotos] = useState(photos);

  React.useEffect(() => {
    const filtered = getFilteredPhotos();
    setFilteredPhotos(filtered);
  }, [selectedCategory, photos, getFilteredPhotos]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePhotoClick = (index) => {
    openLightbox(index);
  };

  const handleDownload = (photo) => {
    // Logique de téléchargement
    console.log("Télécharger:", photo.title);
  };

  const handleShare = (photo) => {
    // Logique de partage
    console.log("Partager:", photo.title);
  };

  return (
    <div className="min-h-screen bg-neutral-lightGray">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-8">
          <h1 className="text-4xl font-bold text-primary mb-4 flex items-center space-x-2">
            <Image className="h-10 w-10" />
            <span>Galerie Photos</span>
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez nos plus beaux souvenirs en images
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Filtres par catégorie */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-gray-700">
              Filtrer par catégorie :
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {gallery.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-secondary text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Grille de photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="group cursor-pointer"
              onClick={() => handlePhotoClick(index)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(photo);
                        }}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                        title="Télécharger"
                      >
                        <Download className="h-4 w-4 text-gray-700" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare(photo);
                        }}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                        title="Partager"
                      >
                        <Share2 className="h-4 w-4 text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors">
                  {photo.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {photo.description}
                </p>
                <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {new Date(photo.uploadDate).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{photo.uploadedBy}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-16">
            <Image className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucune photo trouvée
            </h3>
            <p className="text-gray-500">
              Essayez de changer de catégorie ou ajoutez de nouvelles photos
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Bouton fermer */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Navigation */}
            <button
              onClick={previousPhoto}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="h-8 w-8 text-white" />
            </button>

            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="h-8 w-8 text-white" />
            </button>

            {/* Image */}
            <img
              src={filteredPhotos[currentPhotoIndex]?.imageUrl}
              alt={filteredPhotos[currentPhotoIndex]?.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Informations */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="text-xl font-bold mb-2">
                {filteredPhotos[currentPhotoIndex]?.title}
              </h3>
              <p className="text-sm opacity-90 mb-2">
                {filteredPhotos[currentPhotoIndex]?.description}
              </p>
              <div className="flex items-center justify-between text-xs opacity-75">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {new Date(
                        filteredPhotos[currentPhotoIndex]?.uploadDate
                      ).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{filteredPhotos[currentPhotoIndex]?.uploadedBy}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() =>
                      handleDownload(filteredPhotos[currentPhotoIndex])
                    }
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    title="Télécharger"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() =>
                      handleShare(filteredPhotos[currentPhotoIndex])
                    }
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    title="Partager"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
