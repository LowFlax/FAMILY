import React, { useState, useMemo } from "react";
import {
  Calendar,
  Users,
  FileText,
  Download,
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEventsStore, useContactStore } from "../store/familyStore";

// Configuration de la localisation française
moment.locale("fr");
const localizer = momentLocalizer(moment);

const InfoPage = () => {
  const { events, getUpcomingEvents } = useEventsStore();
  const { contacts, getEmergencyContacts } = useContactStore();
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());

  const upcomingEvents = getUpcomingEvents(30);
  const emergencyContacts = getEmergencyContacts();

  // Conversion des événements pour React Big Calendar
  const calendarEvents = useMemo(() => {
    return events.map((event) => ({
      id: event.id,
      title: event.title,
      start: new Date(event.date),
      end: new Date(event.date),
      resource: {
        type: event.type,
        description: event.description,
        recurring: event.recurring,
        memberId: event.memberId,
      },
      "data-type": event.type, // Attribut pour le CSS
    }));
  }, [events]);

  // Configuration des couleurs pour le calendrier
  const eventStyleGetter = (event) => {
    let backgroundColor = "#6B7280"; // gray-500 par défaut
    let borderColor = "#6B7280";

    switch (event.resource?.type) {
      case "birthday":
        backgroundColor = "#F59E0B"; // yellow-500
        borderColor = "#F59E0B";
        break;
      case "wedding":
        backgroundColor = "#EAB308"; // yellow-600
        borderColor = "#EAB308";
        break;
      case "family":
        backgroundColor = "#3B82F6"; // blue-500
        borderColor = "#3B82F6";
        break;
      default:
        backgroundColor = "#6B7280"; // gray-500
        borderColor = "#6B7280";
    }

    return {
      style: {
        backgroundColor,
        borderColor,
        color: "white",
        borderRadius: "4px",
        border: "none",
        fontSize: "12px",
        fontWeight: "500",
      },
    };
  };

  // Gestionnaire d'événements
  const handleSelectEvent = (event) => {
    alert(
      `${event.title}\n\n${event.resource?.description || "Aucune description"}`
    );
  };

  const handleSelectSlot = (slotInfo) => {
    const selectedDate = slotInfo.start.toLocaleDateString("fr-FR");
    alert(`Date sélectionnée: ${selectedDate}`);
  };

  // Composant personnalisé pour les événements
  const EventComponent = ({ event }) => {
    const getEventIcon = (type) => {
      switch (type) {
        case "birthday":
          return "🎂";
        case "wedding":
          return "💒";
        case "family":
          return "👨‍👩‍👧‍👦";
        default:
          return "📅";
      }
    };

    return (
      <div className="flex items-center space-x-1">
        <span className="text-xs">{getEventIcon(event.resource?.type)}</span>
        <span className="truncate text-xs font-semibold">{event.title}</span>
      </div>
    );
  };

  // Composant personnalisé pour la toolbar
  const CustomToolbar = ({ label, onNavigate, onView, view }) => {
    return (
      <div className="flex items-center justify-center gap-8 py-4">
        {/* Boutons de navigation */}
        <div className="flex gap-2">
          <button
            onClick={() => onNavigate("PREV")}
            className="px-3 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            Précédent
          </button>
          <button
            onClick={() => onNavigate("TODAY")}
            className="px-3 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            Aujourd'hui
          </button>
          <button
            onClick={() => onNavigate("NEXT")}
            className="px-3 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            Suivant
          </button>
        </div>

        {/* Label du mois/année */}
        <div className="text-xl font-bold text-primary">{label}</div>

        {/* Boutons de vue */}
        <div className="flex gap-2">
          <button
            onClick={() => onView("month")}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              view === "month"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Mois
          </button>
          <button
            onClick={() => onView("week")}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              view === "week"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Semaine
          </button>
          <button
            onClick={() => onView("day")}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              view === "day"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Jour
          </button>
          <button
            onClick={() => onView("agenda")}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              view === "agenda"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Agenda
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Informations Utiles
          </h1>
          <p className="text-xl text-gray-600">
            Calendrier des événements, contacts d'urgence et documents partagés
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendrier des événements */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-primary flex items-center space-x-2 mb-4">
                  <Calendar className="h-6 w-6" />
                  <span>Calendrier des événements</span>
                </h2>
              </div>

              {/* Calendrier React Big Calendar */}
              <div className="h-[500px] sm:h-[600px] lg:h-[500px]">
                <BigCalendar
                  localizer={localizer}
                  events={calendarEvents}
                  startAccessor="start"
                  endAccessor="end"
                  view={view}
                  date={date}
                  onNavigate={setDate}
                  onView={setView}
                  onSelectEvent={handleSelectEvent}
                  onSelectSlot={handleSelectSlot}
                  eventPropGetter={eventStyleGetter}
                  components={{
                    event: EventComponent,
                    toolbar: CustomToolbar,
                  }}
                  selectable
                  popup
                  messages={{
                    next: "Suivant",
                    previous: "Précédent",
                    today: "Aujourd'hui",
                    month: "Mois",
                    week: "Semaine",
                    day: "Jour",
                    agenda: "Agenda",
                    date: "Date",
                    time: "Heure",
                    event: "Événement",
                    noEventsInRange: "Aucun événement dans cette période",
                    showMore: (total) => `+ ${total} autres`,
                  }}
                  style={{ height: "100%" }}
                />
              </div>
            </div>

            {/* Événements à venir */}
            <div className="card mt-6">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Événements à venir (30 prochains jours)</span>
              </h3>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center space-x-3 p-3 bg-secondary/5 rounded-lg"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${getEventTypeColor(
                        event.type
                      )}`}
                    >
                      {getEventTypeIcon(event.type)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-primary">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {new Date(event.date).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {upcomingEvents.length === 0 && (
                  <p className="text-gray-500 text-center py-4">
                    Aucun événement à venir
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Contacts d'urgence */}
          <div>
            <div className="card">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center space-x-2">
                <AlertCircle className="h-6 w-6 text-secondary" />
                <span>Contacts d'urgence</span>
              </h2>

              <div className="space-y-4">
                {emergencyContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">
                          {contact.name}
                        </h3>
                        <p className="text-sm text-gray-600">{contact.role}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-primary hover:text-secondary"
                        >
                          {contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-primary hover:text-secondary"
                        >
                          {contact.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{contact.address}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tous les contacts */}
            <div className="card mt-6">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Tous les contacts</span>
              </h3>

              <div className="space-y-3">
                {contacts.map((contact) => (
                  <div key={contact.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-primary">
                          {contact.name}
                        </h4>
                        <p className="text-sm text-gray-600">{contact.role}</p>
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={`tel:${contact.phone}`}
                          className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                          title="Appeler"
                        >
                          <Phone className="h-4 w-4" />
                        </a>
                        <a
                          href={`mailto:${contact.email}`}
                          className="p-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors"
                          title="Envoyer un email"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
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

export default InfoPage;
