import React, { useState } from 'react';
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from '../constants';
import { MailIcon, PhoneIcon, MapPinIcon } from '../components/Icons';
import { ContactSubmission } from '../types';

const Contact = () => {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
        console.log("Contact Form Data:", formData);
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="bg-white">
      <div className="bg-brand-900 py-16 text-center">
         <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
         <p className="text-brand-100">We'd love to hear from you.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            
            {/* Contact Info */}
            <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
                <p className="text-slate-600 mb-8">
                    Have a question about a grant? Want to propose an event? Or just want to say hello? Reach out to us using the form or the details below.
                </p>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-brand-100 p-3 rounded-full text-brand-700">
                            <MapPinIcon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900">Mailing Address</h3>
                            <p className="text-slate-600">{CONTACT_ADDRESS}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-brand-100 p-3 rounded-full text-brand-700">
                            <PhoneIcon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900">Phone</h3>
                            <p className="text-slate-600">{CONTACT_PHONE}</p>
                            <p className="text-xs text-slate-400">Mon-Fri, 9am - 5pm</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-brand-100 p-3 rounded-full text-brand-700">
                            <MailIcon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900">Email</h3>
                            <p className="text-slate-600">{CONTACT_EMAIL}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a message</h2>
                
                {status === 'success' ? (
                    <div className="bg-green-100 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                        <p className="font-bold text-lg mb-2">Message Sent!</p>
                        <p>Thank you for reaching out. A trustee will respond within 48 hours.</p>
                        <button 
                            onClick={() => setStatus('idle')} 
                            className="mt-4 text-sm font-semibold hover:underline"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                                placeholder="Your full name"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                            >
                                <option value="" disabled>Select a topic</option>
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Events">Events & RSVP</option>
                                <option value="Grants">Grant Information</option>
                                <option value="Volunteering">Volunteering</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                                placeholder="How can we help?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className={`w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition-colors shadow-md ${status === 'submitting' ? 'opacity-75 cursor-wait' : ''}`}
                        >
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                )}
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;