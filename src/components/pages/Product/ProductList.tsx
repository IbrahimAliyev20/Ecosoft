'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Search } from 'lucide-react';
import { ProductCard } from '@/components/pages/Product/ProductCard';
import {  Link } from '@/i18n/navigation';
import { CategoriesType, ProductType } from '@/types/alltype';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface ProductListProps {
  initialProducts: ProductType[];
  category: CategoriesType[];
  searchPlaceholder: string; 
  productsTitle: string;     
  noProductsFoundText: string; 
}

export function ProductList({ initialProducts, category, searchPlaceholder, productsTitle, noProductsFoundText }: ProductListProps) {
  const searchParams = useSearchParams();
  const initialCategorySlug = searchParams.get('category');
  const t = useTranslations('product');

  const [activeTab, setActiveTab] = useState(t('allproduct'));
  const [searchQuery, setSearchQuery] = useState('');

  const dynamicCategories = useMemo(() => {
    const uniqueCategories = new Set([t('allproduct')]);
    category.forEach(cat => uniqueCategories.add(cat.title));
    return Array.from(uniqueCategories);
  }, [category]);

  useEffect(() => {
    if (initialCategorySlug) {
      const foundCategory = category.find(cat => cat.slug === initialCategorySlug);
      if (foundCategory) {
        setActiveTab(foundCategory.title);
      } else {
        setActiveTab(t('allproduct'));
      }
    } else if (dynamicCategories.length > 0 && !dynamicCategories.includes(activeTab)) {
      setActiveTab(t('allproduct'));
    }
  }, [initialCategorySlug, category, dynamicCategories]);

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((product) => {
        if (activeTab === t('allproduct')) {
          return true;
        }
        return product.category === activeTab;
      })
      .filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [activeTab, searchQuery, initialProducts]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <h1 className="text-4xl font-semibold text-gray-800">{productsTitle}</h1> {/* Buranı dəyişdik */}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-2 flex-wrap rounded-full">
            {dynamicCategories.map((catTitle) => (
              <button
                key={catTitle}
                onClick={() => setActiveTab(catTitle)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-colors bg-[#F4F4F5] ${
                  activeTab === catTitle
                    ? 'bg-white text-gray-800 shadow border-1 border-[#06B6D4]'
                    : 'text-gray-500 hover:bg-gray-200 '
                }`}
              >
                {catTitle}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-full focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {filteredProducts.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.slug}>
              <ProductCard
                imageSrc={product.image}
                title={product.name}
                productCode={product.title}
              />
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 col-span-full">
            <p className="text-gray-500">
              {noProductsFoundText} 
            </p>
          </div>
        )}
      </div>
    </section>
  );
}