"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-10 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image 
          src="/image/logo.svg"
          width={89}
          height={89}
          alt="HydroLink Logo" 
          className="h-fit w-fit"
           />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex text-lg space-x-6 ">
          <Link   
          href="#" className="text-black hover:text-primary">
            Ana səhifə
            </Link>
          <Link 
           href="#" className="text-foreground hover:text-primary">
            Məhsullar
            </Link>
          <Link 
           href="#" className="text-foreground hover:text-primary">
            Haqqımızda
            </Link>
          <Link 
           href="#" className="text-foreground hover:text-primary">
            Bloq
            </Link>
          <Link 
           href="#" className="text-foreground hover:text-primary">
            Əlaqə
            </Link>
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
        <div className="md:hidden bg-white shadow-sm">
          <div className="flex flex-col space-y-2 px-4 py-2">
            <a href="#" className="text-foreground hover:text-primary">Ana səhifə</a>
            <a href="#" className="text-foreground hover:text-primary">Məhsullar</a>
            <a href="#" className="text-foreground hover:text-primary">Haqqımızda</a>
            <a href="#" className="text-foreground hover:text-primary">Bloq</a>
            <a href="#" className="text-foreground hover:text-primary">Əlaqə</a>
          </div>
        </div>
      )}
    </nav>
  );
}