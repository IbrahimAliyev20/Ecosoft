// app/products/page.tsx
import { ProductList } from "@/components/pages/Product/ProductList";
import { getProducts } from "@/lib/products"; // getProducts funksiyasını import edin
import { ProductType } from '@/types/alltype'; // ProductType interfeysini import edin

export default async function ProductsPage() { // <-- async əlavə edildi
  let products: ProductType[] = [];
  try {
    products = await getProducts(); // API-dən məhsulları çəkin
  } catch (error) {
    console.error("Failed to load products on page:", error);
    // Əgər məhsullar yüklənməzsə, istifadəçiyə xəta mesajı göstərin
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
      {/* ProductList komponentinə çəkilmiş məhsulları prop kimi ötürün */}
      <ProductList initialProducts={products} /> 
    </main>
  );
}