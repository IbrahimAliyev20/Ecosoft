'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuickOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickOfferModal({ isOpen, onClose }: QuickOfferModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    question: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
    } catch (error: any) {
      console.error("Quick offer form submission error:", error);
      setErrorMessage(error.message || "Bir xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-lg mx-4 rounded-2xl shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-6 w-6 text-gray-500" />
        </button>

        <div className="p-6 text-center border-b">
          <Image
            src="/image/logo.svg"
            alt="Logo"
            width={89}
            height={81}
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">
            Təklif almaq üçün formu doldurun
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Adınız"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            />
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Soyadınız"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobil nömrəniz"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            />
            <textarea
              name="question"
              value={formData.question}
              onChange={handleChange}
              placeholder="Sualınız"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
              required
            />
          </div>

          {successMessage && (
            <p className="text-green-600 text-sm">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-600 text-sm">{errorMessage}</p>
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
