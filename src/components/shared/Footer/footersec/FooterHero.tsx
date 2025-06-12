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
        <Link href="/contact" 
         className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-cyan-500 text-white font-medium px-4 py-2 hover:bg-cyan-600 transition-all'
         >
          Bizimlə əlaqə
        </Link>
      </div>

      <div className="w-full border-t border-border py-4 px-6">
  <div className="flex flex-col md:flex-row items-center justify-between">
    
    <div className="w-full md:w-auto flex justify-between items-center">
      <Link href="/">
        <Image 
          src="/image/logo.svg"
          width={130}
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
      <Link href="#" className="text-[#06B6D4] hover:text-primary">Ana səhifə</Link>
      <Link href="#" className="text-[#06B6D4] hover:text-primary">Məhsullar</Link>
      <Link href="#" className="text-[#06B6D4] hover:text-primary">Haqqımızda</Link>
      <Link href="#" className="text-[#06B6D4] hover:text-primary">Bloq</Link>
      <Link href="#" className="text-[#06B6D4] hover:text-primary">Əlaqə</Link>
    </nav>

    <div className="hidden md:flex items-center gap-4">
      <a href="#" aria-label="Instagram"><Instagram className="text-gray-500 hover:text-cyan-500" size={24} /></a>
      <a href="#" aria-label="Facebook"><Facebook className="text-gray-500 hover:text-cyan-500" size={24} /></a>
    </div>

  </div>
  <hr className="w-full border-gray-200 mt-4 md:hidden" />
</div>

     
    </div>
  );
}