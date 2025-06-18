// app/page.tsx

import { AboutSection } from "@/components/pages/Home/AboutSection";
import { ServiceSection } from "@/components/pages/Home/ServiceSection";
import { HeroSection } from "@/components/pages/Home/HeroSection";
import { CategorySection } from "@/components/pages/Home/CategorySection";
import MissionSection from "@/components/pages/Home/MissionSection";
import { allProducts } from "@/utils/products";
import { getBlogs } from "@/lib/blog";
import { getServices } from "@/lib/services";
import { getStatistics } from "@/lib/statistics";
import dynamic from 'next/dynamic'; // <-- dynamic import üçün Next.js-dən dynamic import edirik
import React from 'react'; // React-ı import etməyi unutma

// ProductSliderSec komponentini dynamic olaraq yükləyirik
// ssr: false hissəsini SİLİRİK!
const DynamicProductSliderSec = dynamic(
  () => import('@/components/pages/Home/ProductSliderSec').then(mod => mod.ProductSliderSec),
  {
    // ssr: false, // <-- BU SƏTRİ SİL!
    loading: () => <p className="text-center py-8">Məhsullar yüklənir...</p>
  }
);

// Əgər BlogSection da client-side komponentdirsə (məsələn, içində slider varsa), onu da lazy-load edə bilərik:
const DynamicBlogSection = dynamic(
  () => import('@/components/pages/Home/BlogSection').then(mod => mod.BlogSection),
  {
    // ssr: false, // <-- BU SƏTRİ DƏ SİL!
    loading: () => <p className="text-center py-8">Bloq məqalələri yüklənir...</p>
  }
);


export default async function Home() {
  const allPosts = await getBlogs();
  const latestPosts = allPosts.slice(0, 3);
  const temporaryProducts = allProducts;
  const services = await getServices();
  const statics = await await getStatistics(); // await-i düzəltdim, iki dəfə yazılıb

  return (
    <>
      <div className="bg-cyan-50">
        <div className="container mx-auto px-4 pb-10">
          <HeroSection />
        </div>
      </div>

      <div className="container mx-auto py-16">
        <AboutSection title="Haqqımızda" statics={statics}/>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <MissionSection />
      </div>
      <div className="container mx-auto px-4 py-16">
        <ServiceSection services={services} />
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <DynamicProductSliderSec title="Məhsullar" products={temporaryProducts} />
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <CategorySection />
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <DynamicBlogSection posts={latestPosts} />
      </div>
      
    </>
  );
}