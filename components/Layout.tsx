import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ORGANIZATION_NAME } from '../constants';
import { MenuIcon, XIcon } from './Icons';
import FeedbackWidget from './FeedbackWidget';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Events', path: '/events' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-700 text-white p-4 z-50 rounded">
        Skip to content
      </a>

      {/* Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-brand-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-2" onClick={closeMenu}>
               <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                 W
               </div>
               <span className="text-xl font-bold text-slate-800 tracking-tight">{ORGANIZATION_NAME}</span>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-brand-700 ${
                      isActive ? 'text-brand-700 border-b-2 border-brand-600' : 'text-slate-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                      isActive ? 'bg-brand-50 text-brand-800' : 'text-slate-600 hover:bg-slate-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{ORGANIZATION_NAME}</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Building a stronger, more connected community through events, grants, and shared spaces.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/events" className="hover:text-brand-300 transition-colors">Upcoming Events</NavLink></li>
              <li><NavLink to="/about" className="hover:text-brand-300 transition-colors">Board of Trustees</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-brand-300 transition-colors">Volunteer</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Trustee Login</h4>
            <p className="text-xs text-slate-500 mb-2">Restricted access for board members.</p>
            <button className="text-sm border border-slate-700 rounded px-4 py-2 hover:bg-slate-800 transition-colors">
              Trustee Portal
            </button>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {ORGANIZATION_NAME}. All rights reserved.
        </div>
      </footer>

      {/* Floating Feedback Widget */}
      <FeedbackWidget />
    </div>
  );
};

export default Layout;