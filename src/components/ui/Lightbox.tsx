import React, { useRef, useState } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
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

    const variants = {
        enter: (dir: "left" | "right") => ({
            x: dir === "left" ? 600 : -600,
            opacity: 0,
        }),
        center: () => ({
            x: 0,
            opacity: 1,
        }),
        exit: (dir: "left" | "right") => ({
            x: dir === "left" ? -300 : 300,
            opacity: 0,
        }),
    };

    const isMobile = useIsMobile();
    const [direction, setDirection] = useState<"left" | "right">("left");

    return (
        <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute z-40 top-4 right-4 text-white p-2 hover:scale-110 transition-transform"
            >
                <CircleX size={28} />
            </button>
            {/* Anterior */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onPrev?.();
                }}
                className="hidden sm:flex absolute left-4 text-white hover:bg-slate-200 rounded-full p-2 z-20"
            >
                <ChevronLeft size={40} />
            </button>
            {/* Siguiente */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onNext?.();
                }}
                className="hidden sm:flex absolute right-4 text-white hover:bg-slate-200 rounded-full p-2 z-20"
            >
                <ChevronRight size={40} />
            </button>

            {/* Imagen */}
            {isMobile ? (
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={imageSrc}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(e, info) => {
                            if (info.offset.x < -100) {
                                setDirection("left");
                                onNext?.();
                            } else if (info.offset.x > 100) {
                                setDirection("right");
                                onPrev?.();
                            }
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                    <img
                        src={imageSrc}
                        alt={alt || "Expanded image"}
                        className="max-w-full max-h-[90vh] rounded shadow-lg"
                    />
                    </motion.div>
                </AnimatePresence>
            ) : (
                <motion.img
                    key={imageSrc}
                    layoutId={`image-${imageId}`}
                    src={imageSrc}
                    alt={alt || "Expanded image"}
                    className="max-w-full max-h-[90vh] rounded shadow-lg"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onClick={(e) => e.stopPropagation()}
                />
            )}
        </motion.div>
    );
};

export default Lightbox;
