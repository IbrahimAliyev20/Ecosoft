'use client';

import { Product } from '@/utils/products';
import { ShieldCheck, RefreshCw, Truck, MessageSquare, Phone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'; 
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function ProductInfo({ product }: { product: Product }) {
  return (
    <div>
 
      <div className='border p-6 rounded-2xl shadow-sm w-full '>
        <p className="text-sm font-medium text-cyan-600 mb-1">{product.productCode}</p>
        
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">{product.title}</h1>
        
        <hr className="border-gray-200" />

   
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full mt-6 border-none">
          
          <AccordionItem value="item-1" className="border rounded-xl mb-3">
            <AccordionTrigger className="font-semibold text-base hover:no-underline p-4">
              <div className="flex items-center gap-3">
                <div className="bg-cyan-500/10 p-2 rounded-full">
                  <Truck size={20} className="text-cyan-600" />
                </div>
                Pulsuz çatdırılma
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-gray-600">
              Bütün sifarişlər üçün pulsuz və sürətli çatdırılma xidməti mövcuddur.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-xl mb-3">
            <AccordionTrigger className="font-semibold text-base hover:no-underline p-4">
              <div className="flex items-center gap-3">
                <div className="bg-cyan-500/10 p-2 rounded-full">
                  <RefreshCw size={20} className="text-cyan-600" />
                </div>
                30 gün ərzində qaytarılma
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-gray-600">
              Məhsulu bəyənmədiyiniz təqdirdə 30 gün ərzində asanlıqla geri qaytara bilərsiniz.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-xl">
            <AccordionTrigger className="font-semibold text-base hover:no-underline p-4">
              <div className="flex items-center gap-3">
                <div className="bg-cyan-500/10 p-2 rounded-full">
                    <ShieldCheck size={20} className="text-cyan-600" />
                </div>
                Təhlükəsiz ödəniş
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-gray-600">
              Bütün ödənişləriniz yüksək təhlükəsizlik standartları ilə qorunur.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <Button 
          variant={"default"}
          size="lg" className="bg-[#10B981] hover:bg-[#059669] flex items-center gap-2 rounded-xl">
              <Image 
                src='/icons/Social Media Icon.svg'
                alt='whatsapp icon'
                width={20}
                height={20}
                className='text-white '
              />
               Whatsappla əlaqə
          </Button>
          <Button 
          variant={"default"}
          size="lg" className="bg-[#06B6D4] hover:bg-[#0891B2] text-white flex items-center gap-2 rounded-xl">
              <Phone size={20} /> Bizimlə əlaqə
          </Button>
        </div>
      </div>
    </div>
  );
}