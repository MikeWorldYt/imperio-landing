// src/components/GalleryGrid.tsx
import React from "react";

interface GalleryGridProps {
  images: { id: string; src: string; alt?: string }[];
  onImageClick?: (id: string) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, onImageClick }) => {
        if (!images?.length) return null;
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
            {images.map(({ id, src, alt }) => (
                <button
                    key={id}
                    className="w-full aspect-square overflow-hidden group"
                    onClick={() => onImageClick?.(id)}
                >
                    <img
                        src={src}
                        alt={alt || "Gallery image"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                </button>
            ))}
        </div>
    );
};

export default GalleryGrid;
