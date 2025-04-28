type Texts = Record<string, string>;

export function useTranslations(texts: any) {
    return function translate(key: string) {
        const parts = key.split('.'); // para soportar cosas como "header.title"
        let value = texts;
        for (const part of parts) {
            if (value && typeof value === 'object') {
                value = value[part];
            } else {
                return key; // fallback: devuelve la key si no existe
            }
        }
        return typeof value === 'string' ? value : key;
    };
}