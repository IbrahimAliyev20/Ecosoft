"use client";

import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import QuickOfferModal from '@/components/modal/QuickOfferModal';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader, 
  SheetTitle,   
} from "@/components/ui/sheet";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  useEffect(() => {
    if (isOfferModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOfferModalOpen]);

  const handleCloseMobileMenu = () => setIsMobileMenuOpen(false);

  const openOfferModal = () => {
    setIsOfferModalOpen(true);
    handleCloseMobileMenu();
  };
  const closeOfferModal = () => setIsOfferModalOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/image/logo.svg"
              alt="Logo"
              width={90}
              height={56}
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium text-lg">
              Ana səhifə
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium text-lg">
              Haqqımızda
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-gray-900 font-medium text-lg">
              Məhsullar
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 font-medium text-lg">
              Xidmətlər
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-gray-900 font-medium text-lg">
              Bloq
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium text-lg">
              Əlaqə
            </Link>
          
          </div>
          <div className='hidden md:flex '>
              <Button
              onClick={openOfferModal}
              variant="default"
              className="bg-[#06B6D4] text-white hover:bg-[#0891b2] transition-colors flex items-center rounded-lg text-lg font-semibold cursor-pointer"
            >
              <Image
                src="/icons/HandCoins.svg"
                alt="Təklif al ikonu"
                width={20}
                height={20}
                priority
              />
              Təklif al
            </Button>
          </div>





          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                aria-label="Mobil menunu aç"
              >
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-[400px] p-0 bg-white">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobil Naviqasiya Menyu</SheetTitle>
              </SheetHeader>

              <div className="flex justify-end p-0">
                <button
                  onClick={handleCloseMobileMenu}
                  className="p-2 rounded-lg hover:bg-gray-100"
                  aria-label="Mobil menunu bağla"
                >
                </button>
              </div>

              <nav className="flex flex-col space-y-2 px-4 pb-8">
                <Link
                  href="/"
                  onClick={handleCloseMobileMenu}
                  className="text-[#323642] hover:text-blue-500 py-3 px-2 text-xl font-medium border-b border-gray-200"
                >
                  Ana səhifə
                </Link>
                <Link
                  href="/products"
                  onClick={handleCloseMobileMenu}
                  className="text-[#323642] hover:text-blue-500 py-3 px-2 text-xl font-medium border-b border-gray-200"
                >
                  Məhsullar
                </Link>
                <Link
                  href="/about"
                  onClick={handleCloseMobileMenu}
                  className="text-[#323642] hover:text-blue-500 py-3 px-2 text-xl font-medium border-b border-gray-200"
                >
                  Haqqımızda
                </Link>
                <Link
                  href="/services"
                  onClick={handleCloseMobileMenu}
                  className="text-[#323642] hover:text-blue-500 py-3 px-2 text-xl font-medium border-b border-gray-200"
                >
                  Xidmətlər
                </Link>
                <Link
                  href="/blogs"
                  onClick={handleCloseMobileMenu}
                  className="text-[#323642] hover:text-blue-500 py-3 px-2 text-xl font-medium border-b border-gray-200"
                >
                  Bloq
                </Link>
                <Link
                  href="/contact"
                  onClick={handleCloseMobileMenu}
                  className="text-[#323642] hover:text-blue-500 py-3 px-2 text-xl font-medium border-b border-gray-200"
                >
                  Əlaqə
                </Link>
                <Button
                  onClick={openOfferModal}
                  variant="default"
                  className="w-full bg-[#06B6D4] text-white hover:bg-[#0891b2] transition-colors py-4 rounded-md text-xl font-semibold flex items-center justify-center mt-6"
                >
                  <Image
                    src="/icons/HandCoins.svg"
                    alt="Təklif al ikonu"
                    width={24}
                    height={24}
                    priority
                    className="mr-2"
                  />
                  Təklif al
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <QuickOfferModal isOpen={isOfferModalOpen} onClose={closeOfferModal} />
    </nav>
  );
}