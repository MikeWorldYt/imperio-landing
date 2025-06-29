import React, { useRef, useState, useEffect } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X, ZoomIn, ZoomOut, Share2 } from "lucide-react";

interface LightboxProps {
    imageId: string;
    imageSrc: string;
    alt?: string;
    prevImage?: { id: string; src: string; alt?: string }
    nextImage?: { id: string; src: string; alt?: string }
    onClose: () => void;
    onPrev?: () => void;
    onNext?: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ 
    imageId, imageSrc, alt, prevImage, nextImage, onClose, onPrev, onNext
}) => {

    const touchStartX = useRef<number | null>(null);

    // const handleTouchStart = (e: React.TouchEvent) => {
    //     touchStartX.current = e.touches[0].clientX;
    // };

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

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                onPrev?.();
            } else if (e.key === "ArrowRight") {
                onNext?.();
            } else if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onPrev, onNext, onClose]);

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
    const [zoom, setZoom] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const transform = `scale(${zoom}) translate(${position.x}px, ${position.y}px)`;

    // Mobile Detail grabbing Gesture
    const startXRef = useRef(0);
    const startYRef = useRef(0);
    const startPosRef = useRef({ x: 0, y: 0 });

    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        startXRef.current = touch.clientX;
        startYRef.current = touch.clientY;
        startPosRef.current = { x: position.x, y: position.y };
    }
    const handleTouchMove = (e: React.TouchEvent) => {
        e.preventDefault(); // evita scroll de fondo
        const touch = e.touches[0];
        const dx = touch.clientX - startXRef.current;
        const dy = touch.clientY - startYRef.current;
        setPosition({
            x: startPosRef.current.x + dx,
            y: startPosRef.current.y + dy,
        });
    };

    return (
        <div
            className="fixed inset-0 sm:bg-black/80 backdrop-blur bg-black flex items-center justify-center z-50"
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 0.3, ease: "easeInOut" }}
            // onClick={onClose}
        >
            {isMobile ? ( 
                <button // Botón de cerrar - Mobile
                onClick={onClose}
                className="absolute top-0 left-0 p-4 z-50
                        text-white
                        hover:scale-110 transition-transform"
                >
                    <ArrowLeft size={15} />
                </button>
            ) : ( </* Desktop */>
                <button   // Botón de cerrar
                onClick={onClose}
                className="absolute z-50 top-4 right-4 p-2
                        text-white border border-gray-300/10
                        bg-slate-200/10 rounded-full
                        hover:bg-slate-200/30
                        hover:scale-110 transition-transform"
                >
                    <X size={28} />
                </button>
                <button   // Botón anterior
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrev?.();
                    }}
                    className="flex absolute left-4 z-10
                            text-white border border-gray-300/10
                            bg-gray-900/30 rounded-full p-1
                            hover:bg-blue-700/60"
                >
                    <ArrowLeft size={30} />
                </button>
                <button   // Botón siguiente
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext?.();
                    }}
                    className="flex absolute right-4 z-10
                            text-white border border-gray-300/10 
                            bg-gray-900/30 rounded-full p-1
                            hover:bg-blue-700/60"
                >
                    <ArrowRight size={30} />
                </button>
            </>   )}
            {/* Tool Box */}
            <div
                className={`absolute z-30 gap-2 m-2 py-2 px-4 rounded-md
                    flex items-center justify-center text-white
                    bottom-0
                ${isMobile
                    ? "bg-slate-800/80 "
                    : "bg-black/80"
                }`}
            >
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setZoom((z) => Math.max(z - 0.25, 1));
                    }}
                    className="p-2 rounded hover:bg-slate-600 hover:text-blue-400 transition-colors"
                >
                    <ZoomOut size={20} />
                </button>
                <span>
                    {Math.round(zoom * 100)}%
                </span>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setZoom((z) => Math.min(z + 0.25, 2.5));
                    }}
                    className="p-2 rounded hover:bg-slate-600 hover:text-blue-400 transition-colors"
                >
                    <ZoomIn size={20} />
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        // logica de share
                    }}
                    className="p-2 rounded hover:bg-slate-600 hover:text-blue-400 transition-colors"
                >
                    <Share2 size={20} />
                </button>
            </div>


            {/* Imagen */}
            {isMobile ? (
                <div
                    className="absolute inset-0 flex items-center justify-center overflow-hidden"
                >
                {/* <AnimatePresence mode="wait" initial={false}> */}
                    <motion.div
                        key={imageSrc}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0, ease: "easeOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(e, info) => {
                            if (zoom !== 1) return;
                            const threshold = window.innerWidth * 0.4;
                            if (info.offset.x < -threshold && nextImage) {
                                setDirection("left");
                                onNext?.();
                            } else if (info.offset.x > threshold && prevImage) {
                                setDirection("right");
                                onPrev?.();
                            }
                        }}
                        className="flex items-center justify-center"
                        onClick={onClose}
                    >
                    {/* <img
                        src={imageSrc}
                        alt={alt || "Expanded image"}
                        className="max-w-full max-h-[90vh] rounded shadow-lg"
                    /> */}

                    {prevImage ? (
                        <div className="flex-shrink-0 w-full flex items-center justify-center">
                            <img
                                src={prevImage.src}
                                alt={prevImage.alt || "Previous"}
                                className="max-w-full max-h-[90vh] rounded shadow-lg"
                            />
                        </div>
                    ) : (
                        <div className="flex-shrink-0 w-full" />
                    )}

                    <div className="flex-shrink-0 w-full flex items-center justify-center">
                        <img
                            src={imageSrc}
                            alt={alt || "Expanded image"}
                            className="max-w-full max-h-[90vh] rounded shadow-lg"
                            style={{ transform }}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                        />
                    </div>

                    {nextImage ? (
                        <div className="flex-shrink-0 w-full flex items-center justify-center">
                            <img
                                src={nextImage.src}
                                alt={nextImage.alt || "Next"}
                                className="max-w-full max-h-[90vh] rounded shadow-lg"
                            />
                        </div>
                    ) : (
                        <div className="flex-shrink-0 w-full" />
                    )}


                    </motion.div>
                {/* </AnimatePresence> */}
                </div>
            ) : (
                <motion.img
                    key={imageSrc}
                    layoutId={`image-${imageId}`}
                    src={imageSrc}
                    alt={alt || "Expanded image"}
                    className="max-w-full max-h-[90vh] rounded shadow-lg cursor-grab active:cursor-grabbing"
                    animate={{
                        scale: zoom,
                        x: position.x,
                        y: position.y,
                    }}
                    drag={zoom === 1}
                    dragMomentum={false}
                    onDragEnd={(e, info) => {
                        setPosition((prev) => ({
                            x: prev.x + info.offset.x,
                            y: prev.y + info.offset.y,
                        }));
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    // onTouchStart={handleTouchStart}
                    // onTouchEnd={handleTouchEnd}
                    onClick={(e) => e.stopPropagation()}
                />
            )}
        </div>
    );
};

export default Lightbox;
