import { useEffect, useState } from "react";
import Card from '../../ui/Card';
import { servicesAPI } from '../../../data/servicesData';
import { homeTexts as enHomeTexts } from '../../../i18n/en/home';
import { homeTexts as esHomeTexts } from '../../../i18n/es/home';
import type { LangTypes } from '../../../i18n/utils/types';

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);
  return isDesktop;
};

interface ServicesProps {
  lang: string;
}

const homeTextsByLang: Record<string, LangTypes> = {
  en: enHomeTexts,
  es: esHomeTexts,
};


const Services = ({ lang }: ServicesProps) => {
    const texts = homeTextsByLang[lang].services;
    const isDesktop = useIsDesktop();

    return (
      <section className="w-full py-16 bg-blue-600/50 flex flex-col items-center justify-center text-black">
        <h2 className="global-section mb-8">
          {texts.title}
        </h2>
        <div className="w-full max-w-screen-xl px-4">
          {isDesktop ? ( // Desktop view
            <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide scroll-smooth px-1">
              {servicesAPI.map((service, index) => (
                <div className="snap-start shrink-0 w-[calc(100%/3-1rem)] h-full py-2">
                  <Card key={index} {...service} />
                </div>
              ))}
            </div>
          ) : ( // Mobile view
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-screen-xl px-4">
              {servicesAPI.map((service, index) => (
                <Card key={index} {...service} />
              ))}
            </div>
          )}
        </div>
      </section>
    );
};

  export default Services;