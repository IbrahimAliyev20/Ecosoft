'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ProductImageGallery({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [mainRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [thumbRef, thumbEmblaApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback((index: number) => {
    if (!emblaApi || !thumbEmblaApi) return;
    emblaApi.scrollTo(index);
  }, [emblaApi, thumbEmblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi || !thumbEmblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    thumbEmblaApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, thumbEmblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative rounded-2xl overflow-hidden bg-white">
        <div className="overflow-hidden" ref={mainRef}>
          <div className="flex aspect-square">
            {images.map((src, index) => (
              <div className="flex-[0_0_100%] min-w-0" key={index}>
                <div className="relative aspect-square">
                  <Image
                    src={src}
                    alt={`Product image ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100"
          onClick={scrollNext}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="overflow-hidden" ref={thumbRef}>
        <div className="flex gap-2">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => onThumbClick(index)}
              className={`relative basis-1/5 aspect-square rounded-lg overflow-hidden flex-shrink-0 ${
                index === selectedIndex ? 'ring-2 ring-cyan-500' : ''
              }`}
            >
              <Image
                src={src}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}