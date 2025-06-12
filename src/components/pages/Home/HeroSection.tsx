
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className=" pt-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-left"> 
            <h1 className="text-4xl lg:text-5xl font-semibold text-cyan-500 mb-4">
              Ecosoft ilə
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">
              Sadəcə su deyil, həyatına dəyər qatırıq
            </h2>
            <p className="text-gray-600 text-[16px] mb-8">
              Lorem ipsum dolor sit amet consectetur. Sit habitant tristique est ut. Fringilla proin
              scelerisque duis proin a elementum urna ac neque. Sit habitant tristique est ut.
              Fringilla proin scelerisque duis proin a elementum urna ac neque.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-cyan-500 text-white  px-[32px] py-2 hover:bg-cyan-600 transition-all"
            >
              Detallı bax <ArrowRight className="h-5 w-8" />
            </Link>
          </div>

          <div className="relative lg:w-1/2 w-full">
          <div className='hidden md:flex absolute -bottom-9 left-2 w-[93px] h-[93px] z-20'>
            <Image
              src="/icons/waves.svg"
              alt="Su təmizləmə prosesi"
              width={93}
              height={93}
              className="w-full h-full object-cover rotate-90" />
          </div>
          <div className='hidden md:flex absolute top-0 -right-9 w-[93px] h-[93px] z-20'>
            <Image
              src="/icons/waves.svg"
              alt="Su təmizləmə prosesi"
              width={93}
              height={93}
              className="w-full h-full object-cover " />
          </div>
            <div className="h-80 md:h-[527px] grid grid-cols-2 grid-rows-2 gap-4">
              <div className="relative col-span-1 row-span-2 ">
                <Image
                  src="/image/hero1.png" 
                  alt="Su təmizləmə prosesi"
                  fill
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              
              <div className="relative col-span-1 row-span-1">
                 <Image
                  src="/image/hero2.png"
                  alt="Uşaq su içir"
                  fill
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>

              <div className="relative col-span-1 row-span-1">
                 <Image
                  src="/image/hero3.png" 
                  alt="Su damlaları"
                  fill
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}