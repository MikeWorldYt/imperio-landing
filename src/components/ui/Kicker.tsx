import { useEffect, useState } from 'react';

// i18n
import type { LangTypes } from '../../i18n/utils/types';
import { homeTexts as enHomeTexts } from '../../i18n/en/home';
import { homeTexts as esHomeTexts } from '../../i18n/es/home';

interface KickerProps {
    lang: string;
}

const textsByLang: Record<string, LangTypes> = {
    en: enHomeTexts,
    es: esHomeTexts,
};

const Kicker = ({ lang }: KickerProps ) => {
  const texts = textsByLang[lang] || textsByLang['en'];
  const locations = texts?.hero?.kickerLocations || [];
  const prefix = texts?.hero?.kickerPrefix || '';
  // State to manage the current index of the location
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (locations.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % locations.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [locations]);
  if (locations.length === 0) return null;
  // Render the kicker with the current location
  return (
    <h2 className="kicker text-shadow-dark">
      {prefix}{' '}
      <span className="transition-opacity duration-500 ease-in-out">
        {locations[index]}
      </span>
    </h2>
  );
};

export default Kicker;