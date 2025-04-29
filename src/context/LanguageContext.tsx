import React, { createContext, useContext, useEffect, useState } from "react";
import { defaultLang } from "../i18n/utils/i18n";
import { homeTexts as enHomeTexts } from "../i18n/en/home";
import { homeTexts as esHomeTexts } from "../i18n/es/home";
import type { HomeTexts } from "../i18n/utils/types";

type Lang = "en" | "es";

interface LanguageContextValue {
    language: Lang;
    texts: HomeTexts;
    setLanguage: (lang: Lang) => void;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguageState] = useState<Lang>(defaultLang);
    const [texts, setTexts] = useState<HomeTexts>(enHomeTexts);

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Lang;
        const initialLang = savedLang || defaultLang;

        setLanguageState(initialLang);
        setTexts(initialLang === "en" ? enHomeTexts : esHomeTexts);

        if (!savedLang) {
            localStorage.setItem("language", defaultLang);
        }
    }, []);

    const setLanguage = (lang: Lang) => {
        setLanguageState(lang);
        setTexts(lang === "en" ? enHomeTexts : esHomeTexts);
        localStorage.setItem("language", lang);

        const currentPath = window.location.pathname.split("/").slice(2).join("/");
        window.history.pushState({}, "", `/${lang}/${currentPath}`);
    };

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "es" : "en");
    };

    return (
        <LanguageContext.Provider value={{ language, texts, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
};
