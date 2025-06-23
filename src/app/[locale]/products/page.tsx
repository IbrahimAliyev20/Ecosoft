import { ProductList } from "@/components/pages/Product/ProductList";
import { getCategories } from "@/lib/categories";
import { getProducts } from "@/lib/products";
import { CategoriesType, ProductType } from '@/types/alltype';


export default async function ProductsPage() {
  let products: ProductType[] = [];
  let category: CategoriesType[] = []; 

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
  return (
    <main>
      <ProductList initialProducts={products} category={category} />
    </main>
  );
}