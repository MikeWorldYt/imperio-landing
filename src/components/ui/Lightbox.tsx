import React from "react";
import { ChevronLeft, ChevronRight, CircleX } from "lucide-react";

interface LightboxProps {
    imageSrc: string;
    alt?: string;
    onClose: () => void;
    onPrev?: () => void;
    onNext?: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ 
    imageSrc, alt, onClose, onPrev, onNext
}) => {

    return (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white text-2xl"
            >
                <CircleX size={28} />
            </button>
            {/* Anterior */}
            <button
                onClick={onPrev}
                className="absolute left-4 text-white p-2"
            >
                <ChevronLeft size={40} />
            </button>
            {/* Siguiente */}
            <button
                onClick={onNext}
                className="absolute right-4 text-white p-2"
            >
                <ChevronRight size={40} />
            </button>

            {/* Imagen */}
            <img
                src={imageSrc}
                alt={alt || "Expanded image"}
                className="max-w-full max-h-[90vh] rounded shadow-lg"
            />
        </div>
    );
};

export default Lightbox;
