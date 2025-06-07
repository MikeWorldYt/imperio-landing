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
    }, 3000);
    return () => clearInterval(interval);
  }, [locations.length]);
  
  // Render the kicker with the current location
  return (
    <div id="kicker-container">
      <h2 className="kicker text-shadow-dark flex items-center">
        {prefix}{' '}
        {/* ---- Slider ---- */}
        <div id="kicker-slider" >
          <div
            className="kicker-inner inline-block"
            style={{ transform: `translateY(-${index * 3}rem)` }}
          >
            { locations.map((location: string, i: number) => (
              <div key={i} >
                <span className="bg-secondary text-primary px-1">
                  {location}
                </span>
              </div>
            )) }
          </div>
        </div>
        {/* ---- Slider ---- */}
      </h2>
    </div>
  );
};

export default Kicker;