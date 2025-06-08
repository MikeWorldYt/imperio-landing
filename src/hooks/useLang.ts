import type { AstroGlobal } from 'astro';
import { getLangFromUrl, getDefaultLang } from '../i18n/utils/i18n';

export function useLang(Astro: AstroGlobal): string {
	const url = new URL(Astro.request.url);
	const fromUrl = getLangFromUrl(url);
	return fromUrl || getDefaultLang();
}