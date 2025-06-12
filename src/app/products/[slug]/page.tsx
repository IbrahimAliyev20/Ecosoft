import { allProducts } from "@/utils/products";
import { ProductImageGallery } from "./ProductImageGallery";
import { ProductInfo } from "./ProductInfo";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}


export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = allProducts.find(p => p.slug === slug);
  return {
    title: product ? product.title : 'Məhsul Tapılmadı',
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = allProducts.find(p => p.slug === slug);

  if (!product) {
    return <div className="container mx-auto text-center py-20">Məhsul tapılmadı.</div>;
  }

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
       
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-x-8 gap-y-12">
          
          <div className="order-1 lg:order-none">
            <ProductImageGallery images={product.images}/>
          </div>
          
          <div className="order-3 lg:order-none">
            <ProductInfo product={product} />
          </div>

          <div className="order-2 lg:order-none lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-4 border-b pb-2">Məhsulun Təsviri</h3>
            <p className="text-gray-600 leading-relaxed">
                {product.description}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}