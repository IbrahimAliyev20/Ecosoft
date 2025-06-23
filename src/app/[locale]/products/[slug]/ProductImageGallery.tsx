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
    <div >
      <div className="relative">
        <div className="overflow-hidden rounded-lg border-2 border-gray-200" ref={mainRef}>
          <div className="flex">
            {images.map((src, index) => (
              <div className="relative basis-full shrink-0 grow-0 h-[450px]" key={index}>
                <Image
                  src={src}
                  alt={`Product image ${index + 1}`}
                  width={500}
                  height={500}
                  priority={true}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
        <button onClick={scrollPrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white transition shadow-md">
          <ChevronLeft size={24} />
        </button>
        <button onClick={scrollNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white transition shadow-md">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="mt-4">
        <div className="overflow-hidden" ref={thumbRef}>
          <div className="flex ">
            {images.map((src, index) => (
              <div className="basis-1/6  grow-0 pl-2  " key={index}>
                <button onClick={() => onThumbClick(index)} className={`block w-full rounded-md border-2 transition ${selectedIndex === index ? 'border-cyan-500' : 'border-transparent'}`}>
                  <div className="relative aspect-square">
                    <Image
                      src={src}
                      alt={`Thumbnail ${index + 1}`}
                      width={100}
                      height={100}
                      priority={true}
                      className="object-contain rounded-md border-2 border-gray-200 h-full w-full"
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
   
    </div>
  );
}
