import { allProducts } from "@/utils/products";
import { ProductImageGallery } from "./ProductImageGallery";
import { ProductInfo } from "./ProductInfo";

// 1. Tip səhv olaraq Promise təyin edildi (Tövsiyə edilmir)
interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}


export async function generateMetadata({ params }: ProductDetailPageProps) {
  // 2. "params" obyekti "await" ilə gözlənilir (Səhv yanaşma)
  const { slug } = await params;
  const product = allProducts.find(p => p.slug === slug);
  return {
    title: product ? product.title : 'Məhsul Tapılmadı',
  };
}

// Komponent "async" edilir
export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  // 3. "slug" Promise-dən "await" ilə alınır (Səhv yanaşma)
  const { slug } = await params;
  const product = allProducts.find(p => p.slug === slug);

  if (!product) {
    return <div className="container mx-auto text-center py-20">Məhsul tapılmadı.</div>;
  }

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductImageGallery images={product.images} />
          
          <ProductInfo product={product} />
        </div>

        <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-4 border-b pb-2">Məhsulun Təsviri</h3>
            <p className="text-gray-600 leading-relaxed">
                {product.description}
            </p>
        </div>
      </div>
    </main>
  );
}