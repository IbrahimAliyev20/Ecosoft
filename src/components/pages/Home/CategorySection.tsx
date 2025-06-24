import { CategoriesType } from '@/types/alltype';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import {  Link } from '@/i18n/navigation'; 

interface CategoriesProps {
  categories: CategoriesType[];
}

export function CategorySection({ categories }: CategoriesProps) {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-0 md:py-0">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
          {t('categories.title')}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {categories.map((category: CategoriesType, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

interface CategoryCardProps {
  category: CategoriesType;
}

function CategoryCard({ category }: CategoryCardProps) {
  const linkHref = category.slug ? `/products?category=${category.slug}` : '/products';

  return (
    <Link href={linkHref} passHref>
      <div className="flex group cursor-pointer justify-center ">
        <div
          className="relative rounded-2xl overflow-hidden w-[350px] h-[154px]"
          style={{
            background: `conic-gradient(from 194deg at 57.65% 30.52%, #06B6D4 0deg, #06C0DF 359.37004566192627deg)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br" />

          <div className="absolute bottom-3 right-0 z-0">
            <Image
              src={category.image}
              alt={category.title}
              width={141}
              height={105}
              priority={true}
              className="object-cover transform translate-x-4 translate-y-4 group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/80 to-transparent flex items-center p-6 z-10">
            <h3 className="text-white text-2xl font-semibold">
              {category.title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}