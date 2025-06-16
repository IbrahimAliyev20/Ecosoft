import Image from 'next/image';
import React from 'react';

interface Category {
  id: number;
  title: string;
  image: string; 
  alt: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Ev",
    image: "/icons/homeicon.png", 
    alt: "Ev kategoriyası"
  },
  {
    id: 2,
    title: "Bağ",
    image: "/icons/gardenicon.png", 
    alt: "Bağ kategoriyası"
  },
  {
    id: 3,
    title: "Sənaye",
    image: "/icons/machineicon.png",
    alt: "Sənaye kategoriyası"
  },
  {
    id: 4,
    title: "Mətbəx",
    image: "/icons/kitchenicon.png",
    alt: "Mətbəx kategoriyası"
  }
];

export function CategorySection() {
  return (
    <div className="container mx-auto px-4 py-0 md:py-0 ">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
          Kateqoriyalar
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

interface CategoryCardProps {
  category: Category;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative bg-cyan-400 rounded-2xl overflow-hidden h-48">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-400">
          
        </div>

        <div className="absolute bottom-0 right-0 z-0">
          <Image
            src={category.image}
            alt={category.alt}
            width={220} 
            height={160} 
            className="object-contain transform translate-x-4 translate-y-4 group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/80 to-transparent flex items-center p-6 z-10">
          <h3 className="text-white text-2xl font-semibold">
            {category.title}
          </h3>
        </div>
      </div>
    </div>
  );
}