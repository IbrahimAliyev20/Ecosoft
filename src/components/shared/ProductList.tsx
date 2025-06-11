// Faylın yuxarısına 'use client' əlavə etməyi unutmayın
'use client';

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { ProductCard } from '@/components/shared/ProductCard'; // ProductCard yolunu yoxlayın

// Məhsullar üçün Nümunə Məlumatlar (Mock Data)
// Hər məhsulda onu tablarla əlaqələndirmək üçün "category" sahəsi olmalıdır
const allProducts = [
  { id: 1, imageSrc: 'https://i.ibb.co/3kC06hV/productimage1.png', title: 'Ecosoft Basicsoft 1500', productCode: 'FU12345678', category: 'Ev' },
  { id: 2, imageSrc: 'https://i.ibb.co/L5BWyV7/productimage2.png', title: 'UV Sterilizator 2000', productCode: 'FU23456789', category: 'Ev' },
  { id: 3, imageSrc: 'https://i.ibb.co/hKsyVp7/productimage3.png', title: 'Kompakt Su Yumşaldıcı', productCode: 'FU34567890', category: 'Mətbəx' },
  { id: 4, imageSrc: 'https://i.ibb.co/sKHBfNJ/productimage4.png', title: 'Sənaye Filtrasiya Sistemi', productCode: 'FU45678901', category: 'Sənaye' },
  { id: 5, imageSrc: 'https://i.ibb.co/3kC06hV/productimage1.png', title: 'Bağ üçün Su Pompası', productCode: 'FU56789012', category: 'Bağ' },
  { id: 6, imageSrc: 'https://i.ibb.co/L5BWyV7/productimage2.png', title: 'Mətbəx üçün Əks Osmos', productCode: 'FU67890123', category: 'Mətbəx' },
  { id: 7, imageSrc: 'https://i.ibb.co/hKsyVp7/productimage3.png', title: 'Ev üçün Ümumi Filtr', productCode: 'FU78901234', category: 'Ev' },
  { id: 8, imageSrc: 'https://i.ibb.co/sKHBfNJ/productimage4.png', title: 'Böyük Həcmli Təmizləyici', productCode: 'FU89012345', category: 'Sənaye' },
];

const categories = ['Ev', 'Bağ', 'Mətbəx', 'Sənaye'];

export function ProductList() {
  // Aktiv tabı və axtarış sorğusunu saxlamaq üçün state-lər
  const [activeTab, setActiveTab] = useState('Ev');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrlənmiş məhsulları hesablamaq üçün useMemo istifadə edirik
  // Bu, hər renderdə yenidən hesablama aparmağın qarşısını alır
  const filteredProducts = useMemo(() => {
    return allProducts
      .filter(product => product.category === activeTab) // 1. Aktiv taba görə filtrlə
      .filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) // 2. Axtarışa görə filtrlə
      );
  }, [activeTab, searchQuery]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Başlıq və Kontrol Paneli */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <h1 className="text-4xl font-semibold text-gray-800">Məhsullar</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            {/* Tablar */}
            <div className="flex items-center gap-2 flex-wrap bg-gray-100 p-1 rounded-full">
                {categories.map(category => (
                <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                    activeTab === category 
                        ? 'bg-white text-gray-800 shadow' 
                        : 'text-gray-500 hover:bg-gray-200'
                    }`}
                >
                    {category}
                </button>
                ))}
            </div>

            {/* Axtarış */}
            <div className="relative w-full md:w-72">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                type="text"
                placeholder="Məhsul axtar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-full focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
            </div>
        </div>

        {/* Məhsul Siyahısı */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              title={product.title}
              productCode={product.productCode}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 col-span-full">
            <p className="text-gray-500">Axtarışınıza uyğun məhsul tapılmadı.</p>
          </div>
        )}
      </div>
    </section>
  );
}