import React from 'react';
import { Package } from 'lucide-react';
import Image from 'next/image';

export default function MissionSection () {
  return (
   
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-22 h-22 bg-cyan-50 rounded-full flex items-center justify-center">
                <Image 
                  src='/icons/Package.svg'
                  alt='Package Icon'
                  width={40}
                  height={40}
                  className='text-white '
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-foreground">Pulsuz</span>
                <span className="text-xl font-semibold text-foreground">çatdırılma</span>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}