import React from 'react';
import FooterHero from './footersec/FooterHero';
import FooterMain from './footersec/Footermain';

export function Footer() {
  return (
    <footer className="pt-16 px-4">
      
      <div className="container mx-auto 
                   bg-white rounded-2xl shadow-xl p-8
                   lg:bg-transparent lg:rounded-none lg:shadow-none lg:p-0">
        
        <FooterHero />
        <FooterMain />

      </div>
    </footer>
  );
}