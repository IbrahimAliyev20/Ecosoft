import { notFound } from "next/navigation";
import { ProductSliderSec } from "@/components/pages/Home/ProductSliderSec";
import { getAttributes } from "@/lib/attribute"; 
import { getProductBySlug, getProducts } from "@/lib/products"; 
import { ProductType } from '@/types/alltype'; 
import { ProductImageGallery } from "./ProductImageGallery";
import { ProductInfo } from "./ProductInfo";
import { getTranslations } from "next-intl/server";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params; 
  
  const product = await getProductBySlug(slug);
  const t = await getTranslations()

  if (!product) {
    notFound(); 
  }
  
  let temporaryProducts: ProductType[] = [];
  try {
      const allFetchedProducts = await getProducts();
      temporaryProducts = allFetchedProducts.filter(p => p.slug !== product.slug);
      temporaryProducts = temporaryProducts.slice(0, 8); 
  } catch (error) {
      console.error("Failed to load other products:", error);
      temporaryProducts = []; 
  }

  const atribute = await getAttributes(); 

  return (
    <main className="py-12">
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-x-8 gap-y-12">
          <div className="order-1 lg:order-none">
            <ProductImageGallery images={[product.image, ...product.images.map(img => img.image)]} /> 
          </div>
          <div className="order-3 lg:order-none">
            <ProductInfo product={product} atribute={atribute} />
          </div>
          <div className="order-2 lg:order-none lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('product.productDescription')}</h3>
            <div className="prose max-w-none " dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
        </div>
      </div>
      <div>
        <ProductSliderSec title={t('product.otherProducts')} products={temporaryProducts} />
      </div>
    </main>
  );
}