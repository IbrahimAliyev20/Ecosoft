'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'; 
import { allServices, getServiceBySlug, ServiceCardData } from '@/utils/services'; 
import { ArrowRight } from 'lucide-react'; 

export default function AboutPage() {
  const searchParams = useSearchParams();
  const initialSlug = searchParams.get('service'); 

  const [selectedService, setSelectedService] = useState<ServiceCardData | null>(null);

  useEffect(() => {
    if (initialSlug) {
      const service = getServiceBySlug(initialSlug);
      if (service) {
        setSelectedService(service);
      } else {
        setSelectedService(allServices[0] || null);
      }
    } else {
      setSelectedService(allServices[0] || null);
    }
  }, [initialSlug]);

  if (!selectedService && allServices.length > 0) {
    return (
      <div className="py-12 md:py-16 text-center text-foreground">
        Yüklənir...
      </div>
    );
  } else if (allServices.length === 0) {
    return (
      <div className="py-12 md:py-16 text-center text-foreground">
        Hazırda heç bir xidmət mövcud deyil.
      </div>
    );
  }

  return (
    <div className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl font-semibold mb-12 text-start text-foreground">
          Xidmətlər
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3 flex-shrink-0 space-y-4">
            {allServices.map((serviceItem) => (
              <ServiceListItem
                key={serviceItem.id}
                service={serviceItem}
                isSelected={selectedService?.id === serviceItem.id}
                onClick={() => setSelectedService(serviceItem)}
              />
            ))}
          </div>

          <div className="w-full lg:w-2/3 bg-card p-6 md:p-10  ">
            {selectedService ? (
              <>
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  {selectedService.title}
                </h2>
                <div
                  className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: selectedService.content }}
                />
              </>
            ) : (
              <p className="text-muted-foreground">Zəhmət olmasa, yandakı siyahıdan bir xidmət seçin.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ServiceListItemProps {
  service: ServiceCardData;
  isSelected: boolean;
  onClick: () => void;
}

function ServiceListItem({ service, isSelected, onClick }: ServiceListItemProps) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center gap-4 p-4 rounded-xl border cursor-pointer
        ${isSelected ? 'bg-cyan-500 border-cyan-500 text-white shadow-md' : 'bg-gray-100 border-gray-200 hover:shadow-md transition-shadow'}
      `}
    >
      <div className={`relative flex-shrink-0 w-[60px] h-[60px] md:w-[70px] md:h-[70px]`}>
        <div
          className={`absolute inset-0 rounded-full
            ${isSelected ? 'bg-cyan-200 opacity-60' : 'bg-gray-200'}
          `}
        ></div>
        <div className={`relative w-full h-full rounded-full overflow-hidden z-10 flex items-center justify-center`}>
          <Image
            width={isSelected ? 40 : 50} 
            height={isSelected ? 40 : 50}
            src={service.image}
            alt={service.title}
            className="object-contain" 
          />
        </div>
      </div>
      <h3 className={`text-lg font-semibold flex-1 ${isSelected ? 'text-white' : 'text-foreground'}`}>
        {service.title}
      </h3>
      {isSelected && (
        <ArrowRight className="w-5 h-5 text-white flex-shrink-0" />
      )}
    </div>
  );
}