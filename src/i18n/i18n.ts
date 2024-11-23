import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { translations } from './translations'; // Importă traducerile

i18n
  .use(LanguageDetector) // Detectează limba browserului
  .use(initReactI18next) // Inițializează react-i18next
  .init({
    resources: translations, // Utilizează resursele de traducere
    lng: 'de', // Setează limba implicită la germană
    fallbackLng: 'de', // Limba de rezervă este germană
    interpolation: {
      escapeValue: false, // React deja tratează XSS
    },
  });

export default i18n;
