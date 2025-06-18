'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ServicesType } from '@/types/alltype';

interface ServiceListCardProps {
  service: ServicesType;
  isSelected: boolean;
  onClick: (service: ServicesType) => void;
}

export default function ServiceListCard({ service, isSelected, onClick }: ServiceListCardProps) {
  return (
    <div
      onClick={() => onClick(service)}
       className={`
        flex gap-4 p-5 md:p-6 rounded-[20px] border-0 cursor-pointer
        ${isSelected
          ? 'bg-cyan-50 border-cyan-500 text-foreground border-3 ' 
          : 'bg-gray-100 border-gray-200 transition-shadow ' 
        }
        transition-colors duration-200
      `}
    >
      <div className="relative flex-shrink-0 w-[60px] h-[60px] md:w-[70px] md:h-[70px]"> 
        <div className='absolute bottom-0 left-0 w-full h-full z-0 rounded-lg translate-x-[-4px] translate-y-[4px] bg-cyan-400 '> 
        </div>
        <div className="w-full h-full  rounded-lg overflow-hidden relative z-10">
          <Image
            width={300}
            height={300}
            src={service.image}
            alt={service.title}
            priority={true}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center"> 
        <h3 className='text-lg font-semibold leading-tight line-clamp-2 '>
          {service.title}
        </h3>
     

      
        {isSelected && (
          <ArrowRight className="w-5 h-5 text-white flex-shrink-0 absolute right-4" /> 
        )}
      </div>
    </div>
  );
}