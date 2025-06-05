import React from 'react';
import { Instagram, Facebook } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

export default function FooterHero() {
  return (
    <div className="flex flex-col items-center justify-center  bg-background text-foreground">
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl font-[600] mb-6">
          Sadəcə su deyil,
          <br />
          həyatına dəyər qatırıq
        </h1>
        <Link href="#" 
         className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-cyan-500 text-white font-medium px-4 py-2 hover:bg-cyan-600 transition-all'
         >
          Bizimlə əlaqə
        </Link>
      </div>

      <div className="w-full border-t border-border  py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Image 
          src="/image/logo.svg"
          width={89}
          height={89} 
          alt="HydroLink Logo" 
          className="mr-2" />
        </div>
        <nav className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-2 mb-4 md:mb-0">
           <Link   
          href="#" className="text-[#06B6D4] hover:text-primary">
            Ana səhifə
            </Link>
          <Link 
           href="#" className="text-[#06B6D4] hover:text-primary">
            Məhsullar
            </Link>
          <Link 
           href="#" className="text-[#06B6D4] hover:text-primary">
            Haqqımızda
            </Link>
          <Link 
           href="#" className="text-[#06B6D4] hover:text-primary">
            Bloq
            </Link>
          <Link 
           href="#" className="text-[#06B6D4] hover:text-primary">
            Əlaqə
            </Link>
        </nav>
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <a href="#" aria-label="Instagram"><Instagram className="text-muted-foreground hover:text-foreground" size={24} /></a>
          <a href="#" aria-label="Facebook"><Facebook className="text-muted-foreground hover:text-foreground" size={24} /></a>
        </div>
      </div>

     
    </div>
  );
}