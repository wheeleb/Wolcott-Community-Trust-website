import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Contact from './pages/Contact';

// ScrollToTop component to ensure navigation resets view
const ScrollToTop = () => {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
}

const App = () => {
  // Note: Using HashRouter for compatibility with static hosting environments 
  // where full server-side routing configuration might not be available.
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <ScrollToTop /> 
    </Router>
  );
};

export default App;