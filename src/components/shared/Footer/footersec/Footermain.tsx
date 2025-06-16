import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

export default function FooterMain() {
  const t = useTranslations();
  return (
    <footer className="bg-background text-muted-foreground border-t border-border">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-2 md:mb-0">
         {t('footer.copyright')} <Link href="https://markup.az/" target='_blank' className='text-primary'>MarkUp Agency</Link>
        </div>
       <div className='flex gap-12'>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
       </div>
      </div>
    </footer>
  );
}