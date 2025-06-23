import { ProductList } from "@/components/pages/Product/ProductList";
import { getCategories } from "@/lib/categories";
import { getMetaTags } from "@/lib/metatags";
import { getProducts } from "@/lib/products";
import { CategoriesType, MetaTagsType, ProductType } from '@/types/alltype';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'products') || {
    meta_title: 'EcoSoft | Products meta',
    meta_description: 'EcoSoft | Products meta',
    meta_keywords: 'EcoSoft | Products meta',
  };

  return {
    title: defaultMeta.meta_title,
    description: defaultMeta.meta_description,
    keywords: defaultMeta.meta_keywords,
    openGraph: {
      title: defaultMeta.meta_title,
      description: defaultMeta.meta_description,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      type: 'website',
    },
  };
}

export default async function ProductsPage() {
  let products: ProductType[] = [];
  let category: CategoriesType[] = [];

  const t = await getTranslations();

  try {
    products = await getProducts();
    category = await getCategories();
  } catch (error) {
    console.error("Failed to load products on page:", error);
    return (
      <main className="py-12">
        <div className="container mx-auto px-4 text-center text-red-600">
          Məhsullar yüklənərkən xəta baş verdi. Zəhmət olmasa, daha sonra yenidən cəhd edin.
        </div>
      </main>
    );
  }

  const searchPlaceholder = t('placeholder.search'); 
  const productsTitle = t('navigation.products');
  const noProductsFoundText = t('contact.error');

  return (
    <main>
      <ProductList
        initialProducts={products}
        category={category}
        searchPlaceholder={searchPlaceholder}
        productsTitle={productsTitle}
        noProductsFoundText={noProductsFoundText}
      />
    </main>
  );
}