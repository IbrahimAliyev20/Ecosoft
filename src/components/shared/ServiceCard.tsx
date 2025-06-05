import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ imageSrc, title, description, features }: ServiceCardProps) {
  return (
    <div className="p-4 bg-card text-card-foreground rounded-[20px] shadow overflow-hidden">
      <Image
       src={imageSrc} 
       alt={title} 
       width={300} 
       height={200} 
       className="w-full h-48 object-cover rounded-[12px]  " />
      <div className="p-4">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <Check className="w-4 h-4 mr-2 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}