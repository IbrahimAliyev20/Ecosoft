import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getHero } from '@/lib/hero';

export async function HeroSection() {
  const data = await getHero();

  return (
    <section className=" pt-12 ">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-left">
            <h1 className="text-4xl md:text-[64px] font-semibold text-cyan-500 mb-4">
              {data.title_1}
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
              {data.title_2}
            </h2>
            <p className="text-gray-600 text-[16px] mb-8">
              {data.description}
            </p>
            <Link
              href={data.button_link}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-cyan-500 text-white  px-[32px] py-2 hover:bg-cyan-600 transition-all"
            >
              {data.button_text} <ArrowRight className="h-5 w-8" />
            </Link>
          </div>

          <div className="relative lg:w-1/2 w-full">
            {/* Dalğalar */}
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

            {/* Şəkillər üçün Grid Layout */}
            {/* md:h-[527px] sabit hündürlük verilə bilər və ya flex-in hündürlüyünə uyğunlaşdırıla bilər. */}
            <div className="h-80 md:h-[527px] grid grid-cols-2 grid-rows-2 gap-4">
              {/* Birinci şəkil: 1-ci sütun, 2 sıra boyu */}
              <div className="relative col-span-1 row-span-2 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={data.image_1}
                  alt="Su təmizləmə prosesi"
                  fill // 'fill' propu əlavə edildi
                  priority={true}
                  className="object-cover" // 'w-full h-full' artıq lazım deyil, 'fill' bunu özü idarə edir
                />
              </div>

              {/* İkinci şəkil: 2-ci sütun, 1-ci sıra */}
              <div className="relative col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={data.image_2}
                  alt="Uşaq su içir"
                  fill // 'fill' propu əlavə edildi
                  priority={true}
                  className="object-cover"
                />
              </div>

              {/* Üçüncü şəkil: 2-ci sütun, 2-ci sıra */}
              <div className="relative col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={data.image_3}
                  alt="Su damlaları"
                  fill // 'fill' propu əlavə edildi
                  priority={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}