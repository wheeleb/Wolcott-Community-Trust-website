import React, { useState } from 'react';
import { MessageSquareIcon, XIcon } from './Icons';
import { FeedbackSubmission } from '../types';

const FeedbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FeedbackSubmission>({
    name: '',
    type: 'General',
    message: '',
    rating: 5
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would POST to an API or Firestore
    console.log("Feedback Submitted:", formData);
    
    // Simulate API delay
    setTimeout(() => {
        setIsSubmitted(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsSubmitted(false);
            setFormData({ name: '', type: 'General', message: '', rating: 5 });
        }, 3000);
    }, 500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-300 ${isOpen ? 'hidden' : 'bg-accent-500 text-white'}`}
        aria-label="Leave feedback"
      >
        <MessageSquareIcon className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-fade-in-up">
            <div className="bg-brand-700 text-white px-6 py-4 flex justify-between items-center">
                <h3 className="font-semibold">Community Feedback</h3>
                <button onClick={() => setIsOpen(false)} className="hover:bg-brand-800 p-1 rounded transition-colors">
                    <XIcon className="w-5 h-5" />
                </button>
            </div>
            
            <div className="p-6">
                {isSubmitted ? (
                    <div className="text-center py-8">
                        <div className="text-brand-600 text-5xl mb-4">✓</div>
                        <p className="font-medium text-slate-800">Thank you!</p>
                        <p className="text-sm text-slate-500 mt-2">Your feedback has been recorded.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Topic</label>
                            <select 
                                className="w-full border-slate-300 rounded-md shadow-sm text-sm focus:border-brand-500 focus:ring-brand-500"
                                value={formData.type}
                                onChange={e => setFormData({...formData, type: e.target.value as any})}
                            >
                                <option>General</option>
                                <option>Website Issue</option>
                                <option>Event Idea</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Your Name (Optional)</label>
                            <input 
                                type="text" 
                                className="w-full border-slate-300 rounded-md shadow-sm text-sm focus:border-brand-500 focus:ring-brand-500"
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                                placeholder="Jane Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Message</label>
                            <textarea 
                                required
                                rows={3}
                                className="w-full border-slate-300 rounded-md shadow-sm text-sm focus:border-brand-500 focus:ring-brand-500"
                                value={formData.message}
                                onChange={e => setFormData({...formData, message: e.target.value})}
                                placeholder="How can we improve?"
                            ></textarea>
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-brand-600 text-white py-2 rounded-md font-medium hover:bg-brand-700 transition-colors shadow-sm"
                        >
                            Send Feedback
                        </button>
                        <p className="text-xs text-center text-slate-400 mt-2">
                           Trustees review feedback weekly.
                        </p>
                    </form>
                )}
            </div>
        </div>
      )}
    </>
  );
};

export default FeedbackWidget;