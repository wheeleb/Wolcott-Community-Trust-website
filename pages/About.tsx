import React from 'react';
import { MOCK_TRUSTEES, CONTACT_EMAIL } from '../constants';
import { MailIcon } from '../components/Icons';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About Us</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Transparency, integrity, and dedication to the people of Wolcott.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        
        {/* History & Mission */}
        <section className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold text-slate-800">Our History</h2>
                <p className="text-slate-600 leading-relaxed">
                    The Wolcott Community Trust was established in 1998 by a group of concerned citizens who wanted to ensure that the town's rapid growth didn't come at the cost of its character. Starting with a single fundraising drive to repair the old clock tower, the Trust has grown into a cornerstone institution.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Over the last two decades, we have facilitated over $2 million in grants for local schools, parks, and emergency services. We operate independently of the town government but work closely with officials to identify needs.
                </p>
                
                <h2 className="text-2xl font-bold text-slate-800 pt-4">Strategic Goals</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                    <li>Preserve historical landmarks and open green spaces.</li>
                    <li>Foster community connection through inclusive public events.</li>
                    <li>Provide financial support to local initiatives that align with our values.</li>
                    <li>Maintain a transparent and accessible board of trustees.</li>
                </ul>
            </div>
            <div className="bg-brand-50 p-8 rounded-xl h-fit">
                <h3 className="text-xl font-bold text-brand-800 mb-4">Join the Mission</h3>
                <p className="text-slate-700 mb-6 text-sm">
                    We are always looking for volunteers for our committees. Whether you have experience in finance, event planning, or just want to help set up chairs at the picnic, we need you.
                </p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center justify-center w-full bg-brand-600 text-white py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors">
                    <MailIcon className="w-4 h-4 mr-2" />
                    Email to Volunteer
                </a>
            </div>
        </section>

        {/* Trustees */}
        <section>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900">Board of Trustees</h2>
                <p className="text-slate-500 mt-2">Serving 2-year terms, elected by the community.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {MOCK_TRUSTEES.map((trustee) => (
                    <div key={trustee.id} className="bg-white border border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                        <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden">
                             <img src={`https://picsum.photos/seed/${trustee.id}/200`} alt={trustee.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900">{trustee.name}</h3>
                        <p className="text-brand-600 font-medium text-sm mb-3">{trustee.role}</p>
                        <p className="text-xs text-slate-500 italic">"Committed to Wolcott's future."</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Financials / Transparency (Placeholder for Trust requirement) */}
        <section className="border-t border-slate-200 pt-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Transparency</h2>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <p className="text-slate-600 mb-4">
                    As a 501(c)(3) organization, our financial records and meeting minutes are public.
                </p>
                <div className="flex gap-4">
                    <button className="text-sm text-brand-700 font-semibold hover:underline">Download 2023 Annual Report (PDF)</button>
                    <button className="text-sm text-brand-700 font-semibold hover:underline">View Bylaws</button>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default About;