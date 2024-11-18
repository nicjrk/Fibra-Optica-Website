import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Home = () => {
  const { t } = useTranslation();

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
              src="/src/Poze/Untitled.png" // Înlocuiește cu imaginea descriptivă corectă
              alt="Descriptive Image"
              className="w-full h-[60vh] object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">{t('home.about.title')}</h2>
            <p className="text-lg text-gray-600 mb-12">{t('home.about.description')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-video rounded-lg overflow-hidden"
            >
              <img
                loading="lazy"
                src="/src/Poze/Untitled.png"
                alt="Company Project"
                className="w-full h-full object-cover image-hover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-video rounded-lg overflow-hidden"
            >
              <img
                loading="lazy"
                src="/src/Poze/Untitled.png"
                alt="Company Work"
                className="w-full h-full object-cover image-hover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
