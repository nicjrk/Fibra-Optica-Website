import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ro' ? 'de' : 'ro');
  };

  return (
    <header className="fixed w-full bg-[#003366] text-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Tieufbau Dumitru</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? "text-yellow-300" : "hover:text-yellow-300 transition"
            }>{t('nav.home')}</NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive ? "text-yellow-300" : "hover:text-yellow-300 transition"
            }>{t('nav.about')}</NavLink>
            <NavLink to="/services" className={({ isActive }) => 
              isActive ? "text-yellow-300" : "hover:text-yellow-300 transition"
            }>{t('nav.services')}</NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive ? "text-yellow-300" : "hover:text-yellow-300 transition"
            }>{t('nav.contact')}</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-700 hover:bg-blue-600 transition"
            >
              <Globe size={20} />
              <span>{i18n.language.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `block ${isActive ? "text-yellow-300" : "hover:text-yellow-300"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => 
                `block ${isActive ? "text-yellow-300" : "hover:text-yellow-300"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => 
                `block ${isActive ? "text-yellow-300" : "hover:text-yellow-300"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.services')}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                `block ${isActive ? "text-yellow-300" : "hover:text-yellow-300"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};