import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-[#003366] text-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Tiefbau Dumitru</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300 transition"
              }
            >
              Startseite
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300 transition"
              }
            >
              Über uns
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300 transition"
              }
            >
              Dienstleistungen
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300 transition"
              }
            >
              Kontakt
            </NavLink>

            {/* Call Button */}
            <a
              href="tel:+490123456789" // Înlocuiește cu numărul corect
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              <Phone size={20} />
              <span>Jetzt anrufen</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 bg-[#003366] text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block ${isActive ? "text-yellow-300" : "hover:text-yellow-300"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Startseite
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block ${isActive ? "text-yellow-300" : "hover:text-yellow-300"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block ${isActive ? "text-yellow-300" : "hover:text-yellow-300"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Dienstleistungen
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block ${isActive ? "text-yellow-300" : "hover:text-yellow-300"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </NavLink>

            {/* Call Button for Mobile */}
            <a
              href="tel:+040760178159" // Înlocuiește cu numărul corect
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              <Phone size={20} />
              <span>Jetzt anrufen</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
