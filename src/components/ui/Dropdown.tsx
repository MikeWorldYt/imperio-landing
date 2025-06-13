import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Props {
    categories: string[];
    filter: string;
    lang: string;
}

const Dropdown: React.FC<Props> = ({ categories, filter, lang }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center"
      >
        <span>{filter.replace("-", " ")}</span>
        <ChevronDown className="ml-2 h-6" />
      </button>

      {open && (
        <ul className="absolute z-10 w-full mt-1 bg-white dark:bg-dark border rounded shadow-lg max-h-60 overflow-auto">
          {categories.map(cat => (
            <li key={cat}>
              <a
                href={`/${lang}/gallery?f=${cat}`}
                className={`block px-4 py-2 ${
                  cat === filter
                    ? 'bg-blue-100 text-blue-600 font-semibold'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setOpen(false)}
              >
                {cat.replace("-", " ")}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
