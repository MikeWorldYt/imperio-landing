import { useEffect } from 'react';
import { Menu } from 'lucide-react';
import astroLogo from '../../assets/Imagotipo.svg?url';

import '../../styles/global.css';

import LanguageToggle from '../ui/LanguageToggle';
import ThemeToggle from '../ui/ThemeToggle';

import { navTexts as enNavTexts } from '../../i18n/en/nav';
import { navTexts as esNavTexts } from '../../i18n/es/nav';

interface Props {
  lang: string;
}

const navTextsByLang = {
  en: enNavTexts,
  es: esNavTexts,
};

export default function Header({ lang }: Props) {
  const texts = navTextsByLang[lang] || enNavTexts;

  useEffect(() => {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle("translate-x-full");
        menu.classList.toggle("translate-x-0");
      });
    }
  }, []);

  return (
    <header>
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href={`/${lang}/home`} className="flex items-center space-x-2">
          <img src={astroLogo} alt="Homepage" className="h-6" />
          <span className="font-bold text-lg">Imperio Pools</span>
        </a>
        {/* Botón hamburguesa */}
        <button id="menu-toggle" className="md:hidden text-2xl focus:outline-none">
          <Menu color="white" />
        </button>
        {/* Navegacion Desktop */}
        <ul id="desk-menu" className="hidden md:flex font-bold">
          <li><a href={`/${lang}/gallery`}>{texts.nav2}</a></li>
          <li><a href={`/${lang}/services`}>{texts.nav3}</a></li>
          <li><a href={`/${lang}/get-quote/form`}>{texts.nav4}</a></li>
          <LanguageToggle />
          <ThemeToggle />
        </ul>
      </nav>
      {/* Mobile Menu */}
      <ul id="mobile-menu" className="fixed transform translate-x-full transition-all duration-500 ease-in-out bg-white w-full z-30 p-4 space-y-4">
        <li><a href={`/${lang}/home`}>{texts.nav1}</a></li>
        <li><a href={`/${lang}/gallery`}>{texts.nav2}</a></li>
        <li><a href={`/${lang}/services`}>{texts.nav3}</a></li>
        <li><a href={`/${lang}/get-quote/form?s=renovation`}>{texts.nav4}</a></li>
        <li className="flex items-center justify-end space-x-2 pt-5">
          <p className="pr-2">{lang === 'en' ? 'Language: ' : 'Idioma: '}</p>
          <LanguageToggle />
        </li>
        <li className="flex items-center justify-end space-x-2">
          <p className="pr-2">{lang === 'en' ? 'Appearance: ' : 'Tema: '}</p>
          <ThemeToggle />
        </li>
      </ul>
    </header>
  );
}
