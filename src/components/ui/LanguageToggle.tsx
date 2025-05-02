import { useState, useEffect } from "react";
import { defaultLang } from "../../i18n/utils/i18n";

const LanguageToggle = () => {
    const [language, setLanguage] = useState<"en" | "es">(defaultLang);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage === 'en' || savedLanguage === 'es') {
            setLanguage(savedLanguage);
        } else {
            localStorage.setItem('language', defaultLang); // 👈 Manda default si no hay nada
            setLanguage(defaultLang);
        }
    }, []);
    const toggleLanguage = () => {
        const newLanguage = language === "en" ? "es" : "en";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
        // cambio de ruta
        const currentPath = window.location.pathname.split('/').slice(2).join('/');
        window.location.href = `/${newLanguage}/${currentPath}`;
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
        <span className="z-10 text-xs">EN</span>
        <span className="z-10 text-xs">ES</span>
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