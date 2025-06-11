'use client';

import { Product } from '@/utils/products';
import { ShieldCheck, RefreshCw, Truck, MessageSquare, Phone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'; 
import { Button } from '@/components/ui/button';

export function ProductInfo({ product }: { product: Product }) {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-2">{product.productCode}</p>
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">{product.title}</h1>
      
      {/* Shadcn/UI Accordion istifadə edərək */}
      <Accordion type="single" collapsible className="w-full mb-8">
        <AccordionItem value="item-1">
          <AccordionTrigger>
              <div className="flex items-center gap-3">
                  <Truck className="text-cyan-500" /> Pulsuz çatdırılma
              </div>
          </AccordionTrigger>
          <AccordionContent>
            Bütün sifarişlər üçün pulsuz və sürətli çatdırılma xidməti mövcuddur.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="flex items-center gap-3">
                <RefreshCw className="text-cyan-500" /> 30 gün ərzində qaytarılma
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Məhsulu bəyənmədiyiniz təqdirdə 30 gün ərzində asanlıqla geri qaytara bilərsiniz.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="flex items-center gap-3">
                <ShieldCheck className="text-cyan-500" /> Təhlükəsiz ödəniş
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Bütün ödənişləriniz yüksək təhlükəsizlik standartları ilə qorunur.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Button size="lg" className="bg-green-500 hover:bg-green-600 flex items-center gap-2">
            <MessageSquare size={20} /> Whatsappla əlaqə
        </Button>
        <Button size="lg" variant="outline" className="flex items-center gap-2">
            <Phone size={20} /> Bizimlə əlaqə
        </Button>
      </div>
    </div>
  );
}