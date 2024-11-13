import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Zap, Wifi, Cable, Bolt, Wrench, Shield, ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  color: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  details,
  color,
  isExpanded,
  onToggle
}) => {
  return (
    <motion.div 
      layout
      className={`bg-white rounded-lg shadow-lg overflow-hidden`}
    >
      <div className={`h-48 ${color} flex items-center justify-center`}>
        <Icon className="w-24 h-24 text-white" />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <button
          onClick={onToggle}
          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          {isExpanded ? (
            <>
              Mai puțin <ChevronUp className="ml-2" />
            </>
          ) : (
            <>
              Mai multe <ChevronDown className="ml-2" />
            </>
          )}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <ul className="space-y-3">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Shield className="w-5 h-5 text-blue-600 mr-3" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const { t } = useTranslation();
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: Network,
      title: t('services.fiber.title'),
      description: t('services.fiber.description'),
      details: t('services.fiber.details', { returnObjects: true }) as string[],
      color: 'bg-gradient-to-r from-blue-500 to-blue-700'
    },
    {
      icon: Zap,
      title: t('services.electrical.title'),
      description: t('services.electrical.description'),
      details: t('services.electrical.details', { returnObjects: true }) as string[],
      color: 'bg-gradient-to-r from-yellow-500 to-red-500'
    },
    {
      icon: Wifi,
      title: t('services.network.title'),
      description: t('services.network.description'),
      details: t('services.network.details', { returnObjects: true }) as string[],
      color: 'bg-gradient-to-r from-green-500 to-green-700'
    },
    {
      icon: Wrench,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.description'),
      details: t('services.maintenance.details', { returnObjects: true }) as string[],
      color: 'bg-gradient-to-r from-purple-500 to-purple-700'
    }
  ];

  return (
    <div className="flex-1 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">{t('services.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              isExpanded={expandedService === index}
              onToggle={() => setExpandedService(expandedService === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};