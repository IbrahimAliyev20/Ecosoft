import { VisionSec } from '@/components/pages/About/VisionSection';
import { AboutSection } from '@/components/pages/Home/AboutSection';
import MissionSection from '@/components/pages/Home/MissionSection';
import { ServiceSection } from '@/components/pages/Home/ServiceSection';
import Image from 'next/image';
import React from 'react';

export default function AboutPage() {
  return (
    <div>
    <div className="container mx-auto py-8 md:py-16">
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
        <div className="md:w-1/2 px-6 ">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground md:mt-0 mt-6">Haqqımızda</h1>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur. Amet ac ac eu vulputate. Consectetur
            amet at augue nunc vestibulum aliquam suspendisse massa luctus. Cras ac velit
            netus sagittis leo augue pharetra in vestibulum. Pulvinar mi mi nisi et bibendum
            aliquet. Nullam sit erat facilisis velit id nibh aliquet tincidunt. Nec et in faucibus
            sed sed. Semper gravida convallis nulla odio massa arcu nunc pharetra tellus.
            Eros scelerisque nunc mauris aliquam viverra nulla pellentesque. Ut vivamus
            consequat orci leo felis ultricies. Nec dui ultricies massa et tristique.
            Suspendisse morbi integer quam sed ut ultrices ornare habitant. Mattis aliquet
            eget non pellentesque consectetur lectus interdum. Tempor ac a erat posuere
            pellentesque commodo in tortor. Sit suspendisse et lacus a ac risus in. Volutpat
            aliquet ultricies consequat urna. Quis mattis feugiat auctor etiam orci cras sed
            vitae elementum. Risus justo a nibh sit nulla tincidunt enim lorem tortor. Mauris
            consequat ipsum natoque etiam sed. Enim enim placerat eros viverra donec.
          </p>
        </div>
      </div>
    </div>

    <div className="container mx-auto py-8 md:py-16">
        <AboutSection />
    </div>
    <div className="container mx-auto py-8 md:py-16">
        <MissionSection />
    </div>
    <div className="container mx-auto py-8 md:py-16">
        <VisionSec />
    </div>
    <div className="container mx-auto py-8 md:py-16">
        <ServiceSection />
    </div>

    </div>

  );
}