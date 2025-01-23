import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import vi from '@/constants/langs/fr.json';
import en from '@/constants/langs/en.json';
import { getStringLocalData, setStringLocalData } from '@/utils/local-store';

const resources = {
    en: {
        translation: en
    },
    fr: {
        translation: vi
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: getStringLocalData('lang') || 'fr',
        saveMissing: true,
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })
    .then(() => {
        const lang = getStringLocalData('lang');
        if (!lang) {
            setStringLocalData('lang', 'fr');
        }
    });
i18n.on('languageChanged', (e) => {
    setStringLocalData('lang', e);
});
export default i18n;