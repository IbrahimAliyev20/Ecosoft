// components/Navbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import QuickOfferModal from '@/components/modal/QuickOfferModal';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false); 

  useEffect(() => {
    if (isMobileMenuOpen || isOfferModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen, isOfferModalOpen]); 

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openOfferModal = () => {
    setIsOfferModalOpen(true);
    closeMobileMenu(); 
  };
  const closeOfferModal = () => setIsOfferModalOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/image/logo.svg"
              alt="Logo"
              width={89}
              height={81}
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Ana səhifə
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              Haqqımızda
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-gray-900">
              Məhsullar
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">
              Xidmətlər
            </Link>
            <Link href="/blogs" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Əlaqə
            </Link>
            <Button
              onClick={openOfferModal}
              variant="default"
              className="bg-[#06B6D4] text-white hover:bg-[#0891b2] transition-colors"
            >
              Təklif al
            </Button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={closeMobileMenu}>
                <Image
                  src="/image/logo.svg"
                  alt="Logo"
                  width={89}
                  height={81}
                  priority
                />
              </Link>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="text-gray-600 hover:text-gray-900 py-2"
              >
                Ana səhifə
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="text-gray-600 hover:text-gray-900 py-2"
              >
                Haqqımızda
              </Link>
              <Link
                href="/products"
                onClick={closeMobileMenu}
                className="text-gray-600 hover:text-gray-900 py-2"
              >
                Məhsullar
              </Link>
              <Link
                href="/services"
                onClick={closeMobileMenu}
                className="text-gray-600 hover:text-gray-900 py-2"
              >
                Xidmətlər
              </Link>
              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="text-gray-600 hover:text-gray-900 py-2"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="text-gray-600 hover:text-gray-900 py-2"
              >
                Əlaqə
              </Link>
              <Button
                onClick={openOfferModal}
                variant="default"
                className="w-full bg-[#06B6D4] text-white hover:bg-[#0891b2] transition-colors"
              >
                Təklif al
              </Button>
            </div>
          </div>
        </div>
      )}

      <QuickOfferModal isOpen={isOfferModalOpen} onClose={closeOfferModal} />
    </nav>
  );
}