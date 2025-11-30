import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CalendarIcon } from '../components/Icons';
import { MOCK_ANNOUNCEMENT, MOCK_EVENTS } from '../constants';

const Home = () => {
  // Get next upcoming event
  const upcomingEvents = MOCK_EVENTS.filter(e => new Date(e.date) >= new Date()).sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const nextEvent = upcomingEvents[0];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative bg-brand-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
             <img 
               src="https://picsum.photos/1600/600?grayscale" 
               alt="Community gathering" 
               className="w-full h-full object-cover opacity-20"
             />
        </div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Connecting Neighbors.<br/>Strengthening Community.
          </h1>
          <p className="text-lg md:text-xl text-brand-100 max-w-2xl mb-10">
            The Wolcott Community Trust is dedicated to preserving our local heritage, supporting civic projects, and bringing people together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <Link 
               to="/events" 
               className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors shadow-lg"
             >
               View Events
             </Link>
             <Link 
               to="/contact" 
               className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors"
             >
               Get Involved
             </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 space-y-16">
        
        {/* Announcement Card */}
        <section className="max-w-4xl mx-auto -mt-24 relative z-10">
            <div className="bg-white rounded-xl shadow-xl border-l-8 border-accent-500 p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-sm font-bold text-accent-600 uppercase tracking-wider mb-2">Latest Announcement</h2>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{MOCK_ANNOUNCEMENT.title}</h3>
                        <p className="text-slate-600">{MOCK_ANNOUNCEMENT.content}</p>
                    </div>
                    <Link to={MOCK_ANNOUNCEMENT.link} className="shrink-0 flex items-center font-semibold text-brand-700 hover:text-brand-900 group">
                        Learn More <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>

        {/* Mission / Intro */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                    Founded in 1998, the Trust works tirelessly to enhance the quality of life for all Wolcott residents. We manage community grants, organize seasonal festivals, and maintain our beloved public spaces.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                    We believe that a strong community is built on shared experiences and mutual support. Whether you're a lifelong resident or new to town, there's a place for you here.
                </p>
                <Link to="/about" className="text-brand-700 font-medium hover:underline">Read more about our history &rarr;</Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
                <img src="https://picsum.photos/800/600?random=10" alt="Volunteers working" className="w-full h-full object-cover" />
            </div>
        </section>

        {/* Next Event Teaser */}
        <section className="bg-brand-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold mb-4">
                        <CalendarIcon className="w-4 h-4" /> UPCOMING
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Don't Miss Out</h2>
                    {nextEvent ? (
                        <>
                            <h3 className="text-xl font-semibold text-brand-700 mb-2">{nextEvent.title}</h3>
                            <p className="text-slate-600 mb-6">{nextEvent.description}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6">
                                <span className="flex items-center">📅 {new Date(nextEvent.date).toLocaleDateString()}</span>
                                <span className="flex items-center">📍 {nextEvent.location}</span>
                            </div>
                            <Link to={`/events/${nextEvent.id}`} className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-md font-medium transition-colors">
                                Event Details
                            </Link>
                        </>
                    ) : (
                        <p className="text-slate-600">No upcoming events scheduled at the moment. Check back soon!</p>
                    )}
                </div>
                <div className="w-full md:w-1/3">
                    <img 
                        src={nextEvent?.imageUrl || "https://picsum.photos/400/300"} 
                        alt="Event preview" 
                        className="rounded-lg shadow-md w-full h-64 object-cover"
                    />
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default Home;