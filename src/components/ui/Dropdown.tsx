import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Props {
    categories: string[];
    filter: string;
    lang: string;
    page?: string;
}

const Dropdown: React.FC<Props> = ({ categories, filter, lang, page }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative z-10">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center"
      >
        <span>
          { filter.replace("and", "&").replace(/-/g, " ").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") }
        </span>
        <ChevronDown className="ml-2 h-6" />
      </button>

      {open && (
        <ul className="absolute w-max mt-1 bg-white dark:bg-dark border rounded shadow-lg overflow-auto">
          {(page === "services" ? categories.slice(1) : categories).map(cat => (
            <li key={cat}>
              <a
                href={
                  page === "gallery"
                    ? `/${lang}/gallery?f=${cat}`
                    : `/${lang}/${page}/${cat}`
                }
                className={`block px-4 py-2 ${
                  cat === filter
                    ? 'bg-blue-100 text-blue-600 font-semibold'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setOpen(false)}
              >
                { cat.replace("and", "&").replace(/-/g, " ").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") }
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
