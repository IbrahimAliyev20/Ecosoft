import { AboutSection } from "@/components/pages/Home/AboutSection";
import { ServiceSection } from "@/components/pages/Home/ServiceSection";
import { HeroSection } from "@/components/pages/Home/HeroSection";
import { CategorySection } from "@/components/pages/Home/CategorySection";
import MissionSection from "@/components/pages/Home/MissionSection";
import { getBlogs } from "@/lib/blog";
import { getServices } from "@/lib/services";
import { getStatistics } from "@/lib/statistics";
import dynamic from 'next/dynamic';
import React from 'react';
import { getAbout } from "@/lib/about";
import { getCategories } from "@/lib/categories";
import { getProducts } from "@/lib/products";
import { ProductType } from "@/types/alltype";
import { getTranslations } from 'next-intl/server';

const DynamicProductSliderSec = dynamic(
  () => import('@/components/pages/Home/ProductSliderSec').then(mod => mod.ProductSliderSec),
  {
    loading: () => <p className="text-center py-8">Məhsullar yüklənir...</p>,
  }
);

const DynamicBlogSection = dynamic(
  () => import('@/components/pages/Home/BlogSection').then(mod => mod.BlogSection),
  {
    loading: () => <p className="text-center py-8">Bloq məqalələri yüklənir...</p>
  }
);


export default async function Home() {
  const t = await getTranslations(); 

  const allPosts = await getBlogs();
  const latestPosts = allPosts.slice(0, 3);
  let temporaryProducts: ProductType[] = [];
  try {
      temporaryProducts = await getProducts();
      temporaryProducts = temporaryProducts.slice(0, 8);
  } catch (error) {
      console.error("Ana səhifədə məhsullar slayderi üçün məhsulların yüklənməsi uğursuz oldu:", error);
      temporaryProducts = [];
  }

  const services = await getServices();
  const statics = await getStatistics();
  const about = await getAbout();
  const categories = await getCategories();

  return (
    <>
      <div className="bg-cyan-50">
        <div className="container mx-auto px-4 pb-10">
          <HeroSection />
        </div>
      </div>

      <div className="container mx-auto py-16">
        <AboutSection about={about} statics={statics} sectiontitle={about.title_1}/>
      </div>

      <div className="container mx-auto px-4 py-16">
        <MissionSection />
      </div>
      <div className="container mx-auto px-4 py-16">
        <ServiceSection services={services} />
      </div>

      <div className="container mx-auto px-4 py-16">
        <DynamicProductSliderSec title={t('navigation.products')} products={temporaryProducts} />
      </div>

      <div className="container mx-auto px-4 py-16">
        <CategorySection categories={categories}/>
      </div>

      <div className="container mx-auto px-4 ">
        {/* 'navigation.blog' açarını istifadə edərək Bloq başlığını əldə edin */}
        <DynamicBlogSection posts={latestPosts} title={t('navigation.blog')} />
      </div>
    </>
  );
}