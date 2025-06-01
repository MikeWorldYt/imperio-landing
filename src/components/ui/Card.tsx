import React, { useState, useEffect, useId } from 'react';

interface ActionItem {
  href: string;
  text: string;
  className?: string;
}

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  icon?: string;
  subheading?: string;
  btnPrimary?: ActionItem[];
  btnSecondary?: ActionItem[];
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  icon,
  subheading,
  btnPrimary,
  btnSecondary,
}) => {
  // Toggle menú móvil
  const menuId = useId();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Cerrar menú móvil al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = () => setIsMobileMenuOpen(false); // TASK: Crear un evento para cerrar el menú móvil al hacer clic fuera de él
    const handleCustomEvent = (e: CustomEvent<string>) => {
      if (e.detail !== menuId) setIsMobileMenuOpen(false);
    };
    window.addEventListener("close-all-menus", handleCustomEvent as EventListener);
    return () => {
      window.removeEventListener("close-all-menus", handleCustomEvent as EventListener);
    };
  }, [menuId]);
  // Función para alternar el menú móvil
  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    if (nextState) {
      const event = new CustomEvent("close-all-menus", { detail: menuId });
      window.dispatchEvent(event);
    }
  };

  return (
    <>
      {/* 💻 Desktop View */}
      <div className="hidden md:block rounded-xl shadow-md overflow-hidden bg-white w-full transform transition duration-300 hover:shadow-2xl hover:scale-[1.025]">
        {image && (
          <div className="p-2">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-md border border-gray-200" />
          </div>
        )}
        <div className="px-4 pb-4 space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          {description && <p className="text-gray-600 text-sm">{description}</p>}
          { (btnPrimary?.length || btnSecondary?.length) && (
            <div className="flex flex-wrap gap-2 pt-2">
              {btnSecondary?.map((action, index) => (
                <a
                  key={`secondary-${index}`}
                  href={action.href}
                  className={action.className || "text-gray-500 hover:text-gray-700"}
                >
                  {action.text}
                </a>
              ))}
              {btnPrimary?.map((action, index) => (
                <a
                  key={index}
                  href={action.href}
                  className={action.className || "text-blue-500 hover:text-blue-700"} // Clase por defecto si no se provee
                  // target={action.href.startsWith('http') ? '_blank' : undefined} // Ejemplo para abrir en nueva pestaña
                  // rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {action.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 📱 Mobile View */}
      <div className="md:hidden flex items-center justify-between bg-white rounded-xl shadow-md px-4 py-2">
        <div className="flex items-center gap-3">
          {icon && (
            <img src={icon} alt="icon" className="w-10 h-10 rounded bg-gray-100 p-1" />
          )}
          <div>
            <h3 className="text-base font-semibold text-gray-800">{title}</h3>
            {subheading && <p className="text-sm text-gray-500">{subheading}</p>}
          </div>
        </div>
        {btnPrimary && btnPrimary.length && btnSecondary && btnSecondary.length > 0 && ( // Dropdown menu para móvil
          <div className="relative flex-shrink-0">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              className="text-gray-500 hover:text-gray-700"
            >
            {/* Icono de tres puntos */}
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM10 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM10 14a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
            </svg>
          </button>
          {isMobileMenuOpen && (
            <div
              className="absolute right-0 mt-2 origin-top-right bg-white rounded-md shadow-lg z-20 ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button" // Deberías dar un id al botón si usas esto
            >
              <div className="py-2 px-4 shadow-lg flex gap-2" role="none">
                {btnSecondary.map((action, index) => (
                  <a
                    key={index}
                    href={action.href}
                    className={`w-[7rem] text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${action.className || ''}`}
                    role="menuitem"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {action.text}
                  </a>
                ))}
                {btnPrimary.map((action, index) => (
                  <a
                    key={index}
                    href={action.href}
                    className={`text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${action.className || ''}`}
                    role="menuitem"
                    onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú al hacer clic en una acción
                  >
                    {action.text}
                  </a>
                ))}
              </div>
            </div>
          )}
          </div>
        )}

      </div>
    </>
  );
};

export default Card;
