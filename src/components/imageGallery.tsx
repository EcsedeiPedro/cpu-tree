"use client";

import Image from "next/image";

type GalleryItem = {
  src: string;
  title: string;
  alt: string;
};

type ImageGalleryProps = {
  images: GalleryItem[];
};

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {images.map(({ src, title, alt }, index) => (
        <div key={index} className="relative w-full h-[300px]">
          <Image
            src={src}
            alt={alt}
            title={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover rounded"
          />
        </div>
      ))}
    </div>
  );
};
