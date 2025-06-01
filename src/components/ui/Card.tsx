import React, { useState } from 'react';

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
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  icon,
  subheading,
  btnPrimary,
}) => {
  // Toggle menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    console.log('Botón de menú móvil clickeado. Estado ANTERIOR:', isMobileMenuOpen);
    setIsMobileMenuOpen(prevState => {
      console.log('Nuevo estado será:', !prevState);
      return !prevState;
    });
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
          {btnPrimary && btnPrimary.length > 0 && (
            <div className="flex space-x-2 pt-2">
              {btnPrimary.map((action, index) => (
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
        {btnPrimary && btnPrimary.length > 0 && ( // Dropdown menu para móvil
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
              className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg z-20 ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button" // Deberías dar un id al botón si usas esto
            >
              <div className="py-2 px-4" role="none">
                {btnPrimary.map((action, index) => (
                  <a
                    key={index}
                    href={action.href}
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${action.className || ''}`}
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
