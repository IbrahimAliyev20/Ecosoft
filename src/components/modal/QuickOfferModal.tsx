// components/QuickOfferModal.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X,  } from 'lucide-react'; // İkonlar
import { Button } from '@/components/ui/button'; // Shadcn/ui Button komponentiniz

interface QuickOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickOfferModal({ isOpen, onClose }: QuickOfferModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    question: '',
    phone: '', // Sualınız inputu kimi görünür, amma mobil nömrə istəyirsinizsə bu olmalıdır
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Modal açılanda body scrollunu deaktiv et
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      // Form göndərmə API endpoint'i (bu endpointi özünüz yaratmalısınız)
      const response = await fetch('/api/submit-quick-offer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Təklif göndərilərkən xəta baş verdi.");
      }

      const result = await response.json();
      if (result.success) {
        setSuccessMessage("Təklifiniz uğurla göndərildi!");
        setFormData({ name: '', surname: '', question: '', phone: '' }); 
        setTimeout(onClose, 2000); 
      } else {
        setErrorMessage(result.message || "Server xətası.");
      }
    }  finally {
      setLoading(false);
    }
  };


  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs"
        onClick={onClose} // Overlay'e tıklayanda modalı bağla
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg p-6 md:p-8 w-full max-w-md mx-auto shadow-xl z-10 animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Modali Bağla"
        >
          <X size={24} />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col items-start mb-6">
          <Image
            src="/image/logo.svg"
            width={89} // Logonu kiçik et
            height={89}
            alt="HydroLink Logo"
            className="mb-3"
          />
          <h2 className="text-2xl font-semibold text-foreground text-center">Sürətli təklif al</h2>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Hesabımıza giriş etmək üçün mobil nömrənizi daxil edin
          </p>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" >Adınız</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Adınız"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="surname" >Soyadınız</label>
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Soyadınız"
              value={formData.surname}
              onChange={handleChange}
              required
              className="w-full p-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        
          <div>
            <label htmlFor="question" >Sualınız</label>
            <textarea
              id="question"
              name="question"
              rows={3} // Kiçik bir textarea
              placeholder="Sualınız"
              value={formData.question}
              onChange={handleChange}
              className="w-full p-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-y"
            ></textarea>
          </div>

          {successMessage && (
            <p className="text-green-600 text-center">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-600 text-center">{errorMessage}</p>
          )}

          <Button
            variant='default'
            disabled={loading}
            className="w-full py-3 text-lg font-semibold text-primary-foreground transition-colors flex items-center justify-center gap-2"
          >
            {loading ? "Göndərilir..." : "Təklif al"}
          </Button>
        </form>
      </div>
    </div>
  );
}