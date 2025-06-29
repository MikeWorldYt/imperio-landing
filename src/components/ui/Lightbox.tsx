import React, { useRef, useState, useEffect } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X, ZoomIn, ZoomOut, Share2, ChevronRight, ChevronLeft } from "lucide-react";

interface LightboxProps {
    imageId: string;
    imageSrc: string;
    alt?: string;
    prevImage?: { id: string; src: string; alt?: string }
    nextImage?: { id: string; src: string; alt?: string }
    currentIndex: number;
    totalImages: number;
    onClose: () => void;
    onPrev?: () => void;
    onNext?: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ 
    imageId, imageSrc, alt, prevImage, nextImage, currentIndex, totalImages, onClose, onPrev, onNext
}) => {

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
        // Tamaño del contenedor (viewport)
        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;
        // Tamaño de la imagen escalada
        const scaledWidth = containerWidth * zoom;
        const scaledHeight = containerHeight * zoom;
        // Rango máximo que puede moverse (para que no deje espacio vacío)
        const maxX = Math.max(0, (scaledWidth - containerWidth) / 2);
        const maxY = Math.max(0, (scaledHeight - containerHeight) / 2);
        // Movimiento calculado como antes
        const dx = touch.clientX - startXRef.current;
        const dy = touch.clientY - startYRef.current;
        let nextX = startPosRef.current.x + dx;
        let nextY = startPosRef.current.y + dy;
        // Limitar dentro de -max y +max
        nextX = Math.max(-maxX, Math.min(maxX, nextX));
        nextY = Math.max(-maxY, Math.min(maxY, nextY));
        setPosition({ x: nextX, y: nextY });
        //

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
            {isMobile ? ( </* Mobile */>
                <button // Botón de cerrar - Mobile
                onClick={onClose}
                className="absolute top-0 left-0 p-4 z-50
                        text-white
                        hover:scale-110 transition-transform"
                >
                    <ArrowLeft size={15} />
                </button>
                <span
                    className="absolute top-0 p-4 text-xs z-50
                        text-white"
                >
                    {currentIndex + 1} / {totalImages}
                </span>
                </>
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
                className={`absolute z-30 gap-3 m-2 py-2 px-4 rounded-md
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
                        onPrev?.();
                    }}
                    className="rounded hover:bg-slate-600 hover:text-blue-400 transition-colors"
                >
                    <ChevronLeft size={20} />
                </button>
                    <span>
                        {currentIndex + 1} / {totalImages}
                    </span>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext?.();
                    }}
                    className="rounded hover:bg-slate-600 hover:text-blue-400 transition-colors"
                >
                    <ChevronRight size={20} />
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setZoom((z) => {
                            const newZoom = Math.max(z - 0.25, 1);
                            if (newZoom === 1) {
                                setPosition({ x: 0, y: 0 });
                            }
                            return newZoom;
                        });
                    }}
                    className="rounded hover:bg-slate-600 hover:text-blue-400 transition-colors"
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
                    className="rounded hover:bg-slate-600 hover:text-blue-400 transition-colors"
                >
                    <ZoomIn size={20} />
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        // logica de share
                    }}
                    className="ounded hover:bg-slate-600 hover:text-blue-400 transition-colors"
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
                        // onClick={onClose}
                    >

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
                            className="max-w-full max-h-[90vh] rounded shadow-lg test_2"
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
                <img
                    src={imageSrc}
                    alt={alt || "Expanded image"}
                    className="max-w-full max-h-[90vh] rounded shadow-lg touch-none cursor-grab active:cursor-grabbing"
                    style={{ transform }}
                    onMouseDown={(e) => {
                        e.preventDefault();
                        const startX = e.clientX;
                        const startY = e.clientY;
                        const origX = position.x;
                        const origY = position.y;

                        const handleMouseMove = (moveEvent: MouseEvent) => {
                            const containerWidth = window.innerWidth;
                            const containerHeight = window.innerHeight;
                            const scaledWidth = containerWidth * zoom;
                            const scaledHeight = containerHeight * zoom;
                            const maxX = Math.max(0, (scaledWidth - containerWidth) / 2);
                            const maxY = Math.max(0, (scaledHeight - containerHeight) / 2);

                            let nextX = origX + (moveEvent.clientX - startX);
                            let nextY = origY + (moveEvent.clientY - startY);

                            nextX = Math.max(-maxX, Math.min(maxX, nextX));
                            nextY = Math.max(-maxY, Math.min(maxY, nextY));

                            setPosition({ x: nextX, y: nextY });
                        };

                        const handleMouseUp = () => {
                            window.removeEventListener("mousemove", handleMouseMove);
                            window.removeEventListener("mouseup", handleMouseUp);
                        };

                        window.addEventListener("mousemove", handleMouseMove);
                        window.addEventListener("mouseup", handleMouseUp);
                    }}
                    onTouchStart={(e) => {
                        const startX = e.touches[0].clientX;
                        const startY = e.touches[0].clientY;
                        const origX = position.x;
                        const origY = position.y;

                        const handleTouchMove = (moveEvent: TouchEvent) => {
                            const containerWidth = window.innerWidth;
                            const containerHeight = window.innerHeight;
                            const scaledWidth = containerWidth * zoom;
                            const scaledHeight = containerHeight * zoom;
                            const maxX = Math.max(0, (scaledWidth - containerWidth) / 2);
                            const maxY = Math.max(0, (scaledHeight - containerHeight) / 2);
                            let nextX = origX + (moveEvent.touches[0].clientX - startX);
                            let nextY = origY + (moveEvent.touches[0].clientY - startY);
                            nextX = Math.max(-maxX, Math.min(maxX, nextX));
                            nextY = Math.max(-maxY, Math.min(maxY, nextY));
                            setPosition({ x: nextX, y: nextY });
                        };

                        const handleTouchEnd = () => {
                            window.removeEventListener("touchmove", handleTouchMove);
                            window.removeEventListener("touchend", handleTouchEnd);
                        };
                        window.addEventListener("touchmove", handleTouchMove);
                        window.addEventListener("touchend", handleTouchEnd);
                    }}
/>

            )}
        </div>
    );
};

export default Lightbox;
