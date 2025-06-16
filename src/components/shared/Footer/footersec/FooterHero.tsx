import React from 'react';
import { Instagram, Facebook } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function FooterHero() {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center justify-center  bg-background text-foreground">
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-[600] mb-6">
          Sadəcə su deyil,
          <br />
          həyatına dəyər qatırıq
        </h1>
        <Link href="/contact" 
         className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-cyan-500 text-white font-medium px-4 py-2 hover:bg-cyan-600 transition-all'
         >
          {t('footer.contact')}
        </Link>
      </div>

      <div className="w-full border-t border-border py-4 px-6">
  <div className="flex flex-col md:flex-row items-center justify-between">
    
    <div className="w-full md:w-auto flex justify-between items-center">
      <Link href="/">
        <Image 
          src="/image/logo.svg"
          width={89}
          height={45} 
          alt="HydroLink Logo" 
        />
      </Link>
      
      <div className="md:hidden flex items-center gap-4">
        <a href="#" aria-label="Instagram"><Instagram className="text-gray-500 hover:text-cyan-500" size={24} /></a>
        <a href="#" aria-label="Facebook"><Facebook className="text-gray-500 hover:text-cyan-500" size={24} /></a>
      </div>
    </div>

    <nav className="flex flex-col md:flex-row items-center gap-6 my-8 md:my-0 md:mx-auto">
      <Link href="/" className="text-[#06B6D4] hover:text-primary">{t('navigation.home')}</Link>
      <Link href="/about" className="text-[#06B6D4] hover:text-primary">{t('navigation.about')}</Link>
      <Link href="/products" className="text-[#06B6D4] hover:text-primary">{t('navigation.products')}</Link>
      <Link href="/services" className="text-[#06B6D4] hover:text-primary">{t('navigation.services')}</Link>
      <Link href="/blogs" className="text-[#06B6D4] hover:text-primary">{t('navigation.blog')}</Link>
      <Link href="/contact" className="text-[#06B6D4] hover:text-primary">{t('navigation.contact')}</Link>
    </nav>

    <div className="hidden md:flex items-center gap-4">
      <Link  href="https://www.instagram.com/markup.agency/" aria-label="Instagram" target='_blank'><Instagram className="text-gray-500 hover:text-cyan-500" size={24} /></Link>
      <Link href="https://www.facebook.com/markupagencyAZ/" aria-label="Facebook" target='_blank'><Facebook className="text-gray-500 hover:text-cyan-500" size={24} /></Link>
    </div>

  </div>
  <hr className="w-full border-gray-200 mt-4 md:hidden" />
</div>

     
    </div>
  );
}