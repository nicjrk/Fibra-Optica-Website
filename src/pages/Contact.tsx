import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import ro from '../i18n/ro';
import de from '../i18n/de';

export const translations = { ro, de };
export const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.sendForm(
        'service_cif8cnd', // Asigură-te că acesta este ID-ul corect pentru serviciul tău EmailJS
        'template_pbz3pgu', // Asigură-te că acesta este ID-ul șablonului tău EmailJS
        formRef.current,
        'J2TBjdjWn1txU3btZ' // Asigură-te că aceasta este cheia ta publică corectă
      );
      setSubmitted(true);
      formRef.current.reset();
    } catch (err) {
      console.error("Eroare la trimiterea emailului:", err);
      setError(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
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
          <h1 className="text-4xl font-bold mb-6">{t('contact.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('contact.subtitle')}</p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  name="from_name" // Actualizat pentru a corespunde cu șablonul
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  name="from_email" // Actualizat pentru a corespunde cu șablonul
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center py-2 px-4 rounded-md text-white transition ${
                  isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t('contact.form.submit')}
                  </>
                )}
              </button>
            </form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-100 text-green-700 rounded-md flex items-center"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                {t('contact.form.success')}
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-100 text-red-700 rounded-md"
              >
                {error}
              </motion.div>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('contact.phone.title')}</h3>
                  <p className="text-gray-600">+40 123 456 789</p>
                  <p className="text-gray-600">+40 987 654 321</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('contact.email.title')}</h3>
                  <p className="text-gray-600">contact@fibertech-solutions.com</p>
                  <p className="text-gray-600">support@fibertech-solutions.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('contact.address.title')}</h3>
                  <p className="text-gray-600">Strada Principală 123</p>
                  <p className="text-gray-600">București, România</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1553290322-0440b3457f0e?ixlib=rb-4.0.3"
                  alt="Office Location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
