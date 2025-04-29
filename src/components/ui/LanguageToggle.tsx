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
            className="relative w-16 h-8 bg-gray-100 rounded-full flex items-center justify-between px-2 text-gray-700 font-semibold overflow-hidden"
            style={{
                boxShadow: "inset 4px 4px 8px #6e819e, inset -4px -4px 8px #ffffff",
            }}
        >
        <span className="z-10 text-xs">ES</span>
        <span className="z-10 text-xs">EN</span>
        <div
            className={`absolute top-1 left-1 w-6 h-6 rounded-full overflow-hidden transform transition-transform duration-500 ease-in-out ${
            language === "en" ? "translate-x-8 z-20" : "translate-x-0 z-20"
            }`}
            style={{
                boxShadow: "2px 2px 6px #bfcce0, -2px -2px 6px #bfcce0",
            }}
        >
            <img
                key={language} 
                src={language === "en" ? "/icons/flag-us.svg" : "/icons/flag-es.svg"}
                alt="flag"
                className="w-full h-full object-cover transition-opacity duration-500"
            />
        </div>
        </button>
    </div>
    );
};

export default LanguageToggle;