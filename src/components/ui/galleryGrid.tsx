import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "../ui/Lightbox";

interface GalleryGridProps {
    images?: { id: string; src: string; alt?: string }[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const currentImage = typeof currentIndex === "number" ? images?.[currentIndex] : null;
    const loadedImagesRef = useRef<boolean[]>([]); // 🔄 Mantener el estado de imágenes cargadas con useRef

    useEffect(() => {
        if (images && loadedImagesRef.current.length === 0) {
            loadedImagesRef.current = new Array(images.length).fill(false); // Solo inicializa si está vacío
        }
    }, [images]);

    const handleImageLoad = (index: number) => {
        setTimeout(() => {
            loadedImagesRef.current[index] = true;
            setCurrentIndex(prev => prev); // 🔄 Forzar re-render sin reiniciar el estado
        }, index * 300); // Retraso en cascada (300ms por imagen)
    };

    const GoPrev = () => {
        if (currentIndex !== null && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    const GoNext = () => {
        if (currentIndex !== null && images && currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <>
            {images?.length ? (
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
                    {images.map(({ id, src, alt }, index) => (
                        <button
                            key={id}
                            className="w-full aspect-square group relative z-10"
                            onClick={() => setCurrentIndex(index)}
                        >
                            <div className="absolute inset-0 w-full h-full">
                                {!loadedImagesRef.current[index] && (
                                    <div className="flex justify-center items-center w-full h-full bg-gray-200 animate-pulse">
                                        <p className="text-gray-500">Loading...</p>
                                    </div>
                                )}
                                <motion.img
                                    layoutId={`image-${id}`}
                                    src={src}
                                    alt={alt || "Gallery image"}
                                    className={`absolute inset-0 w-full h-full object-cover
                                                dark:md:group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
                                                md:group-hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]
                                                transition-transform duration-300 ease-in-out
                                                ${ loadedImagesRef.current[index] ? "opacity-100" : "opacity-0" }`
                                    }
                                    onLoad={() => handleImageLoad(index)}
                                />
                            </div>
                        </button>
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center min-h-64">
                    <p className="text-lg text-gray-500">No images found.</p>
                </div>
            )}
            <AnimatePresence>
                {currentImage && (
                    <Lightbox
                        key={currentImage.id}
                        imageId={currentImage.id}
                        imageSrc={currentImage.src}
                        alt={currentImage.alt}
                        onClose={() => setCurrentIndex(null)}
                        onPrev={GoPrev}
                        onNext={GoNext}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default GalleryGrid;
