"use client";
import ServiceListCard from "@/components/pages/Service/ServiceListCard";
import { ServicesType } from "@/types/alltype";
import React, { useState } from "react";


interface ServiceContainerProps {
  services: ServicesType[];
}

export default function ServiceContainer({ services }: ServiceContainerProps) {
  const [selectedService, setSelectedService] = useState<ServicesType | null>(
    services[0] || null
  );


  if (!services || services.length === 0) {
    return (
      <div className="py-12 md:py-16 text-center text-foreground">
        Hazırda heç bir xidmət mövcud deyil.
      </div>
    );
  }

  return (
    <div className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl lg:text-4xl font-semibold mb-12 text-start text-foreground">
          Xidmətlər
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3 flex-shrink-0 space-y-4 max-h-[600px] overflow-y-auto px-2">
            {services.map((serviceItem) => (
              <ServiceListCard
                key={serviceItem.slug}
                service={serviceItem}
                isSelected={selectedService?.slug === serviceItem.slug}
                onClick={setSelectedService} 
              />
            ))}
          </div>

          <div className="w-full lg:w-2/3 bg-card p-6 md:p-8 rounded-2xl">
            {selectedService ? (
              <>
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  {selectedService.title}
                </h2>
                <div
                  className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: selectedService.description }}
                />
              </>
            ) : (
              <p className="text-muted-foreground">
                Zəhmət olmasa, yandakı siyahıdan bir xidmət seçin.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}