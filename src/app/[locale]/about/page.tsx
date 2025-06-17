import { VisionSec } from '@/components/pages/About/VisionSection';
import { AboutSection } from '@/components/pages/Home/AboutSection';
import MissionSection from '@/components/pages/Home/MissionSection';
import { ServiceSection } from '@/components/pages/Home/ServiceSection';
import { getServices } from '@/lib/services';
import { getTranslations } from 'next-intl/server'; // getTranslations idxal et
import Image from 'next/image';
import React from 'react';

export default async function AboutPage() {
  const t = await getTranslations('about'); // Tərcümələri serverdə əldə et
  const services = await getServices();

  return (
    <div>
      <div className="container mx-auto py-8 md:py-16 px-5">
        <div className="flex flex-col md:flex-row items-center bg-card rounded-lg overflow-hidden">
          <div className="md:w-1/2 h-[368px] px-4 md:px-0">
            <Image
              src="/image/abouthero.jpg"
              alt="About"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="md:w-1/2 pl-6">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground md:mt-0 mt-6">
              {t('title')} {/* t funksiyasından istifadə */}
            </h1>
            <p className="text-muted-foreground">
              {t('description')} {/* t funksiyasından istifadə */}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 md:py-16">
        <AboutSection title={t('whatWeDo')} /> {/* Tərcüməni buraya da tətbiq et */}
      </div>
      <div className="container mx-auto py-8 md:py-16">
        <MissionSection />
      </div>

      <div className="container mx-auto py-8 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-foreground">
          {t('values')} {/* Tərcüməni buraya əlavə et */}
        </h1>
        <VisionSec />
      </div>
      <div className="container mx-auto py-8 md:py-16">
        <ServiceSection services={services} />
      </div>
    </div>
  );
}