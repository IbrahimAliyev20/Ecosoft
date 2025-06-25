import { VisionSec } from "@/components/pages/About/VisionSection";
import { AboutSection } from "@/components/pages/Home/AboutSection";
import MissionSection from "@/components/pages/Home/MissionSection";
import { ServiceSection } from "@/components/pages/Home/ServiceSection";
import { getAbout } from "@/lib/about";
import { getMetaTags } from "@/lib/metatags";
import { getServices } from "@/lib/services";
import { getStatistics } from "@/lib/statistics";
import { MetaTagsType } from "@/types/alltype";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";
export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'About') || {
    meta_title: 'EcoSoft | About meta',
    meta_description: 'EcoSoft | About meta',
    meta_keywords: 'EcoSoft | About meta',
    
  };
  
  return {
    title: defaultMeta.meta_title,
    description: defaultMeta.meta_description,
    keywords: defaultMeta.meta_keywords,
    openGraph: {
      title: defaultMeta.meta_title,
      description: defaultMeta.meta_description,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      type: 'website',
    },
  };
}
export default async function AboutPage() {
  const t = await getTranslations();
  const services = await getServices();
  const statics = await getStatistics();
  const about = await getAbout();

  return (
    <div>
      <div className="container mx-auto py-8 md:py-16 px-5">
        <div className="flex flex-col md:flex-row items-center bg-card rounded-lg overflow-hidden">
          <div className="md:w-1/2 h-[368px]  px-0">
            <Image
              src={about.thumb_image}
              alt="About"
              width={500}
              height={500}
              priority={true}
              className="w-full h-full object-cover rounded-xl object-contain"
            />
          </div>
          <div className="md:w-1/2 pl-6">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground md:mt-0 mt-6">
              {about.title_1}
            </h1>
            <p
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: about.description_1 }}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 md:py-16">
        <AboutSection about={about} statics={statics} sectiontitle={about.title_2} />
      </div>
      <div className="container mx-auto py-8 md:py-16">
        <MissionSection />
      </div>

      <div className="container mx-auto py-8 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-foreground">
          {t("value.title")}
        </h1>
        <VisionSec />
      </div>
      <div className="container mx-auto py-8 md:py-16">
        <ServiceSection services={services} />
      </div>
    </div>
  );
}
