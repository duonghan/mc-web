import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from './i18n/en';

const messages = {
    vi: () => import('./i18n/vi').then(messages => messages.default),
};

export default polyglotI18nProvider(locale => {
    if (locale === 'vi') {
        return messages[locale]();
    }

    // Always fallback on english
    return englishMessages;
}, 'en');