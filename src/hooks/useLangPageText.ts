import type { AstroGlobal } from 'astro';
import { getDefaultLang } from '../i18n/utils/i18n';

export function useLangPageTexts<T>(Astro: AstroGlobal, textsByLang: Record<string, T>): T {
	const url = new URL(Astro.request.url);
	let lang = url.pathname.split('/')[1];

	if (!lang || !(lang in textsByLang)) {
		lang = getDefaultLang();
	}

	return textsByLang[lang] || textsByLang['en'];
}