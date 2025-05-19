import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "../ui/Lightbox";

interface GalleryGridProps {
    images: { id: string; src: string; alt?: string }[];
    //onImageClick?: (id: string) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const currentImage = typeof currentIndex === "number" ? images[currentIndex] : null;

    const GoPrev = () => {
        if (currentIndex !== null && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    const GoNext = () => {
        if (currentIndex !== null && currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
    }
    };

    return (
        <>
            {images?.length ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
                    {images.map(({ id, src, alt }, index) => (
                        <button
                            key={id}
                            className="w-full aspect-square group relative z-10"
                            onClick={() => { 
                                console.log("DEBUG:Clicked:", id); // chore: remove this
                                setCurrentIndex(index)
                            }}
                        >
                            <motion.img
                                layoutId={`image-${id}`}
                                src={src}
                                alt={alt || "Gallery image"}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                            />
                        </button>
                    ))}
                </div>
            ) : null}
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
