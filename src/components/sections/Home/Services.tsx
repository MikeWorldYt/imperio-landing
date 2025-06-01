import Card from '../../ui/Card';
import { servicesAPI } from '../../../data/servicesData';
import { homeTexts as enHomeTexts } from '../../../i18n/en/home';
import { homeTexts as esHomeTexts } from '../../../i18n/es/home';
import type { LangTypes } from '../../../i18n/utils/types';

interface ServicesProps {
  lang: string;
}

const homeTextsByLang: Record<string, LangTypes> = {
  en: enHomeTexts,
  es: esHomeTexts,
};


const Services = ({ lang }: ServicesProps) => {
    const texts = homeTextsByLang[lang].services;

    return (
      <section className="w-full py-16 bg-blue-600/50 flex flex-col items-center justify-center text-black">
        <h2 className="global-section mb-8">
          {texts.title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-screen-xl px-4">
          {servicesAPI.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </section>
    );
};

  export default Services;