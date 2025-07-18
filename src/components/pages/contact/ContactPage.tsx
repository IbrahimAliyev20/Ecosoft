'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactType, EmailRecordApiResponse } from '@/types/alltype'; 
import { useTranslations } from 'next-intl'; 


type ContactProps = {
  contact: ContactType
};

const MapSection = React.memo(function MapSection({ mapHtml }: { mapHtml: string }) {
  return (
    <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] bg-gray-200 rounded-xl overflow-hidden ">
      <div dangerouslySetInnerHTML={{ __html: mapHtml }} className="w-full h-full" />
    </div>
  );
});

export default function ContactPage({ contact }: ContactProps) {
  const t = useTranslations()
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
      const payload = {
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        note: formData.message, 
      };

      const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/contact_form`; 
      const currentLocale = "az"; 

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': currentLocale, 
        },
        body: JSON.stringify(payload),
      });

      const result: EmailRecordApiResponse = await response.json();

      if (response.ok && result.status) {
        const displayMessage = result.message === "errors.RECORD_WAS_SUCCESSFULLY_CREATED"
            ? `${t('contact.success')}` 
            : result.message;

        setSuccessMessage(displayMessage);
        setFormData({ name: '', surname: '', email: '', message: '' }); 
      } else {
        const errorDisplayMessage = result.message === "errors.RECORD_WAS_SUCCESSFULLY_CREATED"
            ? "Mesaj göndərilərkən bir xəta baş verdi. Zəhmət olmasa yenidən cəhd edin." 
            : result.message || "Server xətası.";

        setErrorMessage(errorDisplayMessage);
      }
    } catch (error) { 
      console.error('Contact form submission error:', error);
      if (error instanceof Error) {
        setErrorMessage(
          error.message || "Bir xəta baş verdi. Zəhmət olmasa yenidən cəhd edin." 
        );
      } else {
        setErrorMessage("Bir naməlum xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MapSection mapHtml={contact.map} />

          <div className="bg-card rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{t('contact.address')}</h3>
                  <p className="text-muted-foreground text-sm">{contact.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{t('contact.mailadress')}</h3>
                  <p className="text-muted-foreground text-sm">{contact.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{t('contact.phone')}</h3>
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
                    placeholder={t('contact.name')}
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
                    placeholder={t('contact.surname')}
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
                  placeholder={t('contact.email')}
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
                  placeholder={t('contact.message')}
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
                {!loading && `${t('contact.send')}`} 
                {loading ? `${t('contact.sending')}`: <Send className="w-5 h-5" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}