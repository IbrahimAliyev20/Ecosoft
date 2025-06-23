'use client';

import { Phone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'; 
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { AttributeType, ProductType } from '@/types/alltype'; 
export function ProductInfo({ atribute, product }: { product: ProductType, atribute: AttributeType[] }) {
  return (
    <div>
      <div className='border p-6 rounded-2xl shadow-sm w-full '>
        <p className="text-sm font-medium text-cyan-600 mb-1">{product.title}</p> 
        
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">{product.name}</h1> 
        
        <hr className="border-gray-200" />

        <Accordion type="single" collapsible className="w-full mt-6 border-none">
          {atribute.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl mb-3">
              <AccordionTrigger className="font-semibold text-base hover:no-underline p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-cyan-500/10 p-2 rounded-full w-10 h-10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={30}
                      height={30}
                      priority={true}
                    />  
                  </div>
                  {item.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-gray-600">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
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
              priority={true}
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