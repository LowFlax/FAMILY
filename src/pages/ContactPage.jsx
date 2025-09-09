import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Facebook, 
  Instagram,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useContactStore } from '../store/familyStore';
import { contact } from '../data/mockData';

const ContactPage = () => {
  const { addMessage } = useContactStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      addMessage(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-lightGray">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-8">
          <h1 className="text-4xl font-bold text-primary mb-4 flex items-center space-x-2">
            <Mail className="h-10 w-10" />
            <span>Contact</span>
          </h1>
          <p className="text-xl text-gray-600">
            N'hésitez pas à nous contacter pour toute question ou information
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div>
            <div className="card">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Envoyez-nous un message
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-800">{contact.form.successMessage}</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <span className="text-red-800">{contact.form.errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>{contact.form.submitText}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            {/* Informations principales */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary mb-6">
                {contact.contactInfo.familyName}
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Adresse</p>
                    <p className="text-gray-600">
                      {contact.contactInfo.address.street}<br />
                      {contact.contactInfo.address.city}<br />
                      {contact.contactInfo.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-gray-900">Téléphone</p>
                    <a href={`tel:${contact.contactInfo.phone}`} className="text-primary hover:text-secondary transition-colors">
                      {contact.contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href={`mailto:${contact.contactInfo.email}`} className="text-primary hover:text-secondary transition-colors">
                      {contact.contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="h-5 w-5 text-secondary flex items-center justify-center">
                    <span className="text-sm">🌐</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Site web</p>
                    <a href={`https://${contact.contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                      {contact.contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="card">
              <h3 className="text-xl font-bold text-primary mb-4">
                Suivez-nous
              </h3>
              
              <div className="flex space-x-4">
                {contact.contactInfo.socialMedia.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {social.platform === 'Facebook' ? (
                      <Facebook className="h-5 w-5 text-blue-600" />
                    ) : (
                      <Instagram className="h-5 w-5 text-pink-600" />
                    )}
                    <span className="font-medium text-gray-700">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Heures d'ouverture */}
            <div className="card">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{contact.officeHours.title}</span>
              </h3>
              
              <div className="space-y-2">
                {contact.officeHours.schedule.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className="font-medium text-gray-900">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
