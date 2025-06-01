import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    // Carrousel
    const carouselRef = useRef<HTMLDivElement>(null);
    const scroll = (dir: "left" | "right") => {
      if (carouselRef.current) {
        const width = carouselRef.current.clientWidth;
        carouselRef.current.scrollBy({
          left: dir === "left" ? -width : width,
          behavior: "smooth",
        });
      }
    };

    return (
      <section className="w-full py-16 bg-blue-600/50 flex flex-col items-center justify-center text-black">
        <h2 className="global-section mb-8">
          {texts.title}
        </h2>
        <div className="relative w-full max-w-screen-xl px-4">
          {isDesktop ? ( // Desktop view
            <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide scroll-smooth px-1 ">
              {/* Left button */}
              <button
                onClick={() => scroll("left")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-blue-100 rounded-full shadow-xl p-2"
              >
                <ChevronLeft className="text-blue-950" />
              </button>
              {/* CARROUSEL CONTAINER */ }
                <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide scroll-smooth">
                  {servicesAPI.map((service, index) => (
                    <div className="snap-start shrink-0 w-[calc(100%/3-1rem)] h-full py-2">
                      <Card key={index} {...service} />
                    </div>
                  ))}
                </div>
              {/* Right button  */}
              <button
                onClick={() => scroll("right")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-blue-100 rounded-full shadow-xl p-2"
              >
                <ChevronRight className="text-blue-950" />
              </button>
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