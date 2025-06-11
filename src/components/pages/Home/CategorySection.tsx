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
    alt: "Home cleaning services"
  },
  {
    id: 2,
    title: "Bağ",
    image: "/icons/gardenicon.png",
    alt: "Garden cleaning services"
  },
  {
    id: 3,
    title: "Sənaye",
    image: "/icons/machineicon.png",
    alt: "Industrial cleaning services"
  },
  {
    id: 4,
    title: "Mətbəx",
    image: "/icons/kitchenicon.png",
    alt: "Kitchen cleaning services"
  }
];

export function CategorySection() {
  return (
    <div className="container mx-auto px-4 py-0 md:py-0 ">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
          Kategoriyalar
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
        <div className="absolute top-6 left-6 z-10">
          <h3 className="text-white text-2xl font-semibold">
            {category.title}
          </h3>
        </div>

        <div className="absolute bottom-0 right-0 w-[141.75px] h-[105px] overflow-hidden">
          <Image
            width={300}
            height={300}
            src={category.image}
            alt={category.alt}
            className=" object-cover object-center transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}