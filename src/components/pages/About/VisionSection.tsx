import React from 'react';
import Image from 'next/image';
import { getOurValues } from '@/lib/our-values';

export async function VisionSec() {
  const values = await getOurValues(); 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col justify-between order-last md:order-first gap-8">
        {values.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex items-start px-6">
              <div className="p-4 rounded-full mr-4 bg-cyan-50">
                <Image 
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  priority
                  className="text-primary"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>

            {index !== values.length - 1 && (
              <div className="border-[1px] border-[#E4E4E7]"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="rounded-lg flex items-center justify-center">
        <Image
          src="/image/hero2.png" 
          alt="Placeholder Image" 
          width={500} 
          height={400} 
          priority
          className="object-cover rounded-lg" 
        />
      </div>
    </div>
  );
}
