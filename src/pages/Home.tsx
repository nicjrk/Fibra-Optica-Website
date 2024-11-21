import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ChevronDown, ChevronUp, Shield } from 'lucide-react';
import Poza1 from '../Poze/Poza10.jpeg'; // Import imagine personalizată
import Poza2 from '../Poze/Poza5.jpeg'; // Import imagine personalizată
import Poza3 from '../Poze/Poza4.jpeg'; // Import imagine personalizată
import PozaPavaj from '../Poze/Poza1.jpeg'; // Import imagine personalizată
import { Link } from 'react-router-dom'; // Import Link pentru navigare
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from 'react';
import { translations } from '../i18n/translations'; // Import traduceri

export const Home = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [language, setLanguage] = useState('ro'); // Limba curentă

  const services = [
    {
      title: translations[language].translation.services.fiber.title,
      description: translations[language].translation.services.fiber.description,
      images: [Poza1, Poza2, Poza1],
      color: 'bg-gradient-to-r from-blue-500 to-blue-700',
    },
    {
      title: translations[language].translation.services.network.title,
      description: translations[language].translation.services.network.description,
      images: [Poza3, Poza2],
      color: 'bg-gradient-to-r from-green-500 to-green-700',
    },
    {
      title: translations[language].translation.services.paving.title,
      description: translations[language].translation.services.paving.description,
      images: [PozaPavaj],
      color: 'bg-gradient-to-r from-gray-600 to-gray-800',
    },
  ];

  return (
    <div className="flex-1">
      {/* Header Section */}
      <div className="relative flex flex-col md:flex-row h-auto md:h-[80vh] bg-gradient-to-r from-blue-900 to-blue-700 items-center p-4">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-2xl md:flex-1 md:px-4 mb-6 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{translations[language].translation.home.title}</h1>
          <p className="text-lg md:text-xl mb-4">{translations[language].translation.home.subtitle}</p>
          <p className="text-base md:text-lg mb-6">{translations[language].translation.home.intro}</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {translations[language].translation.home.cta} <ArrowRight />
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:flex-1 md:w-auto"
        >
          <img
            loading="lazy"
            src={Poza2} // Folosirea imaginii importate
            alt="Descriptive Image"
            className="w-full md:h-[60vh] object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {translations[language].translation.services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`h-48 ${service.color} flex items-center justify-center cursor-pointer`}
                  onClick={() => {
                    setLightboxOpen(true);
                    setCurrentImageIndex(0);
                  }}
                  style={{
                    backgroundImage: `url(${service.images[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    {translations[language].translation.services.learnMore} <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox pentru galerie */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={services.flatMap((service) => service.images).map((imgSrc) => ({ src: imgSrc }))}
          currentIndex={currentImageIndex}
          on={{ change: (index) => setCurrentImageIndex(index) }}
        />
      )}

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {translations[language].translation.home.whyChooseUs}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {translations[language].translation.home.advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center space-x-4"
              >
                <CheckCircle className="flex-shrink-0" />
                <span className="text-lg">{advantage}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {translations[language].translation.home.readyToStart}
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {translations[language].translation.home.requestQuote} <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};
