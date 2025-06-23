'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from "next/link"; // Link komponenti
import { ServicesType } from '@/types/alltype'; 

interface ServiceCardProps {
  service: ServicesType;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const plainDescription = service.description.replace(/<[^>]*>?/gm, '');

  return (
    // Dəyişiklik burada edildi: href="/services"
    <Link href="/services" className="block">
      <div className="relative flex gap-4 p-5 md:p-6 rounded-[20px] bg-gray-100 border-0 cursor-pointer hover:bg-cyan-50 transition-colors duration-200 h-full">
        <div className="relative flex-shrink-0 w-[60px] h-[60px] md:w-[70px] md:h-[70px]">
          <div className="absolute bottom-0 left-0 w-full h-full z-0 rounded-lg translate-x-[-4px] translate-y-[4px] bg-cyan-400"></div>
          <div className="w-full h-full rounded-lg overflow-hidden relative z-10">
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={300}
              priority={true}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {plainDescription}
          </p>
          <span className="inline-flex items-center gap-2 text-cyan-600 text-sm font-medium mt-3">
            <span>Daha çox oxu</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}