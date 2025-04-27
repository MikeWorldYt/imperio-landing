type Texts = Record<string, string>;

export function useTranslations(texts: Texts) {
    return function t(key: keyof typeof texts) {
        return texts[key] || key;
    };
}