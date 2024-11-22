import React from "react";
import { useTranslation } from "react-i18next"; // Importăm funcția de traducere
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importăm Font Awesome

export const Footer = () => {
  const { t } = useTranslation(); // Funcție pentru traduceri

  const currentYear = new Date().getFullYear(); // Obține anul curent pentru copyright

  return (
    <footer className="bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white py-8">
      {/* Container principal */}
      
      <div className="container mx-auto px-4">
        {/* Secțiunea Iconițe Sociale */}
        <hr className="border-gray-400 opacity-50 mb-6" />
        <div className="flex justify-center space-x-6 mt-4 mb-6">
          {/* Telefon */}
          <a
            href="tel:+00 40 (760) 178 159" /* aici pui nr de tel */
            className="text-white hover:text-gray-300 transition transform hover:scale-110"
            title="Telefon"
          >
            <i className="fas fa-phone fa-lg"></i>
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/00 40 (760) 178 159"/* aici pui whatap ul */
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition transform hover:scale-110"
            title="WhatsApp"
          >
            <i className="fab fa-whatsapp fa-lg"></i>
          </a>
         
          {/* Email */}
          <a
            href="mailto:dumitruvolosin185@gmail.com" /* aici pui email ul */
            className="text-white hover:text-gray-300 transition transform hover:scale-110"
            title="Email"
          >
            <i className="fas fa-envelope fa-lg"></i>
          </a>
        </div>

        {/* Secțiunea cu informații de contact */}
        <div className="text-center mb-4">
          {/* Titlu */}
          <h4 className="text-base font-semibold mb-2">
            {t("footer.contactInfo")}
          </h4>
          {/* Email */}
          <p className="text-sm flex items-center justify-center gap-2">
            <i className="fas fa-envelope"></i>
            <span>
              <strong>{t("footer.email")}:</strong> dumitruvolosin185@gmail.com
            </span>
          </p>
          {/* Telefon */}
          <p className="text-sm flex items-center justify-center gap-2 mt-2">
            <i className="fas fa-phone"></i>
            <span>
              <strong>{t("footer.phone")}:</strong> 00 40 760 178 159
            </span>
          </p>
        </div>

        {/* Linie de delimitare */}
        <hr className="border-gray-400 opacity-50 mb-6" />

        {/* Secțiunea de copyright */}
        <div className="text-center text-xs">
          &copy; {currentYear}{" "}
          <a
            href="https://www.linkedin.com/in/nicolae-vasile-veciunca-77b398309/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-gray-300"
          >
            
          </a>
          . {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};
