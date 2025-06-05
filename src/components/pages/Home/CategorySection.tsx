import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface CategoryCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: CategoryCard[] = [
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

export function CleaningServices() {
  return (
    <div className="container mx-auto px-4 py-0 md:py-12 max-w-8xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
          Kommersiya su təmizləməsi
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

interface CategoryCardProps {
  service: CategoryCard;
}

function ServiceCard({ service }: CategoryCardProps) {
  return (
    <div className="flex gap-4 p-10 bg-gray-100 rounded-lg border border-border hover:shadow-md transition-shadow">
      {/* Image Container */}
      <div className="relative flex-shrink-0 w-[90px] h-[90px] md:w-[110px] md:h-[110px]">
        {/* Blue Card */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-cyan-500 z-0 rounded-lg translate-x-[-8px] translate-y-[8px]"></div>
        {/* Image */}
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

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {service.description}
        </p>
        
        {/* View More Link */}
        <button className="inline-flex items-center gap-1 text-sm text-cyan-500 hover:text-cyan-600 transition-colors group">
          <span>View more</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}