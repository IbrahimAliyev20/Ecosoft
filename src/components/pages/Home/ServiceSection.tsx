
import React from 'react';
import ButtonMore from '@/components/shared/ButtonMore';
import Link from 'next/link';
import ServiceCard from '@/components/pages/Service/ServiceCard';
import { ServicesType } from '@/types/alltype';

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
        {services.slice(0, 6).map((service) => (
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