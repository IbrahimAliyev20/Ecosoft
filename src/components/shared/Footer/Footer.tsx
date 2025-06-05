import React from 'react';
import FooterHero from './footersec/FooterHero';
import FooterMain from './footersec/Footermain';

export function Footer() {
  return (
    <footer className="container px-4 mx-auto ">
        <FooterHero />
        <FooterMain />
    </footer>
  );
}