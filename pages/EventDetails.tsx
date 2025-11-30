import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_EVENTS } from '../constants';
import { ArrowRightIcon, CalendarIcon, MapPinIcon } from '../components/Icons';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = MOCK_EVENTS.find(e => e.id === id);

  if (!event) {
    return (
        <div className="container mx-auto py-20 text-center">
            <h2 className="text-2xl font-bold text-slate-800">Event not found</h2>
            <button onClick={() => navigate('/events')} className="mt-4 text-brand-600 hover:underline">Back to Events</button>
        </div>
    );
  }

  const isPast = new Date(event.date) < new Date();

  const handleRSVP = () => {
      alert("Thanks for your interest! In a full version, this would save your spot.");
  };

  return (
    <div className="bg-white min-h-screen pb-12">
        {/* Hero */}
        <div className="h-64 md:h-80 w-full relative bg-slate-900">
            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 container mx-auto">
                <Link to="/events" className="text-white/80 hover:text-white text-sm mb-4 inline-block">&larr; Back to Events</Link>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{event.title}</h1>
                <div className="flex items-center text-white/90 gap-4 text-lg">
                    <span className="flex items-center gap-2"><CalendarIcon className="w-5 h-5"/> {new Date(event.date).toLocaleDateString()}</span>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">About the Event</h2>
                    <p className="text-slate-600 leading-relaxed text-lg">{event.fullDetails}</p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-800 mb-2">What to expect</h3>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600">
                        <li>Community networking</li>
                        <li>Family friendly environment</li>
                        <li>Refreshments available</li>
                        <li>Accessibility support on site</li>
                    </ul>
                </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-6 sticky top-24">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Event Details</h3>
                    
                    <div className="space-y-4 mb-6">
                        <div className="flex gap-3">
                            <CalendarIcon className="w-5 h-5 text-brand-600 shrink-0" />
                            <div>
                                <p className="font-semibold text-slate-900">{new Date(event.date).toLocaleDateString()}</p>
                                <p className="text-sm text-slate-500">{event.time}</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <MapPinIcon className="w-5 h-5 text-brand-600 shrink-0" />
                            <div>
                                <p className="font-semibold text-slate-900">{event.location}</p>
                                <a href="#" className="text-xs text-brand-600 hover:underline">Get Directions</a>
                            </div>
                        </div>
                    </div>

                    {!isPast ? (
                        <button 
                            onClick={handleRSVP}
                            className="w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition-colors shadow-md hover:shadow-lg"
                        >
                            RSVP Now
                        </button>
                    ) : (
                         <div className="bg-slate-100 text-slate-500 text-center py-3 rounded-lg font-medium">
                            Event has passed
                         </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default EventDetails;