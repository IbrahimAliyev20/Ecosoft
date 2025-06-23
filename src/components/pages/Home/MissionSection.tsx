import React from 'react';
import Image from 'next/image';
import { getAdvantages } from '@/lib/advantages';

export default async function MissionSection () {
  const advantages = await getAdvantages();
  return (
   
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-8 justify-center">
          {advantages.map((item, index) => (
            <div key={index} className="flex md:flex-row flex-col items-center gap-3">
              <div className="w-22 h-22 bg-cyan-50 rounded-full flex items-center justify-center">
                <Image 
                  src={item.image}
                  alt='Package Icon'
                  width={40}
                  height={40}
                  priority={true}
                  className='text-white '
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-xl font-semibold text-foreground">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}