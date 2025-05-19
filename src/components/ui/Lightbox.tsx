import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CircleX } from "lucide-react";

interface LightboxProps {
    imageId: string;
    imageSrc: string;
    alt?: string;
    onClose: () => void;
    onPrev?: () => void;
    onNext?: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ 
    imageId, imageSrc, alt, onClose, onPrev, onNext
}) => {

    const touchStartX = useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) onNext?.(); // swipe left
            else onPrev?.();         // swipe right
        }
        touchStartX.current = null;
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white text-2xl"
            >
                <CircleX size={28} />
            </button>
            {/* Anterior */}
            <button
                onClick={onPrev}
                className="hidden sm:flex absolute left-4 text-white p-2"
            >
                <ChevronLeft size={40} />
            </button>
            {/* Siguiente */}
            <button
                onClick={onNext}
                className="hidden sm:flex absolute right-4 text-white p-2"
            >
                <ChevronRight size={40} />
            </button>

            {/* Imagen */}
            <AnimatePresence>
            <motion.img
                key={imageSrc}
                layoutId={`image-${imageId}`}
                src={imageSrc}
                alt={alt || "Expanded image"}
                className="max-w-full max-h-[90vh] rounded shadow-lg"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            />
            </AnimatePresence>
        </motion.div>
    );
};

export default Lightbox;
