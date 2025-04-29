import { LanguageProvider } from "../context/LanguageContext";

export const LayoutReact = ({ children }: { children: React.ReactNode }) => {
    return (
        <LanguageProvider>
            {children}
        </LanguageProvider>
    );
};
