import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from '../../ui/Card';
import { servicesTexts as enServicesTexts } from "../../../i18n/en/services";
import { servicesTexts as esServicesTexts } from "../../../i18n/es/services";
// import { servicesAPI } from '../../../data/servicesData';
import type { LangTypes, ServicesTypes } from '../../../i18n/utils/types';

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

const servicesTextsByLang: Record<string, LangTypes> = {
  en: enServicesTexts,
  es: esServicesTexts,
};


const Services = ({ lang }: ServicesProps) => {
    const isDesktop = useIsDesktop();
    const servicesAPI = servicesTextsByLang[lang].services;
  // Carrousel
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = servicesAPI.length - 2;
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false); // detectar el hover
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
      if (!isDesktop || !carouselRef.current || isHovered) return;
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
    }, [isDesktop, currentIndex, isHovered]);

    return (
      <>
        <div className="relative w-full max-w-screen-xl px-4">
          {isDesktop ? ( // Desktop view
            <div className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth ">
              {/* Left button */}
              <button
                onClick={() => scroll("left")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-blue-100 rounded-full shadow-xl p-2 hover:bg-blue-200 hover:scale-105 active:scale-95 transition duration-300"
              >
                <ChevronLeft className="text-blue-950" />
              </button>
              {/* CARROUSEL CONTAINER */ }
                <div ref={carouselRef} className="flex overflow-x-auto px-4 py-4 pl-4 gap-4 scrollbar-hide scroll-smooth">
                  {servicesAPI.map(( service: ServicesTypes , index: number ) => (
                    <div
                      key={index}
                      className="snap-start shrink-0 w-[calc(100%/3-1rem)] h-full "
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
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
              {servicesAPI.map(( service: ServicesTypes, index: number ) => (
                <Card key={index} {...service} />
              ))}
            </div>
          )}
        </div>
      </>
    );
};

  export default Services;