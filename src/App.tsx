import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import ScrollToTop from './i18n/ScrollToTop'; // Import ScrollToTop
import './i18n/i18n';

function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop trebuie plasat aici */}
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
