import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Building2, Leaf, Shield, Heart } from 'lucide-react';
import Poza1 from '../Poze/Poza1.jpeg'; // Imaginea importată local
import Poza2 from '../Poze/Poza2.jpeg'; // A doua imagine importată local

export const About = () => {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="flex-1 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('about.subtitle')}</p>
        </motion.div>
      </div>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            {...fadeIn}
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {t('about.history.title')}
              </h2>
              <p className="text-gray-600 mb-6">{t('about.history.description')}</p>
              <div className="flex items-center space-x-4 mb-8">
                <Building2 className="text-blue-600 w-8 h-8" />
                <span className="text-lg font-semibold">
                  {t('about.experience')}
                </span>
              </div>
            </div>
            <div className="w-full h-full md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <img
                src={Poza1}
                alt="Company Activities"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            {...fadeIn}
          >
            {t('about.projects.title')}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg"
              {...fadeIn}
            >
              <img
                src={Poza1}
                alt="Fiber Installation"
                className="w-full h-[300px] object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-4">
                  {t('about.projects.fiber')}
                </h3>
                <p className="text-gray-600">{t('about.projects.fiber.description')}</p>
              </div>
            </motion.div>
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg"
              {...fadeIn}
            >
              <img
                src={Poza2}
                alt="Paving Work"
                className="w-full h-[300px] object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-4">
                  {t('about.projects.paving')}
                </h3>
                <p className="text-gray-600">{t('about.projects.paving.description')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            {...fadeIn}
          >
            {t('about.values.title')}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[{ icon: Shield, title: 'about.values.quality' },
              { icon: Leaf, title: 'about.values.sustainability' },
              { icon: Heart, title: 'about.values.commitment' }].map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg bg-gray-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{t(value.title)}</h3>
                <p className="text-gray-600">{t(`${value.title}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
