import React from 'react';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  icon?: string;
  subheading?: string;
  actions?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  icon,
  subheading,
  actions,
}) => {
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
          {actions && <div className="flex space-x-2 pt-2">{actions}</div>}
        </div>
      </div>

      {/* 📱 Mobile View */}
      <div className="block md:hidden flex items-center justify-between bg-white rounded-xl shadow-md px-4 py-2">
        <div className="flex items-center gap-3">
          {icon && (
            <img src={icon} alt="icon" className="w-10 h-10 rounded bg-gray-100 p-1" />
          )}
          <div>
            <h3 className="text-base font-semibold text-gray-800">{title}</h3>
            {subheading && <p className="text-sm text-gray-500">{subheading}</p>}
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM10 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM10 14a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Card;
