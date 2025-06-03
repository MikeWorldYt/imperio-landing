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
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = servicesAPI.length - 2;
    const carouselRef = useRef<HTMLDivElement>(null);
  // Carrusel: desplazar el carrusel
    const scroll = (dir: "left" | "right") => {
      if (!carouselRef.current) return;
      const width = carouselRef.current.clientWidth;
      const cardWidth = width / 3;
      let newIndex = currentIndex + (dir === "left" ? -1 : 1);
    // Asegurarse de que el índice esté dentro del rango
      if (newIndex < 0) newIndex = totalCards - 1;
      if (newIndex >= totalCards) newIndex = 0;
    // Desplazar el carrusel
      carouselRef.current.scrollTo({
        left: cardWidth * newIndex,
        behavior: "smooth",
      });
    // Actualizar el índice actual
      setCurrentIndex(newIndex);
    };
  // Carrousel: Auto-scroll y rebote manual entre extremos
    useEffect(() => {
      if (!isDesktop || !carouselRef.current) return;
    // Calcular el ancho de la tarjeta
      const el = carouselRef.current;
      const cardWidth = el.clientWidth / 3;
    // Configurar el desplazamiento automático
      const scrollNext = () => {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= totalCards) nextIndex = 0;
      // Desplazar el carrusel
        el.scrollTo({
          left: cardWidth * nextIndex,
          behavior: "smooth",
        });
      // Actualizar el índice actual
        setCurrentIndex(nextIndex);
      };
    // auto-scroll cada 5 segundos
      const interval = setInterval(scrollNext, 5000);
    // retorno
      return () => clearInterval(interval);
    }, [isDesktop, currentIndex]);

    return (
      <section className="w-full py-16 bg-blue-600/50 flex flex-col items-center justify-center text-black">
        <h2 className="global-section-text mb-8">
          {texts.title}
        </h2>
        <div className="relative w-full max-w-screen-xl px-4">
          {isDesktop ? ( // Desktop view
            <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide scroll-smooth px-1 ">
              {/* Left button */}
              <button
                onClick={() => scroll("left")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-blue-100 rounded-full shadow-xl p-2 hover:bg-blue-200 hover:scale-105 active:scale-95 transition duration-300"
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
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-blue-100 rounded-full shadow-xl p-2 hover:bg-blue-200 hover:scale-105 active:scale-95 transition duration-300"
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