"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Body scroll kilidi
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="fixed bg-white z-90 w-full mx-auto px-8 md:px-36 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
          <Image 
          src="/image/logo.svg"
          width={89}
          height={89}
          alt="HydroLink Logo" 
          className="h-fit w-fit"
           />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex text-lg space-x-6 ">
          <Link   
          href="/" className="text-black hover:text-primary">
            Ana səhifə
            </Link>
          <Link 
           href="/product" className="text-foreground hover:text-primary">
            Məhsullar
            </Link>
          <Link 
           href="/about" className="text-foreground hover:text-primary">
            Haqqımızda
            </Link>
          <Link 
           href="/blog" className="text-foreground hover:text-primary">
            Bloq
            </Link>
          <Link 
           href="/contact" className="text-foreground hover:text-primary">
            Əlaqə
            </Link>
        </div>
        <div
          className="hidden md:flex items-center space-x-4">
          <Button
            
            variant="default">
             <Image 
              src="/icons/HandCoins.svg"
              width={24}
              height={24}
              alt="HydroLink Logo"
             />
              Təklif al
            </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-foreground focus:outline-none">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/20 transition-opacity duration-200"
            onClick={closeMobileMenu}
          />
          {/* Menü */}
          <div className="relative bg-white shadow-lg w-44 max-w-full h-full ml-auto flex flex-col pt-8 px-6 pb-8 animate-slide-in-right">
            {/* Logo ve Kapat */}
            <div className="flex items-center justify-between mb-8">
            <Link href="/"> 
              <Image 
                src="/image/logo.svg"
                width={48}
                height={48}
                alt="HydroLink Logo"
                className="h-10 w-10"
              />
            </Link>
              <button
                className="text-foreground ml-auto"
                onClick={closeMobileMenu}
                aria-label="Menüyü Kapat"
              >
                <X size={28} />
              </button>
            </div>
            {/* Menü Linkleri */}
            <nav className="flex flex-col gap-5 mt-2">
              <a href="#" className="text-foreground hover:text-primary text-base font-medium transition-colors" onClick={closeMobileMenu}>Ana səhifə</a>
              <a href="#" className="text-foreground hover:text-primary text-base font-medium transition-colors" onClick={closeMobileMenu}>Məhsullar</a>
              <a href="#" className="text-foreground hover:text-primary text-base font-medium transition-colors" onClick={closeMobileMenu}>Haqqımızda</a>
              <a href="#" className="text-foreground hover:text-primary text-base font-medium transition-colors" onClick={closeMobileMenu}>Bloq</a>
              <a href="#" className="text-foreground hover:text-primary text-base font-medium transition-colors" onClick={closeMobileMenu}>Əlaqə</a>
            </nav>
              <div
          className="flex md:hidden items-center mt-10">
          <Button
            
            variant="default">
             <Image 
              src="/icons/HandCoins.svg"
              width={24}
              height={24}
              alt="HydroLink Logo"
             />
              Təklif al
            </Button>
        </div>
            <div className="flex-1" />
           
          </div>
        </div>
      )}
    </nav>
  );
}