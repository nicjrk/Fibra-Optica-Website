import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Users, Shield, Building2, Leaf, Trophy, Heart } from 'lucide-react';

export const About = () => {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
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
              <h2 className="text-3xl font-bold mb-6">{t('about.history.title')}</h2>
              <p className="text-gray-600 mb-6">{t('about.history.description')}</p>
              <div className="flex items-center space-x-4">
                <Building2 className="text-blue-600 w-8 h-8" />
                <span className="text-lg font-semibold">{t('about.experience')}</span>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
                alt="Company Building"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            {...fadeIn}
          >
            {t('about.values.title')}
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'about.values.quality' },
              { icon: Leaf, title: 'about.values.sustainability' },
              { icon: Heart, title: 'about.values.commitment' }
            ].map((value, index) => (
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

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold text-center mb-12">{t('about.certifications.title')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Trophy, title: 'ISO 9001' },
                { icon: Shield, title: 'ISO 14001' },
                { icon: Award, title: 'ISO 45001' }
              ].map((cert, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <cert.icon className="w-8 h-8 text-blue-600" />
                  <span className="font-semibold">{cert.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">{t('about.team.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('about.team.description')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${1500 + index}?ixlib=rb-4.0.3`}
                    alt={`Team Member ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t(`about.team.member${index + 1}.name`)}</h3>
                <p className="text-gray-600">{t(`about.team.member${index + 1}.position`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};