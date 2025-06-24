'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from '@/components/pages/Product/ProductCard';
import ButtonMore from '@/components/shared/ButtonMore';
import {  Link } from '@/i18n/navigation';
import { ProductType } from '@/types/alltype'; 

interface ProductSliderSecProps {
  title: string;
  products: ProductType[]; 
}

export function ProductSliderSec({ title, products }: ProductSliderSecProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: 'start', 
    containScroll: 'keepSnaps', 
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="container mx-auto ">
      <h2 className="text-4xl font-semibold text-center">{title}</h2>

      <div className="flex justify-end items-center mb-6">
        <div className="flex space-x-2 mr-4 md:mr-0 ">
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
            <div key={product.slug} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pr-0 md:pr-4  pb-4"> 
              <Link href={`/products/${product.slug}`} className="block h-full">
                <ProductCard
                  imageSrc={product.image}
                  title={product.name} 
                  productCode={product.title} 
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center ">
        <Link href="/products">
          <ButtonMore />
        </Link>
      </div>
    </section>
  );
}