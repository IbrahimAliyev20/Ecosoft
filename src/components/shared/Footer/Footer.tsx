import React from 'react';
import FooterHero from './footersec/FooterHero';
import FooterMain from './footersec/Footermain';
import { get } from 'http';
import { getSocialMedia } from '@/lib/social';

export async function Footer() {
  const socials = await getSocialMedia();
  return (
    <footer className="pt-16 px-4">
      
      <div className="container mx-auto 
                   bg-white rounded-2xl shadow-xl p-8
                   lg:bg-transparent lg:rounded-none lg:shadow-none lg:p-0">
        
        <FooterHero  socials={socials}/>
        <FooterMain />

      </div>
    </footer>
  );
}