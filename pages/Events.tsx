import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_EVENTS } from '../constants';
import { EventFilter, Event } from '../types';
import { CalendarIcon, MapPinIcon, ArrowRightIcon } from '../components/Icons';

const Events = () => {
  const [filter, setFilter] = useState<EventFilter>(EventFilter.UPCOMING);

  const now = new Date();
  
  const filteredEvents = MOCK_EVENTS.filter(event => {
    const eventDate = new Date(event.date);
    if (filter === EventFilter.UPCOMING) return eventDate >= now;
    return eventDate < now;
  }).sort((a, b) => {
    // Sort upcoming ascending, past descending
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return filter === EventFilter.UPCOMING ? dateA - dateB : dateB - dateA;
  });

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
           <h1 className="text-3xl font-bold text-slate-900">Community Events</h1>
           <p className="text-slate-600 mt-1">Join us at our next gathering.</p>
        </div>
        
        {/* Filter Toggle */}
        <div className="bg-slate-100 p-1 rounded-lg inline-flex">
            <button
                onClick={() => setFilter(EventFilter.UPCOMING)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    filter === EventFilter.UPCOMING 
                    ? 'bg-white text-brand-700 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
            >
                Upcoming
            </button>
            <button
                onClick={() => setFilter(EventFilter.PAST)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    filter === EventFilter.PAST 
                    ? 'bg-white text-slate-800 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
            >
                Past Events
            </button>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} isPast={filter === EventFilter.PAST} />
          ))
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-xl border border-slate-200 border-dashed">
            <p className="text-slate-500 text-lg">No events found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface EventCardProps {
  event: Event;
  isPast: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, isPast }) => {
  const dateObj = new Date(event.date);
  const month = dateObj.toLocaleString('default', { month: 'short' });
  const day = dateObj.getDate();

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row transition-opacity ${isPast ? 'opacity-75 hover:opacity-100' : ''}`}>
        {/* Date Box (Mobile hidden, desktop visible) */}
        <div className="hidden md:flex flex-col items-center justify-center w-32 bg-slate-50 border-r border-slate-100 p-4 text-center shrink-0">
            <span className="text-sm font-bold text-brand-600 uppercase tracking-wider">{month}</span>
            <span className="text-3xl font-bold text-slate-800">{day}</span>
            <span className="text-xs text-slate-500 mt-1">{dateObj.getFullYear()}</span>
        </div>

        {/* Image */}
        <div className="h-48 md:h-auto md:w-64 shrink-0 bg-slate-200">
            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 md:hidden">
                 <CalendarIcon className="w-4 h-4" /> {dateObj.toLocaleDateString()}
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
            
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                <span className="flex items-center gap-1.5"><MapPinIcon className="w-4 h-4 text-slate-400" /> {event.location}</span>
                <span className="text-slate-400">|</span>
                <span>{event.time}</span>
            </div>
            
            <p className="text-slate-600 mb-6 line-clamp-2">{event.description}</p>
            
            <div className="mt-auto">
                 <Link 
                    to={`/events/${event.id}`} 
                    className={`inline-flex items-center text-sm font-semibold ${isPast ? 'text-slate-500' : 'text-brand-600 hover:text-brand-700'}`}
                 >
                    {isPast ? 'View Recap' : 'Details & RSVP'} <ArrowRightIcon className="ml-1 w-4 h-4" />
                 </Link>
            </div>
        </div>
    </div>
  );
};

export default Events;