import { VisionSec } from '@/components/pages/About/VisionSection';
import { AboutSection } from '@/components/pages/Home/AboutSection';
import MissionSection from '@/components/pages/Home/MissionSection';
import { ServiceSection } from '@/components/pages/Home/ServiceSection';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function AboutPage() {
  const t = useTranslations();
  return (
    <div>
    <div className="container mx-auto py-8 md:py-16 px-5">
      <div className=" flex flex-col md:flex-row items-center bg-card rounded-lg  overflow-hidden ">
        <div className="md:w-1/2 h-[368px] px-4 md:px-0">
          <Image
            src="/image/abouthero.jpg"
            alt="About"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-xl"
            
          />
        </div>
        <div className="md:w-1/2 pl-6 ">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground md:mt-0 mt-6"> {t('about.title')}</h1>
          <p className="text-muted-foreground">
            {t('about.description')}
          </p>
        </div>
      </div>
    </div>

    <div className="container mx-auto py-8 md:py-16">
        <AboutSection title="Nə Edirik?"/>
    </div>
    <div className="container mx-auto py-8 md:py-16">
        <MissionSection />
    </div>
    
    <div className="container mx-auto py-8 md:py-16">
      <h1 className='text-3xl md:text-4xl font-semibold mb-12 text-center text-foreground'>Dəyərlərimiz</h1>
        <VisionSec />
    </div>
    <div className="container mx-auto py-8 md:py-16">
        <ServiceSection />
    </div>

    </div>

  );
}