import React from 'react';
import ButtonMore from '@/components/shared/ButtonMore';
import { allServices} from '@/utils/services';
import Link from 'next/link';
import ServiceCard from '@/components/pages/Service/ServiceCard';



export function ServiceSection() {
  return (
    <div className="container mx-auto px-4 py-0 md:py-0 ">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
          Xidmətlərimiz
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {allServices.slice(0, 6).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <div>
        <Link  href="/services">
        <ButtonMore />
        </Link>
      </div>
    </div>
  );
}
