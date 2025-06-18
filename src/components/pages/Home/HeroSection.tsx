
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations();


  return (
    <section className=" pt-12 ">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-left"> 
            <h1 className="text-4xl md:text-[64px] font-semibold text-cyan-500 mb-4">
           
              {t('hero.title')}

            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
             
              {t('hero.subtitle')}

            </h2>
            <p className="text-gray-600 text-[16px] mb-8">
              
              {t('hero.description')}

            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-cyan-500 text-white  px-[32px] py-2 hover:bg-cyan-600 transition-all"
            >
           
             {t('hero.learnMore')}  <ArrowRight className="h-5 w-8" />
             
            </Link>
          </div>

          <div className="relative lg:w-1/2 w-full">
         
          <div className='hidden md:flex absolute -bottom-9 left-2 w-[93px] h-[93px] z-20'>
            <Image
              src="/icons/Waves.svg"
              alt="Su təmizləmə prosesi"
              width={93}
              height={93}
              priority={true}
              className="w-full h-full object-cover rotate-90" />
          </div>

          <div className='hidden md:flex absolute top-0 -right-9 w-[93px] h-[93px] z-20'>
            <Image
              src="/icons/Waves.svg"
              alt="Su təmizləmə prosesi"
              width={93}
              height={93}
              priority={true}
              className="w-full h-full object-cover " />
          </div>

            <div className="h-80 md:h-[527px] grid grid-cols-2 grid-rows-2 gap-4">
              <div className="relative col-span-1 row-span-2 ">
                <Image
                  src="/image/hero1.png" 
                  alt="Su təmizləmə prosesi"
                  width={400}
                  height={400}
                  priority={true}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              
              <div className="relative col-span-1 row-span-1">
                 <Image
                  src="/image/hero2.png"
                  alt="Uşaq su içir"
                  width={400}
                  height={400}
                  priority={true}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>

              <div className="relative col-span-1 row-span-1">
                 <Image
                  src="/image/hero3.png" 
                  alt="Su damlaları"
                  width={400} 
                  height={400}
                  priority={true}
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