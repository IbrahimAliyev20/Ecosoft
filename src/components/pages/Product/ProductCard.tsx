// components/pages/Product/ProductCard.tsx
import Image from "next/image";

// ProductCardProps interfeysini dəyişdirin
interface ProductCardProps {
  imageSrc: string; // ProductType-da 'image' sahəsi
  title: string;     // ProductType-da 'name' sahəsi
  productCode: string; // ProductType-da 'title' sahəsi (kod kimi)
}

export function ProductCard({
  imageSrc,
  title,
  productCode,
}: ProductCardProps) {

  return (
    <div className="border rounded-xl overflow-hidden group cursor-pointer flex flex-col h-full"> 
      <div className="w-full h-48 p-4 flex justify-center items-center">
        <Image
          src={imageSrc}
          alt={title}
          width={200}
          height={200}
          priority={true}
          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 bg-zinc-100 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg line-clamp-2" title={title}> 
          {title}
        </h3>
        <p className="text-sm text-[#06B6D4] mt-1">{productCode}</p>
      </div>
    </div>
  );
}