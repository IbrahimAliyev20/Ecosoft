import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ServiceCard } from '@/components/shared/ServiceCard';
import Link from 'next/link';

export function ServicesSection() {
  const services = [
    {
      imageSrc: '/image/servicesec.png',
      title: 'Kafelər üçün su təmizlənməsi',
      description: 'Lorem ipsum dolor sit amet consectetur. Sit habitant tristique est ut',
      features: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    },
    {
      imageSrc: '/image/servicesec.png',
      title: 'Kafelər üçün su təmizlənməsi',
      description: 'Lorem ipsum dolor sit amet consectetur. Sit habitant tristique est ut',
      features: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    },
    {
      imageSrc: '/image/servicesec.png',
      title: 'Kafelər üçün su təmizlənməsi',
      description: 'Lorem ipsum dolor sit amet consectetur. Sit habitant tristique est ut',
      features: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-16">
        <h2 className="text-4xl font-semibold text-center mb-8 text-foreground">Xidmətlərimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
        <div className="text-center">
          <Link 
            href="/#"
            className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-cyan-500 text-white font-medium px-4 py-2 hover:bg-cyan-600 transition-all'>
            Ətraflı <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}