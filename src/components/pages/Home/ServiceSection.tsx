import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import ButtonMore from '@/components/shared/ButtonMore';

interface ServiceCardData {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: ServiceCardData[] = [
  {
    id: 1,
    title: "Kafeler üçün su təmizlənməsi",
    description: "Lorem ipsum dolor sit amet consectetur. Sit habitant tristique est ut.",
    image: "/image/category.png"
  },
  {
    id: 2,
    title: "Kafeler üçün su təmizlənməsi",
    description: "Lorem ipsum dolor sit amet consectetur. Sit habitant tristique est ut.",
    image: "/image/category.png"

  },
  {
    id: 3,
    title: "Kafeler üçün su təmizlənməsi",
    description: "Lorem ipsum dolor sit amet consectetur. Sit habitant tristique est ut.",
    image: "/image/category.png"
  },
  {
    id: 4,
    title: "Kafeler üçün su təmizlənməsi",
    description: "Lorem ipsum dolor sit amet consectetur. Sit habitant tristique est ut.",
    image: "/image/category.png"
  },
  {
    id: 5,
    title: "Kafeler üçün su təmizlənməsi",
    description: "Lorem ipsum dolor sit amet consectetur. Sit habitant tristique est ut.",
    image: "/image/category.png"
  },
  {
    id: 6,
    title: "Kafeler üçün su təmizlənməsi",
    description: "Lorem ipsum dolor sit amet consectetur. Sit habitant tristique est ut.",
    image: "/image/category.png"
  }
];

export function ServiceSection() {
  return (
    <div className="container mx-auto px-4 py-0 md:py-0 ">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
          Xidmətlərimiz
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <div>
        <ButtonMore />
      </div>
    </div>
  );
}

interface ServiceCardProps {
  service: ServiceCardData;
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex gap-4 p-5 md:p-10 bg-gray-100 rounded-xl border border-border hover:shadow-md transition-shadow">
      <div className="relative flex-shrink-0 w-[90px] h-[90px] md:w-[110px] md:h-[110px]">
        <div className="absolute bottom-0 left-0 w-full h-full bg-cyan-500 z-0 rounded-lg translate-x-[-8px] translate-y-[8px]"></div>
        <div className="w-full h-full bg-cyan-100 rounded-lg overflow-hidden relative z-10">
          <Image
            width={300}
            height={300}
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
          {service.title}
        </h3>
        <p className="md:flex hidden text-sm text-muted-foreground mb-4 leading-relaxed">
          {service.description}
        </p>
        
        <button className="inline-flex items-center gap-1 text-sm text-cyan-500 hover:text-cyan-600 transition-colors group">
          <span>View more</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}