"use client";
import {
  allServices,
  getServiceBySlug,
  ServiceCardData,
} from "@/utils/services";
import ServiceListCard from "@/components/pages/Services/ServiceListCard";
import React, { useState, useEffect } from "react";

function ServiceContainer() {
  const [selectedService, setSelectedService] =
    useState<ServiceCardData | null>(null);

  useEffect(() => {
    const service = getServiceBySlug(selectedService?.slug || "");
    if (service) {
      setSelectedService(service);
    } else {
      setSelectedService(allServices[0] || null);
    }
  }, [selectedService]); // selectedService əlavə edildi

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
        <h1 className="text-4xl lg:text-4xl font-semibold mb-12 text-start text-foreground">
          Xidmətlər
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3 flex-shrink-0 space-y-4 max-h-[600px] overflow-y-scroll px-6">
            {allServices.map((serviceItem) => (
              <ServiceListCard
                key={serviceItem.id}
                service={serviceItem}
                isSelected={selectedService?.id === serviceItem.id}
                onClick={setSelectedService}
              />
            ))}
          </div>

          <div className="w-full lg:w-2/3 bg-card">
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

export default ServiceContainer;