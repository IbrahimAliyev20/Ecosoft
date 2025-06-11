'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button'; 

import { ServiceCard } from '@/components/shared/ServiceCard';
import ButtonMore from '@/components/shared/ButtonMore';

export function BlogSection() {
  const services = [
    {
      imageSrc: '/image/servicesec.png',
      title: 'Kafelər üçün su təmizlənməsi',
      description: 'Lorem ipsum dolor sit amet consectetur. Sit habitant tristique est ut',
      features: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    },
    {
      imageSrc: '/image/servicesec.png',
      title: 'Restoranlar üçün həllər',
      description: 'Lorem ipsum dolor sit amet consectetur. Sit habitant tristique est ut',
      features: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    },
    {
      imageSrc: '/image/servicesec.png',
      title: 'Otellər üçün sistemlər',
      description: 'Lorem ipsum dolor sit amet consectetur. Sit habitant tristique est ut',
      features: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-0 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8 text-foreground">Blog</h2>

        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        <div className="md:hidden mb-8">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                {services.map((service, index) => (
                    <div className="basis-full shrink-0 grow-0 p-2" key={index}>
                        <ServiceCard
                            imageSrc={service.imageSrc}
                            title={service.title}
                            description={service.description}
                            features={service.features}
                        />
                    </div>
                ))}
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-6">
                <Button variant="outline" size="icon" onClick={scrollPrev} className="rounded-full">
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={scrollNext} className="rounded-full">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
        
        <div className="text-center">
          <ButtonMore />
        </div>
      </div>
    </section>
  );
}