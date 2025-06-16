'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from '@/components/pages/Product/ProductCard';
import ButtonMore from '@/components/shared/ButtonMore';
import Link from 'next/link';

interface Product {
  imageSrc: string;
  title: string;
  productCode: string;
  slug: string;
}

interface ProductSliderSecProps {
  title: string;
  products: Product[];
}

export function ProductSliderSec({ title, products }: ProductSliderSecProps) {
  // Add options to snap to the start of each slide and contain the scroll
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: 'start', // Ensure snapping to the start of each slide
    containScroll: 'keepSnaps', // Ensures snaps are always kept in view
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-4xl font-semibold text-center">{title}</h2>

      <div className="flex justify-end items-center mb-6">
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={scrollPrev} className=" hover:text-[#06B6D4] hover:border-[#06B6D4]">
            <ChevronLeft className="h-4 w-4 " />
          </Button>
          <Button variant="outline" size="icon" onClick={scrollNext} className="hover:text-[#06B6D4] hover:border-[#06B6D4]">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {products.map((product) => (
            // Modify flex basis to ensure full cards are shown.
            // Removed 'pl-4' from here and added to parent div for consistent spacing.
            <div key={product.slug} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pr-4 pb-4"> 
              <Link href={`/products/${product.slug}`} className="block h-full">
                <ProductCard
                  imageSrc={product.imageSrc}
                  title={product.title}
                  productCode={product.productCode}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <Link href="/products">
          <ButtonMore />
        </Link>
      </div>
    </section>
  );
}