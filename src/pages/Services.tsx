import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Shield } from 'lucide-react';
import Poza1 from '../Poze/Poza10.jpeg';
import Poza2 from '../Poze/Poza5.jpeg';
import Poza3 from '../Poze/Poza4.jpeg';
import Poza4 from '../Poze/Poza3.jpeg';
import PozaPavaj from '../Poze/Poza1.jpeg';

interface ServiceCardProps {
  images: string[];
  title: string;
  description: string;
  details: string[];
  color: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  images,
  title,
  description,
  details,
  color,
  isExpanded,
  onToggle,
}) => {
  return (
    <motion.div layout className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div
        className={`h-48 ${color} flex items-center justify-center`}
        style={{
          backgroundImage: `url(${images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={onToggle}
          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          {isExpanded ? (
            <>
              Weniger <ChevronUp className="ml-2" />
            </>
          ) : (
            <>
              Mehr <ChevronDown className="ml-2" />
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
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      images: [Poza1, Poza2, Poza1],
      title: 'Glasfaserinstallation',
      description: 'Professionelle Glasfaserinstallationen und Netzwerklösungen in Freiburg und Villingen-Schwenningen.',
      details: [
        'Netzwerkplanung und Design',
        'Glasfaserkabelinstallation',
        'Spleißen und Testen',
        'Wartung und Reparatur',
      ],
      color: 'bg-gradient-to-r from-blue-500 to-blue-700',
    },
    {
      images: [Poza3, Poza4],
      title: 'Netzwerktechnik',
      description: 'Komplette Netzwerklösungen in Freiburg und Villingen-Schwenningen.',
      details: [
        'Netzwerkdesign',
        'Konfiguration',
        'Wartung',
        'Sicherheit',
      ],
      color: 'bg-gradient-to-r from-green-500 to-green-700',
    },
    {
      images: [Poza4],
      title: 'Wartungsservice',
      description: 'Regelmäßige Wartung und Support für Projekte in Freiburg und Villingen-Schwenningen.',
      details: [
        'Präventive Wartung',
        '24/7 Support',
        'Leistungsüberwachung',
        'Systemoptimierung',
      ],
      color: 'bg-gradient-to-r from-purple-500 to-purple-700',
    },
    {
      images: [PozaPavaj],
      title: 'Pflasterarbeiten',
      description: 'Fachgerechte Verlegung und Reparatur von Pflastersteinen für Außenbereiche in Freiburg und Villingen-Schwenningen.',
      details: [
        'Planung und Beratung',
        'Verlegung von Pflastersteinen',
        'Reparaturen und Wartung',
        'Gestaltung von Außenflächen',
      ],
      color: 'bg-gradient-to-r from-gray-600 to-gray-800',
    },
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
          <h1 className="text-4xl font-bold mb-6">Unsere Dienstleistungen in Freiburg und Villingen-Schwenningen</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Umfassende Lösungen für jede Anforderung
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
