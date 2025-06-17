'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { ContactType } from '@/types/alltype';

type ContactProps = {
  contact: ContactType
};

export default function ContactPage({ contact }: ContactProps) {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
      const response = await fetch('/api/send-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`${t('contact.error')}`);
      }

      const result = await response.json();
      if (result.success) {
        setSuccessMessage(`${t('contact.success')}`);
        setFormData({ name: '', surname: '', email: '', message: '' });
      } else {
        setErrorMessage(result.message || "Server xətası.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 ">
      <div className="container mx-auto px-4">
     

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> 
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] bg-gray-200 rounded-xl overflow-hidden "> 
         <div dangerouslySetInnerHTML={{ __html: contact.map }} className="w-full h-full" />
          </div>

          
          <div className="bg-card  rounded-xl"> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> 
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Ünvan</h3>
                  <p className="text-muted-foreground text-sm">{contact.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Mail Ünvanı</h3>
                  <p className="text-muted-foreground text-sm">{contact.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Telefon</h3>
                  <p className="text-muted-foreground text-sm">{contact.phone}</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4"> 
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">{t('contact.name')}</label>
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
                  <label htmlFor="surname" className="sr-only">{t('contact.surname')}</label>
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
              </div>
              <div>
                <label htmlFor="email" className="sr-only">{t('contact.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Mail Ünvanınız"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">{t('contact.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5} 
                  placeholder="Bize yazın"
                  value={formData.message}
                  onChange={handleChange}
                  required
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
                type="submit"
                variant="default"
                disabled={loading}
                className="rounded-[12px] w-full py-3 text-base font-normal text-primary-foreground transition-colors flex items-center justify-center gap-2 p-5"
              >
                {!loading && "Göndər"}
                {loading ? `${t('contact.sending')}` : <Send className="w-5 h-5" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}