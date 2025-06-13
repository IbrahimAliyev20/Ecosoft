import React from 'react';
import Image from 'next/image';

export function VisionSec() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className='flex flex-col justify-between  order-last md:order-first'>
        <div className="flex items-start  px-6">
          <div className="p-4 rounded-full mr-4 bg-cyan-50">
            <Image 
            src="/icons/Goal.svg"
            alt="Goal"
            width={80}
            height={80}
            className="text-primary "
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Missiyamız</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur. Semper velit cursus condimentum eleifend non aenean enim vel. Diam velit ac ipsum tristique feugiat duis.
            </p>
          </div>
        </div>
        <div className="flex items-start px-6">
        <div className="p-4 rounded-full mr-4 bg-cyan-50">
            <Image 
            src="/icons/ScanEye.svg"
            alt="Goal"
            width={80}
            height={80}
            className="text-primary"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Vizyonumuz</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur. Semper velit cursus condimentum eleifend non aenean enim vel. Diam velit ac ipsum tristique feugiat duis.
            </p>
          </div>
        </div>
        <div className="flex items-start px-6">
          <div className="p-4 rounded-full mr-4 bg-cyan-50">
            <Image 
            src="/icons/HandHeart.svg"
            alt="Goal"
            width={80}
            height={80}
            className="text-primary"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Dəyərimiz</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur. Semper velit cursus condimentum eleifend non aenean enim vel. Diam velit ac ipsum tristique feugiat duis.
            </p>
          </div>
        </div>
      </div>
      <div className=" rounded-lg flex items-center justify-center ">
        <Image
         src="/image/hero2.png" 
         alt="Placeholder Image" 
         width={500} 
         height={400} 
         className="object-cover rounded-lg" />
      </div>
    </div>
  );
}