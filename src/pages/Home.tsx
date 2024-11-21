import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Poza1 from '../Poze/Poza10.jpeg';
import Poza2 from '../Poze/Poza5.jpeg';
import Poza3 from '../Poze/Poza4.jpeg';
import PozaPavaj from '../Poze/Poza1.jpeg';
import { Link } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useTranslation } from 'react-i18next'; // Importare pentru traduceri

export const Home = () => {
  const { t } = useTranslation(); // Hook-ul pentru traduceri
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    {
      title: t('services.fiber.title'),
      description: t('services.fiber.description'),
      images: [Poza1, Poza2, Poza1],
      color: 'bg-gradient-to-r from-blue-500 to-blue-700',
    },
    {
      title: t('services.network.title'),
      description: t('services.network.description'),
      images: [Poza3, Poza2],
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
      {/* Header Section */}
      <div className="relative h-[80vh] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl flex-1"
          >
            <h1 className="text-5xl font-bold mb-4">{t('home.title')}</h1>
            <p className="text-xl mb-8">{t('home.subtitle')}</p>
            <p className="text-lg mb-4">{t('home.intro')}</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {t('home.cta')} <ArrowRight />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <img
              loading="lazy"
              src={Poza2}
              alt="Descriptive Image"
              className="w-full h-[60vh] object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
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
            {t('home.whyChooseUs')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t('home.advantages', { returnObjects: true }).map((advantage, index) => (
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
            {t('home.readyToStart')}
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {t('home.requestQuote')} <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};
