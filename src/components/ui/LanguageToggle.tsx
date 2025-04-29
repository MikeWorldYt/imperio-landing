import { useState } from "react";

const LanguageToggle = () => {
    const [language, setLanguage] = useState<"en" | "es">("en");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "es" : "en"));
        // Logica para cambiar el idioma
};

return (
    <div className="flex justify-center items-center">
        <button
            onClick={toggleLanguage}
            className="relative w-28 h-14 bg-gray-100 rounded-full shadow-inner flex items-center justify-between px-4 text-gray-700 font-semibold overflow-hidden"
        >
        <span className="z-10">ES</span>
        <span className="z-10">EN</span>
        <div
            className={`absolute top-1 left-1 w-12 h-12 rounded-full overflow-hidden shadow-md transform transition-transform duration-300 ${
            language === "en" ? "translate-x-16 z-20" : "translate-x-0 z-20"
            }`}
        >
            <img
                key={language} 
                src={language === "en" ? "/icons/flag-us.svg" : "/icons/flag-es.svg"}
                alt="flag"
                className="w-full h-full object-cover transition-opacity duration-300"
            />
        </div>
        </button>
    </div>
    );
};

export default LanguageToggle;