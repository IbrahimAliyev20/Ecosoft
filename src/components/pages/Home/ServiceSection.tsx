// components/pages/Service/ServiceSection.tsx - YENİ VERSİYA

import React from 'react';
import ButtonMore from '@/components/shared/ButtonMore';
import Link from 'next/link';
import ServiceCard from '@/components/pages/Service/ServiceCard';
import { ServicesType } from '@/types/alltype';

// Statik datanı silib, props qəbul edirik
interface ServiceSectionProps {
  services: ServicesType[];
}

export function ServiceSection({ services }: ServiceSectionProps) {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 ">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
          Xidmətlərimiz
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Statik `allServices` əvəzinə `props`-dan gələn `services`-i istifadə edirik */}
        {services.slice(0, 6).map((service) => (
          // Artıq `service.id` yoxdur, `slug` daha etibarlı unique key-dir
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
      <div className='flex justify-center mt-12'>
        <Link href="/services">
          <ButtonMore />
        </Link>
      </div>
    </div>
  );
}