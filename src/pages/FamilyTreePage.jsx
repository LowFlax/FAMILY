import React, { useState, useEffect } from "react";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  FileText,
  Image,
  Printer,
  X,
  Save,
  User,
} from "lucide-react";
import { useFamilyStore } from "../store/familyStore";
import { familyTree } from "../data/mockData";

const FamilyTreePage = () => {
  const {
    members,
    searchQuery,
    setSearchQuery,
    getFilteredMembers,
    openModal,
    closeModal,
    isModalOpen,
    modalType,
    selectedMember,
    addMember,
    updateMember,
    deleteMember,
  } = useFamilyStore();

  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    role: "",
    photo: null,
    bio: "",
    parentId: null,
    spouseId: null,
  });

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filtered = getFilteredMembers();
    setSearchResults(filtered);
  }, [searchQuery, members, getFilteredMembers]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddMember = () => {
    setFormData({
      name: "",
      birthDate: "",
      role: "",
      photo: null,
      bio: "",
      parentId: null,
      spouseId: null,
    });
    openModal("add");
  };

  const handleEditMember = (member) => {
    setFormData({
      name: member.name,
      birthDate: member.birthDate,
      role: member.role,
      photo: member.photo,
      bio: member.bio || "",
      parentId: member.parentId,
      spouseId: member.spouseId,
    });
    openModal("edit", member);
  };

  const handleDeleteMember = (member) => {
    openModal("delete", member);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modalType === "add") {
      addMember({
        ...formData,
        generation: 3,
        childrenIds: [],
      });
    } else if (modalType === "edit") {
      updateMember(selectedMember.id, formData);
    }

    closeModal();
  };

  const handleDelete = () => {
    if (selectedMember) {
      deleteMember(selectedMember.id);
      closeModal();
    }
  };

  const getMembersByGeneration = (generation) => {
    return searchResults.filter((member) => member.generation === generation);
  };

  const getAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  const isUpcomingBirthday = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    const thisYear = today.getFullYear();
    const birthday = new Date(thisYear, birth.getMonth(), birth.getDate());
    const diffTime = birthday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= 30;
  };

  return (
    <div className="min-h-screen bg-neutral-lightGray">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">
                Arbre Généalogique
              </h1>
              <p className="text-gray-600">
                Explorez et gérez les membres de notre famille
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={familyTree.searchPlaceholder}
                  value={searchQuery}
                  onChange={handleSearch}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent w-full sm:w-80"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 items-center">
                <button
                  onClick={handleAddMember}
                  className="btn-primary flex items-center space-x-2 h-10 px-4"
                >
                  <Plus className="h-4 w-4" />
                  <span>Ajouter</span>
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => console.log("Export PDF")}
                    className="btn-primary flex items-center space-x-2 h-10 px-4"
                    title="Exporter en PDF"
                  >
                    <FileText className="h-4 w-4" />
                    <span>PDF</span>
                  </button>
                  <button
                    onClick={() => console.log("Export Image")}
                    className="btn-primary flex items-center space-x-2 h-10 px-4"
                    title="Exporter en Image"
                  >
                    <Image className="h-4 w-4" />
                    <span>Image</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Family Tree */}
      <div className="container-custom py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Generation 1 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Génération 1 - Fondateurs
            </h3>
            <div className="flex justify-center gap-8">
              {getMembersByGeneration(1).map((member) => (
                <div key={member.id} className="relative">
                  <div className="group">
                    <div className="w-32 h-32 bg-white rounded-full shadow-lg border-4 border-primary/20 flex items-center justify-center overflow-hidden hover:border-secondary transition-all duration-300 hover:scale-105">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="h-12 w-12 text-gray-400" />
                      )}
                    </div>

                    <div className="text-center mt-4">
                      <h4 className="font-bold text-primary">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <p className="text-sm text-secondary">
                        {getAge(member.birthDate)} ans
                        {isUpcomingBirthday(member.birthDate) && (
                          <span className="ml-1 text-xs bg-secondary/10 px-2 py-1 rounded-full">
                            🎂
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleEditMember(member)}
                          className="p-1 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                        >
                          <Edit className="h-3 w-3 text-primary" />
                        </button>
                        <button
                          onClick={() => handleDeleteMember(member)}
                          className="p-1 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                        >
                          <Trash2 className="h-3 w-3 text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Generation 2 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Génération 2 - Enfants
            </h3>
            <div className="flex justify-center gap-8">
              {getMembersByGeneration(2).map((member) => (
                <div key={member.id} className="relative">
                  <div className="group">
                    <div className="w-32 h-32 bg-white rounded-full shadow-lg border-4 border-primary/20 flex items-center justify-center overflow-hidden hover:border-secondary transition-all duration-300 hover:scale-105">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="h-12 w-12 text-gray-400" />
                      )}
                    </div>

                    <div className="text-center mt-4">
                      <h4 className="font-bold text-primary">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <p className="text-sm text-secondary">
                        {getAge(member.birthDate)} ans
                        {isUpcomingBirthday(member.birthDate) && (
                          <span className="ml-1 text-xs bg-secondary/10 px-2 py-1 rounded-full">
                            🎂
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleEditMember(member)}
                          className="p-1 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                        >
                          <Edit className="h-3 w-3 text-primary" />
                        </button>
                        <button
                          onClick={() => handleDeleteMember(member)}
                          className="p-1 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                        >
                          <Trash2 className="h-3 w-3 text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Generation 3 */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Génération 3 - Petits-enfants
            </h3>
            <div className="flex justify-center gap-8">
              {getMembersByGeneration(3).map((member) => (
                <div key={member.id} className="relative">
                  <div className="group">
                    <div className="w-32 h-32 bg-white rounded-full shadow-lg border-4 border-primary/20 flex items-center justify-center overflow-hidden hover:border-secondary transition-all duration-300 hover:scale-105">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="h-12 w-12 text-gray-400" />
                      )}
                    </div>

                    <div className="text-center mt-4">
                      <h4 className="font-bold text-primary">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <p className="text-sm text-secondary">
                        {getAge(member.birthDate)} ans
                        {isUpcomingBirthday(member.birthDate) && (
                          <span className="ml-1 text-xs bg-secondary/10 px-2 py-1 rounded-full">
                            🎂
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleEditMember(member)}
                          className="p-1 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                        >
                          <Edit className="h-3 w-3 text-primary" />
                        </button>
                        <button
                          onClick={() => handleDeleteMember(member)}
                          className="p-1 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                        >
                          <Trash2 className="h-3 w-3 text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary">
                  {modalType === "add" && "Ajouter un nouveau membre"}
                  {modalType === "edit" && "Modifier les informations"}
                  {modalType === "delete" && "Confirmer la suppression"}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {modalType === "delete" ? (
                <div>
                  <p className="text-gray-600 mb-6">
                    Êtes-vous sûr de vouloir supprimer{" "}
                    <strong>{selectedMember?.name}</strong> de l'arbre
                    généalogique ?
                  </p>
                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={handleDelete}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date de naissance *
                    </label>
                    <input
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) =>
                        setFormData({ ...formData, birthDate: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Rôle *
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Sélectionner un rôle</option>
                      <option value="Père">Père</option>
                      <option value="Mère">Mère</option>
                      <option value="Fils">Fils</option>
                      <option value="Fille">Fille</option>
                      <option value="Belle-fille">Belle-fille</option>
                      <option value="Beau-fils">Beau-fils</option>
                      <option value="Petit-fils">Petit-fils</option>
                      <option value="Petite-fille">Petite-fille</option>
                      <option value="Époux">Époux</option>
                      <option value="Épouse">Épouse</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Biographie
                    </label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) =>
                        setFormData({ ...formData, bio: e.target.value })
                      }
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div className="flex gap-3 justify-end pt-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="btn-primary flex items-center space-x-2"
                    >
                      <Save className="h-4 w-4" />
                      <span>
                        {modalType === "add" ? "Ajouter" : "Sauvegarder"}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FamilyTreePage;
