import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Poza1 from '../Poze/Poza10.jpeg';
import Poza2 from '../Poze/PozaEscavator1.jpeg';
import Poza3 from '../Poze/Poza4.jpeg';
import PozaPavaj from '../Poze/Poza1.jpeg';
import { Link } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export const Home = () => {
  const { t } = useTranslation(); // Hook-ul pentru traduceri
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    {
      title: t('services.fiber.title'),
      description: t('services.fiber.description'),
      images: [Poza1],
      color: 'bg-gradient-to-r from-blue-500 to-blue-700',
    },
    {
      title: t('services.network.title'),
      description: t('services.network.description'),
      images: [Poza3],
      color: 'bg-gradient-to-r from-green-500 to-green-700',
    },
    {
      title: t('services.paving.title'),
      description: t('services.paving.description'),
      images: [PozaPavaj],
      color: 'bg-gradient-to-r from-gray-600 to-gray-800',
    },
  ];

  return (
    <div className="flex-1">
      {/* Secțiunea de titlu */}
      <div
        className="relative flex flex-col md:flex-row h-auto md:h-[80vh] items-center p-4"
        style={{
          backgroundImage: `url(${Poza2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-2xl md:flex-1 md:px-4 mb-6 md:mb-0"
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('home.title')}</h1>
          <p className="text-lg md:text-xl mb-4">{t('home.subtitle')}</p>
          <p className="text-base md:text-lg mb-6">{t('home.intro')}</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('home.cta')} <ArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Secțiunea Servicii */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('services.title')}
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
                    {t('services.learnMore')} <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={services.flatMap((service) => service.images).map((imgSrc) => ({ src: imgSrc }))}
          currentIndex={currentImageIndex}
          afterChange={(index) => setCurrentImageIndex(index)}
        />
      )}
    </div>
  );
};
