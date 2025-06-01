import { useEffect, useState } from "react";
import Card from '../../ui/Card';
import { servicesAPI } from '../../../data/servicesData';
import { homeTexts as enHomeTexts } from '../../../i18n/en/home';
import { homeTexts as esHomeTexts } from '../../../i18n/es/home';
import type { LangTypes } from '../../../i18n/utils/types';
import { div } from "framer-motion/client";

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
        <div className="">
          {servicesAPI.map((service, index) => (
            <div className="min-w-[calc(100%/3-1rem)] snap-start shrink-0">
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