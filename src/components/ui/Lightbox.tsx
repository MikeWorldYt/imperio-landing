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
    // Desktop Paneo
    const imageRef = useRef<HTMLImageElement>(null);

    const handleMouseMove = (moveEvent: MouseEvent) => {
        if (zoom === 1 || !imageRef.current) return;
        const baseImageWidth = imageRef.current.clientWidth;
        const baseImageHeight = imageRef.current.clientHeight;
        const scaledImageWidth = baseImageWidth * zoom;
        const scaledImageHeight = baseImageHeight * zoom;
        // Máximo rango que puede moverse desde el centro (para que no deje espacio vacío)
        const maxX = Math.max(0, (scaledImageWidth - baseImageWidth) / 2);
        const maxY = Math.max(0, (scaledImageHeight - baseImageHeight) / 2);
        const dx = moveEvent.clientX - startXRef.current;
        const dy = moveEvent.clientY - startYRef.current;
        let nextX = startPosRef.current.x + dx;
        let nextY = startPosRef.current.y + dy;
        // Limitar la posición para que la imagen no salga de los bordes
        nextX = Math.max(-maxX, Math.min(maxX, nextX));
        nextY = Math.max(-maxY, Math.min(maxY, nextY));
        setPosition({ x: nextX, y: nextY });
    };

    const handleMouseUp = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
    };

    const handleImageMouseDown = (e: React.MouseEvent) => {
        if (zoom === 1) return; // Si no hay zoom, no panear
        e.preventDefault(); // Prevenir el arrastre por defecto del navegador
        startXRef.current = e.clientX;
        startYRef.current = e.clientY;
        startPosRef.current = { x: position.x, y: position.y };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handleImageTouchStart = (e: React.TouchEvent) => {
        if (zoom === 1) return; // Si no hay zoom, no panear
        e.stopPropagation(); // Evitar que el lightbox padre detecte este toque para arrastrar y cerrar
        const touch = e.touches[0];
        startXRef.current = touch.clientX;
        startYRef.current = touch.clientY;
        startPosRef.current = { x: position.x, y: position.y };
    }

    const handleImageTouchMove = (e: React.TouchEvent) => {
        if (zoom === 1 || !imageRef.current) return; // Solo panear si hay zoom
        e.preventDefault(); // Evitar el scroll del fondo o el drag del lightbox
        const touch = e.touches[0];
        const baseImageWidth = imageRef.current.clientWidth;
        const baseImageHeight = imageRef.current.clientHeight;
        const scaledImageWidth = baseImageWidth * zoom;
        const scaledImageHeight = baseImageHeight * zoom;
        const maxX = Math.max(0, (scaledImageWidth - baseImageWidth) / 2);
        const maxY = Math.max(0, (scaledImageHeight - baseImageHeight) / 2);
        const dx = touch.clientX - startXRef.current;
        const dy = touch.clientY - startYRef.current;
        let nextX = startPosRef.current.x + dx;
        let nextY = startPosRef.current.y + dy;
        nextX = Math.max(-maxX, Math.min(maxX, nextX));
        nextY = Math.max(-maxY, Math.min(maxY, nextY));
        setPosition({ x: nextX, y: nextY });
    };

    //   R    E    T    U    R    N
    return (
        <div
            className="fixed inset-0 sm:bg-black/80 backdrop-blur bg-black flex items-center justify-center z-50"
        >
            {/*         H  A  N  D  L  E  R  S         */}
            {isMobile ? ( </* Mobile */>
                <button    //         Botón de cerrar
                onClick={onClose}
                className="absolute top-0 left-0 p-4 text-white z-50
                        hover:scale-110 transition-transform"
                >
                    <ArrowLeft size={15} />
                </button>
                <span className="absolute top-0 p-4 text-xs text-white z-50" >
                    {currentIndex + 1} / {totalImages}
                </span>
                
            </> ) : ( </* Desktop */>
                <button   //         Botón de cerrar
                onClick={onClose}
                className="absolute z-50 top-4 right-4 p-2
                        text-white border border-gray-300/10
                        bg-slate-200/10 rounded-full
                        hover:bg-slate-200/30
                        hover:scale-110 transition-transform"
                >
                    <X size={28} />
                </button>
                <button   //         Botón anterior
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
                <button   //         Botón siguiente
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

            {/*         T  O  O  L  B  O  X         */}
            <div
                className={`absolute z-30 gap-3 m-2 py-2 px-4 rounded-md
                    flex items-center justify-center text-white
                    bottom-0
                ${isMobile
                    ? "bg-slate-800/80 "
                    : "bg-black/80"
                }`}
            >
                <button   //         Botón Previo
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
                <button   //         Botón Siguiente
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext?.();
                    }}
                    className="rounded hover:bg-slate-600 hover:text-blue-400 transition-colors"
                >
                    <ChevronRight size={20} />
                </button>
                <button   //         Botón de Zoom Out
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
                <button   //         Botón de Zoom In
                    onClick={(e) => {
                        e.stopPropagation();
                        setZoom((z) => {
                            const maxZoom = isMobile ? 2.5 : 2.0;
                            const newZoom = Math.min(z + 0.25, maxZoom);
                            return newZoom;
                        });
                    }}
                    className="rounded hover:bg-slate-600 hover:text-blue-400 transition-colors"
                >
                    <ZoomIn size={20} />
                </button>
                <button   //         Botón de Compartir
                    onClick={(e) => {
                        e.stopPropagation();
                        // logica de share
                    }}
                    className="ounded hover:bg-slate-600 hover:text-blue-400 transition-colors"
                >
                    <Share2 size={20} />
                </button>
            </div>

            {/*         I  M  A  G  E         */}
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
                            {/*   Imagen previa   */}
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
                            {/*   Imagen actual   */}
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
                            {/*   Imagen siguiente   */}
                        {nextImage ? (                        <div className="flex-shrink-0 w-full flex items-center justify-center">
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
                    onMouseDown={handleImageMouseDown}
                    onTouchStart={handleImageTouchStart}
                    onTouchMove={handleImageTouchMove}
                    ref={imageRef}
                />
            )}
        </div>
    );
};

export default Lightbox;
