import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative py-4  md:py-16 lg:py-9 overflow-hidden">
      <div className="px-10 md:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-semibold text-primary mb-4">
              Ecosoft ilə
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Sadəcə su deyil, həyatına dəyər qatırıq
            </h2>
            <p className="text-muted-foreground text-[16px] mb-8">
              Lorem ipsum dolor sit amet consectetur. Sit habitant tristique est ut. Fringilla proin
              scelerisque duis proin a elementum urna ac neque. Sit habitant tristique est ut.
              Fringilla proin scelerisque duis proin a elementum urna ac neque.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-cyan-500 text-white font-medium px-4 py-2 hover:bg-cyan-600 transition-all"
            >
              Daha ətraflı <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Images */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="col-span-2 lg:col-span-1">
              <Image
                src="/image/hero1.png"
                alt="Water purification process"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-full "
              />
            </div>
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
              <Image
                src="/image/hero2.png"
                alt="Child drinking water"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
              <Image
                src="/image/hero2.png"
                alt="Water droplets"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

   
    
    </section>
  );
}