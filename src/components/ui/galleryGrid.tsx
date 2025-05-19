import React, { useState } from "react";
import Lightbox from "../ui/Lightbox";

interface GalleryGridProps {
    images: { id: string; src: string; alt?: string }[];
    //onImageClick?: (id: string) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState<null | {
        src: string;
        alt?: string;
    }>(null);

    return (
        <>
            {images?.length ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
                    {images.map(({ id, src, alt }) => (
                        <button
                            key={id}
                            className="w-full aspect-square overflow-hidden group"
                            onClick={() => setSelectedImage({ src, alt })}
                        >
                            <img
                                src={src}
                                alt={alt || "Gallery image"}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                            />
                        </button>
                    ))}
                </div>
            ) : null}   
            {selectedImage && (
                <Lightbox
                    imageSrc={selectedImage.src}
                    alt={selectedImage.alt}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </>
    );
};

export default GalleryGrid;
