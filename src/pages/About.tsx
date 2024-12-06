import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Leaf, Shield, Heart } from 'lucide-react';

// Imaginile importate local
import PozaEscavator1 from '../Poze/PozaEscavator1.jpeg';
import Poza3 from '../Poze/Poza3.jpeg';
import Poza4 from '../Poze/Poza4.jpeg';
import Poza5 from '../Poze/Poza5.jpeg';
import Poza6 from '../Poze/Poza6.jpeg';
import Poza7 from '../Poze/Poza7.jpeg';
import Poza8 from '../Poze/Poza8.jpeg';
import PozaEscavator8 from '../Poze/PozaEscavator8.jpeg';
import Poza9 from '../Poze/Poza9.jpeg';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const projects = [
  {
    imgSrc: PozaEscavator1,
    title: 'Präzisionsausgrabung',
    description: 'Moderne Geräte für präzise Ausgrabungen im Einsatz.',
  },
  {
    imgSrc: Poza3,
    title: 'Gehwegreparaturen',
    description: 'Sanierung von Gehwegen mit hochwertigen Materialien.',
  },
  {
    imgSrc: Poza4,
    title: 'Verlegung von unterirdischen Kabeln',
    description: 'Sichere Verlegung von Kabeln unter der Erde.',
  },
  {
    imgSrc: Poza5,
    title: 'Ästhetische Pflasterung',
    description: 'Professionelle Pflasterarbeiten für Straßen und Gehwege.',
  },
  {
    imgSrc: Poza6,
    title: 'Fundamentausgrabungen',
    description: 'Vorbereitung der Fundamente für Wohngebäude.',
  },
  {
    imgSrc: Poza7,
    title: 'Installation von Rohrleitungen',
    description: 'Fachmännische Installation von unterirdischen Leitungen.',
  },
  {
    imgSrc: Poza8,
    title: 'Komplexe Ausgrabungsarbeiten',
    description: 'Großprojekte mit leistungsstarken Geräten.',
  },
  {
    imgSrc: PozaEscavator8,
    title: 'Entwässerungssysteme',
    description: 'Installation und Sanierung von Entwässerungssystemen.',
  },
  {
    imgSrc: Poza9,
    title: 'Asphaltierungsarbeiten',
    description: 'Hochwertige Asphaltierung für lokale Straßen.',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Qualität',
    description: 'Wir setzen höchste Standards in allen unseren Projekten.',
  },
  {
    icon: Leaf,
    title: 'Nachhaltigkeit',
    description: 'Nachhaltigkeit ist ein Kernwert unserer Arbeit.',
  },
  {
    icon: Heart,
    title: 'Engagement',
    description: 'Wir sind engagiert für den Erfolg unserer Kunden.',
  },
];

export const About = () => {
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
          <h1 className="text-4xl font-bold mb-6">Über uns</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Tiefbau Dumitru - Ihr Partner in Freiburg und Villingen-Schwenningen
          </p>
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
              <h2 className="text-3xl font-bold mb-6">Unsere Geschichte</h2>
              <p className="text-gray-600 mb-6">
                Seit unserer Gründung vor 2 Jahren haben wir uns auf hochwertige
                Dienstleistungen in Freiburg und Villingen-Schwenningen
                spezialisiert.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <Building2 className="text-blue-600 w-8 h-8" />
                <span className="text-lg font-semibold">
                  Mit über 2 Jahren Erfahrung in Deutschland
                </span>
              </div>
            </div>
            <div className="w-full h-full md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <img
                src={PozaEscavator1}
                alt="Unternehmensaktivitäten"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            {...fadeIn}
          >
            Unsere Projekte
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="rounded-lg overflow-hidden shadow-lg bg-white"
              >
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
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
            Unsere Werte
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg bg-gray-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
