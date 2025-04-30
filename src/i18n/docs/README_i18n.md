# 🌐 Internationalization System (i18n)

This project implements multilingual support (English and Spanish) using Astro + React + Tailwind CSS. Below is an overview of the structure and key decisions made for i18n support.

---

## 📦 Directory Structure

```
/src
  └── hooks/
      ├── useLang.ts
      ├── useLangPageTexts.ts
      └── useTranslations.ts
  └── i18n/
      ├── en/
      │   └── home.ts
      │   └── gallery.ts
      │   ...
      ├── es/
      │   └── home.ts
      │   └── gallery.ts
      │   ...
      ├── utils/
      │   └── i18n.ts      // functions: getDefaultLang, getLangFromUrl
      │   └── types.ts     // types for texts
```

---

## 🔁 i18n Hooks

- `useLang()`  
  Detects the language from the URL.
  
- `useLangPageTexts<T>()`  
  Returns the correct translation object based on the current language.
  
- `useTranslations()`  
  Receives the translation object and returns a function `t('key')` to access translations.
  

---

## ⚠️ About Astro Typing in Hooks

Hooks like `useLang()` and `useLangPageTexts()` rely on `Astro.url`, which is **only available inside `.astro` files**.

For this reason:

- **Do NOT import these hooks in `.ts` or `.tsx` files unless you pass `Astro` explicitly.**
- Inside `.astro` files, TypeScript may raise errors about `Astro`, so you can safely use:

```ts
// @ts-expect-error Astro is available in .astro context
const lang = useLang();
```

---

## 🧪 Usage Example in `gallery.astro`

```ts
---
import { useLang } from '../../hooks/useLang';
import { useLangPageTexts } from '../../hooks/useLangPageTexts';
import { useTranslations } from '../../hooks/useTranslations';
import { galleryTexts as en } from '../../i18n/en/gallery';
import { galleryTexts as es } from '../../i18n/es/gallery';

const textsByLang = { en, es };

// @ts-expect-error Astro is available in .astro context
const lang = useLang();
// @ts-expect-error Astro is available in .astro context
const texts = useLangPageTexts(textsByLang);
const t = useTranslations(texts);
---
```

---

## 🌍 Adding More Languages

To add a new language:

1. Create a new file in `/i18n/{lang}/`, e.g. `/i18n/fr/home.ts`
2. Add it to the `textsByLang` object
3. If using static routes, update `getStaticPaths()` to include the new language code

---

## 📌 Final Notes

This setup aims to be clean, scalable, and developer-friendly for Astro projects.  
The TypeScript exceptions are safe and documented to avoid unnecessary complexity or runtime issues.