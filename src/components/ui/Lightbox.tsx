// src/components/ui/Lightbox.tsx
import React from "react";

interface LightboxProps {
    imageSrc: string;
    alt?: string;
    onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageSrc, alt, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white text-2xl"
            >
                ✕
            </button>
            <img
                src={imageSrc}
                alt={alt || "Expanded image"}
                className="max-w-full max-h-[90vh] rounded shadow-lg"
            />
        </div>
    );
};

export default Lightbox;
