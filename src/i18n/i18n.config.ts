import i18next from 'i18next';
import {Translation, initReactI18next} from 'react-i18next';
import {en, hw} from './translations';

const resources = {
  en: {
    translation: en,
  },
  hw: {
    translation: hw,
  },
};

i18next.use(initReactI18next).init({
  debug: true,
  lng: 'en',
  //language to use if translation in user language is not availiable
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});
export default i18next;
