// components/ServiceCard.tsx
'use client';

import { ServiceCardData } from "@/utils/services";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Link komponentini import edin

interface ServiceCardProps {
  service: ServiceCardData;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    // Yalnızca Link funksionallığı əlavə edildi, mövcud dizayn sinifləri qorundu
    <Link href={`/services?service=${service.slug}`} className="block"> {/* `h-full` və digər vizual siniflər buradan qaldırıldı */}
      <div className="flex gap-4 p-5 md:p-10 bg-gray-100 rounded-xl border border-border hover:shadow-md transition-shadow">
        <div className="relative flex-shrink-0 w-[90px] h-[90px] md:w-[110px] md:h-[110px]">
          <div className="absolute bottom-0 left-0 w-full h-full bg-cyan-500 z-0 rounded-lg translate-x-[-8px] translate-y-[8px]"></div>
          <div className="w-full h-full bg-cyan-100 rounded-lg overflow-hidden relative z-10">
            <Image
              width={300} // Orijinal width
              height={300} // Orijinal height
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover" // Orijinal siniflər
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
            {service.title}
          </h3>
          <p className="md:flex hidden text-sm text-muted-foreground mb-4 leading-relaxed">
            {service.description}
          </p>

          {/* Button tag'i Link olduğu üçün span'a çevrildi, amma orijinal siniflər saxlandı */}
          <span className="inline-flex items-center gap-1 text-sm text-cyan-500 hover:text-cyan-600 transition-colors group">
            <span>Daha çox oxu</span> {/* "View more" metni Azerbaycan diline çevrildi */}
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}