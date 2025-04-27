export const defaultLang = 'en';

export const languages = {
    en: 'English',
    es: 'Español',
} as const;

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in languages) return lang as keyof typeof languages;
    return defaultLang;
}

export function getStaticPaths() {
    return [
        { params: { lang: 'en' } },
        { params: { lang: 'es' } },
    ];
}

export function getDefaultLang() {
    return defaultLang;
}